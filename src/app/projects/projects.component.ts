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
      title: 'Instagram Growth Project',
      description: 'Grew a lifestyle brand\'s Instagram from 2K to 15K followers in 6 months through creative content and strategic engagement.',
      techStack: ['Instagram', 'Reels', 'Stories'],
      features: ['Daily content creation', 'Reel editing & trends', 'Community engagement', 'Growth analytics']
    },
    {
      title: 'YouTube Channel Management',
      description: 'Managed a tech review channel, creating thumbnails, editing videos, and optimizing for YouTube algorithm.',
      techStack: ['YouTube', 'Video Editing', 'SEO'],
      features: ['Thumbnail design', 'Video editing', 'SEO optimization', 'Consistent posting schedule']
    },
    {
      title: 'Brand Identity & Social Media Launch',
      description: 'Created complete brand identity and launched social media presence for a new fashion startup.',
      techStack: ['Logo Design', 'Branding', 'Multi-platform'],
      features: ['Logo & brand guidelines', 'Instagram & Facebook setup', 'Content strategy', 'Launch campaign']
    },
    {
      title: 'E-commerce Social Media Campaign',
      description: 'Ran successful Facebook and Instagram ad campaigns that generated 3x ROI for an online store.',
      techStack: ['Facebook Ads', 'Instagram Ads', 'Analytics'],
      features: ['Ad campaign strategy', 'Audience targeting', 'Creative design', 'Performance tracking']
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
