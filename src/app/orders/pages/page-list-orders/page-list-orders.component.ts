import { StateOrder } from './../../../core/enums/state-order';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import {CoreService } from 'src/app/core/services/core.service';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public titleComponent: { content: string} = { content: 'List Order'};
  public collectionPage$!: Observable<Order[]>;
  public versionNum$!: BehaviorSubject<number>;
  public headersPage: string[];
  public stateOrder=StateOrder;

  constructor(private orderService: OrdersService, private versionService: CoreService, private router: Router) {
    this.collectionPage$ = this.orderService.subCollection$;
    this.orderService.refreshCollection();
    this.headersPage = ['','', 'Type Presta', 'Client', 'NbJour', 'TjmHt', 'Total HT', 'Total TTC', 'State'];
    this.versionNum$ = this.versionService.versionNum$;


  }

  ngOnInit(): void {
  }

  public onClickInitTitle(): void {
    this.titleComponent = { content : 'Other title' };
  }
  public onChangeState(order: Order, stateEvent: any ): void {
    console.log(`commande : ${order.id}: state : ${stateEvent.target.value}`);

  const updatedOrder = new Order({...order, state: stateEvent.target.value})
  console.log('Updated order : ', updatedOrder);
  this.orderService.update(updatedOrder).subscribe(
    (orderStateUpdated: Order) => {
      order.state = orderStateUpdated.state;
    }
  );
  }

  public onClickGoToEdit(orderToEdit: Order): void {
    this.router.navigate(['orders', 'edit', orderToEdit.id ])
  }

  public onClickDelete(clickedOrder: Order): void {
    this.orderService.delete(clickedOrder.id).subscribe(
      (resp: any) => {
        console.log(resp);
      }
    )
  }
}
