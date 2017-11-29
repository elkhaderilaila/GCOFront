import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParametreSocieteComponent} from './parametre-societe/parametre-societe.component';






const routes: Routes = [
  {
    path: '',
    data: {
      title: 'dossier'
    },
    children: [
      {
        path: 'societe',
        component: ParametreSocieteComponent,
        data: {
          title: 'societe'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DossierRoutingModule {}
