import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact';

@Component({
    selector: 'app-contact-page',
    standalone: true,
    imports: [ContactComponent], // Reusing the existing contact section component
    template: `
    <div class="pt-20 bg-slate-950 min-h-screen">
      <!-- We reuse the existing Contact Section but wrap it properly for a page view if needed -->
      <app-contact />
    </div>
  `
})
export class ContactPageComponent { }
