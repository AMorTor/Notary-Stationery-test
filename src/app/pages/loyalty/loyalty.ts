import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loyalty',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen font-poppins text-white pb-32">
      
      <!-- HERO SECTION -->
      <section class="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <!-- Background Glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div class="relative z-10 max-w-4xl mx-auto">
          <span class="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm mb-6 block animate-breathe">A&G Coins</span>
          <h1 class="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
            Exclusividad que <span class="font-bold text-test-500">Recompensa</span>
          </h1>
          <p class="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Cada pedido es un paso hacia beneficios extraordinarios. Descubra cómo su lealtad se convierte en privilegios tangibles para su notaría.
          </p>
        </div>
      </section>

      <!-- HOW IT WORKS (STEPS) -->
      <section class="py-20 px-6 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <!-- Connector Line (Desktop) -->
          <div class="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-gold-500/30 to-transparent z-0"></div>

          <!-- Step 1 -->
          <div class="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative z-10 hover:bg-white/5 transition-colors group text-center md:text-left">
            <div class="w-16 h-16 bg-neutral-900 rounded-2xl border border-gold-500/20 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:border-gold-500/50 transition-colors shadow-[0_0_30px_rgba(234,179,8,0.1)]">
              <span class="text-3xl font-bold text-gold-400">1</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Realice un Pedido</h3>
            <p class="text-neutral-400 text-sm leading-relaxed">
              Gestione sus servicios habituales: folios, carpetas o identidad digital. Todo cuenta.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative z-10 hover:bg-white/5 transition-colors group text-center md:text-left">
             <div class="w-16 h-16 bg-neutral-900 rounded-2xl border border-gold-500/20 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:border-gold-500/50 transition-colors shadow-[0_0_30px_rgba(234,179,8,0.1)]">
              <span class="text-3xl font-bold text-gold-400">2</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Acumule Coins</h3>
            <p class="text-neutral-400 text-sm leading-relaxed">
              Reciba A&G Coins automáticamente en su cuenta digital por cada monto invertido.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative z-10 hover:bg-white/5 transition-colors group text-center md:text-left">
             <div class="w-16 h-16 bg-neutral-900 rounded-2xl border border-gold-500/20 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:border-gold-500/50 transition-colors shadow-[0_0_30px_rgba(234,179,8,0.1)]">
              <span class="text-3xl font-bold text-gold-400">3</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Canjee Privilegios</h3>
            <p class="text-neutral-400 text-sm leading-relaxed">
              Utilice sus monedas para obtener descuentos directos o productos de edición limitada.
            </p>
          </div>
        </div>
      </section>

      <!-- REWARDS CATALOG -->
      <section class="py-20 px-6 max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-light text-center mb-16">
          Catálogo de <span class="font-bold text-gold-400">Recompensas</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Reward 1 -->
          <div class="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-gold-500/50 transition-all duration-500">
             <div class="h-48 bg-neutral-900 relative overflow-hidden flex items-center justify-center">
                <!-- Icon Placeholder -->
                <svg class="w-16 h-16 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div class="absolute top-4 right-4 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                   500 Coins
                </div>
             </div>
             <div class="p-6">
               <h4 class="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">5% de Descuento</h4>
               <p class="text-neutral-400 text-sm">Aplicable en su siguiente pedido de papelería corporativa.</p>
             </div>
          </div>

          <!-- Reward 2 -->
          <div class="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-gold-500/50 transition-all duration-500">
             <div class="h-48 bg-neutral-900 relative overflow-hidden flex items-center justify-center">
                <svg class="w-16 h-16 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <div class="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div class="absolute top-4 right-4 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                   1200 Coins
                </div>
             </div>
             <div class="p-6">
               <h4 class="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">100 Tarjetas Gratis</h4>
               <p class="text-neutral-400 text-sm">Impresión offset premium con acabado mate/brillo.</p>
             </div>
          </div>

          <!-- Reward 3 -->
          <div class="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-gold-500/50 transition-all duration-500">
             <div class="h-48 bg-neutral-900 relative overflow-hidden flex items-center justify-center">
                <svg class="w-16 h-16 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <div class="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div class="absolute top-4 right-4 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                   2500 Coins
                </div>
             </div>
             <div class="p-6">
               <h4 class="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">Emboss Personalizado</h4>
               <p class="text-neutral-400 text-sm">Grabado de iniciales en oro para cualquier artículo de piel.</p>
             </div>
          </div>

        </div>
      </section>

      <!-- CTA -->
      <section class="py-20 text-center">
         <p class="text-neutral-400 mb-8 max-w-lg mx-auto">
           ¿Listo para empezar a ganar? Realice su primer pedido hoy mismo.
         </p>
         <a href="/contacto" class="inline-flex items-center gap-3 bg-gold-500 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
           Contactar Asesor
         </a>
      </section>

    </div>
  `
})
export class LoyaltyPageComponent { }
