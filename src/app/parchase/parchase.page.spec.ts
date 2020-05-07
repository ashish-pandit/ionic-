import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParchasePage } from './parchase.page';

describe('ParchasePage', () => {
  let component: ParchasePage;
  let fixture: ComponentFixture<ParchasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParchasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
