import { Component, signal, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="relative min-h-screen w-full overflow-hidden">
      <!-- Background Carousel -->
      @for (img of images(); track img; let i = $index) {
        <div 
          class="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out will-change-opacity"
          [style.background-image]="'url(' + img + ')'"
          [class.opacity-100]="currentIndex() === i"
          [class.opacity-0]="currentIndex() !== i"
        ></div>
      }

      <!-- Overlay -->
      <div class="absolute inset-0 bg-slate-950/60 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-violet-950/40 to-transparent mix-blend-multiply"></div>

      <!-- Content -->
      <div class="relative z-10 h-screen flex flex-col justify-center items-start px-6 max-w-7xl mx-auto space-y-8">
        
        <!-- Logo -->
        <img src="ayg-logo.png" alt="A&G Logo" class="w-48 md:w-80 h-auto object-contain animate-fade-in-up">

        <!-- Text Group -->
        <div class="space-y-2 animate-fade-in-up delay-100">
          <h2 class="text-2xl md:text-4xl text-white font-light tracking-widest uppercase">
            Somos A&G
          </h2>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight">
            Papelería Notarial <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              & Corporativa
            </span>
          </h1>
        </div>

      </div>
    </section>
  `
})
export class HeroComponent implements OnInit, OnDestroy {
  images = signal([
    'https://images.unsplash.com/photo-1564189218077-da13d6c81f25?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Signing/Pen
    'https://images.unsplash.com/photo-1736323177862-bf485468344f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Stationery Layout
    'https://images.unsplash.com/photo-1678435630712-6eb56e21d8cc?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  // Deep Abstract Paper
  ]);

  currentIndex = signal(0);
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex.update(index => (index + 1) % this.images().length);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
