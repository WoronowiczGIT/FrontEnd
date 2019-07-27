import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdlTodoComponent } from './tdl-todo.component';

describe('TdlTodoComponent', () => {
  let component: TdlTodoComponent;
  let fixture: ComponentFixture<TdlTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdlTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdlTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
