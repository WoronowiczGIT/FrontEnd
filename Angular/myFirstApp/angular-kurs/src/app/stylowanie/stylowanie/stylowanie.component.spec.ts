import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylowanieComponent } from './stylowanie.component';

describe('StylowanieComponent', () => {
  let component: StylowanieComponent;
  let fixture: ComponentFixture<StylowanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylowanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
