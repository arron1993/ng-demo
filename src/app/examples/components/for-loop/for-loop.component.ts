import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-for-loop',
  standalone: true,
  imports: [NgFor],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css',
})
export class ForLoopComponent {
  @Input() count = 15;

  get numberArray() {
    return Array.from(Array(this.count).keys());
  }
}
