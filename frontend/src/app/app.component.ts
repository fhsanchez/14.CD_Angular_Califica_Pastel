import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CakesService } from './services/cakes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formCake!: FormGroup
  formComment!: FormGroup

  cake: any = {
    _id: '',
    name: '',
    urlImg: '',
    comment: ''
  }

  listCakes: any = [{
    name: '',
    urlImg: '',
    rate: '',
    comment: ''
  }]

  dateSearchAll : any
  dateSearchOne: any

  average: number = 0;
  showAll: boolean = false
  showDetail: boolean = false
  showOne: boolean = false

  constructor(private _cakesServices: CakesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.formCake = this.formBuilder.group({
      name: [''],
      urlImg: ['']
    })
    this.formComment = this.formBuilder.group({
      rate: [''],
      comment: ['']
    })

    this.showCakes();
  };

    // Muestra lista de pasteles
    showCakes() {
      // Muestra en Pantalla

      let observable = this._cakesServices.getAllCakes();
      observable.subscribe(data => {
        console.log("Get our Cakes!", data);
        this.showAll = true;
        this.showOne = false;
        this.showDetail = false;
        this.listCakes = data;
      });
    }

  newCake() {

    const { name , urlImg } = this.formCake.value;
    const data_cake = { "name": name, "urlImg": urlImg };

    // Guarda un pastel Via API
    let observable = this._cakesServices.newCake(data_cake);
    observable.subscribe(data => {
      console.log("Add our Cake!", data);
      this.dateSearchOne
      this.showDetail = false;
      this.showCakes();
        this.formCake.reset();
    });

  }

  saveRateCakes(id_cake: string) {
    let { rate, comment } = this.formComment.value
    const data_cake = { "_rate": rate, "_comment": comment };


    let observable = this._cakesServices.newRate(id_cake, data_cake);
    observable.subscribe(data => {
      console.log("Save our rate!", data)
      this.showDetail = false
      this.formComment.reset()
    })

  }

  findOne(id: String){
    this.showDetail = false;
    let observable = this._cakesServices.getCakeById(id);
    observable.subscribe(data => {
      this.dateSearchOne = data;
      let suma: number = 0;

      if (this.dateSearchOne.rateCake.length > 0){
        for (let i = 0; i < this.dateSearchOne.rateCake.length; i++){
          suma = suma + parseInt(this.dateSearchOne.rateCake[i].rate);
        }
        this.average = Math.round(suma/this.dateSearchOne.rateCake.length);
        }
        this.showDetail = true;
      });
  }



}
