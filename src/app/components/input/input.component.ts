import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef, input} from '@angular/core';

import { FormsModule, FormGroup, ReactiveFormsModule, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type inputType = "text" | "password";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})

export class InputComponent implements ControlValueAccessor {  
  inputValue: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.inputValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implemente se necessário
  }

  onInput(event: any): void {
    this.inputValue = event.target.value;
    this.onChange(this.inputValue);
  }

  @Input() referenceText: string = "";
  @Input() inputType: string = "password";
  @Input() visibilityButton: string = "password";
  @Input() disabled: boolean = true;

  eyeIconClass: string = "fa-solid fa-eye-slash";

  textAnimClass: string = "";
  isInputFocused: boolean = false;

  onInputFocus(): void {
    this.textAnimClass = "text-up-true";
  }

  onInputBlur(): void {
    // Verifica se o valor do input está vazio
    if (this.inputValue.trim() === '') {
      this.textAnimClass = "text-up-false";
    }
  }
  
  
  ChangeVisibility(): void {
    if ( this.inputType === "password" ) {
      this.inputType = "text"
      this.eyeIconClass = "fa-solid fa-eye";
    } else {
      this.inputType = "password"
      this.eyeIconClass = "fa-solid fa-eye-slash";
    }
  }
}