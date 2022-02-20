import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@kk-ticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
