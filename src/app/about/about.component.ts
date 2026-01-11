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
      title: 'Clean and maintainable code',
      description: 'Writing code that is easy to understand, test, and maintain'
    },
    {
      icon: 'scale',
      title: 'Scalable system design',
      description: 'Building systems that grow with your business needs'
    },
    {
      icon: 'shield',
      title: 'Performance and security',
      description: 'Ensuring fast, reliable, and secure applications'
    },
    {
      icon: 'target',
      title: 'Long-term product thinking',
      description: 'Planning for sustainability and future enhancements'
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
