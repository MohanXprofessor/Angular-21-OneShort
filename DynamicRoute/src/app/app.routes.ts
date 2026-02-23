import { Routes } from '@angular/router';
import { UserDetails } from './pages/user-details/user-details';


export const routes: Routes = [

    {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
    title: 'Home | MyApp'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About),
    title: 'About | MyApp'
  },
 
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(m => m.Contact),
    title: 'Contact | MyApp'
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./pages/user/user').then(m => m.User),
    title: 'User | MyApp'
  },
   {
    path: 'user-detail/:id',
    loadComponent: () =>
      import('./pages/user-details/user-details').then(m => m.UserDetails),
    title: 'UserDetails | MyApp'
  },

  // Wildcard (Page Not Found)
  { path: '**', redirectTo: '' }
];
