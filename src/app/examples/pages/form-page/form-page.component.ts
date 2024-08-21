import { Component } from '@angular/core';

import { FormComponent } from '@app/examples/components/form/form.component';
import { ListComponent } from '@app/examples/components/list/list.component';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [FormComponent, ListComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css',
})
export class FormPageComponent {}
