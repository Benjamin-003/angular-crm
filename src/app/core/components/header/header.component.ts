import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public version! : number
  constructor(private coreService:CoreService) { }

  ngOnInit(): void {
    this.coreService.versionNum$.subscribe((resp: number) => {
      this.version=resp
    });
  }

}
