import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  articoli: any
  constructor(private NgxSpinnerService:NgxSpinnerService, private ToastrService:ToastrService, private ProductService:ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getProdotti('');

  }

  public getProdotti (TITLE:any) {

    this.ProductService.getProdotti().subscribe(
      response => {

        console.log('RESPONSE');
        console.log(response);

        this.articoli = response

        this.ToastrService.success(TITLE)

      },
      error => {
        console.log("Articolo non presente in anagrafica!");
      }
    )
  }

  delete(articolo:any) {
     this.ProductService.deleteProdotto(articolo.id).subscribe(
      response => {
        //this.router.navigate(["prodotti"])
        this.getProdotti('Prodotto eliminato dalla lista')

      },
      error => {
        this.router.navigate(["prodotti"])
        this.ToastrService.success('Prodotto eliminato dalla lista')
      }
    )
  }

  inout(articolo:any) {
         this.ProductService.deleteProdotto(articolo.id).subscribe(
          response => {
            //this.router.navigate(["prodotti"])
            this.addproduct(articolo)
          },
          error => {
            //this.router.navigate(["prodotti"])
          }
        )
      }

   addproduct(articolo:any){
    console.log('oggetti')
    console.log(articolo)
    var payload = {
      "title": articolo.title,
      "category": articolo.category,
      "price": articolo.price,
      "employee": articolo.employee,
      "description": articolo.description,
      "reviews": [
        articolo.reviews
      ]
    }
    console.log(payload)
    this.ProductService.addProdotto(articolo.data).subscribe(
      response => {
        this.getProdotti('Prodotto aggiornato')
      },
      error => {
        console.log("errore in inserimento!");
        this.getProdotti('Operazione completata')
      }
    )

   }

}
