import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayInfoModalComponent } from './day-info-modal.component';

describe('DayInfoModalComponent', () => {
  let component: DayInfoModalComponent;
  let fixture: ComponentFixture<DayInfoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayInfoModalComponent]
    });
    fixture = TestBed.createComponent(DayInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
