import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForLoopComponent } from '@app/examples/components/for-loop/for-loop.component';

@Component({
  selector: 'app-for-loop-page',
  standalone: true,
  imports: [CommonModule, ForLoopComponent],
  templateUrl: './for-loop-page.component.html',
  styleUrl: './for-loop-page.component.css',
})
export class ForLoopPageComponent {
  count = 10;

  onChange(event: any) {
    this.count = Number(event.target.value);
  }
}
