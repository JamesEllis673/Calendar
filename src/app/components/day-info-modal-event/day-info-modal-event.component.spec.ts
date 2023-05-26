import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayInfoModalEventComponent } from './day-info-modal-event.component';

describe('DayInfoModalEventComponent', () => {
  let component: DayInfoModalEventComponent;
  let fixture: ComponentFixture<DayInfoModalEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayInfoModalEventComponent]
    });
    fixture = TestBed.createComponent(DayInfoModalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
