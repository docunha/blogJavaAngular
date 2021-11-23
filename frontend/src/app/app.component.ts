import { Component } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faInstagram = faInstagram
  faFacebook = faFacebook
  faLinkedin = faLinkedin

  constructor() { }

  ngOnInit(): void {
  }

}
