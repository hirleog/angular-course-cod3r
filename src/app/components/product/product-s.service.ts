import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductSService {

  baseUrl = " http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  //metodo snackBar que mostra uma estilo de alert. 
  //contem uma "msg" como parametro
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  //função responsavel por inserir um novo prodto no backend
  //* o parametro product é uma interface. Onde ao estanciar ela no metodo, chamamos os parametros que foram definidos no "Product.model.ts"

  //* o POST adiciona um novo elemento no nosso JSON através da URL declarada a cima.
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }
}
