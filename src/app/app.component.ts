import { Component } from '@angular/core';
import { DataHandlerService } from "./data-handler.service";
import { todo } from 'src/app/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todos : todo[] = this.dataHandlerService.getItems();

  constructor(
    private dataHandlerService : DataHandlerService
  ) {
    console.log(this.todos)
  }
}
