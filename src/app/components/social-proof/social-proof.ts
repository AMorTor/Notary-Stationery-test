import { Component, signal, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-social-proof',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="py-24 relative overflow-hidden" appScrollReveal>
      
      <!-- Header -->
      <div class="max-w-7xl mx-auto px-6 mb-2 text-center relative z-10">
        <div class="flex flex-col items-center justify-center max-w-7xl mx-auto py-12">
            <h2 class="text-5xl sm:text-7xl md:text-[9rem] text-gold-400 mb-2 font-blacksword tracking-wide -ml-12 md:-ml-48 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)] z-10 transition-transform duration-500 hover:scale-105 hover:z-20">
              Radicalmente
            </h2>
            <h2 class="text-5xl sm:text-7xl md:text-[9rem] text-gold-400 mb-8 font-blacksword tracking-wide ml-12 md:ml-48 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)] z-10 transition-transform duration-500 hover:scale-105 hover:z-20">
              sorprendentes
            </h2>
            
            <p class="text-slate-300 font-light text-sm md:text-xl tracking-[0.4em] uppercase opacity-90 border-t border-b border-white/10 py-4 px-8 backdrop-blur-sm md:mt-12">
               No hacemos solo papelería, convertimos tus compras en inversiones
            </p>
        </div>
      </div> 

      <!-- Large Visual Image -->
       <div class="w-full mt-4 md:mt-8 px-2 md:px-12">
         <div class="relative w-full h-auto aspect-square md:h-screen md:aspect-auto rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl md:shadow-none border border-white/10 md:border-none will-change-transform">
            <video 
              #videoPlayer
              src="./records/proceso-artesanal.mp4" 
              autoplay
              muted
              loop
              playsinline
              class="w-full h-full object-cover"
            ></video>

            <!-- Video Overlay -->
            <div class="absolute inset-0 bg-black/40 md:bg-black/30 flex flex-col items-center justify-center text-center p-8 backdrop-blur-[2px]">
                <div class="relative z-10 space-y-2">
                    <p class="text-gold-400 font-serif italic text-2xl md:text-4xl tracking-wider">Talabartería</p>
                    <h2 class="text-white font-black text-5xl md:text-8xl tracking-[0.2em] uppercase leading-none drop-shadow-2xl">
                        ARTESANAL
                    </h2>
                    <div class="w-24 h-px bg-gold-500/50 mx-auto my-6"></div>
                    <p class="text-slate-200 font-light text-sm md:text-xl tracking-[0.3em] uppercase opacity-90">
                        Hecho a mano por artesanos mexicanos
                    </p>
                </div>
            </div>
         </div>
       </div> 

       <!-- Infinite Logo Wall -->
       <div class="space-y-12 marquee-container mt-24 py-12 md:py-20 relative overflow-hidden">
         <!-- Gradient Fade Masks -->
         <div class="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-slate-950 to-transparent z-10"></div>
         <div class="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-slate-950 to-transparent z-10"></div>

         <!-- Row 1: Left (Seamless Loop) -->
         <div class="flex select-none gap-0 w-max">
             <!-- Track 1 -->
             <div class="flex gap-16 md:gap-32 w-max animate-scroll-left hover:[animation-play-state:paused] items-center shrink-0 pr-16 md:pr-32 will-change-transform translate-z-0">
               @for (i of [1, 2, 3, 4]; track i) {
                 <div class="flex gap-16 md:gap-32 items-center">
                   @for (logo of logos(); track logo) {
                     <img [src]="logo" alt="Partner Logo" loading="lazy" decoding="async" class="h-24 md:h-40 2xl:h-64 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300">
                   }
                 </div>
               }
             </div>
             <!-- Track 2 (Duplicate) -->
             <div class="flex gap-16 md:gap-32 w-max animate-scroll-left hover:[animation-play-state:paused] items-center shrink-0 pr-16 md:pr-32 will-change-transform translate-z-0" aria-hidden="true">
               @for (i of [1, 2, 3, 4]; track i) {
                 <div class="flex gap-16 md:gap-32 items-center">
                   @for (logo of logos(); track logo) {
                     <img [src]="logo" alt="Partner Logo" loading="lazy" decoding="async" class="h-24 md:h-40 2xl:h-64 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300">
                   }
                 </div>
               }
             </div>
         </div>

         <!-- Row 2: Right (Seamless Loop) -->
         <div class="flex select-none gap-0 w-max">
             <!-- Track 1 -->
             <div class="flex gap-16 md:gap-32 w-max animate-scroll-right hover:[animation-play-state:paused] items-center shrink-0 pr-16 md:pr-32 will-change-transform translate-z-0">
               @for (i of [1, 2, 3, 4]; track i) {
                 <div class="flex gap-16 md:gap-32 items-center">
                   @for (logo of logos(); track logo) {
                     <img [src]="logo" alt="Partner Logo" loading="lazy" decoding="async" class="h-24 md:h-40 2xl:h-64 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300">
                   }
                 </div>
               }
             </div>
             <!-- Track 2 (Duplicate) -->
             <div class="flex gap-16 md:gap-32 w-max animate-scroll-right hover:[animation-play-state:paused] items-center shrink-0 pr-16 md:pr-32 will-change-transform translate-z-0" aria-hidden="true">
               @for (i of [1, 2, 3, 4]; track i) {
                 <div class="flex gap-16 md:gap-32 items-center">
                   @for (logo of logos(); track logo) {
                     <img [src]="logo" alt="Partner Logo" loading="lazy" decoding="async" class="h-24 md:h-40 2xl:h-64 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300">
                   }
                 </div>
               }
             </div>
         </div>
       </div>
    </section>
  `
})
export class SocialProofComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  logos = signal([
    './notaria_logo_1_1765317842475.png',
    './legal_firm_logo_1765317857692.png',
    './corporate_logo_1765317870921.png',
    './notaria_logo_2_1765317885857.png'
  ]);

  ngAfterViewInit() {
    if (this.videoPlayer) {
      const video = this.videoPlayer.nativeElement;
      video.muted = true; // Ensure muted property is set
      video.play().catch(err => {
        console.warn('Autoplay prevented:', err);
        // Interaction might be required
      });
    }
  }
}
