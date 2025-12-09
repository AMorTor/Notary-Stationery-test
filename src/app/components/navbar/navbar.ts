import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="fixed top-4 left-0 right-0 z-50 mx-4">
      <div class="mx-auto max-w-7xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex items-center justify-between shadow-2xl relative z-50">
        
        <!-- Logo (Left) -->
        <a routerLink="/" (click)="scrollToTop()" class="cursor-pointer relative z-10">
          <img src="ayg-logo.png" alt="A&G Logo" class="h-9 w-auto object-contain hover:opacity-80 transition-opacity">
        </a>

        <!-- Rotating Phrases (Centered) -->
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block w-full text-center pointer-events-none">
           <p 
             class="text-white/60 text-sm font-light tracking-widest uppercase transition-all transform"
             [class.duration-1000]="animationState() !== 'reset'"
             [class.duration-0]="animationState() === 'reset'"
             [class.opacity-0]="animationState() !== 'visible'"
             [class.opacity-100]="animationState() === 'visible'"
             [class.blur-sm]="animationState() !== 'visible'"
             [class.blur-none]="animationState() === 'visible'"
             [class.-translate-y-2]="animationState() === 'exiting'"
             [class.translate-y-2]="animationState() === 'reset'"
             [class.translate-y-0]="animationState() === 'visible'"
           >
             {{ currentPhrase() }}
           </p>
        </div>

        <!-- Menu Button (Right) -->
        <button (click)="toggleMenu()" class="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer z-50 relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>

      <!-- Full Screen Overlay Menu -->
      <div 
        class="fixed inset-0 bg-slate-950/98 backdrop-blur-3xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out"
        [class.opacity-0]="!isOpen()"
        [class.pointer-events-none]="!isOpen()"
        [class.opacity-100]="isOpen()"
        [class.pointer-events-auto]="isOpen()"
      >
        <!-- Close Button -->
        <button (click)="closeMenu()" class="absolute top-8 left-8 text-white/50 hover:text-white transition-colors p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>

        <!-- Menu Links -->
        <div class="flex flex-col items-center gap-12 text-center">
            @for (item of menuItems; track item.label) {
                <a 
                    [routerLink]="item.path" 
                    (click)="handleNavigation()" 
                    class="text-3xl md:text-5xl font-light text-white hover:text-blue-400 transition-colors tracking-widest uppercase hover:scale-105 transform duration-300 cursor-pointer"
                >
                    {{ item.label }}
                </a>
            }
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent implements OnInit, OnDestroy {
  isOpen = signal(false);

  // Rotating Phrases Logic
  phrases = signal([
    "Elegancia y seguridad en cada documento",
    "Soluciones premium para notarias",
    "Papelería notarial de alta calidad"
  ]);
  currentIndex = signal(0);
  currentPhrase = signal(this.phrases()[0]);

  // Animation State: 'visible' | 'exiting' (up) | 'reset' (down instant)
  animationState = signal<'visible' | 'exiting' | 'reset'>('visible');

  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.cyclePhrase();
    }, 4500); // 3.5s visible + 1s transition logic
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  cyclePhrase() {
    // 1. Exit Upwards
    this.animationState.set('exiting'); // -translate-y-2, opacity-0

    // 2. Reset Handling (After 1s transition)
    setTimeout(() => {
      // Snap to bottom instantly
      this.animationState.set('reset'); // translate-y-2, opacity-0, duration-0

      // Update Text now that it's invisible and reset
      this.currentIndex.update(index => (index + 1) % this.phrases().length);
      this.currentPhrase.set(this.phrases()[this.currentIndex()]);

      // 3. Enter Upwards (Next Tick)
      setTimeout(() => {
        this.animationState.set('visible'); // translate-y-0, opacity-100, duration-1000
      }, 50);

    }, 1000);
  }

  menuItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/productos' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Contacto', path: '/contacto' },
    { label: 'Sobre Nosotros', path: '/nosotros' }
  ];

  toggleMenu() {
    this.isOpen.update(val => !val);
  }

  closeMenu() {
    this.isOpen.set(false);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.closeMenu();
  }

  handleNavigation() {
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
