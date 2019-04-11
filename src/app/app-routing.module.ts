import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechComponent } from './speech/speech.component';
import { AuthGaurdService as AuthGaurd } from './services/auth-gaurd.service';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'feed',
    loadChildren: './feed-page/feed-page.module#FeedPageModule',
    canActivate: [AuthGaurd]
  },
  {
    path: 'login',
    loadChildren: './login-page/login-page.module#LoginPageModule'
  },
  {
    path: 'speech',
    component: SpeechComponent,
    canActivate: [AuthGaurd]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
