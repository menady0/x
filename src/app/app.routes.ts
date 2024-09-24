import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: 'home', title: "Home", component: HomePageComponent},
  {path: 'contact', title: "Contact", component: ContactComponent},
  {path: 'about', title: "About", component: AboutComponent},
  {path: 'signup', title: "Sign Up", component: SignUpComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', title: "404", component: PageNotFoundComponent}
];
