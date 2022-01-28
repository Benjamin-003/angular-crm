import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private coreService: CoreService) {}
public version = 0;
  ngOnInit(): void {
  }
  onClickIncrementVersion(){
     this.coreService.versionNum$.next(this.version++)

    }
  }

