import { Component, OnInit } from '@angular/core';
import { NuovoProdotto } from './lib/nuovoprodotto'
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
 prodotto: NuovoProdotto;

 constructor(private ToastrService: ToastrService, private route: ActivatedRoute, private router: Router, private ProductService:ProductService) {
   this.prodotto= new NuovoProdotto('','',0,'','',[])
  }

  ngOnInit(): void {
  }

  Salva() {
    console.log(this.prodotto)

    var payload = {
      "title": this.prodotto.title,
      "category": this.prodotto.category,
      "price": this.prodotto.price,
      "employee": this.prodotto.employee,
      "description": this.prodotto.description,
      "reviews": [
        this.prodotto.reviews
      ]
    }
    this.ProductService.addProdotto(this.prodotto).subscribe(
      response => {
        this.ToastrService.success('Prodotto inserito')
        this.router.navigate(["prodotti"])

      },
      error => {
        console.log("errore in inserimento!");
        this.router.navigate(["prodotti"])
      }
    )

  }

}
