import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reference-panel',
  standalone: true,
  imports: [],
  templateUrl: './reference-panel.component.html',
  styleUrl: './reference-panel.component.scss'
})
export class ReferencePanelComponent {
  @Input() referenceText: string = "";
}
