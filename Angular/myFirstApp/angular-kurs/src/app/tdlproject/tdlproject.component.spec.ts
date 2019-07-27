import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDLProjectComponent } from './tdlproject.component';

describe('TDLProjectComponent', () => {
  let component: TDLProjectComponent;
  let fixture: ComponentFixture<TDLProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDLProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDLProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
