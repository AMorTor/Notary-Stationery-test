import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-social-proof',
  standalone: true,
  template: `
    <section class="py-24 relative overflow-hidden -mt-24 z-20">
      <!-- Curved Glowing Header (Gold) -->
      <div class="absolute top-0 left-0 w-full h-[400px] leading-[0] z-0 pointer-events-none">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <defs>
                  <!-- Gold Glow Gradient -->
                  <linearGradient id="socialProofGoldFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="rgba(245, 158, 11, 0.4)" />
                      <stop offset="50%" stop-color="rgba(245, 158, 11, 0.1)" />
                      <stop offset="100%" stop-color="transparent" />
                  </linearGradient>
                  <!-- Horizon Stroke Gradient -->
                  <linearGradient id="socialProofGoldStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="transparent" />
                      <stop offset="20%" stop-color="rgba(245, 158, 11, 0.6)" />
                      <stop offset="50%" stop-color="rgba(245, 158, 11, 1)" />
                      <stop offset="80%" stop-color="rgba(245, 158, 11, 0.6)" />
                      <stop offset="100%" stop-color="transparent" />
                  </linearGradient>
              </defs>
              
              <!-- Filled Glow Area (Convex Hill) -->
              <!-- Solid Base to mask Hero straight line -->
              <path d="M0,60 Q600,0 1200,60 V400 H0 Z" fill="#050505"></path>
              <!-- Gradient Overlay -->
              <path d="M0,60 Q600,0 1200,60 V400 H0 Z" fill="url(#socialProofGoldFill)"></path>

              <!-- The Curve Line Itself -->
              <path d="M0,60 Q600,0 1200,60" fill="none" stroke="url(#socialProofGoldStroke)" stroke-width="2" class="filter drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]"></path>
          </svg>
      </div>

      <!-- Continuous Background Extension (Covers content below SVG) -->
      <div class="absolute top-[59px] left-0 w-full h-full bg-slate-950 -z-10 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
        <h2 class="text-3xl sm:text-3xl pb-2 md:text-6xl text-gold-400 mb-2 font-blacksword tracking-wide">
          Radicalmente sorprendentes
        </h2>
        <p class="text-gray-300 font-poppins text-sm md:text-lg tracking-[0.3em] uppercase opacity-80">
          hacemos más que solo papelería
        </p>
        
        <!-- Metrics Grid (Custom Layouts) -->
        <div class="flex flex-col gap-12 mt-16 max-w-5xl 2xl:max-w-7xl 2xl:gap-24 mx-auto px-4 box-content">
            
            <!-- Card 1: Years of Experience (Left) -->
            <div class="relative w-[90%] md:w-3/4 lg:w-4/5 2xl:w-[90%] rounded-[29px] p-[1px] bg-gradient-to-r from-neutral-800 via-gold-500/50 to-neutral-800 group self-start">
              <div class="bg-neutral-900/90 backdrop-blur-md rounded-[28px] p-6 py-8 md:p-16 md:py-32 2xl:p-24 2xl:py-48 min-h-[180px] md:min-h-[420px] 2xl:min-h-[600px] h-full flex flex-row items-center justify-between gap-3 md:gap-12 relative overflow-hidden group-hover:bg-neutral-900 transition-colors bg-cover">
                 <!-- Glow Effect -->
                 <div class="absolute inset-0 bg-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                 <!-- Number -->
                 <div class="relative z-10 text-5xl sm:text-8xl md:text-9xl 2xl:text-[14rem] font-black text-white shrink-0 tracking-tighter order-1 font-comfortaa w-[40%] text-left -ml-4 md:-ml-8 group-hover:text-gold-100 transition-colors">
                   +12
                 </div>

                 <!-- Label -->
                 <div class="relative z-10 text-neutral-400 font-bold text-sm sm:text-4xl md:text-4xl 2xl:text-6xl uppercase tracking-widest leading-tight text-left order-2 w-[60%] group-hover:text-gold-400 transition-colors">
                   AÑOS DE EXPERIENCIA
                 </div>
              </div>
            </div>

            <!-- Card 2: Coverage (Right) - Text Heavy -->
            <div class="relative w-[90%] md:w-3/4 lg:w-4/5 2xl:w-[90%] rounded-[29px] p-[1px] bg-gradient-to-r from-neutral-800 via-gold-500/50 to-neutral-800 group self-end">
              <div class="bg-neutral-900/90 backdrop-blur-md rounded-[28px] p-6 py-8 md:p-16 md:py-32 2xl:p-24 2xl:py-48 min-h-[180px] md:min-h-[420px] 2xl:min-h-[600px] h-full flex flex-col items-center justify-between gap-3 md:gap-12 relative overflow-hidden group-hover:bg-neutral-900 transition-colors bg-cover">
                 <!-- Glow Effect -->
                 <div class="absolute inset-0 bg-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                 <!-- Number/Main Text (Swapped Order for visual balance) -->
                 <div class="relative z-10 text-2xl sm:text-5xl md:text-6xl 2xl:text-8xl font-black text-white shrink-0 tracking-tighter order-2 font-poppins max-w-lg 2xl:max-w-3xl text-center leading-tight group-hover:text-gold-100 transition-colors">
                   Toda la república mexicana
                 </div>

                 <!-- Label -->
                 <div class="relative z-10 text-gold-500/80 font-medium text-sm sm:text-xl md:text-2xl 2xl:text-4xl uppercase tracking-widest flex-grow leading-tight text-center order-1">
                   Trabajamos con notarias de
                 </div>
              </div>
            </div>

            <!-- Card 3: Notaries Count (Left) -->
            <div class="relative w-[90%] md:w-3/4 lg:w-4/5 2xl:w-[90%] rounded-[29px] p-[1px] bg-gradient-to-r from-neutral-800 via-gold-500/50 to-neutral-800 group self-start">
              <div class="bg-neutral-900/90 backdrop-blur-md rounded-[28px] p-6 py-8 md:p-16 md:py-32 2xl:p-24 2xl:py-48 min-h-[180px] md:min-h-[420px] 2xl:min-h-[600px] h-full flex flex-col items-center justify-between gap-3 md:gap-12 relative overflow-hidden group-hover:bg-neutral-900 transition-colors bg-cover">
                 <!-- Glow Effect -->
                 <div class="absolute inset-0 bg-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                 <!-- Number -->
                 <div class="relative z-10 text-5xl sm:text-7xl md:text-8xl 2xl:text-[10rem] font-black text-white shrink-0 tracking-tighter order-1 font-comfortaa group-hover:text-gold-100 transition-colors">
                   +35 Notarias
                 </div>

                 <!-- Label -->
                 <div class="relative z-10 text-gold-500/80 font-medium text-base sm:text-3xl md:text-2xl 2xl:text-4xl uppercase tracking-widest flex-grow leading-tight text-center order-2">
                   han confiado en nosotros
                 </div>
              </div>
            </div>

        </div>
      </div>

       <!-- Infinite Logo Wall -->
       <div class="space-y-12 marquee-container mt-24 py-12 md:py-20 relative overflow-hidden">
         <!-- Gradient Fade Masks -->
         <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
         <div class="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

         <!-- Row 1: Left (Seamless Loop with Double Container) -->
         <div class="flex select-none gap-0 w-max">
             <!-- Track 1 -->
             <div class="flex gap-16 md:gap-32 w-max animate-scroll-left hover:[animation-play-state:paused] items-center shrink-0 pr-16 md:pr-32">
               @for (i of [1, 2, 3, 4]; track i) {
                 <div class="flex gap-16 md:gap-32 items-center">
                   @for (logo of logos(); track logo) {
                     <img [src]="logo" alt="Partner Logo" class="h-24 md:h-40 2xl:h-64 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300">
                   }
                 </div>
               }
             </div>
             <!-- Track 2 (Duplicate) -->
             <div class="flex gap-16 md:gap-32 w-max animate-scroll-left hover:[animation-play-state:paused] items-center shrink-0 pr-16 md:pr-32" aria-hidden="true">
               @for (i of [1, 2, 3, 4]; track i) {
                 <div class="flex gap-16 md:gap-32 items-center">
                   @for (logo of logos(); track logo) {
                     <img [src]="logo" alt="Partner Logo" class="h-24 md:h-40 2xl:h-64 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300">
                   }
                 </div>
               }
             </div>
         </div>

         <!-- Row 2: Right (Seamless Loop with Double Container) -->
         <div class="flex select-none gap-0 w-max">
             <!-- Track 1 -->
             <div class="flex gap-16 md:gap-32 w-max animate-scroll-right hover:[animation-play-state:paused] items-center shrink-0 pr-16 md:pr-32">
               @for (i of [1, 2, 3, 4]; track i) {
                 <div class="flex gap-16 md:gap-32 items-center">
                    @for (logo of logos(); track logo) {
                     <img [src]="logo" alt="Partner Logo" class="h-24 md:h-40 2xl:h-64 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300">
                   }
                 </div>
               }
             </div>
             <!-- Track 2 (Duplicate) -->
             <div class="flex gap-16 md:gap-32 w-max animate-scroll-right hover:[animation-play-state:paused] items-center shrink-0 pr-16 md:pr-32" aria-hidden="true">
               @for (i of [1, 2, 3, 4]; track i) {
                 <div class="flex gap-16 md:gap-32 items-center">
                    @for (logo of logos(); track logo) {
                     <img [src]="logo" alt="Partner Logo" class="h-24 md:h-40 2xl:h-64 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300">
                   }
                 </div>
               }
             </div>
         </div>
       </div>
    </section>
  `
})
export class SocialProofComponent {
  metrics = signal([
    { value: '+12', label: 'Años de experiencia' },
    { value: 'Toda la republica mexicana', label: 'Trabajamos con notarias' },
    { value: '+35 notarias', label: 'hemos trabajado con' }
  ]);

  logos = signal([
    '/notaria_logo_1_1765317842475.png',
    '/legal_firm_logo_1765317857692.png',
    '/corporate_logo_1765317870921.png',
    '/notaria_logo_2_1765317885857.png'
  ]);
}
