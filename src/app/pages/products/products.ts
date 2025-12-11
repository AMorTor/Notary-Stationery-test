import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCT_CATALOG } from '../../data/products.data';
import { CONTACT_INFO } from '../../data/contact.data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen font-poppins text-white pb-32">
      
      <!-- HEADER MINIMALISTA -->
      <section class="relative pt-40 pb-20 px-6 text-center">
        <h1 class="text-4xl md:text-7xl font-light text-white mb-6 tracking-tight">
          Catálogo <span class="text-gold-400 font-blacksword">Esencial</span>
        </h1>
        <p class="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
          Colecciones diseñadas para elevar la identidad de su firma.
        </p>
      </section>

      <!-- STICKY NAVIGATION (Tabs) -->
      <div class="sticky top-28 z-40 bg-black/80 backdrop-blur-md border-y border-white/5 py-4 mb-20 overflow-x-auto">
        <div class="flex justify-center min-w-max px-6 gap-8 md:gap-12">
           @for (cat of catalog; track cat.id) {
             <button 
               (click)="scrollTo(cat.id)"
               [class.text-gold-400]="activeCategory() === cat.id"
               [class.text-neutral-500]="activeCategory() !== cat.id"
               class="text-sm md:text-base tracking-[0.2em] uppercase transition-colors hover:text-white relative group"
             >
               {{ cat.title }}
               <span class="absolute -bottom-5 left-0 w-full h-[2px] bg-gold-500 transform scale-x-0 transition-transform duration-300" [class.scale-x-100]="activeCategory() === cat.id"></span>
             </button>
           }
        </div>
      </div>

      <!-- SECTIONS -->
      <div class="max-w-7xl mx-auto px-6 space-y-32">
        @for (cat of catalog; track cat.id) {
          <section [id]="cat.id" class="scroll-mt-48 transition-opacity duration-700">
            
            <!-- Category Header -->
            <div class="mb-12 border-l-2 border-gold-500 pl-6">
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">{{ cat.title }}</h2>
              <p class="text-neutral-400 text-sm md:text-base tracking-wide uppercase">{{ cat.subtitle }}</p>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              @for (item of cat.items; track item.id) {
                <div class="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/30 flex flex-col h-full">
                   <!-- Hover Glow -->
                   <div class="absolute inset-0 bg-linear-to-tr from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
                   
                   <!-- Image Section -->
                   <div class="relative h-48 w-full overflow-hidden bg-neutral-900">
                      @if (item.image) {
                        <img [src]="item.image" [alt]="item.name" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                      } @else {
                        <div class="w-full h-full flex items-center justify-center text-neutral-700">
                          <svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      }
                      
                      <!-- Overlay Gradient for Text Readability -->
                      <div class="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/80 to-transparent"></div>
                   </div>

                   <!-- Content Section -->
                   <div class="p-6 relative z-10 flex flex-col grow">
                      <div class="flex items-center justify-between mb-3">
                        <h3 class="text-xl font-bold text-white group-hover:text-gold-200 transition-colors">{{ item.name }}</h3>
                        <!-- Icon (Small) -->
                        <div class="opacity-50 group-hover:opacity-100 group-hover:text-gold-400 transition-all">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                      </div>

                      @if (item.subtypes) {
                        <ul class="space-y-1 mb-6 grow">
                          @for (sub of item.subtypes; track sub) {
                            <li class="text-xs text-neutral-400 flex items-center gap-2">
                              <span class="w-1 h-1 rounded-full bg-gold-500"></span> {{ sub }}
                            </li>
                          }
                        </ul>
                      }

                      <!-- ACTION BUTTON -->
                      <a 
                        [href]="getWhatsAppLink(item.name)" 
                        target="_blank" 
                        class="mt-auto w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium tracking-wide hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all flex items-center justify-center gap-2 group/btn"
                      >
                         <span>Cotizar</span>
                         <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                         </svg>
                      </a>
                   </div>
                </div>
              }
            </div>

          </section>
        }
      </div>

    </div>
  `
})
export class ProductsComponent {
  catalog = PRODUCT_CATALOG;
  activeCategory = signal<string>(PRODUCT_CATALOG[0].id);

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeCategory.set(id);
    }
  }

  getWhatsAppLink(productName: string): string {
    const message = `Hola, me interesa cotizar: ${productName}`;
    return CONTACT_INFO.whatsapp.getLink(message);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Simple ScrollSpy Logic
    for (const cat of this.catalog) {
      const element = document.getElementById(cat.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < 300) {
          this.activeCategory.set(cat.id);
          break;
        }
      }
    }
  }
}
