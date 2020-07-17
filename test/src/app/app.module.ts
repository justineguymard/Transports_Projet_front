import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CargaisonlistComponent,
    CalistComponent,
    CaaddComponent,
    CasearchComponent,
    CaupdateComponent,
    CadeleteComponent,
    CrlistComponent,
    CraddComponent,
    CrsearchComponent,
    CrupdateComponent,
    CrdeleteComponent,
    MlistComponent,
    MaddComponent,
    MsearchComponent,
    MupdateComponent,
    MdeleteComponent,
    McaassignComponent,
    McrassignComponent,
    MlistcaComponent,
    MlistcrComponent,
    MsearchkwComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
