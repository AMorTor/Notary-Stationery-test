import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES_CATALOG } from '../../data/services.data';

@Component({
    selector: 'app-services-page',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="min-h-screen font-poppins text-white pb-32">
      
      <!-- HEADER -->
      <section class="relative pt-40 pb-20 px-6 text-center">
        <h1 class="text-4xl md:text-7xl font-light text-white mb-6 tracking-tight">
          Soluciones <span class="text-gold-400 font-blacksword">Digitales & Físicas</span>
        </h1>
        <p class="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
          Innovación tecnológica y artesanía tradicional para potenciar su notaría.
        </p>
      </section>

      <!-- GRID SECTION -->
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services; track service.id) {
            <div class="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/30 flex flex-col h-full shadow-lg hover:shadow-gold-500/10">
               
               <!-- Hover Glow Background -->
               <div class="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gold-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

               <!-- Image Header -->
               <div class="relative h-64 overflow-hidden bg-neutral-900">
                  <img [src]="service.image" [alt]="service.title" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
                  <div class="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
                  
                  <!-- Title Overlay -->
                  <div class="absolute bottom-0 left-0 p-8 w-full z-10">
                     <h3 class="text-2xl font-bold text-white mb-1 group-hover:text-gold-200 transition-colors">{{ service.title }}</h3>
                     <p class="text-gold-400 text-sm tracking-widest uppercase font-semibold">{{ service.shortDescription }}</p>
                  </div>
               </div>

               <!-- Content Body -->
               <div class="p-8 flex flex-col grow relative z-10">
                  <p class="text-neutral-300 leading-relaxed mb-8 grow">
                    {{ service.fullDescription }}
                  </p>

                  <!-- CTA Button -->
                  <a 
                    [href]="getWhatsAppLink(service.title)" 
                    target="_blank" 
                    class="mt-auto w-full py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all flex items-center justify-center gap-3 group/btn shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                  >
                     <span>Más Información</span>
                     <svg class="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                  </a>
               </div>
            </div>
          }
        </div>
      </div>

    </div>
  `
})
export class ServicesPageComponent {
    services = SERVICES_CATALOG;

    getWhatsAppLink(serviceName: string): string {
        const phone = '5215500000000'; // Placeholder
        const message = `Hola, me gustaría recibir más información sobre sus servicios de: ${serviceName}`;
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    }
}
