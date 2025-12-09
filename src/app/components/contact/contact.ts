import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="py-24 relative overflow-hidden px-6">
      <!-- Curved Glowing Header (Blue) -->
      <div class="absolute top-0 left-0 w-full h-[400px] leading-[0] z-0 pointer-events-none">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <defs>
                  <!-- Blue Glow Gradient -->
                  <linearGradient id="blueFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="rgba(59, 130, 246, 0.3)" />
                      <stop offset="50%" stop-color="rgba(59, 130, 246, 0.1)" />
                      <stop offset="100%" stop-color="transparent" />
                  </linearGradient>
                  <!-- Horizon Stroke Gradient -->
                  <linearGradient id="blueStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="transparent" />
                      <stop offset="20%" stop-color="rgba(59, 130, 246, 0.6)" />
                      <stop offset="50%" stop-color="rgba(59, 130, 246, 1)" />
                      <stop offset="80%" stop-color="rgba(59, 130, 246, 0.6)" />
                      <stop offset="100%" stop-color="transparent" />
                  </linearGradient>
              </defs>
              
              <!-- Filled Glow Area (Convex Hill) -->
              <path d="M0,60 Q600,0 1200,60 V400 H0 Z" fill="url(#blueFill)"></path>

              <!-- The Curve Line Itself -->
              <path d="M0,60 Q600,0 1200,60" fill="none" stroke="url(#blueStroke)" stroke-width="2" class="filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"></path>
          </svg>
      </div>

      <!-- Extra Glow effect at bottom right -->
      <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-violet-900/20 blur-[120px] rounded-full"></div>

      <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 relative z-10">
        <!-- Location Map -->
        <div class="w-full md:w-1/2 h-[500px] rounded-[28px] overflow-hidden border border-white/10 relative">
          <div class="absolute inset-0 bg-slate-900 flex items-center justify-center">
            


          
          </div>
          <!-- Overlay gradient for better integration -->
          <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/50 to-transparent"></div>
        </div>

        <!-- Contact Actions -->
        <div class="w-full md:w-1/2 flex flex-col justify-center space-y-8">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Hablemos de <br />
              <span class="text-gold-400">su próximo proyecto</span>
            </h2>
            <p class="text-slate-400 text-lg max-w-md">
              Estamos listos para elevar la imagen de su notaría o corporativo con soluciones de papelería de clase mundial.
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <!-- WhatsApp -->
            <button class="w-full h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar WhatsApp
            </button>

            <!-- Call -->
            <button class="w-full h-16 rounded-full bg-white text-slate-950 font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              Llamar Ahora
            </button>

            <!-- Email -->
            <button class="w-full h-16 rounded-full bg-white/10 text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Enviar Correo
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent { }
