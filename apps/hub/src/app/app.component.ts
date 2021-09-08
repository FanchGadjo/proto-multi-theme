import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'xyz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hub';
  backgroundColor = environment.themeColor;

  constructor() {
    this.title = environment.themeName;
  }
}
