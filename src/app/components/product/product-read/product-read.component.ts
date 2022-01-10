import { ProductSService } from './../product-s.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];

  constructor(private ProductSService: ProductSService) {
   }

  ngOnInit(): void {
        this.ProductSService.read().subscribe(products => {
        this.products = products
        console.log(products, "funcionouuuuuuuuuuuu")
    })
  }

}
