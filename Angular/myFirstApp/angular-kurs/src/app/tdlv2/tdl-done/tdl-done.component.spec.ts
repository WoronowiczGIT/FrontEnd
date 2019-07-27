import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdlDoneComponent } from './tdl-done.component';

describe('TdlDoneComponent', () => {
  let component: TdlDoneComponent;
  let fixture: ComponentFixture<TdlDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdlDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdlDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
