import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kalia-hayes-personal-portfolio';
  contact: boolean = false;

  showContact() {
    this.contact = !this.contact;
  }
}
