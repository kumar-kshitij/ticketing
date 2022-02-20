import { Publisher, Subjects, TicketCreatedEvent } from "@kk-ticketing/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
