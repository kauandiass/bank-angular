import { CommonModule } from '@angular/common';
import { Component, Input, input} from '@angular/core';
import { FormsModule } from '@angular/forms';

type inputType = "text" | "password";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})

export class InputComponent {  
  @Input() referenceText: string = "";
  @Input() inputType: string = "password";

  textAnimClass: string = "";
  isInputFocused: boolean = false;
  inputValue: string = '';

  onInputFocus(): void {
    this.textAnimClass = "text-up-true";
  }

  onInputBlur(): void {
    // Verifica se o valor do input está vazio
    if (this.inputValue.trim() === '') {
      this.textAnimClass = "text-up-false";
    }
  }
}
