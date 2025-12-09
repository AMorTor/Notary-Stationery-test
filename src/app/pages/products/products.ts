import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    standalone: true,
    template: `
    <section class="min-h-screen pt-32 pb-20 px-6 bg-slate-950 text-white">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold mb-8">Nuestros Productos</h1>
        <p class="text-slate-400 text-lg mb-12 max-w-2xl">
          Descubre nuestra gama de papelería notarial y corporativa de alta seguridad y distinción.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <!-- Placeholder Cards -->
           <div class="bg-slate-900 rounded-2xl p-8 border border-white/5 hover:border-blue-500/30 transition-colors">
              <div class="h-48 bg-slate-800 rounded-xl mb-6 flex items-center justify-center text-slate-600">
                [Imagen Producto]
              </div>
              <h3 class="text-2xl font-bold mb-2">Libros de Cotejo</h3>
              <p class="text-slate-400">Encuadernación artesanal con medidas de seguridad avanzadas.</p>
           </div>
           
           <div class="bg-slate-900 rounded-2xl p-8 border border-white/5 hover:border-blue-500/30 transition-colors">
              <div class="h-48 bg-slate-800 rounded-xl mb-6 flex items-center justify-center text-slate-600">
                [Imagen Producto]
              </div>
              <h3 class="text-2xl font-bold mb-2">Folios de Seguridad</h3>
              <p class="text-slate-400">Papel seguridad con marcas de agua y fibras invisibles.</p>
           </div>

           <div class="bg-slate-900 rounded-2xl p-8 border border-white/5 hover:border-blue-500/30 transition-colors">
              <div class="h-48 bg-slate-800 rounded-xl mb-6 flex items-center justify-center text-slate-600">
                [Imagen Producto]
              </div>
              <h3 class="text-2xl font-bold mb-2">Sellos Personalizados</h3>
              <p class="text-slate-400">Sellos de alta durabilidad y precisión para uso oficial.</p>
           </div>
        </div>
      </div>
    </section>
  `
})
export class ProductsComponent { }
