import { EventsRepository } from '../src/common/EventsRepository';

declare module 'flarum/common/Application' {
  export default interface Application {
    fathomEventsRepository: EventsRepository;
  }
}

export interface IFathom {
  /**
   * Track an event on Fathom.
   *
   * @param eventId Fathom event ID
   * @param unknown Unknown param
   */
  trackGoal(eventId: string, unknown: number): void;
}

declare global {
  var fathom: IFathom;
}
