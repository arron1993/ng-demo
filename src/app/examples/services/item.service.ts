import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: any[] = []
    
  onCreate$: Subject<any>;

  constructor() { 
    this.onCreate$ = new Subject();
  }

  create(newItem: any) {
    this.items.push({...newItem});
    this.onCreate$.next({...newItem});
  }
  
  list() {
    return this.items
  }  
}
