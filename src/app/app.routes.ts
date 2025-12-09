import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { ServicesPageComponent } from './pages/services-page/services-page';
import { ContactPageComponent } from './pages/contact-page/contact-page';
import { AboutUsComponent } from './pages/about-us/about-us';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', component: ProductsComponent },
    { path: 'servicios', component: ServicesPageComponent },
    { path: 'contacto', component: ContactPageComponent },
    { path: 'nosotros', component: AboutUsComponent },
    { path: '**', redirectTo: '' }
];
