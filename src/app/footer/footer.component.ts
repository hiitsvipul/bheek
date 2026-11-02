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
    { label: 'Our Process', id: 'tech-stack' },
    { label: 'Contact', id: 'contact' }
  ];

  services = [
    'Social Media Management',
    'Video Editing & Reels',
    'Graphic Design',
    'Brand Strategy'
  ];

  technologies = [
    'Instagram',
    'YouTube',
    'Facebook',
    'Content Strategy'
  ];

  constructor(private scrollService: ScrollService) {}

  navigateTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
