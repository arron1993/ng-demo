import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ItemService } from '@app/examples/services/item.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    constructor(private is: ItemService) {}

    get items() {
        return this.is.list()
    }
}
