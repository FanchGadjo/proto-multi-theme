import { Component, Input } from '@angular/core';

@Component({
  selector: 'xyz-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  @Input() title: string;

  constructor() {
    this.title = '';
  }

}
