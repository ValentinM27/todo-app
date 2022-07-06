import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataHandlerService } from 'src/app/data-handler.service';
import { todo } from 'src/app/type';
// @ts-ignore
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  private show : boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private dataHandlerService : DataHandlerService
  ) { }

  todoForm = this.formBuilder.group({
    title: '',
    content: ''
  });

  ngOnInit(): void { }

  getShow() {
    return this.show;
  }

  setShow(value : boolean) {
    this.show = value;
  }

  onSubmit() {
    let todo : todo = this.todoForm.value as todo;
    todo.id = uuidv4();
    this.dataHandlerService.addItems(todo);
    this.todoForm.reset();
  }
}
