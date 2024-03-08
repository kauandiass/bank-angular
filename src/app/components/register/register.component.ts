import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { RegisterService } from '../../services/register/register.service';
import { ReferencePanelComponent } from '../reference-panel/reference-panel.component';
import { SmallNavPageComponent } from '../small-nav-page/small-nav-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReferencePanelComponent,
    SmallNavPageComponent,
    ReactiveFormsModule
  ],
  providers: [
    RegisterService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  loading = signal(false);

  constructor(private service: RegisterService, private router: Router) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.loading.set(true);
    if(this.registerForm.valid) {
      this.service.sendData(this.registerForm.value.username, this.registerForm.value.password).subscribe({
        next: () => {
          this.registerForm.reset();
          this.loading.set(false)
          this.router.navigate(['account/login']);

        }
      });
    }
  }
}