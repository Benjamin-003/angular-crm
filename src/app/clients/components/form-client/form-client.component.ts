import { StateClient } from './../../../core/enums/state-client';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  @Input() init!: Client;
  public states = StateClient;
  @Output() submitted = new EventEmitter<Client>();
  public form!: FormGroup;
  constructor(
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.init.name],
      state: [this.init.state],
      tauxTva: [this.init.tauxTva],
      id: [this.init.id],
      totalCaHt: [this.init.totalCaHt],
      comment: [this.init.comment]
    })
  }
  public onSubmit(){
    this.submitted.emit(this.form.value);
  }

}
