import { Component } from '@angular/core';

@Component({
    selector: 'app-about-us',
    standalone: true,
    template: `
    <section class="min-h-screen pt-32 pb-20 px-6 bg-slate-950 text-white">
      <div class="max-w-4xl mx-auto space-y-20">
        
        <!-- Header -->
        <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">¿En qué creemos?</h1>
            <p class="text-xl text-slate-400">
                Más que una papelería, somos aliados estratégicos del gremio notarial.
            </p>
        </div>

        <!-- Beliefs (Replaces Mission/Vision) -->
        <div class="relative bg-neutral-900/50 rounded-3xl p-8 md:p-12 border border-white/5 overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        
            
            <div class="space-y-12 text-center max-w-4xl mx-auto relative z-10">
                <p class="text-2xl md:text-3xl text-gold-100 font-serif italic opacity-90 leading-relaxed">
                    Creemos que la imagen juega un papel vital
                </p>
                
                <div class="w-24 h-px bg-linear-to-r from-transparent via-gold-500 to-transparent mx-auto opacity-50"></div>

                <div class="relative py-8">
                     <span class="absolute top-0 left-0 text-6xl text-gold-500/20 font-comfortaa">“</span>
                     <p class="text-2xl md:text-4xl text-white/60 font-medium leading-tight tracking-tight relative z-10">
                        A&G existe para que ninguna notaría ni corporativo tenga que conformarse con insumos que no estén a la altura de la responsabilidad que asumen a diario.
                     </p>
                     <span class="absolute bottom-0 right-0 text-6xl text-gold-500/20 font-comfortaa leading-none">”</span>
                </div>

                <div class="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                    <p class="text-slate-300 leading-relaxed text-lg md:text-xl font-light">
                        Nuestro trabajo es simple: <span class="text-gold-400 font-medium">convertir cada pedido en una inversión estratégica</span> en imagen, confianza y posicionamiento. Por eso apostamos por innovación, procesos serios y relaciones de largo plazo con cada cliente.
                    </p>
                </div>
            </div>
        </div>

        <!-- Values -->
        <div>
            <h2 class="text-3xl font-bold text-white mb-8 text-center">Nuestros Valores</h2>
            <div class="grid sm:grid-cols-3 gap-6">
                <div class="p-6 bg-neutral-900 rounded-xl border border-white/5 text-center hover:border-gold-500/30 transition-colors group">
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">Seguridad</h3>
                    <p class="text-slate-400 text-sm">Protección absoluta en cada folio.</p>
                </div>
                <div class="p-6 bg-neutral-900 rounded-xl border border-white/5 text-center hover:border-gold-500/30 transition-colors group">
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">Elegancia</h3>
                    <p class="text-slate-400 text-sm">Estética impecable en cada detalle.</p>
                </div>
                <div class="p-6 bg-neutral-900 rounded-xl border border-white/5 text-center hover:border-gold-500/30 transition-colors group">
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">Compromiso</h3>
                    <p class="text-slate-400 text-sm">Lealtad inquebrantable con nuestros clientes.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  `
})
export class AboutUsComponent { }
