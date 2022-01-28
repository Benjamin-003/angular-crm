import { Router, RouterModule } from '@angular/router';
import { LoginModule } from './../login/login.module';
import { TemplatesModule } from './../templates/templates.module';
import { IconesModule } from './../icones/icones.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    UiModule,
    IconesModule,
    TemplatesModule,
    LoginModule,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
