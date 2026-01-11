import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  image?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('projectsSection') projectsSection!: ElementRef;

  projects: Project[] = [
    {
      title: 'Enterprise Admin Dashboard',
      description: 'A role-based admin dashboard built for managing users, data, and analytics efficiently.',
      techStack: ['Angular', 'Spring Boot', 'MongoDB'],
      features: ['Secure authentication & authorization', 'Analytics charts & KPI cards', 'Advanced filtering & data tables', 'Scalable backend APIs']
    },
    {
      title: 'Business Management System',
      description: 'A full-stack web application designed to manage business operations through a centralized system.',
      techStack: ['Angular', 'Spring Boot', 'MongoDB'],
      features: ['Admin & user roles', 'CRUD operations with validation', 'REST APIs', 'Responsive frontend']
    },
    {
      title: 'Authentication & User Management Platform',
      description: 'A secure authentication system with role-based access control for modern web applications.',
      techStack: ['Angular', 'Spring Boot', 'MongoDB'],
      features: ['JWT authentication', 'Role & permission management', 'Secure API access', 'Modular backend architecture']
    },
    {
      title: 'Data-Driven Web Application',
      description: 'A scalable application focused on handling large datasets with efficient APIs and optimized database design.',
      techStack: ['Angular', 'Spring Boot', 'MongoDB'],
      features: ['Performance-optimized APIs', 'MongoDB schema design', 'Clean UI for data visualization', 'Scalable architecture']
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

    const elements = this.projectsSection.nativeElement.querySelectorAll('.fade-in-on-scroll');
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
