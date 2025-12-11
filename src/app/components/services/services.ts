import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  template: `
  <section class="py-24 relative overflow-hidden -mt-24 z-20">
    <!-- Curved Glowing Header (Gold) -->
      <div class="absolute top-0 left-0 w-full h-[400px] leading-[0] z-0 pointer-events-none">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
          <!-- Gold Glow Gradient -->
            <linearGradient id="servicesGoldFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(245, 158, 11, 0.15)" />
              <stop offset="50%" stop-color="rgba(245, 158, 11, 0.05)" />
              <stop offset="100%" stop-color="transparent" />
            </linearGradient>
            <!-- Horizon Stroke Gradient -->
            <linearGradient id="servicesGoldStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="transparent" />
              <stop offset="20%" stop-color="rgba(245, 158, 11, 0.4)" />
              <stop offset="50%" stop-color="rgba(245, 158, 11, 0.8)" />
              <stop offset="80%" stop-color="rgba(245, 158, 11, 0.4)" />
              <stop offset="100%" stop-color="transparent" />
            </linearGradient>
          </defs>

          <!-- Filled Glow Area (Convex Hill) -->
          <path d="M0,60 Q600,0 1200,60 V400 H0 Z" fill="#050505"></path>
          <path d="M0,60 Q600,0 1200,60 V400 H0 Z" fill="url(#servicesGoldFill)"></path>

          <!-- The Curve Line Itself -->
          <path d="M0,60 Q600,0 1200,60" fill="none" stroke="url(#servicesGoldStroke)" stroke-width="2" class="filter drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]"></path>
        </svg>
      </div>

      <!-- Continuous Background Extension -->
      <div class="absolute top-[59px] left-0 w-full h-full bg-slate-950 -z-10 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-10 px-6">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-16 text-left">
          Soluciones <span class="text-gold-400">Exclusivas</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (service of services(); track service.title) {
            <div class="group relative bg-white/5 rounded-[28px] overflow-hidden border border-white/10 hover:border-gold-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
              <!-- Image -->
              <div class="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-neutral-900">
                <img 
                  [src]="service.image"
                  [alt]="service.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
              </div>

              <!-- Content -->
              <div class="p-8 flex flex-col grow relative">
                <div class="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fbbf24" class="size-12 transform group-hover:rotate-45 transition-transform duration-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>

                <h3 class="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">{{ service.title }}</h3>
                <p class="text-slate-400 text-base leading-relaxed mb-8 grow max-w-lg">{{ service.description }}</p>

                <div class="mt-auto">
                  <button [routerLink]="service.route" class="w-full py-4 px-8 rounded-full bg-neutral-900/80 text-gold-100 border border-gold-500/30 font-medium hover:bg-gold-500 hover:text-black transition-all duration-300 flex items-center justify-between group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] cursor-pointer">
                    <span class="uppercase tracking-widest text-sm">Explorar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
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
      title: 'Nuestros Productos',
      description: 'Descubra nuestra colección de carpetas, papelería y artículos promocionales diseñados con los más altos estándares de elegancia.',
      image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=1000&auto=format&fit=crop',
      route: '/productos'
    },
    {
      title: 'Nuestros Servicios',
      description: 'Soluciones digitales avanzadas, gestión de identidad y servicios corporativos personalizados para su notaría.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
      route: '/servicios'
    }
  ]);
}
