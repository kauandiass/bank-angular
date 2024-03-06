import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() referenceText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Output("submit") onSubmit = new EventEmitter();
  
  formValid = "";
  
  submit() {
    this.onSubmit.emit();
  }
}
