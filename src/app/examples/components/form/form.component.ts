import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ItemService } from '@app/examples/services/item.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
    constructor(private is: ItemService) {}

  newItem = {
    name: '',
    quantity: '',
  };
  
  success = false;
  onSubmit() {
    this.is.create(this.newItem); 
  }
}
