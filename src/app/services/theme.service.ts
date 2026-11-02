import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Signal to track current theme
  darkMode = signal<boolean>(false);

  constructor() {
    // Check localStorage or system preference on init
    this.loadTheme();

    // Effect to apply theme changes to DOM
    effect(() => {
      if (this.darkMode()) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode.set(savedTheme === 'dark');
    } else {
      // Default to light theme
      this.darkMode.set(false);
    }
  }

  toggleTheme(): void {
    this.darkMode.update(value => !value);
  }
}
