import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FeedPageRoutingModule } from './feed-page-routing.module';
import { FeedPageComponent } from './feed-page.component';

@NgModule({
  declarations: [
    FeedPageComponent
  ],
  imports: [
    CommonModule,
    FeedPageRoutingModule,
    FormsModule
  ]
})
export class FeedPageModule { }
