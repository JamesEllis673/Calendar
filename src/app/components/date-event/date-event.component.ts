import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EventDataModel } from '../../shared/types/event-data/event-data-model';

@Component({
  selector: 'app-date-event',
  templateUrl: './date-event.component.html',
  styleUrls: ['./date-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateEventComponent {
  @Input()
  public dateEventDataModel: EventDataModel;
}
