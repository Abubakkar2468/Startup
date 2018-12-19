import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'feed', loadChildren: './feed-page/feed-page.module#FeedPageModule' },
  {path: 'login', loadChildren: './login-page/login-page.module#LoginPageModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
