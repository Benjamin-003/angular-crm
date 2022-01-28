import { ClientService } from './../../services/client.service';
import { Client } from './../../../core/models/client';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  public client$!: Observable<Client>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private router: Router ) {
    this.activatedRoute.paramMap.subscribe(
      (params: any) => {
        console.log(params.get('id'));
        const clientId = Number(params.get('id'))
        this.client$ = this.clientService.getById(clientId);
      }
    )
  }

  ngOnInit(): void {
  }

  public onSubmitUpdate(clientToUpdate: Client) {
    this.clientService.update(clientToUpdate).subscribe(
      () => {
        this.router.navigate(['clients']);
      }
    )
  }
}
