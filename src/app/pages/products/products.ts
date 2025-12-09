import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-slate-950 min-h-screen font-poppins text-white overflow-x-hidden selection:bg-blue-500/30">
      
      <!-- HERO SECTION -->
      <section class="relative pt-40 pb-32 px-6 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
        <!-- Background Abstract -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 opacity-60"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

        <div class="relative z-20 text-center max-w-4xl mx-auto">
          <span class="text-blue-400 tracking-[0.2em] uppercase text-sm font-semibold mb-4 block animate-breathe drop-shadow-lg">Catálogo Exclusivo</span>
          <h1 class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400 mb-6 tracking-tight drop-shadow-2xl">
            Nuestra Colección
          </h1>
          <p class="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Papelería notarial y corporativa diseñada para transmitir <span class="text-white font-medium">distinción, seguridad y confianza</span> en cada documento.
          </p>
        </div>
      </section>

      <!-- SECTION 1: PAPELERÍA (Stationery) -->
      <section class="relative pt-32 pb-24 md:pt-48 md:pb-32">
        <!-- Divider Top -->
        <div class="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10 pointer-events-none">
            <svg class="w-full h-[100px] md:h-[150px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-slate-950/50"></path>
            </svg>
        </div>

        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-20">
          <!-- Text Content -->
          <div class="order-2 md:order-1 space-y-8">
            <h2 class="text-3xl md:text-5xl font-bold text-white leading-tight">
              Papelería <span class="text-blue-500">Corporativa</span>
            </h2>
            <p class="text-slate-300 text-lg leading-relaxed">
              La base de tu identidad profesional. Materiales seleccionados meticulosamente para garantizar una impresión impecable y duradera.
            </p>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all hover:bg-slate-800/50 group">
                <div class="h-2 w-2 mt-2.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-shadow"></div>
                <div>
                  <strong class="block text-white text-lg mb-1 group-hover:text-blue-100 transition-colors">Hojas Membretadas & Sobres</strong>
                  <span class="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Disponibles en papel Bond, Opalina y algodón con texturas premium.</span>
                </div>
              </li>
              <li class="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all hover:bg-slate-800/50 group">
                <div class="h-2 w-2 mt-2.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-shadow"></div>
                <div>
                  <strong class="block text-white text-lg mb-1 group-hover:text-blue-100 transition-colors">Tarjetas de Presentación</strong>
                  <span class="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Acabados en Hot Stamping, Barniz UV a registro y laminados soft-touch.</span>
                </div>
              </li>
              <li class="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all hover:bg-slate-800/50 group">
                <div class="h-2 w-2 mt-2.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-shadow"></div>
                <div>
                  <strong class="block text-white text-lg mb-1 group-hover:text-blue-100 transition-colors">Papelería de Seguridad</strong>
                  <span class="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Sellos de agua, microtextos y fibras invisibles para documentos legales.</span>
                </div>
              </li>
            </ul>
          </div>

          <!-- Image Placeholder -->
          <div class="order-1 md:order-2 relative group">
             <!-- Glow Effect Behind -->
             <div class="absolute -inset-4 bg-blue-500/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
             
             <div class="relative w-full aspect-[4/5] bg-slate-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm z-10">
                <!-- Placeholder Graphics -->
                <div class="absolute inset-0 flex flex-col items-center justify-center opacity-40">
                    <svg class="w-32 h-32 text-slate-700 mb-6 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Muestra de Papelería</span>
                </div>
                <!-- Interactive Hover Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: CARPETAS (Folders) -->
      <section class="relative py-24 bg-slate-900/30 overflow-hidden">
         <!-- Section Title -->
         <div class="text-center mb-16 px-6 relative z-10">
            <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">Carpetas <span class="italic font-light text-blue-400">Exclusivas</span></h2>
            <p class="text-slate-400 max-w-xl mx-auto leading-relaxed">Presentación y organización en formatos Carta y Oficio, personalizadas para reflejar la solidez de su firma.</p>
         </div>

         <!-- Grid Layout -->
         <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <!-- Item 1 -->
            <div class="group relative bg-slate-950 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/5">
                <div class="h-64 bg-slate-900 relative flex items-center justify-center border-b border-white/5 group-hover:bg-slate-800/50 transition-colors">
                    <svg class="w-20 h-20 text-slate-800 group-hover:text-blue-500/50 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                </div>
                <div class="p-8">
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Carpeta de Argollas</h3>
                    <p class="text-slate-400 text-sm mb-6 leading-relaxed">Ideal para archivo notarial extenso. Mecanismo de 3 argollas de alta resistencia.</p>
                    <div class="flex gap-2 text-xs font-mono text-blue-400 uppercase tracking-wide">
                        <span class="bg-blue-500/10 px-2 py-1 rounded">Curpiel</span>
                        <span class="bg-blue-500/10 px-2 py-1 rounded">Tela</span>
                        <span class="bg-blue-500/10 px-2 py-1 rounded">Impreso</span>
                    </div>
                </div>
            </div>
            <!-- Item 2 -->
            <div class="group relative bg-slate-950 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/5">
                <div class="h-64 bg-slate-900 relative flex items-center justify-center border-b border-white/5 group-hover:bg-slate-800/50 transition-colors">
                    <svg class="w-20 h-20 text-slate-800 group-hover:text-blue-500/50 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" /></svg>
                </div>
                <div class="p-8">
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">De Bolsillo</h3>
                    <p class="text-slate-400 text-sm mb-6 leading-relaxed">Elegancia simple para entrega de documentos finales y testimonios.</p>
                    <div class="flex gap-2 text-xs font-mono text-blue-400 uppercase tracking-wide">
                        <span class="bg-blue-500/10 px-2 py-1 rounded">Hot Stamping</span>
                        <span class="bg-blue-500/10 px-2 py-1 rounded">Barniz</span>
                    </div>
                </div>
            </div>
            <!-- Item 3 -->
            <div class="group relative bg-slate-950 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/5">
                <div class="h-64 bg-slate-900 relative flex items-center justify-center border-b border-white/5 group-hover:bg-slate-800/50 transition-colors">
                    <svg class="w-20 h-20 text-slate-800 group-hover:text-blue-500/50 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div class="p-8">
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Portafolios Personalizados</h3>
                    <p class="text-slate-400 text-sm mb-6 leading-relaxed">Soluciones a medida para corporativos con identidad de marca completa.</p>
                    <div class="flex gap-2 text-xs font-mono text-blue-400 uppercase tracking-wide">
                        <span class="bg-blue-500/10 px-2 py-1 rounded">Piel</span>
                        <span class="bg-blue-500/10 px-2 py-1 rounded">Sintético</span>
                    </div>
                </div>
            </div>
         </div>
      </section>

      <!-- SECTION 3: PROMOCIONALES (Masonry-ish) -->
      <section class="relative py-24">
         <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 relative z-10">
            <div class="w-full md:w-1/3">
                <h3 class="text-sm font-semibold text-blue-500 uppercase tracking-[0.2em] mb-4">Merchandising</h3>
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Artículos <br><span class="text-slate-400">Promocionales</span></h2>
                <p class="text-slate-300 mb-8 leading-relaxed">Extienda su presencia de marca con artículos de uso cotidiano acabados con la misma excelencia que sus documentos.</p>
                <div class="flex flex-wrap gap-4">
                    <span class="px-4 py-2 rounded-full border border-white/10 text-xs hover:bg-white hover:text-slate-950 transition-colors cursor-default bg-slate-900/50">Bolígrafos Premium</span>
                    <span class="px-4 py-2 rounded-full border border-white/10 text-xs hover:bg-white hover:text-slate-950 transition-colors cursor-default bg-slate-900/50">Libretas</span>
                    <span class="px-4 py-2 rounded-full border border-white/10 text-xs hover:bg-white hover:text-slate-950 transition-colors cursor-default bg-slate-900/50">USBs</span>
                    <span class="px-4 py-2 rounded-full border border-white/10 text-xs hover:bg-white hover:text-slate-950 transition-colors cursor-default bg-slate-900/50">Baterías</span>
                </div>
            </div>
            <div class="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
                <!-- Visual Grid of Placeholders -->
                <div class="aspect-square bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-slate-800 transition-colors group relative overflow-hidden">
                    <div class="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                    <span class="text-slate-500 text-xs font-mono uppercase tracking-widest relative z-10 group-hover:text-blue-300 transition-colors">Pen</span>
                </div>
                <div class="aspect-square bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-slate-800 transition-colors group relative overflow-hidden">
                    <div class="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                    <span class="text-slate-500 text-xs font-mono uppercase tracking-widest relative z-10 group-hover:text-blue-300 transition-colors">Notebook</span>
                </div>
                <div class="aspect-square bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-slate-800 transition-colors group relative overflow-hidden">
                    <div class="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                    <span class="text-slate-500 text-xs font-mono uppercase tracking-widest relative z-10 group-hover:text-blue-300 transition-colors">Termo</span>
                </div>
                <div class="aspect-square bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-slate-800 transition-colors group relative overflow-hidden">
                    <div class="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                    <span class="text-slate-500 text-xs font-mono uppercase tracking-widest relative z-10 group-hover:text-blue-300 transition-colors">USB</span>
                </div>
                <!-- Double width item for interest -->
                <div class="aspect-auto md:col-span-2 bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-slate-800 transition-colors group relative overflow-hidden">
                    <div class="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                    <span class="text-slate-500 text-xs font-mono uppercase tracking-widest relative z-10 group-hover:text-blue-300 transition-colors">Kit Corporativo</span>
                </div>
            </div>
         </div>
      </section>

      <!-- SECTION 4: PERSONALIZADOS (Feature) -->
      <section class="relative py-32 px-6">
        <div class="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-blue-900/40 via-slate-900 to-black border border-white/10 p-8 md:p-20 text-center md:text-left z-10">
           <!-- Decorative BG Pattern -->
           <div class="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed mix-blend-overlay pointer-events-none"></div>
           
           <div class="relative z-20 flex flex-col md:flex-row items-center gap-12">
              <div class="w-full md:w-1/2 space-y-8">
                  <h2 class="text-3xl md:text-5xl font-bold text-white leading-tight">Artículos <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Personalizados</span></h2>
                  <p class="text-slate-300 text-lg leading-relaxed">Soluciones únicas como su marca. Desde reconocimientos en acrílico y cristal hasta sets de regalo con grabado láser de precisión.</p>
                  <ul class="space-y-3 text-slate-300">
                    <li class="flex items-center gap-3"><div class="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div> <span class="tracking-wide">Serigrafía de alta duración</span></li>
                    <li class="flex items-center gap-3"><div class="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div> <span class="tracking-wide">Grabado Láser CO2</span></li>
                    <li class="flex items-center gap-3"><div class="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div> <span class="tracking-wide">Sublimación Premium</span></li>
                  </ul>
                  <div class="pt-4">
                      <button class="px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-blue-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1">Solicitar Cotización</button>
                  </div>
              </div>
              <div class="w-full md:w-1/2 flex justify-center">
                  <!-- Abstract representation of a trophy/custom item -->
                  <div class="relative w-64 h-64 md:w-80 md:h-80 select-none">
                      <div class="absolute inset-0 border border-white/10 rotate-45 rounded-3xl animate-[pulse_6s_infinite] backdrop-blur-sm"></div>
                      <div class="absolute inset-4 border border-blue-500/20 rotate-12 rounded-3xl backdrop-blur-sm"></div>
                      <div class="absolute inset-0 flex items-center justify-center">
                          <svg class="w-32 h-32 text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  `
})
export class ProductsComponent { }
