import { LoggedInAuthGuard } from './helpers/loggedinauthguard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'students',
    loadChildren: () => import('./components/students/students.module').then(m => m.StudentsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),
    canActivate: [LoggedInAuthGuard]
  },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)
  // },
  {
    path: '**',
    loadChildren: () => import('./shared/components/pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
