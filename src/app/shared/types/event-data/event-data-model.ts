export enum EventImportanceLevel {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low'
}

export type EventDataModel = {
  name: string;
  date: string;
  importance: EventImportanceLevel;
};

export type EventDataModelWithKey = {
  key: string;
  event: EventDataModel;
};
