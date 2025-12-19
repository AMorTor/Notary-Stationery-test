import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { SocialProofComponent } from '../../components/social-proof/social-proof';
import { ServicesComponent } from '../../components/services/services';
import { ContactComponent } from '../../components/contact/contact';
import { CoinsComponent } from '../../components/coins/coins';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SocialProofComponent,
    ServicesComponent,
    CoinsComponent,
    ContactComponent
  ],
  template: `
    <main>
      <app-hero />
      <app-social-proof />
      <app-services />
      <app-coins />
      <app-contact />
    </main>
  `
})
export class HomeComponent { }
