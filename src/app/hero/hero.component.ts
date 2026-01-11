import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  highlights = [
    'Full Stack Development',
    'Secure REST APIs',
    'Admin Dashboards & Analytics',
    'Clean, Scalable Architecture'
  ];

  constructor(private scrollService: ScrollService) {}

  scrollToContact() {
    this.scrollService.scrollToSection('contact');
  }

  scrollToProjects() {
    this.scrollService.scrollToSection('services');
  }
}
