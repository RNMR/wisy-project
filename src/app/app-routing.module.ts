import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  // { path: '', redirectTo: 'instructores', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule),
    // ...canActivate(() => redirectUnauthorizedTo(['/autenticacion']))
  },
  // {
  //   path: 'administrador',
  //   loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  // },
  // {
  //   path: 'autenticacion',
  //   loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
