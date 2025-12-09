import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    template: `
    <footer class="bg-slate-950 border-t border-white/5 pt-20 pb-12 relative overflow-hidden">
      <!-- Background Glow -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          
          <!-- Identity & Social (Column 1) -->
          <div class="space-y-6 text-center md:text-left">
             <div class="mb-6">
                 <img src="ayg-logo.png" alt="A&G Logo" class="h-16 w-auto mx-auto md:mx-0 mb-4 opacity-90">
                 <p class="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                   Soluciones integrales en papelería notarial y corporativa de la más alta calidad y seguridad.
                 </p>
             </div>
             
             <div class="flex gap-4 justify-center md:justify-start">
               <!-- Facebook -->
               <a href="#" class="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all group">
                 <svg class="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                 </svg>
               </a>

               <!-- Instagram -->
               <a href="#" class="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all group">
                 <svg class="w-5 h-5 text-slate-400 group-hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.672 5.374a5.369 5.369 0 11-5.369 5.369 5.369 5.369 0 015.369-5.369 5.369 5.369 0 015.369 5.369 5.369 5.369 0 100-10.739 5.352 5.352 0 00-5.369-5.369zm0 8.844a3.475 3.475 0 113.475-3.475 3.475 3.475 0 01-3.475 3.475zm5.345-7.554a1.291 1.291 0 11-1.291 1.291 1.291 1.291 0 011.291-1.291z" clip-rule="evenodd" />
                 </svg>
               </a>

               <!-- TikTok -->
               <a href="#" class="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all group">
                 <svg class="w-5 h-5 text-slate-400 group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.55-1.1-.06-.06-.15-.14-.24-.16-.01 1.2-.01 2.41 0 3.61-.17 2.7-1.4 5.28-3.47 7.02-2.32 1.94-5.63 2.48-8.48 1.48-2.67-.93-4.63-3.23-5.07-6.02-.45-2.9.89-5.83 3.32-7.58 1.66-1.19 3.75-1.57 5.76-1.13.04.01.07.03.11.04v4.2c-1.63-.51-3.48-.11-4.75 1.05-1.2 1.1-1.65 2.87-1.13 4.47.53 1.63 2.05 2.8 3.76 2.87 1.7.07 3.28-1.04 3.75-2.68.17-.61.19-1.26.04-1.88-.04-.15-.09-.29-.16-.43v-8.8c0-1.43-.01-2.86.01-4.29.01-.13.08-.22.18-.27.42-.19.86-.33 1.3-.43.53-.12 1.08-.17 1.63-.17z" />
                 </svg>
               </a>

               <!-- LinkedIn -->
               <a href="#" class="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all group">
                 <svg class="w-5 h-5 text-slate-400 group-hover:text-blue-700 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                 </svg>
               </a>
             </div>
          </div>
          
          <!-- Contact Info (Column 2) -->
          <div class="space-y-6">
            <h3 class="text-xl font-semibold text-white tracking-wide">Contacto</h3>
            <div class="flex flex-col gap-5 text-slate-400">
              <div class="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-400 shrink-0 mt-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span class="leading-relaxed">Av. Reforma 222, Colonia Centro,<br>Ciudad de México, CDMX 06600</span>
              </div>
              <div class="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-400 shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>+52 (55) 1234 5678</span>
              </div>
              <div class="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-400 shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span>contacto@ayg-notarial.com</span>
              </div>
            </div>
          </div>

          <!-- Hours (Column 3) -->
          <div class="space-y-6">
            <h3 class="text-xl font-semibold text-white tracking-wide">Horario de Atención</h3>
            <div class="flex flex-col gap-3 text-slate-400">
              <div class="flex justify-between border-b border-white/5 pb-3">
                <span>Lunes - Viernes</span>
                <span class="text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between border-b border-white/5 pb-3">
                <span>Sábado</span>
                <span class="text-white">9:00 AM - 2:00 PM</span>
              </div>
              <div class="flex justify-between pt-3">
                <span>Domingo</span>
                <span class="text-slate-600">Cerrado</span>
              </div>
            </div>
          </div>

        </div>

        <div class="mt-20 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
           &copy; {{ currentYear }} A&G Papelería Notarial. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
    currentYear = new Date().getFullYear();
}
