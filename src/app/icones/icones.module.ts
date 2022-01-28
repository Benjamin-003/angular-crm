import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';

@NgModule({
  declarations: [
    IconEditComponent,
    IconDeleteComponent,
    IconNavComponent,
    IconCloseComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconEditComponent,
    IconDeleteComponent,
    IconNavComponent,
    IconCloseComponent
  ]
})
export class IconesModule { }
