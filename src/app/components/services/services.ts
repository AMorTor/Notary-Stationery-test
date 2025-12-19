import { Component, signal, ChangeDetectionStrategy, ElementRef, ViewChildren, QueryList, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ScrollRevealDirective],
  template: `
  <section class="py-24 relative overflow-hidden -mt-24 z-20" appScrollReveal>

      <!-- Continuous Background Extension -->
      <div class="absolute top-[59px] left-0 w-full h-full  -z-10 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-10 px-6">
        <div class="mb-16 text-center max-w-4xl mx-auto">
          <p class="text-gold-400 uppercase tracking-widest text-sm mb-4 font-bold">Nuestra Promesa</p>
          <h2 class="text-2xl md:text-4xl font-light text-white leading-relaxed">
            Hacemos que cada documento y cada tarjeta juegue a favor de su <span class="text-gold-400 font-bold border-b border-gold-500/50 pb-1">reputación y posicionamiento.</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (service of services(); track service.title; let i = $index) {
            <div 
              #serviceCard 
              [attr.data-index]="i"
              appScrollReveal 
              class="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-gold-500/50 transition-all duration-700 flex flex-col h-full hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]"
            >
              <!-- 1. Image Section (Restored) -->
              <div class="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-neutral-900 relative">
                 <img 
                   [src]="service.image"
                   [alt]="service.title"
                   loading="lazy"
                   decoding="async"
                   class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                 />
              </div>

              <!-- 2. Content Section (Restored) -->
              <div 
                class="p-8 flex flex-col grow relative transition-all duration-700 transform group-hover:opacity-100 group-hover:translate-y-0 group-hover:blur-none"
                [class.opacity-0]="activeCards().has(i)"
                [class.translate-y-4]="activeCards().has(i)" 
                [class.blur-sm]="activeCards().has(i)"
              >
                <!-- Top Icon -->
                <div class="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fbbf24" class="size-12 transform group-hover:rotate-45 transition-transform duration-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>

                <div class="mt-auto h-full flex flex-col justify-between">
                   <div>
                       <h3 class="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">{{ service.title }}</h3>
                       <p class="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">{{ service.description }}</p>
                   </div>

                   <button [routerLink]="service.route" class="w-full py-4 px-8 rounded-full bg-neutral-900/80 text-gold-100 border border-gold-500/30 font-medium hover:bg-gold-500 hover:text-black transition-all duration-300 flex items-center justify-between group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] cursor-pointer">
                     <span class="uppercase tracking-widest text-sm">Explorar</span>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                     </svg>
                   </button>
                </div>
              </div>

              <!-- 3. Interaction Overlay (Covers Whole Card) -->
               <div 
                 class="absolute inset-0 z-20 bg-black/60 backdrop-blur-md transition-opacity duration-500 pointer-events-none group-hover:opacity-0"
                 [class.opacity-0]="!activeCards().has(i)"
                 [class.opacity-100]="activeCards().has(i)"
               ></div>

               <a 
                 [routerLink]="service.route"
                 class="absolute inset-0 z-30 flex flex-col items-center justify-center px-8 text-center transition-all duration-500 cursor-pointer group-hover:opacity-0 group-hover:pointer-events-none"
                 [class.opacity-0]="!activeCards().has(i)"
                 [class.opacity-100]="activeCards().has(i)"
                 [class.scale-95]="!activeCards().has(i)"
                 [class.scale-100]="activeCards().has(i)"
               >
                  <h3 class="text-xl md:text-2xl font-medium text-white leading-relaxed tracking-wide">
                    {{ service.question }}
                  </h3>
                  <div class="w-12 h-px bg-gold-400 mt-6"></div>
               </a>
            </div>
          }
        </div>
      </div>
  </section>
  `
})
export class ServicesComponent {
  services = signal([
    {
      title: 'Productos',
      description: 'Descubra nuestra colección de carpetas, papelería y artículos promocionales diseñados con los más altos estándares de elegancia.',
      image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=1000&auto=format&fit=crop',
      route: '/productos',
      question: '¿Su imagen corporativa refleja la excelencia de su firma?'
    },
    {
      title: 'Servicios',
      description: 'Soluciones digitales avanzadas, gestión de identidad y servicios corporativos personalizados para su notaría.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
      route: '/servicios',
      question: '¿Está su notaría lista para la verdadera transformación digital?'
    }
  ]);

  @ViewChildren('serviceCard') serviceCards!: QueryList<ElementRef>;
  activeCards = signal<Set<number>>(new Set());
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
    this.setupObserver();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private setupObserver() {
    const options = {
      root: null,
      rootMargin: '0px 0px -80% 0px', // Active only in the top 25% (truly leaving)
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = Number(entry.target.getAttribute('data-index'));

        if (entry.isIntersecting) {
          this.activeCards.update(set => {
            const newSet = new Set(set);
            newSet.add(index);
            return newSet;
          });
        } else {
          this.activeCards.update(set => {
            const newSet = new Set(set);
            newSet.delete(index);
            return newSet;
          });
        }
      });
    }, options);

    this.serviceCards.changes.subscribe(() => {
      this.serviceCards.forEach(card => this.observer?.observe(card.nativeElement));
    });

    // Initial observe
    this.serviceCards.forEach(card => this.observer?.observe(card.nativeElement));
  }
}
