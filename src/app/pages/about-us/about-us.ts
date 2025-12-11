import { Component } from '@angular/core';

@Component({
    selector: 'app-about-us',
    standalone: true,
    template: `
    <section class="min-h-screen pt-32 pb-20 px-6 bg-slate-950 text-white">
      <div class="max-w-4xl mx-auto space-y-20">
        
        <!-- Header -->
        <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">Sobre <span class="text-gold-400">Nosotros</span></h1>
            <p class="text-xl text-slate-400">
                Más que una papelería, somos aliados estratégicos del gremio notarial.
            </p>
        </div>

        <!-- Mission -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl font-bold text-gold-400 mb-4">Misión</h2>
                <p class="text-slate-300 leading-relaxed">
                    Proveer soluciones de papelería e imagen corporativa de la más alta calidad y seguridad, 
                    facilitando la labor diaria de notarios y abogados con productos que reflejan la seriedad 
                    y prestigio de su profesión.
                </p>
            </div>
            <div class="h-64 bg-neutral-900 rounded-xl border border-white/5 flex items-center justify-center text-gold-500/50">
                [Icono Misión]
            </div>
        </div>

        <!-- Vision -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
             <div class="h-64 bg-neutral-900 rounded-xl border border-white/5 flex items-center justify-center text-gold-500/50 order-2 md:order-1">
                [Icono Visión]
            </div>
            <div class="order-1 md:order-2">
                <h2 class="text-3xl font-bold text-gold-400 mb-4">Visión</h2>
                <p class="text-slate-300 leading-relaxed">
                    Ser el referente nacional indiscutible en suministro notarial, reconocidos por nuestra 
                    innovación en seguridad documental y nuestra atención personalizada de clase mundial.
                </p>
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
