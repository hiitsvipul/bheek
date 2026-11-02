import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef;

  beliefs = [
    {
      icon: 'code',
      title: 'Creative Storytelling',
      description: 'Crafting compelling narratives that connect with your audience'
    },
    {
      icon: 'scale',
      title: 'Strategic Growth',
      description: 'Building sustainable growth through data-driven strategies'
    },
    {
      icon: 'shield',
      title: 'Brand Authenticity',
      description: 'Creating genuine connections that build trust and loyalty'
    },
    {
      icon: 'target',
      title: 'Consistent Quality',
      description: 'Delivering high-quality content that reflects your brand values'
    }
  ];

  ngAfterViewInit() {
    setTimeout(() => this.observeSection(), 0);
  }

  private observeSection() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = this.aboutSection.nativeElement.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el: Element) => {
      observer.observe(el);
      // Add visible class immediately if element is in viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }
}
