import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    // { label: 'Projects', id: 'projects' },
    { label: 'Tech Stack', id: 'tech-stack' },
    { label: 'Contact', id: 'contact' }
  ];

  services = [
    'Full Stack Development',
    'Admin Dashboards',
    'REST API Development',
    'Authentication Systems'
  ];

  technologies = [
    'Angular',
    'Spring Boot',
    'MongoDB',
    'Tailwind CSS'
  ];

  constructor(private scrollService: ScrollService) {}

  navigateTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
