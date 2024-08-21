import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { IfComponent } from '@app/examples/components/if/if.component';

@Component({
  selector: 'app-if-page',
  standalone: true,
  imports: [IfComponent, NgClass],
  templateUrl: './if-page.component.html',
  styleUrl: './if-page.component.css',
})
export class IfPageComponent {
  isOn = false;

  toggle() {
    this.isOn = !this.isOn;
  }
}
