import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconesModule } from '../icones/icones.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { ButtonComponent } from './components/button/button.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './state.directive';



@NgModule({
  declarations: [
    TableLightComponent,
    ButtonComponent,
    TotalPipe,
    StateDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TemplatesModule,
    IconesModule,
    TableLightComponent,
    ButtonComponent,
    TotalPipe,
    StateDirective
  ]
})
export class SharedModule { }
