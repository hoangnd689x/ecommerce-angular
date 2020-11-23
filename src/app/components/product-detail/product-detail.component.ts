import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductDetailService } from 'src/app/service/product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private sub: any;
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private service: ProductDetailService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getProduct(id);
    });
  }
  getProduct(id: number) {
    this.service.getProduct(id).subscribe((data) => this.displaydata(data));
  }
  displaydata(data) {
    this.product = data;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  quantity = 1;
  minusQuantity(event) {
    if (this.quantity > 1)
      this.quantity--;

  }
  plusQuantity(event) {
    this.quantity++;
  }
  addToCart(product,quantity){
    this.cartService.addToCart(product,quantity);
  }
}
