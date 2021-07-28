import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Email } from '../email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm!: FormGroup;
  @Input() email!: Email;
  @Output() emailSubmit = new EventEmitter();

  constructor() { }

  ngOnInit() {
    const { subject, from, to, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required])
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }

    this.emailSubmit.emit(this.emailForm.value);
  }


  public emailFormTo() { return this.emailForm.controls.to as FormControl; }
  public emailFormFrom() { return this.emailForm.controls.from as FormControl; }
  public emailFormSubject() { return this.emailForm.controls.subject as FormControl; }
  public emailFormText() { return this.emailForm.controls.text as FormControl; }
}
