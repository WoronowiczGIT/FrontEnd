import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDLAddTaskComponent } from './tdl-add-task.component';

describe('TDLAddTaskComponent', () => {
  let component: TDLAddTaskComponent;
  let fixture: ComponentFixture<TDLAddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDLAddTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDLAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
