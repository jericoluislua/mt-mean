import {Component, OnDestroy, OnInit} from "@angular/core";
import { Subscription } from "rxjs";

import { Ticket } from "../ticket.model";
import { TicketsService } from "../tickets.service";

@Component ({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})

export class TicketListComponent implements OnInit, OnDestroy {
  tickets: Ticket[] = [];
  private ticketsSub: Subscription;

  constructor(public ticketsService: TicketsService){}

  ngOnInit(): void {
    this.tickets = this.ticketsService.getTickets();
    this.ticketsSub = this.ticketsService.getTicketUpdateListener().subscribe((tickets: Ticket[]) => {
      this.tickets = tickets;
    });
  }

  ngOnDestroy(): void {
    this.ticketsSub.unsubscribe();
  }
}
