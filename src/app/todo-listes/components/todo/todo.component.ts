import { Component, Input } from '@angular/core';
import { ITodo } from '../../models/i-todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() public todo: ITodo | undefined;
}
