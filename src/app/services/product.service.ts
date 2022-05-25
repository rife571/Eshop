import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  server = "localhost";
  port = "5051";
  constructor(private httpClient : HttpClient) { }

  getProdotti() {
    return this.httpClient.get('http://us-central1-test-b7665.cloudfunctions.net/api/stores/'+'ijpxNJLM732vm8AeajMR'+'/products'); //ALT + 0096 | ALT GR + '

  }

  addProdotto(payload : any) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST'
    })
  }

     return this.httpClient.post<any>('http://us-central1-test-b7665.cloudfunctions.net/api/stores/'+'ijpxNJLM732vm8AeajMR'+'/products', payload, httpOptions); //ALT + 0096 | ALT GR + '

  }

  deleteProdotto(idProdotto: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST'
      })
    }
    return this.httpClient.delete('http://us-central1-test-b7665.cloudfunctions.net/api/stores/'+'ijpxNJLM732vm8AeajMR'+'/products/'+idProdotto,httpOptions)
  }
}
