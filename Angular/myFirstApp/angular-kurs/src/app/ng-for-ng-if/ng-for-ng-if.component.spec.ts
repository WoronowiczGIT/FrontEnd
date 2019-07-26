import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForNgIFComponent } from './ng-for-ng-if.component';

describe('NgForNgIFComponent', () => {
  let component: NgForNgIFComponent;
  let fixture: ComponentFixture<NgForNgIFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForNgIFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForNgIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
