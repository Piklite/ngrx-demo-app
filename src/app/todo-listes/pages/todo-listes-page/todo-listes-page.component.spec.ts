import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListesPageComponent } from './todo-listes-page.component';

describe('TodoListesPageComponent', () => {
  let component: TodoListesPageComponent;
  let fixture: ComponentFixture<TodoListesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
