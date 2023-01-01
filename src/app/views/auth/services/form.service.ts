import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { LoginForm } from '../models/login-form.interface';
import { emailValidator } from './../../../core/validators/email.validator';

@Injectable()
export class FormService {
  constructor(private fb: NonNullableFormBuilder) {}

  createLoginForm(): FormGroup<LoginForm> {
    return this.fb.group<LoginForm>({
      email: this.fb.control('', [Validators.required, emailValidator]),
      password: this.fb.control('', [Validators.required]),
    });
  }
}
