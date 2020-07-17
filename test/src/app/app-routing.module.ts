import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaisonlistComponent } from './cargaisonlist/cargaisonlist.component';
import { CalistComponent } from './calist/calist.component';
import { CaaddComponent } from './caadd/caadd.component';
import { CasearchComponent } from './casearch/casearch.component';
import { CaupdateComponent } from './caupdate/caupdate.component';
import { CadeleteComponent } from './cadelete/cadelete.component';
import { CrlistComponent } from './crlist/crlist.component';
import { CraddComponent } from './cradd/cradd.component';
import { CrsearchComponent } from './crsearch/crsearch.component';
import { CrupdateComponent } from './crupdate/crupdate.component';
import { CrdeleteComponent } from './crdelete/crdelete.component';
import { MlistComponent } from './mlist/mlist.component';
import { MaddComponent } from './madd/madd.component';
import { MsearchComponent } from './msearch/msearch.component';
import { MupdateComponent } from './mupdate/mupdate.component';
import { MdeleteComponent } from './mdelete/mdelete.component';
import { McaassignComponent } from './mcaassign/mcaassign.component';
import { McrassignComponent } from './mcrassign/mcrassign.component';
import { MlistcaComponent } from './mlistca/mlistca.component';
import { MlistcrComponent } from './mlistcr/mlistcr.component';
import { MsearchkwComponent } from './msearchkw/msearchkw.component';


const routes: Routes = [


  {path : '', redirectTo :'home', pathMatch:'full'},

  { path: 'home', component: CargaisonlistComponent },
  { path: 'calis', component: CalistComponent},
  { path: 'caadd', component:  CaaddComponent},
  { path: 'caupd', component:  CaupdateComponent},
  { path: 'cadel', component:  CadeleteComponent},
  { path: 'casea', component:  CasearchComponent},
  { path: 'crlis', component:  CrlistComponent},
  { path: 'cradd', component:  CraddComponent},
  { path: 'crupd', component:  CrupdateComponent},
  { path: 'crdel', component:  CrdeleteComponent},
  { path: 'crsea', component:  CrsearchComponent},
  { path: 'mlist', component:  MlistComponent},
  { path: 'madd', component:  MaddComponent},
  { path: 'mupda', component:  MupdateComponent},
  { path: 'mdele', component:  MdeleteComponent},
  { path: 'msear', component:  MsearchComponent},
  {path: 'massca', component: McaassignComponent},
  {path: 'masscr', component: McrassignComponent},
  {path: 'mlisca', component:MlistcaComponent},
  {path: 'mliscr', component:MlistcrComponent},
  {path:'mseakw', component:MsearchkwComponent},

  { path: '**', component: CargaisonlistComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
