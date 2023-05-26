import { Injectable } from '@angular/core';
import { EventDataModel, EventDataModelWithKey, EventImportanceLevel } from '../../types/event-data/event-data-model';
import { v4 as uuidGenerator } from 'uuid';

@Injectable({ providedIn: 'root' })
export class EventCachingService {

  constructor() {}

  public cacheData(event: EventDataModel): void {
    window.localStorage.setItem(uuidGenerator(), JSON.stringify(event));
  }

  public getCachedDataForDate(date: string): Array<EventDataModelWithKey> {
    const models: Array<EventDataModelWithKey> = this._getAllData();
    const modelsToReturn: Array<EventDataModelWithKey> = new Array<EventDataModelWithKey>();

    for (const model of models) {
      if (model.event.date === date) {
        modelsToReturn.push(model);
      }
    }

    return modelsToReturn.sort(this.compareEvents);
  }

  public deleteData(key: string): void {
    window.localStorage.removeItem(key);
  }

  private _getAllData(): Array<EventDataModelWithKey> {
    const models: Array<EventDataModelWithKey> = [];

    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        const event: EventDataModel = JSON.parse(localStorage.getItem(key)!);
        models.push({ key, event});
      }
    }

    return models;
  }

  private compareEvents(a: EventDataModelWithKey, b: EventDataModelWithKey): number {
    if (a.event.importance !== b.event.importance) {
      if (a.event.importance === EventImportanceLevel.High) {
        return -1;
      }
      if (b.event.importance === EventImportanceLevel.High) {
        return 1;
      }
      if (a.event.importance === EventImportanceLevel.Medium) {
        return -1;
      }
      if (b.event.importance === EventImportanceLevel.Medium) {
        return 1;
      }
    }

    return a.event.name.localeCompare(b.event.name);
  }
}
