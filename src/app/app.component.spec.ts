import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from "@angular/core";
import { CalendarViewComponentStub } from "./components/calendar-view/calendar-view.component.stub";
import { MonthPickerComponentStub } from "./components/month-picker/month-picker.component.stub";
import { By } from "@angular/platform-browser";

describe('AppComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  function getMonthPicker(): MonthPickerComponentStub {
    return fixture.debugElement.query(By.directive(MonthPickerComponentStub))?.componentInstance;
  }

  function getCalendarView(): CalendarViewComponentStub {
    return fixture.debugElement.query(By.directive(CalendarViewComponentStub))?.componentInstance;
  }

  @Component({
    template: `<app-root></app-root>`
  })
  class TestHostComponent {}

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TestHostComponent,
        AppComponent,
        CalendarViewComponentStub,
        MonthPickerComponentStub
      ],
    }).compileComponents();

    jasmine.clock().mockDate(new Date('2000-01-01'));

    fixture = TestBed.createComponent<TestHostComponent>(TestHostComponent);
    fixture.detectChanges();
  }));

  it('should show the month picker', () => {
    expect(getMonthPicker().monthPickerCurrentDate).toEqual(new Date('2000-01-01'));
  });

  it('should show the calendar view', () => {
    const calendarView: CalendarViewComponentStub =  getCalendarView();

    expect(calendarView.calendarViewCurrentDate).toEqual(new Date('2000-01-01'));
    expect(calendarView.calendarViewMonthToDisplay).toEqual(new Date('2000-01-01'));
  });

  describe('when the month picker month is changed', () => {
    beforeEach(() => {
      getMonthPicker().monthPickerMonthUpdated.emit(new Date('2000-02-01'));
      fixture.detectChanges();
    });

    it('should show calendar view with new month', () => {
      const calendarView: CalendarViewComponentStub =  getCalendarView();

      expect(calendarView.calendarViewCurrentDate).toEqual(new Date('2000-01-01'));
      expect(calendarView.calendarViewMonthToDisplay).toEqual(new Date('2000-02-01'));
    });
  });

  afterAll(() => {
    fixture = null;
  })
});
