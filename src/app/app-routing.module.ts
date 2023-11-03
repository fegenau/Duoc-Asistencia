import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

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
    canLoad: [AuthGuard] // Protege esta ruta con el AuthGuard
  },
  {
    path: 'profesor',
    loadChildren: () => import('./home/profesor/profesor.module').then(m => m.ProfesorPageModule),
    canLoad: [AuthGuard] // Protege esta ruta con el AuthGuard
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then(m => m.LoadingPageModule)
  },
  {
    path: 'menu-profesor',
    loadChildren: () => import('./menu/menu-profesor/menu-profesor.module').then(m => m.MenuProfesorPageModule),
    canLoad: [AuthGuard] // Protege esta ruta con el AuthGuard
  },
  {
    path: 'menu-estudiante',
    loadChildren: () => import('./menu/menu-estudiante/menu-estudiante.module').then(m => m.MenuEstudiantePageModule),
    canLoad: [AuthGuard] // Protege esta ruta con el AuthGuard
  },
  {
    path: 'lista-alumnos',
    loadChildren: () => import('./lista-alumnos/lista-alumnos.module').then(m => m.ListaAlumnosPageModule),
    canLoad: [AuthGuard] // Protege esta ruta con el AuthGuard
  },
  {
    path: '404',
    loadChildren: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: '/404' // Redirige cualquier ruta que no exista a la página 404
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
