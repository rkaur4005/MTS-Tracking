import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule, JsonpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { MtsComponent } from './mts/mts.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { CdkTableModule } from '@angular/cdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Service } from './common/services/storage.service';
import { UserService } from './common/services/userservice';
import { AlertService } from './common/services/alert.service';
import { AuthenticationService } from './common/services/authentication.service';
import { Mts2Component } from './mts2/mts2.component';
import { DetailTableComponent } from './detail-table/detail-table.component';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
//import{RoutesModule,routedComponents} from './routes/routes.module';
@NgModule({
  declarations: [
    AppComponent,
    MtsComponent,
    Mts2Component,
    HeaderComponent,
    SidebarComponent,
    DetailTableComponent,
    FilterComponent,
    LoginComponent,
    //routedComponents,
    //RoutesModule
    //ServerComponent
    ],
  imports: [ 
    RouterModule.forRoot([
      { path: '', component: MtsComponent },
      { path: 'mts2', component: Mts2Component },
      //{ path:'login',component: LoginComponent},
      //{ path: '**', redirectTo: '' }
       ]),
    //routedComponents,
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    JsonpModule,
    ReactiveFormsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule
   
  ],
  providers: [Service, UserService,AuthenticationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
