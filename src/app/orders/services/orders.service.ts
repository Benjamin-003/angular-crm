import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$: Observable<Order[]>;
  public subCollection$ = new Subject<Order[]>()
  private urlApi: string = environment.urlApi;

  constructor(private http: HttpClient) {

    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map((tab: any[]) => {
        console.log(tab);
        return tab.map((obj: any) => {
          return new Order(obj);
        })
      })
    );
  }

  public refreshCollection(): void {
      this.collection$.subscribe(
        (listOrder: Order[]) => {
          this.subCollection$.next(listOrder);
        }
      )
  }

  public update(orderToUpdate: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${orderToUpdate.id}`, orderToUpdate)
  }

  public add(orderToPost: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, orderToPost);
  }

  public getById(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${orderId}`);
  }

  public delete(orderId: number): Observable<any> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${orderId}`).pipe(
      tap(() => this.refreshCollection())
    )
  }
}
