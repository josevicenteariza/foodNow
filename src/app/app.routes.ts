import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'inici',
        loadComponent: () => import('./pages/inici/inici.page').then((m) => m.IniciPage),
      },
      {
        path: 'cerca',
        loadComponent: () => import('./pages/cerca/cerca.page').then((m) => m.CercaPage),
      },
      {
        path: 'carreto',
        loadComponent: () => import('./pages/carreto/carreto.page').then((m) => m.CarretoPage),
      },
      {
        path: 'perfil',
        loadComponent: () => import('./pages/perfil/perfil.page').then((m) => m.PerfilPage),
      },
      { path: '', redirectTo: 'inici', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];
