import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { SocialProofComponent } from '../../components/social-proof/social-proof';
import { ServicesComponent } from '../../components/services/services';
import { ContactComponent } from '../../components/contact/contact';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        HeroComponent,
        SocialProofComponent,
        ServicesComponent,
        ContactComponent
    ],
    template: `
    <main>
      <app-hero />
      <app-social-proof />
      <app-services />
      <app-contact />
    </main>
  `
})
export class HomeComponent { }
