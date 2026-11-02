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
      icon: 'instagram',
      title: 'Social Media Management',
      description: 'Complete management of your Instagram, Facebook, and other social media accounts. From content planning to posting and engagement, we handle everything to keep your brand active and growing.',
      features: ['Daily posting & scheduling', 'Community engagement', 'Growth strategy', 'Performance analytics']
    },
    {
      icon: 'video',
      title: 'Video Editing & Reels',
      description: 'Professional video editing for Instagram Reels, YouTube Shorts, and long-form content. We create engaging videos that capture attention and drive engagement.',
      features: ['Reels & Shorts editing', 'Transitions & effects', 'Captions & subtitles', 'Music & sound design']
    },
    {
      icon: 'design',
      title: 'Graphic Design & Animations',
      description: 'Eye-catching graphics and animations for your social media posts, stories, and brand materials. We create designs that stand out and reflect your brand identity.',
      features: ['Social media posts', 'Story templates', 'Animated graphics', 'Brand consistency']
    },
    {
      icon: 'branding',
      title: 'Logo Design & Branding',
      description: 'Professional logo design and complete brand identity packages. We help you build a strong visual identity that resonates with your target audience.',
      features: ['Logo design', 'Brand colors & fonts', 'Brand guidelines', 'Business cards & stationery']
    },
    {
      icon: 'ads',
      title: 'Page Boosting & Ads',
      description: 'Strategic social media advertising campaigns to reach your target audience and grow your business. We manage Facebook and Instagram ads for maximum ROI.',
      features: ['Ad campaign strategy', 'Audience targeting', 'A/B testing', 'Performance optimization']
    },
    {
      icon: 'seo',
      title: 'SEO & Profile Optimization',
      description: 'Optimize your social media profiles and content for maximum discoverability. We ensure your brand is easily found by your target audience.',
      features: ['Profile optimization', 'Hashtag research', 'Bio & description writing', 'SEO best practices']
    },
    {
      icon: 'content',
      title: 'Content Creation & Strategy',
      description: 'Comprehensive content strategy and creation services. We develop content calendars, create engaging posts, and ensure your brand message is consistent.',
      features: ['Content calendar planning', 'Copywriting', 'Photography guidance', 'Brand storytelling']
    },
    {
      icon: 'growth',
      title: 'Instagram & YouTube Growth',
      description: 'Dedicated growth strategies for Instagram and YouTube. We help you gain organic followers, increase engagement, and build a loyal community.',
      features: ['Organic growth tactics', 'Engagement strategies', 'Collaboration opportunities', 'Analytics & insights']
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
