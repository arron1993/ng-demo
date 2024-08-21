import { NgIf } from '@angular/common';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [NgIf],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css',
})
export class IfComponent {
  @Input() isOn = false;
}
