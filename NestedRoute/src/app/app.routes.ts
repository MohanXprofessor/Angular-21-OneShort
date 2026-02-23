import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { User } from './pages/user/user';

export const routes: Routes = [

    {path:'',component:Home},
    {path:'user',component:User},

];
