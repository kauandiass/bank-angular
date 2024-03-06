import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { RegisterService } from '../../services/register/register.service';
import { register } from 'module';
import { LoginService, LoginResponse } from '../../services/login/login.service';
import { ReferencePanelComponent } from '../reference-panel/reference-panel.component';
import { SmallNavPageComponent } from '../small-nav-page/small-nav-page.component';
import { response } from 'express';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReferencePanelComponent,
    SmallNavPageComponent,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading = signal(false);

  constructor(private service: LoginService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  // onSubmit() {
  //   this.loading.set(true);
  //   if(this.loginForm.valid) {
  //     this.service.sendData(this.loginForm.value.username, this.loginForm.value.password).subscribe({
  //       next: () => {
  //         this.loginForm.reset();
  //         this.loading.set(false)
  //       }
  //     });
  //   }
  // }

  onSubmit() {
    this.loading.set(true);
    if(this.loginForm.valid) {
      this.service.sendData(this.loginForm.value.username, this.loginForm.value.password).subscribe({
        next: (response: LoginResponse) => {
          console.log("Server Response: ", response);
          window.alert(response)
        }
      });
    }
  }

  // onSubmit() {
  //   this.loading.set(true);
  //   if(this.loginForm.valid) {
  //     this.service.sendData(this.loginForm.value.username, this.loginForm.value.password)
  //       .subscribe(
  //         (response: LoginResponse) => {
  //           console.log("Server Response: ", response);
  //           window.alert(response)
  //         },
  //         (error) => {
  //           console.error("Error To Send Data ", error)
  //         }
  //       );
  //   }
  // }
}