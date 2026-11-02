import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  activeSection = signal('home');

  menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    // { id: 'projects', label: 'Projects' },
    { id: 'tech-stack', label: 'Our Process' },
    { id: 'contact', label: 'Contact' }
  ];

  constructor(
    public themeService: ThemeService,
    private scrollService: ScrollService
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.pageYOffset > 50);
    this.updateActiveSection();
  }

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  navigateTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
    this.isMenuOpen.set(false);
  }

  private updateActiveSection() {
    const sections = this.menuItems.map(item => item.id);
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }
}
