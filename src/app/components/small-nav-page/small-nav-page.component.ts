import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-nav-page',
  standalone: true,
  imports: [],
  templateUrl: './small-nav-page.component.html',
  styleUrl: './small-nav-page.component.scss'
})
export class SmallNavPageComponent {
  @Input() pageHref: string = "";
  @Input() referenceText: string = "";
  @Input() referenceLabel: string = ""; 
}
