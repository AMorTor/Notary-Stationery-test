import { Component } from '@angular/core';

@Component({
    selector: 'app-services-page',
    standalone: true,
    template: `
    <section class="min-h-screen pt-32 pb-20 px-6 bg-slate-950 text-white">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold mb-8">Nuestros Servicios</h1>
        <p class="text-slate-400 text-lg mb-12 max-w-2xl">
          Soluciones integrales para el sector notarial y corporativo.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="space-y-6">
                <div class="p-8 bg-slate-900 rounded-2xl border border-white/5">
                    <h3 class="text-2xl font-bold text-blue-400 mb-4">Gestoría Notarial</h3>
                    <p class="text-slate-300">
                        Tramitologia especializada, seguimiento de expedientes y gestión ante el registro público.
                        Ofrecemos un servicio de "llave en mano" para que su notaría se enfoque en la firma.
                    </p>
                </div>
                <!-- More services placeholder -->
                <div class="p-8 bg-slate-900 rounded-2xl border border-white/5">
                    <h3 class="text-2xl font-bold text-violet-400 mb-4">Diseño Corporativo</h3>
                    <p class="text-slate-300">
                        Creación de identidad visual para nuevas notarías o rebranding. 
                        Desde el logotipo hasta la papelería institucional completa.
                    </p>
                </div>
            </div>
            
            <div class="bg-slate-900 rounded-2xl h-full min-h-[400px] flex items-center justify-center text-slate-600 border border-white/5">
                [Imagen Ilustrativa Servicios]
            </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesPageComponent { }
