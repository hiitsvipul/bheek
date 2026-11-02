import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'BHEEK™ — FUND MY EXISTENTIAL CRISIS 😂';

  readonly contributionOptions = [51, 101, 251, 501];
  readonly timeline = [
    {
      year: '2019 / 2020',
      title: 'Started learning to code.',
      text: 'I believed “HTML and CSS” was a personality trait. It was not.'
    },
    {
      year: '2021',
      title: 'Entered the software industry.',
      text: 'I got paid to write things I did not understand, and somehow that passed for experience.'
    },
    {
      year: '2022',
      title: 'Learned frameworks, APIs, databases.',
      text: 'I became dangerously good at stacking tools that eventually became a hobby for machines.'
    },
    {
      year: '2023',
      title: 'Started feeling like a professional developer.',
      text: 'Confidence peaked. The gods were watching. They are now laughing.'
    },
    {
      year: '2024',
      title: 'AI started getting suspiciously good.',
      text: 'My output increased, my ego decreased, and my job market value became a joke.'
    },
    {
      year: '2025',
      title: 'AI started doing things I used to charge money for.',
      text: 'The final plot twist: a model can now do half of my “expertise” before breakfast.'
    },
    {
      year: '2026',
      title: 'Decided to diversify into an AI-resistant business.',
      text: 'It turns out livestock, daily operations, and physical assets are still pretty hard to automate.'
    }
  ];

  readonly oldCareer = [
    'Java',
    'Angular',
    'Spring Boot',
    'MongoDB',
    'Production bugs',
    'AI competition'
  ];

  readonly newCareer = [
    'Actual physical assets',
    'Actual customers',
    'Actual hard work',
    'Actual milk',
    'Hopefully fewer bugs',
    'A business that does not ask ChatGPT for permission'
  ];

  readonly purposeBreakdown = [
    { label: 'Livestock acquisition', value: 'Editable placeholder', amount: '₹0' },
    { label: 'Initial infrastructure', value: 'Editable placeholder', amount: '₹0' },
    { label: 'Feed and supplies', value: 'Editable placeholder', amount: '₹0' },
    { label: 'Operational expenses', value: 'Editable placeholder', amount: '₹0' }
  ];

  readonly faq = [
    { q: 'Why ₹51?', a: '₹50 felt too mainstream. ₹51 has ambition.' },
    { q: 'Is this a scam?', a: 'No. Just an unnecessarily elaborate way of asking for money. Read the purpose and use of funds before contributing.' },
    { q: 'Are you actually a developer?', a: 'Unfortunately, yes.' },
    { q: 'Why don’t you just get another job?', a: 'Have you seen the competition?' },
    { q: 'Will I get my money back?', a: 'No. This is a voluntary contribution, not an investment or loan.' },
    { q: 'Will AI take over your dairy business?', a: 'If AI starts milking buffaloes, we are all finished.' },
    { q: 'What do I receive?', a: 'A meme and an extremely questionable certificate.' }
  ];

  readonly memeLibrary = Array.from({ length: 50 }, (_, index) => ({
    id: `BHEEK-${index + 1}`,
    title: ['Professional Panic', 'Cow-spiracy', 'Future of Work', 'Career Exit', 'Not a Business Model'][index % 5],
    category: ['Workplace', 'Dairy', 'Existential', 'Tech', 'Chaos'][index % 5],
    caption: [
      'Me after 5 years of code: “I have a unique skillset.”',
      'AI wrote my portfolio and my confidence disappeared.',
      'The business plan: buy a cow, reduce risk, increase nonsense.',
      'My resume says “full stack”. My crisis says “please fund a buffalo.”',
      'This is not a startup. This is a reaction to market conditions.'
    ][index % 5],
    accent: ['lime', 'purple', 'rose', 'cyan', 'amber'][index % 5]
  }));

  readonly designations = [
    'Certified Internet Investor (Not Really)',
    'Minister of Unnecessary Financial Support',
    'Distinguished Patron of Questionable Decisions',
    'Founding Member of Project ₹51',
    'Professional Enabler',
    'Director of Financial Bad Decisions',
    'Certified Career Crisis Supporter'
  ];

  selectedAmount = 51;
  customAmount = '';
  paymentState = 'ready';
  paymentMessage = 'No live payment credentials configured yet. This is the complete frontend flow placeholder ready for Razorpay or a similar Indian payment gateway.';
  rewardUnlocked = false;
  rewardMeme: { id: string; title: string; caption: string; category: string; accent: string } | null = null;
  certificate: { name: string; contributorId: string; amount: number; designation: string; date: string; number: string } | null = null;
  unlockCounter = 0;

  selectAmount(amount: number): void {
    this.selectedAmount = amount;
    this.customAmount = '';
  }

  get effectiveAmount(): number {
    const raw = Number(this.customAmount || this.selectedAmount);
    return Number.isFinite(raw) && raw > 0 ? raw : this.selectedAmount;
  }

  handleContribution(): void {
    if (this.effectiveAmount < 51) {
      this.paymentMessage = 'The minimum contribution is ₹51. This is not a charity. It is a 100% voluntary, absurdly serious request.';
      this.paymentState = 'error';
      return;
    }

    this.paymentState = 'checkout';
    this.paymentMessage = 'Frontend payment flow ready. Connect Razorpay to your backend to create orders, verify signatures, and unlock rewards only after a successful verified payment.';
  }

  previewRewardFlow(): void {
    this.rewardUnlocked = true;
    this.unlockCounter += 1;
    this.rewardMeme = this.randomMeme();
    this.certificate = this.generateCertificate();
    this.paymentState = 'success';
    this.paymentMessage = 'Development preview only: no real payment was processed. This is how the verified-reward experience appears after backend confirmation.';
  }

  scrollToFund(): void {
    this.scrollToSection('fund');
  }

  scrollToSection(sectionId: string): void {
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private randomMeme() {
    const meme = this.memeLibrary[Math.floor(Math.random() * this.memeLibrary.length)];
    return { ...meme };
  }

  private generateCertificate() {
    const name = 'Anonymous Internet Samaritan';
    const contributorId = `BHEEK-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const date = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    const designation = this.designations[Math.floor(Math.random() * this.designations.length)];
    const number = `BHEEK-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;

    return {
      name,
      contributorId,
      amount: this.effectiveAmount,
      designation,
      date,
      number
    };
  }

  shareCampaign(): void {
    const text = 'I just funded a developer’s escape from AI for ₹51. Your turn.';
    if (navigator.share) {
      navigator.share({ title: 'BHEEK™', text, url: 'https://bheek.example' }).catch(() => undefined);
      return;
    }

    const shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' https://bheek.example')}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  }

  copyCampaignLink(): void {
    navigator.clipboard?.writeText('https://bheek.example').catch(() => undefined);
  }

  downloadCertificate(): void {
    const certificateText = [
      'OFFICIAL BHEEK™ CONTRIBUTOR',
      `Contributor Name: ${this.certificate?.name ?? 'Anonymous Internet Samaritan'}`,
      `Contributor ID: ${this.certificate?.contributorId ?? 'BHEEK-XXXX'}`,
      `Contribution: ₹${this.certificate?.amount ?? this.effectiveAmount}`,
      `Designation: ${this.certificate?.designation ?? 'Professional Enabler'}`,
      `Date: ${this.certificate?.date ?? 'Today'}`
    ].join('\n');

    const blob = new Blob([certificateText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'bheek-contributor-certificate.txt';
    link.click();
    URL.revokeObjectURL(url);
  }

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const heroTimeline = gsap.timeline();
    heroTimeline
      .from('.hero-badge', { opacity: 0, y: 20, duration: 0.8 })
      .from('.hero-title', { opacity: 0, y: 40, duration: 0.9 }, '-=0.4')
      .from('.hero-copy', { opacity: 0, y: 24, duration: 0.8 }, '-=0.5')
      .from('.hero-cta', { opacity: 0, y: 20, duration: 0.7 }, '-=0.3');

    gsap.from('.floating-sticker', {
      y: 24,
      rotation: -4,
      duration: 2.4,
      ease: 'sine.inOut',
      stagger: 0.2,
      repeat: -1,
      yoyo: true
    });

    gsap.from('.money-badge', {
      scale: 0.92,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });

    gsap.utils.toArray<HTMLElement>('.reveal-card').forEach((element) => {
      gsap.fromTo(element, { opacity: 0, y: 36 }, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 82%'
        }
      });
    });
  }
}
