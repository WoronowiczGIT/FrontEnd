import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LokalnaReferencjaComponent } from './lokalna-referencja.component';

describe('LokalnaReferencjaComponent', () => {
  let component: LokalnaReferencjaComponent;
  let fixture: ComponentFixture<LokalnaReferencjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokalnaReferencjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LokalnaReferencjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
