import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { CoreService } from 'src/app/core/services/core.service';
import { ClientsRoutingModule } from '../../clients-routing.module';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection$: BehaviorSubject<Client[]>;
  public headers = ['', '', 'Name', 'TotalCaHt', 'Tva', 'TotalTTC', 'State']
  public stateClient = StateClient;


  constructor(
    private clientService: ClientService,
    private router: Router
  ) {
    this.collection$ = this.clientService.getBehaviorCollection();
    this.clientService.refreshCollection();
   }




  public onChangeEditState(item: Client, $event: any ): void {
    item.state = $event.target.value;
    this.clientService.update(item).subscribe((updatedClient: Client) => {
      item = updatedClient;
    })
  }


  public onClickGoToEdit(clientId: number): void {
    this.router.navigate(['clients', 'edit', clientId])
  }

  public onClickDelete(clientId: number): void {
    this.clientService.delete(clientId).subscribe()
  }

  ngOnInit(): void {
  }

}
