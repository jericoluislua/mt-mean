import {Component} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
    console.log(this.opened);
  }
}
