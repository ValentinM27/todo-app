import { Injectable } from '@angular/core';
import { todo } from './type';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  private todos: todo[] = this._getItems();

  constructor() { }

  private _getItems() : todo[] {
    const _stringifyContent = localStorage.getItem('todos');

    let _parsedContent : todo[] = [] as todo[];
    if(_stringifyContent) {
      _parsedContent = JSON.parse(_stringifyContent) as todo[];
    }

    return _parsedContent;
  }

  private _savesItems() {
    const _stringifyContent = JSON.stringify(this.todos);
    localStorage.setItem('todos', _stringifyContent);
  }

  public getItems() : todo[] {
    return this.todos;
  }

  public addItems(todo : todo) {
    this.todos.push(todo);
    this._savesItems();
  }

  public removeItems(todo : todo) {
    this.todos.forEach((e : todo , index : number) => {
      if(e.id === todo.id) {
        this.todos.splice(index, 1);
      }
    })
    this._savesItems();
  }
}
