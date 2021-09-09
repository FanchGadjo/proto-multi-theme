import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './news-card/news-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NewsCardComponent
  ],
  exports: [
    NewsCardComponent
  ],
})
export class UiModule {}
