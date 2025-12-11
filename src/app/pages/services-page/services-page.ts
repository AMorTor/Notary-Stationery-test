import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services-page',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="bg-black min-h-screen font-poppins text-white overflow-x-hidden selection:bg-gold-500/30">
      
      <!-- HERO SECTION -->
      <section class="relative pt-40 pb-32 px-6 flex flex-col items-center justify-center min-h-[50vh] overflow-hidden">
        <!-- Background Network Abstract -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black opacity-60"></div>
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

        <div class="relative z-20 text-center max-w-4xl mx-auto">
          <span class="text-gold-400 tracking-[0.2em] uppercase text-sm font-semibold mb-4 block animate-breathe drop-shadow-lg">Ecosistema Digital & Físico</span>
          <h1 class="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-gold-100 to-neutral-400 mb-6 tracking-tight drop-shadow-2xl leading-tight">
            Soluciones Integrales <br>Para su Firma
          </h1>
          <p class="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Fusionamos la tradición del papel con la velocidad de la tecnología. Herramientas diseñadas para la notaría moderna.
          </p>
        </div>
      </section>

      <!-- SECTION 2: DIGITAL IDENTITY (Bento Grid) -->
      <section class="relative py-24 px-6 md:px-0 bg-neutral-900/20">
        <div class="max-w-7xl mx-auto">
             <div class="text-center mb-16 px-6">
                <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">Identidad <span class="text-gold-500">Inteligente</span></h2>
                <p class="text-neutral-400 max-w-xl mx-auto">Conecte con sus clientes al instante. Tecnología sin contacto y presencial.</p>
             </div>

             <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
                
                <!-- NFC Card (Large Vertical) -->
                <div class="md:col-span-1 md:row-span-2 bg-black border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group hover:border-gold-500/30 transition-all duration-300">
                    <div class="absolute inset-0 bg-linear-to-b from-gold-900/10 to-transparent"></div>
                    <div class="relative z-10 h-full flex flex-col">
                        <div class="flex-1 flex items-center justify-center my-8">
                             <!-- Card Visualization -->
                             <div class="w-48 h-80 bg-neutral-900 rounded-2xl border border-white/10 relative shadow-2xl transform group-hover:rotate-y-12 transition-transform duration-700 preserve-3d">
                                 <div class="absolute inset-0 flex flex-col items-center justify-center">
                                     <svg class="w-16 h-16 text-gold-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                     <div class="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                                        <div class="w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-2">Tarjetas NFC</h3>
                        <p class="text-neutral-400 text-sm">Comparta su contacto con un solo toque. Sin aplicaciones, compatible con iOS y Android.</p>
                    </div>
                </div>

                <!-- QRs (Wide Horizontal) -->
                <div class="md:col-span-2 md:row-span-1 bg-black border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group hover:border-gold-500/30 transition-all duration-300">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-gold-600/10 blur-[80px] rounded-full pointer-events-none"></div>
                    <div class="flex flex-col md:flex-row items-center gap-8 h-full relative z-10">
                        <div class="flex-1 space-y-4">
                            <h3 class="text-2xl font-bold text-white">Códigos QR Dinámicos</h3>
                            <p class="text-neutral-400 text-sm">Enlaces inteligentes que puede actualizar en tiempo real sin reimprimir su papelería. Redireccione a formularios, ubicaciones o expedientes.</p>
                            <div class="flex gap-2">
                                <span class="px-3 py-1 bg-gold-500/10 text-gold-300 text-xs rounded-full border border-gold-500/20">Editables</span>
                                <span class="px-3 py-1 bg-gold-500/10 text-gold-300 text-xs rounded-full border border-gold-500/20">Analytics</span>
                            </div>
                        </div>
                        <div class="w-24 h-24 bg-white p-2 rounded-xl">
                             <div class="w-full h-full bg-neutral-900 pattern-grid-lg"></div> 
                        </div>
                    </div>
                </div>

                <!-- VCard (Small) -->
                <div class="md:col-span-1 md:row-span-1 bg-black border border-white/5 rounded-[2rem] p-8 relative overflow-hidden hover:bg-neutral-900/50 transition-colors">
                     <h3 class="text-xl font-bold text-white mb-4">Vcards Interactivas</h3>
                     <ul class="space-y-3">
                        <li class="flex items-center gap-3 text-neutral-400 text-sm"><div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Botones de llamada directa</li>
                        <li class="flex items-center gap-3 text-neutral-400 text-sm"><div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Agendar cita (Calendly)</li>
                        <li class="flex items-center gap-3 text-neutral-400 text-sm"><div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Descarga de contacto .vcf</li>
                     </ul>
                </div>

                <!-- Social/Web Link (Small) -->
                <div class="md:col-span-1 md:row-span-1 bg-black border border-white/5 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-gold-500/30 transition-all">
                    <div class="absolute inset-0 bg-linear-to-tr from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    </div>
                    <h3 class="text-lg font-bold text-white">Bio Link</h3>
                    <p class="text-xs text-neutral-500 mt-2">Centralice toda su presencia digital en un solo enlace.</p>
                </div>

             </div>
        </div>
      </section>

      <!-- SECTION 3: WEB & PRESENCE (Zig Zag) -->
      <section class="relative py-32 overflow-hidden">
        <!-- Abstract Line Divider -->
        <div class="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-900/50 to-transparent"></div>
        
        <div class="max-w-7xl mx-auto px-6 space-y-32">
            
            <!-- Row 1: Web Design -->
            <div class="flex flex-col md:flex-row items-center gap-16">
                <div class="w-full md:w-1/2 relative group">
                    <div class="absolute -inset-4 bg-gold-500/20 blur-2xl rounded-[2rem] opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div class="relative bg-black rounded-2xl border border-white/10 aspect-video overflow-hidden shadow-2xl">
                        <!-- Browser Mockup -->
                         <div class="h-8 bg-neutral-950 border-b border-white/5 flex items-center px-4 gap-2">
                             <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                             <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                             <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                         </div>
                         <div class="p-8 flex items-center justify-center h-full bg-neutral-900">
                             <span class="text-neutral-700 font-mono text-sm">&lt;SitioNotarial /&gt;</span>
                         </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 space-y-6">
                    <h2 class="text-3xl md:text-5xl font-bold text-white">Diseño Web <br><span class="text-gold-500">Corporativo</span></h2>
                    <p class="text-neutral-300 text-lg leading-relaxed">
                        Su sitio web es su oficina virtual. Desarrollamos plataformas rápidas, seguras y optimizadas para generar confianza.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex items-center gap-3 text-neutral-400"><svg class="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Optimización SEO Local</li>
                        <li class="flex items-center gap-3 text-neutral-400"><svg class="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Catálogo de Servicios</li>
                        <li class="flex items-center gap-3 text-neutral-400"><svg class="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Integración con WhatsApp</li>
                    </ul>
                </div>
            </div>

            <!-- Row 2: Social Media -->
            <div class="flex flex-col md:flex-row-reverse items-center gap-16">
                <div class="w-full md:w-1/2 relative group">
                    <div class="absolute -inset-4 bg-gold-500/20 blur-2xl rounded-[2rem] opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div class="relative bg-black rounded-2xl border border-white/10 aspect-video overflow-hidden shadow-2xl flex items-center justify-center">
                         <!-- Social Mockup -->
                         <div class="grid grid-cols-2 gap-4 scale-75 md:scale-90 opacity-60">
                             <div class="w-32 h-40 bg-neutral-800 rounded-lg"></div>
                             <div class="w-32 h-40 bg-neutral-800 rounded-lg translate-y-8"></div>
                         </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 space-y-6">
                    <h2 class="text-3xl md:text-5xl font-bold text-white">Redes <br><span class="text-gold-500">Sociales</span></h2>
                    <p class="text-neutral-300 text-lg leading-relaxed">
                         Gestión estratégica de su presencia en LinkedIn, Facebook e Instagram. Contenido que educa y posiciona a su notaría como líder de opinión.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex items-center gap-3 text-neutral-400"><svg class="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Diseño de Posts & Reels</li>
                        <li class="flex items-center gap-3 text-neutral-400"><svg class="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Copywriting Jurídico</li>
                        <li class="flex items-center gap-3 text-neutral-400"><svg class="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Campañas Publicitarias</li>
                    </ul>
                </div>
            </div>

        </div>
      </section>

      <!-- SECTION 4: EMPASTADO (Heritage Feature) -->
      <section class="relative py-40">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-20"></div>
        <div class="absolute inset-0 bg-linear-to-b from-black via-neutral-900/90 to-black"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div class="mb-12">
                 <span class="text-gold-500 tracking-[0.3em] uppercase text-xs font-bold border border-gold-500/30 px-4 py-2 rounded-full">Legado & Tradición</span>
            </div>
            <h2 class="text-4xl md:text-7xl font-bold text-white mb-8 font-serif">Arte del Empastado</h2>
            <p class="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
                Conservación de protocolos notariales con técnicas artesanales. Piel genuina, grabados en oro de 24k y encuadernación de máxima durabilidad para la posteridad.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Feature 1 -->
                <div class="p-8 border border-gold-500/10 rounded-2xl bg-black/50 backdrop-blur-sm">
                    <h4 class="text-gold-400 font-bold text-xl mb-3">Restauración</h4>
                    <p class="text-neutral-400 text-sm">Recuperación de volúmenes dañados y tratamiento de papel.</p>
                </div>
                <!-- Feature 2 -->
                <div class="p-8 border border-gold-500/10 rounded-2xl bg-black/50 backdrop-blur-sm">
                    <h4 class="text-gold-400 font-bold text-xl mb-3">Personalización</h4>
                    <p class="text-neutral-400 text-sm">Estampado de escudo notarial y titulación en lomo a medida.</p>
                </div>
                <!-- Feature 3 -->
                <div class="p-8 border border-gold-500/10 rounded-2xl bg-black/50 backdrop-blur-sm">
                    <h4 class="text-gold-400 font-bold text-xl mb-3">Logística</h4>
                    <p class="text-neutral-400 text-sm">Recolección y entrega segura en sus instalaciones.</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  `
})
export class ServicesPageComponent { }
