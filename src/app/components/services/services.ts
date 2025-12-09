import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section class="py-24 relative overflow-hidden -mt-24 z-20">
      <!-- Curved Glowing Header (Gold) -->
      <div class="absolute top-0 left-0 w-full h-[400px] leading-[0] z-0 pointer-events-none">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <defs>
                  <!-- Blue Glow Gradient -->
                  <linearGradient id="servicesBlueFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)" />
                      <stop offset="50%" stop-color="rgba(59, 130, 246, 0.1)" />
                      <stop offset="100%" stop-color="transparent" />
                  </linearGradient>
                  <!-- Horizon Stroke Gradient -->
                  <linearGradient id="servicesBlueStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="transparent" />
                      <stop offset="20%" stop-color="rgba(59, 130, 246, 0.6)" />
                      <stop offset="50%" stop-color="rgba(59, 130, 246, 1)" />
                      <stop offset="80%" stop-color="rgba(59, 130, 246, 0.6)" />
                      <stop offset="100%" stop-color="transparent" />
                  </linearGradient>
              </defs>
              
              <!-- Filled Glow Area (Convex Hill) -->
              <path d="M0,60 Q600,0 1200,60 V400 H0 Z" fill="#020617"></path>
              <path d="M0,60 Q600,0 1200,60 V400 H0 Z" fill="url(#servicesBlueFill)"></path>

              <!-- The Curve Line Itself -->
              <path d="M0,60 Q600,0 1200,60" fill="none" stroke="url(#servicesBlueStroke)" stroke-width="2" class="filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"></path>
          </svg>
      </div>

      <!-- Continuous Background Extension (Covers content below SVG) -->
      <div class="absolute top-[59px] left-0 w-full h-full bg-slate-950 -z-10 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-10 px-6">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-16 text-left">
          Soluciones <span class="text-blue-400">Integrales</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (service of services(); track service.title) {
            <div class="group relative bg-white/5 rounded-[28px] overflow-hidden border border-white/10 hover:border-gold-500/50 transition-colors duration-300 flex flex-col h-full">
              <!-- Image -->
              <div class="aspect-[4/3] overflow-hidden bg-slate-900">
                <img 
                  [src]="service.image" 
                  [alt]="service.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              <!-- Content -->
              <div class="p-6 flex flex-col grow">
                <h3 class="text-xl font-bold text-white mb-2">{{ service.title }}</h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-6 grow">{{ service.description }}</p>

                <button class="w-full py-3 px-6 rounded-full bg-violet-950/50 text-violet-200 font-medium hover:bg-gold-500 hover:text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer">
                  Conocer más
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
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
      title: 'Carpetas Notariales',
      description: 'Acabados premium en piel, curpiel y materiales sintéticos de alta resistencia.',
      image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Artículos Promocionales',
      description: 'Bolígrafos, libretas y kits corporativos que elevan la presencia de su marca.',
      image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Tarjetas NFC Premium',
      description: 'Networking sin contacto con tarjetas metálicas y de PVC con chip integrado.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Sistema QR Dinámico',
      description: 'Gestión de identidad digital y accesos para corporativos modernos.',
      image: 'https://images.unsplash.com/photo-1595079676614-79f041a45a8d?q=80&w=1000&auto=format&fit=crop'
    }
  ]);
}
