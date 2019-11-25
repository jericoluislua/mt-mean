import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
// https://alligator.io/angular/custom-svg-icons-angular-material/

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  opened = false;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'tickets',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/src/tickets.svg')
    );
  }
}
