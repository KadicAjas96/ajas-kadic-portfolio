import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SidenavComponent } from './sidenav/sidenav.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ReduxComponent } from './redux/redux.component';
import { ClockComponent } from './clock/clock.component';


const routes: Routes = [
   { path: '', redirectTo: 'about', pathMatch: 'full' },
   { path: 'about', component: AboutComponent,  data: { depth: 1 } },
   { path: 'resume', component: ResumeComponent,  data: { depth: 2 } },
   { path: 'contact', component: ContactComponent,  data: { depth: 3 } },
   { path: 'redux', component: ReduxComponent,  data: { depth: 4 } },
   { path: 'clock', component: ClockComponent,  data: { depth: 5 } },
 

];

// Still needs web-animations polyfill

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
