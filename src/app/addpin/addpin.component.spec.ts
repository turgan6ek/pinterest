import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpinComponent } from './addpin.component';

describe('AddpinComponent', () => {
  let component: AddpinComponent;
  let fixture: ComponentFixture<AddpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
