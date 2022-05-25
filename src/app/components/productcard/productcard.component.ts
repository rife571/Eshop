import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
@Input() articoli: any ;
@Output() deleteArticolo = new EventEmitter<any>();
@Output() manageInOut = new EventEmitter<any>();

nuovaReview: any;
spinner = false;
rows = 2
mode = 'Panel'
modelInput:any=[]

  constructor(private NgxSpinnerService:NgxSpinnerService, private ProductService:ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log('articolo')
    console.log(this.articoli)

  }
  ngAfterViewInit(){

  }
  ngOnChanges() {
    console.log("after view init")
    this.articoli.forEach((element:any) => {
      this.modelInput.push({id:element.id, model:''});
    });
    console.log('this.modelInput')
    console.log(this.modelInput)
  }
  delete(articolo:any) {
    this.deleteArticolo.emit(articolo);
  }

  in(articolo:any, idx:any) {
    console.log(articolo)
    articolo.data.reviews.push(this.modelInput[idx].model)
    this.modelInput[idx].model=''
    this.manageInOut.emit(articolo);
  }

  out(articolo:any, index:any) {
    this.spinner=true;
    articolo.data.reviews.splice(index, 1)
    console.log('articolo out')
    console.log(articolo)
    this.manageInOut.emit(articolo);
  }

  setMode(m:any) {
    this.mode = m
  }


}
