import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './home/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./home/estudiante/estudiante.module').then(m => m.EstudiantePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profesor',
    loadChildren: () => import('./home/profesor/profesor.module').then(m => m.ProfesorPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then(m => m.LoadingPageModule)
  },
  {
    path: 'menu-profesor',
    loadChildren: () => import('./menu/menu-profesor/menu-profesor.module').then(m => m.MenuProfesorPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'menu-estudiante',
    loadChildren: () => import('./menu/menu-estudiante/menu-estudiante.module').then(m => m.MenuEstudiantePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'lista-alumnos',
    loadChildren: () => import('./lista-alumnos/lista-alumnos.module').then(m => m.ListaAlumnosPageModule),
    canActivate: [AuthGuard]
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
