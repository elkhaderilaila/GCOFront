import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {DossierRoutingModule} from './dossier-routing.module';
import {TabsModule} from 'ngx-bootstrap';
import { ParametreSocieteComponent } from './parametre-societe/parametre-societe.component';
import { ParametreComptabiliteComponent } from './parametre-comptabilite/parametre-comptabilite.component';
import { ParametreNomenclatureComponent } from './parametre-nomenclature/parametre-nomenclature.component';





@NgModule({
  imports: [
    DossierRoutingModule,
    TabsModule
  ],
  declarations: [ParametreSocieteComponent, ParametreComptabiliteComponent, ParametreNomenclatureComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class DossierModule { }
