import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Security' | 'Practices';
  icon: string;
  description?: string;
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent implements AfterViewInit {
  @ViewChild('techStackSection') techStackSection!: ElementRef;

  technologies: Technology[] = [
    { name: 'Angular', category: 'Frontend', icon: 'angular', description: 'Scalable, component-based frontend framework' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwind', description: 'Utility-first CSS for modern UI' },
    { name: 'Angular Material', category: 'Frontend', icon: 'material', description: 'Accessible & consistent UI components' },
    { name: 'TypeScript', category: 'Frontend', icon: 'typescript', description: 'Type-safe development' },
    { name: 'Java', category: 'Backend', icon: 'java', description: 'Reliable and enterprise-grade backend language' },
    { name: 'Spring Boot', category: 'Backend', icon: 'spring', description: 'Rapid backend development with clean architecture' },
    { name: 'REST APIs', category: 'Backend', icon: 'api', description: 'Secure and scalable API design' },
    { name: 'Microservices', category: 'Backend', icon: 'microservices', description: 'Modular architecture pattern' },
    { name: 'MongoDB', category: 'Database', icon: 'mongodb', description: 'Flexible, scalable NoSQL database' },
    { name: 'JWT Authentication', category: 'Security', icon: 'jwt', description: 'Token-based authentication' },
    { name: 'Role-Based Access Control', category: 'Security', icon: 'security', description: 'RBAC security model' },
    { name: 'Clean Architecture', category: 'Security', icon: 'architecture', description: 'Clean Architecture Principles' },
    { name: 'Component-Driven', category: 'Practices', icon: 'components', description: 'Component-driven development' },
    { name: 'Scalable Design', category: 'Practices', icon: 'scale', description: 'Scalable system design' },
    { name: 'Performance', category: 'Practices', icon: 'performance', description: 'Performance optimization' },
    { name: 'Secure Coding', category: 'Practices', icon: 'secure', description: 'Secure coding practices' }
  ];

  get categorizedTech() {
    const categories = ['Frontend', 'Backend', 'Database', 'Security', 'Practices'];
    return categories.map(category => ({
      name: category === 'Frontend' ? 'Frontend Technologies' : 
            category === 'Backend' ? 'Backend Technologies' :
            category === 'Security' ? 'Security & Architecture' :
            category === 'Practices' ? 'Development Practices' : category,
      items: this.technologies.filter(tech => tech.category === category)
    }));
  }

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

    const elements = this.techStackSection.nativeElement.querySelectorAll('.fade-in-on-scroll');
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
