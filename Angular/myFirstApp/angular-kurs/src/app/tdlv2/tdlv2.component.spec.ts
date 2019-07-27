import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDLv2Component } from './tdlv2.component';

describe('TDLv2Component', () => {
  let component: TDLv2Component;
  let fixture: ComponentFixture<TDLv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDLv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDLv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
