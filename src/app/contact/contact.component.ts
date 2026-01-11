import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('contactSection') contactSection!: ElementRef;

  formData = {
    name: '',
    email: '',
    projectDetails: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  socialLinks = [
    {
      name: 'WhatsApp',
      icon: 'whatsapp',
      url: 'https://wa.me/+916261221248',
      color: 'hover:text-green-600'
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: 'email',
      url: 'mailto:vipultripathi182cse@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  contactInfo = [
    {
      icon: 'email',
      title: 'Email',
      value: 'vipultripathi182cse@gmail.com',
      link: 'mailto:vipultripathi182cse@gmail.com'
    },
    {
      icon: 'location',
      title: 'Location',
      value: 'Available Worldwide',
      link: null
    },
    {
      icon: 'time',
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

  ngAfterViewInit() {
    setTimeout(() => this.observeSection(), 0);
    // Initialize EmailJS with your public key
    emailjs.init('RM52GjupnaWbtdF6T');
  }

  async onSubmit() {
    if (this.isSubmitting) return;

    // Validate form
    if (!this.formData.name || !this.formData.email || !this.formData.projectDetails) {
      this.submitMessage = 'Please fill in all fields';
      this.submitSuccess = false;
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_xjfhcog',  // Replace with your EmailJS service ID
        'template_7f2ffhl', // Replace with your EmailJS template ID
        {
          name: this.formData.name,
          message: this.formData.projectDetails,
          time: new Date().toLocaleString(),
        }
      );

      console.log('Email sent successfully:', response);
      this.submitMessage = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon!';
      this.submitSuccess = true;
      
      // Reset form
      this.formData = { name: '', email: '', projectDetails: '' };
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);

    } catch (error) {
      console.error('Email send failed:', error);
      this.submitMessage = 'Oops! Something went wrong. Please try again or email us directly.';
      this.submitSuccess = false;
    } finally {
      this.isSubmitting = false;
    }
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

    const elements = this.contactSection.nativeElement.querySelectorAll('.fade-in-on-scroll');
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
