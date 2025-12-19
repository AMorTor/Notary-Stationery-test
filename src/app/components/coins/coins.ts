import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-coins',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  template: `
    <section class="relative py-24 px-6 overflow-hidden" appScrollReveal>
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="bg-linear-to-br from-neutral-900/90 to-black/90 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 overflow-hidden shadow-2xl relative group hover:border-gold-500/30 transition-colors duration-500">
          
          <!-- Glossy Overlay -->
          <div class="absolute inset-0 bg-linear-to-tr from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <!-- Text Content (Left on Desktop, Bottom on Mobile) -->
          <div class="flex-1  md:text-left space-y-6 relative z-10">
            <div>
              <span class="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm mb-2 block">Programa de Lealtad</span>
              <h2 class="text-white mb-2">
                <span class="block font-light text-2xl md:text-3xl text-white">Descubre los A&G</span>
                <span class="block font-bold text-5xl md:text-7xl text-gold-400 mt-2">Coins</span>
              </h2>
            </div>
            
            <p class="text-neutral-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Un sistema de recompensas único diseñado para su notaría. Acumule monedas con cada pedido y acceda a beneficios exclusivos, descuentos premium y artículos de colección.
            </p>

            <div class="flex flex-col md:flex-row gap-4 items-end md:items-center justify-end md:justify-start pt-4">
              <!-- Benefit Badges -->
              <div class="flex items-center gap-3 text-white/80 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <svg class="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                <span class="text-sm">Sin caducidad</span>
              </div>
              <div class="flex items-center gap-3 text-white/80 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <svg class="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                <span class="text-sm">Canje Flexible</span>
              </div>
            </div>

            <!-- "Saber Más" Button -->
            <div class="pt-6">
               <a routerLink="/lealtad" class="inline-flex items-center gap-2 text-gold-400 hover:text-white font-bold uppercase tracking-widest text-sm transition-colors border-b border-gold-400/30 hover:border-gold-400 pb-1 cursor-pointer">
                 Saber más
                 <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </a>
            </div>
          </div>

          <!-- Image/Illustration (Right on Desktop, Top on Mobile) -->
          <div class="flex-1 w-full flex justify-center items-center relative order-first md:order-last">
            <!-- Glow Effect behind coin -->
            <div class="absolute w-64 h-64 bg-gold-500/20 blur-[80px] rounded-full animate-pulse"></div>
            
            <img 
              src="coins_illustration.png" 
              alt="A&G Gold Coin" 
              class="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 hover:rotate-3 relative z-10"
              loading="lazy"
              decoding="async"
            >
          </div>
          
        </div>
      </div>
    </section>
  `
})
export class CoinsComponent { }
