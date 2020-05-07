import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFailurePage } from './payment-failure.page';

describe('PaymentFailurePage', () => {
  let component: PaymentFailurePage;
  let fixture: ComponentFixture<PaymentFailurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentFailurePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFailurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
