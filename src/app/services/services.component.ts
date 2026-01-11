import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements AfterViewInit {
  @ViewChild('servicesSection') servicesSection!: ElementRef;

  services: Service[] = [
    {
      icon: 'layers',
      title: 'Full-Stack Web Application Development',
      description: 'We design and build complete web applications from scratch using Angular, Spring Boot, and MongoDB. From frontend UI to backend logic and database architecture, we deliver scalable, secure, and production-ready solutions tailored to your business needs.',
      features: []
    },
    {
      icon: 'dashboard',
      title: 'Admin Dashboards & Business Analytics',
      description: 'We create powerful admin panels and dashboards that help businesses monitor data, users, and performance in real time. Our dashboards are designed for clarity, speed, and scalability.',
      features: [
        'Role-based admin panels',
        'Analytics & reporting dashboards',
        'Data tables, filters & charts',
        'Secure access control'
      ]
    },
    {
      icon: 'api',
      title: 'REST API Development & Integration',
      description: 'We build clean, secure, and scalable REST APIs using Spring Boot that power web apps, mobile apps, and third-party integrations.',
      features: [
        'Backend for Angular applications',
        'Mobile app APIs',
        'Third-party service integration'
      ]
    },
    {
      icon: 'lock',
      title: 'Authentication & Authorization Systems',
      description: 'We implement secure authentication systems to protect applications and manage user access efficiently.',
      features: [
        'Login & registration systems',
        'JWT-based authentication',
        'Role & permission management',
        'Secure session handling'
      ]
    },
    {
      icon: 'frontend',
      title: 'Frontend Development with Angular',
      description: 'We develop fast, responsive, and user-friendly frontend applications using Angular, Tailwind CSS, and Angular Material.',
      features: [
        'Responsive UI',
        'Performance optimization',
        'Clean component architecture',
        'Modern animations & interactions'
      ]
    },
    {
      icon: 'backend',
      title: 'Backend Development with Spring Boot',
      description: 'We develop robust backend systems with clean architecture and scalable design principles.',
      features: [
        'Business logic implementation',
        'API security & validation',
        'Error handling & logging',
        'Microservice-ready structure'
      ]
    },
    {
      icon: 'database',
      title: 'Database Design & Optimization',
      description: 'We design MongoDB schemas that are optimized for performance, scalability, and long-term growth.',
      features: []
    },
    {
      icon: 'design',
      title: 'UI/UX & Product Implementation',
      description: 'We convert designs and ideas into polished user interfaces that feel modern, intuitive, and reliable — focused on usability and business outcomes.',
      features: []
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

    const elements = this.servicesSection.nativeElement.querySelectorAll('.fade-in-on-scroll');
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
