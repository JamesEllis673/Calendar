import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentDate: Date;
  public monthToDisplay: Date;

  public ngOnInit(): void {
    this.currentDate = new Date();
    this.monthToDisplay = this.currentDate;
  }

  public updateMonthToDisplay(newDate: Date): void {
    this.monthToDisplay = newDate;
  }
}
