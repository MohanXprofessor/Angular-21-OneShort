import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [

{path:'home',component:Home},



<<<<<<< HEAD
{path:'admin', loadComponent:()=>import('./pages/admin/admin').then((c)=>c.Admin)}
=======
{path:'admin', loadComponent:()=>import('./pages/admin/admin').then((c)=>c.Admin)},
{path:'user', loadComponent:()=>import('./pages/user/user').then((c)=>c.User)}
>>>>>>> 06b36e69e09bc21d2de114db4e084449adf923fd

];
