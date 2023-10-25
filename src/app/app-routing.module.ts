import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./home/estudiante/estudiante.module').then( m => m.EstudiantePageModule)
  },
  {
    path: 'profesor',
    loadChildren: () => import('./home/profesor/profesor.module').then( m => m.ProfesorPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'menu-profesor',
    loadChildren: () => import('./menu/menu-profesor/menu-profesor.module').then( m => m.MenuProfesorPageModule)
  },
  {
    path: 'menu-estudiante',
    loadChildren: () => import('./menu/menu-estudiante/menu-estudiante.module').then( m => m.MenuEstudiantePageModule)
  },
  {
    path: 'lista-alumnos',
    loadChildren: () => import('./lista-alumnos/lista-alumnos.module').then( m => m.ListaAlumnosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
