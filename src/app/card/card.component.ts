import { Component, OnInit, Input } from '@angular/core';
import { DataHandlerService } from "../data-handler.service";
import { todo } from 'src/app/type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() todo : todo | null = null;

  constructor(
    private dataHandlerService : DataHandlerService
  ) { }

  ngOnInit(): void { }

  deleteItem() : void {
    if(this.todo) {
      this.dataHandlerService.removeItems(this.todo);
    }
  }
}
