import { ProfileCard } from './profile-card/profile-card';
import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Kendrick Neil Y. Aguarin';
  location = 'Angeles City, Pampanga';
  email = 'Kendrick.yalung@gmail.com';
  phone = '0969 113 6018';

  profile = 'I am a student interested in web development. I enjoy learning new technologies and building useful applications.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
