import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  category: 'Step1' | 'Step2' | 'Step3' | 'Step4' | 'Step5';
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
    { name: 'Brand Analysis', category: 'Step1', icon: 'angular', description: 'Understanding your brand and target audience' },
    { name: 'Market Research', category: 'Step1', icon: 'tailwind', description: 'Analyzing competitors and trends' },
    { name: 'Goal Setting', category: 'Step1', icon: 'material', description: 'Defining clear, measurable objectives' },
    
    { name: 'Content Calendar', category: 'Step2', icon: 'java', description: 'Planning posts and publishing schedule' },
    { name: 'Visual Strategy', category: 'Step2', icon: 'spring', description: 'Creating consistent visual themes' },
    { name: 'Hashtag Strategy', category: 'Step2', icon: 'api', description: 'Researching and planning hashtags' },
    
    { name: 'Content Creation', category: 'Step3', icon: 'mongodb', description: 'Designing graphics and editing videos' },
    { name: 'Copywriting', category: 'Step3', icon: 'jwt', description: 'Writing engaging captions and copy' },
    { name: 'Quality Review', category: 'Step3', icon: 'security', description: 'Ensuring brand consistency and quality' },
    
    { name: 'Scheduled Posting', category: 'Step4', icon: 'architecture', description: 'Publishing content at optimal times' },
    { name: 'SEO Optimization', category: 'Step4', icon: 'components', description: 'Optimizing for discoverability' },
    { name: 'Community Engagement', category: 'Step4', icon: 'scale', description: 'Responding and engaging with audience' },
    
    { name: 'Analytics Review', category: 'Step5', icon: 'performance', description: 'Monitoring performance metrics' },
    { name: 'Strategy Refinement', category: 'Step5', icon: 'secure', description: 'Adjusting based on insights' },
    { name: 'Growth Reporting', category: 'Step5', icon: 'typescript', description: 'Regular progress reports' }
  ];

  get categorizedTech() {
    const categories = ['Step1', 'Step2', 'Step3', 'Step4', 'Step5'];
    return categories.map(category => ({
      name: category === 'Step1' ? 'Research & Strategy' : 
            category === 'Step2' ? 'Content Planning' :
            category === 'Step3' ? 'Creation & Editing' :
            category === 'Step4' ? 'Publishing & Optimization' : 
            'Growth Tracking & Improvement',
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
