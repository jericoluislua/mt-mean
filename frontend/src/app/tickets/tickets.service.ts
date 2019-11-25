import { Ticket } from "./ticket.model";
import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TicketsService {
  private tickets: Ticket[] = [];
  private ticketsUpdated = new Subject<Ticket[]>();

  getTickets() {
    return [...this.tickets];
  }

  getTicketUpdateListener(){
    return this.ticketsUpdated.asObservable();
  }

  addTickets(title: string, content: string){
    const ticket: Ticket = {title: title, content: content};
    this.tickets.push(ticket);
    this.ticketsUpdated.next([...this.tickets]);
  }
}
