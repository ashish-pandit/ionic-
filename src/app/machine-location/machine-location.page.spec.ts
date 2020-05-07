import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLocationPage } from './machine-location.page';

describe('MachineLocationPage', () => {
  let component: MachineLocationPage;
  let fixture: ComponentFixture<MachineLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
