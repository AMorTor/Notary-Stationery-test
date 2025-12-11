import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-black border-t border-white/5 py-20 relative overflow-hidden">
      <!-- Background Glow (Gold) -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-gold-400/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        <!-- Logo -->
        <img src="ayg-logo.png" alt="A&G Logo" class="h-16 w-auto mb-8 opacity-90 hover:opacity-100 transition-opacity">

        <!-- Impact Tagline -->
        <div class="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 mb-12 max-w-sm md:max-w-none mx-auto">
            <!-- First Row Mobile: Legado • Seguridad -->
            <div class="flex items-center gap-2">
                <span class="text-xl md:text-3xl font-light text-white tracking-[0.2em] uppercase">Legado</span>
                <span class="text-gold-400 text-xl md:text-3xl align-middle">•</span>
                <span class="text-xl md:text-3xl font-light text-white tracking-[0.2em] uppercase">Seguridad</span>
            </div>

            <!-- Separator for Desktop -->
            <span class="text-gold-400 text-3xl align-middle hidden md:block mx-2">•</span>

            <!-- Second Row Mobile: Confianza -->
            <span class="text-xl md:text-3xl font-light text-white tracking-[0.2em] uppercase basis-full md:basis-auto mt-2 md:mt-0">Confianza</span>
        </div>

        <!-- Social Icons (Minimal) -->
        <div class="flex gap-8 mb-16">
            <!-- Facebook -->
            <a href="#" class="text-neutral-500 hover:text-gold-400 transition-colors hover:scale-110 transform duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
            </a>
            <!-- Instagram -->
            <a href="#" class="text-neutral-500 hover:text-gold-400 transition-colors hover:scale-110 transform duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.672 5.374a5.369 5.369 0 11-5.369 5.369 5.369 5.369 0 100-10.739 5.352 5.352 0 00-5.369-5.369zm0 8.844a3.475 3.475 0 113.475-3.475 3.475 3.475 0 01-3.475 3.475zm5.345-7.554a1.291 1.291 0 11-1.291 1.291 1.291 1.291 0 011.291-1.291z" clip-rule="evenodd" /></svg>
            </a>
            <!-- TikTok -->
            <a href="#" class="text-neutral-500 hover:text-gold-400 transition-colors hover:scale-110 transform duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.55-1.1-.06-.06-.15-.14-.24-.16-.01 1.2-.01 2.41 0 3.61-.17 2.7-1.4 5.28-3.47 7.02-2.32 1.94-5.63 2.48-8.48 1.48-2.67-.93-4.63-3.23-5.07-6.02-.45-2.9.89-5.83 3.32-7.58 1.66-1.19 3.75-1.57 5.76-1.13.04.01.07.03.11.04v4.2c-1.63-.51-3.48-.11-4.75 1.05-1.2 1.1-1.65 2.87-1.13 4.47.53 1.63 2.05 2.8 3.76 2.87 1.7.07 3.28-1.04 3.75-2.68.17-.61.19-1.26.04-1.88-.04-.15-.09-.29-.16-.43v-8.8c0-1.43-.01-2.86.01-4.29.01-.13.08-.22.18-.27.42-.19.86-.33 1.3-.43.53-.12 1.08-.17 1.63-.17z" /></svg>
            </a>
            <!-- LinkedIn -->
            <a href="#" class="text-neutral-500 hover:text-gold-400 transition-colors hover:scale-110 transform duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" /></svg>
            </a>
        </div>

        <!-- Copyright -->
        <div class="text-neutral-700 text-xs tracking-widest uppercase">
           &copy; {{ currentYear }} A&G Papelería Notarial
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
