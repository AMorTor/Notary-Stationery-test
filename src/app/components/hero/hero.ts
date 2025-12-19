import { Component, signal, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ScrollRevealDirective],
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

      <!-- Overlay (Deep Black & Gold Vignette) -->
      <div class="absolute inset-0 bg-black/60 bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

      <!-- Strong Bottom Fade -->
      <div class="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

      <!-- Content -->
      <div class="relative z-10 h-screen flex flex-col justify-center items-start px-6 max-w-7xl mx-auto space-y-8">
        
        <!-- Logo -->
        <img appScrollReveal src="ayg-logo.png" alt="A&G Logo" class="w-48 md:w-80 h-auto object-contain animate-fade-in-up drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">

        <!-- Text Group -->
        <div appScrollReveal class="space-y-2 animate-fade-in-up delay-100">
          <h2 class="text-2xl md:text-4xl text-gold-100 font-light tracking-[0.2em] uppercase ">
            Somos A&G
          </h2>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight">
            Papelería Notarial <br />
            <span class="text-transparent bg-clip-text bg-linear-to-r from-amber-600 via-gold-200 to-gold-400">
              & Corporativa
          </span>
        </h1>
        
        <p class="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed mt-8 font-light">
          <span class="block italic mb-2 text-gold-200">No importa la razón por la que usted esté aquí…</span>
          Si busca impacto, calidad, innovación o simplemente salir de un apuro, llegó al lugar correcto.
        </p>
        </div>

      </div>
    </section>
  `
})
export class HeroComponent implements OnInit, OnDestroy {
  // Configuration
  private readonly imageCount = 25;
  private readonly imagePath = 'photos/ayg-items'; // Base path + prefix

  // Auto-generate array: ['/photos/ayg-items01.jpg', '/photos/ayg-items02.jpg', ..., '/photos/ayg-items25.jpg']
  images = signal(
    Array.from({ length: this.imageCount }, (_, i) => {
      const num = (i + 1).toString().padStart(2, '0');
      return `${this.imagePath}${num}.jpg`;
    })
  );

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
