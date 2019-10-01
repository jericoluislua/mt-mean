import { Component } from "@angular/core";

import { NgForm } from "@angular/forms";
import {TicketsService} from "../tickets.service";

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})

export class TicketCreateComponent {
  enteredTicketTitle = '';
  enteredTicketContent = '';

  constructor(public ticketsService: TicketsService){

  }

  onAddTicket(form: NgForm) {
    //this.newTicket = this.enteredTicketValue;
    if(form.invalid){
      return;
    }
    this.ticketsService.addTickets(form.value.title, form.value.content);
    form.resetForm();
  }
}
