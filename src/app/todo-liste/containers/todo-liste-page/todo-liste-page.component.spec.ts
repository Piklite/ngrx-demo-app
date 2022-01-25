import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListePageComponent } from './todo-liste-page.component';

describe('TodoListePageComponent', () => {
  let component: TodoListePageComponent;
  let fixture: ComponentFixture<TodoListePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
