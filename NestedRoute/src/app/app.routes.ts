import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { User } from './pages/user/user';
import { Security } from './sub-pages/security/security';
import { Setting } from './sub-pages/setting/setting';
import { Userprofile } from './sub-pages/userprofile/userprofile';
import { Pagenotfound } from './feature/pagenotfound/pagenotfound';
import { Usernotfound } from './feature/usernotfound/usernotfound';

export const routes: Routes = [

  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'home', component: Home },



  {
    path: 'user',
    component: User,
    children: [
      { path: '', component: Userprofile },
      { path: 'profile', component: Userprofile },
      { path: 'setting', component: Setting },
       {path:'**',component:Usernotfound}

    ]
  },

  {path:'**',component:Pagenotfound}
];
