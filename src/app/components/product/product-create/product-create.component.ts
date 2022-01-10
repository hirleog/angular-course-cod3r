import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductSService } from './../product-s.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: 0.0
  }

  constructor(private productSService: ProductSService,
    private router: Router) { }

  ngOnInit(): void {
  }
  //metodo para criar um produto e salva-lo atraves de um botão.
    //serviço sendo chamado com uma ação de chamar uma mensagem estilo alert.

  createProduct(): void{
    this.productSService.create(this.product).subscribe(() =>{
    this.productSService.showMessage('Produto criado!')
    this.router.navigate(['/products'])
    })
   
  }
  
  //metodo para retornar a tela inicial alo clicar em cancelar
  cancel(): void{
    this.router.navigate(['/products'])
  }
}
