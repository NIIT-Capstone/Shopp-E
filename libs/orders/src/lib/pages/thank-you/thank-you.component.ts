import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'orders-thank-you-page',
  templateUrl: './thank-you.component.html',
  styles: []
})
export class ThankYouComponent implements OnInit {
  constructor(private orderService: OrdersService, private cartService: CartService) {}

  ngOnInit() {
    const orderData = this.orderService.getCachedOrderData();
    console.log(orderData);
    this.orderService.createOrder(orderData).subscribe(() => {
      this.cartService.emptyCart();
      this.orderService.removeCachedOrderData();
    })
  }
}
