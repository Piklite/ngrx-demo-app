import { TestBed } from '@angular/core/testing';

import { TodoListeDataService } from './todo-liste-data.service';

describe('TodoListeDataService', () => {
  let service: TodoListeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
