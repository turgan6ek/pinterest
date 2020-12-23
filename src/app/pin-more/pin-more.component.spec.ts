import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinMoreComponent } from './pin-more.component';

describe('PinMoreComponent', () => {
  let component: PinMoreComponent;
  let fixture: ComponentFixture<PinMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
