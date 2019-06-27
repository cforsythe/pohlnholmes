import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HullandshellComponent } from './hullandshell/hullandshell.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'hullandshell', component: HullandshellComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent}
];

const options: ExtraOptions = {
    anchorScrolling:'enabled', 
    onSameUrlNavigation:'reload',
    scrollOffset: [0, document.documentElement.clientHeight * 0.07]
  }

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
