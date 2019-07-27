import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LCChildComponent } from './lc-child.component';

describe('LCChildComponent', () => {
  let component: LCChildComponent;
  let fixture: ComponentFixture<LCChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LCChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LCChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
