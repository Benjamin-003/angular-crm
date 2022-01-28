import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNoteFoundRoutingModule } from './page-note-found-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PageNoteFoundRoutingModule
  ]
})
export class PageNoteFoundModule { }
