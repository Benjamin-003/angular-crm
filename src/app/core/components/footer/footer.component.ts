import { CoreService } from './../../services/core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public version! : number
  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.versionNum$.subscribe((resp: number) => {
      this.version=resp
    })
  }

}
