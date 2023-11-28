import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from './home/guards/guards.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    //canActivate: [GuardsGuard]
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./home/estudiante/estudiante.module').then( m => m.EstudiantePageModule),
    canActivate: [GuardsGuard],
    data: {tipo: [1] }
  },
  {
    path: 'profesor',
    loadChildren: () => import('./home/profesor/profesor.module').then( m => m.ProfesorPageModule),
    canActivate: [GuardsGuard],
    data: {tipo: [2] }
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'menu-profesor',
    loadChildren: () => import('./menu/menu-profesor/menu-profesor.module').then( m => m.MenuProfesorPageModule),
    canActivate: [GuardsGuard],
    data: {tipo: [2] }
  },
  {
    path: 'menu-estudiante',
    loadChildren: () => import('./menu/menu-estudiante/menu-estudiante.module').then( m => m.MenuEstudiantePageModule),
    canActivate: [GuardsGuard],
    data: {tipo: [1] }
  },
  {
    path: 'qrpage',
    loadChildren: () => import('./qrpage/qrpage.module').then( m => m.QrpagePageModule),
    canActivate: [GuardsGuard],
    data: {tipo: [1] }
  },
  {
    path: 'asignatura',
    loadChildren: () => import('./asignatura/asignatura.module').then( m => m.AsignaturaPageModule),
    canActivate: [GuardsGuard],
    data: {tipo: [2] }
  },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundPageModule) },
  { path: '**', redirectTo: 'not-found' },

 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
