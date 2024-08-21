import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ItemService } from '@app/examples/services/item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    onItemCreateSub: Subscription|null = null;
    latestItem = { name: "", quantity: ""};

    constructor(private is: ItemService) {}
    ngOnInit(): void {
        this.onItemCreateSub = this.is.onCreate$.subscribe((newItem: any) => {
            this.latestItem = newItem;        
        });
    }

    
}
