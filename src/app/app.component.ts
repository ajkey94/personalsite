import { Component } from '@angular/core';
import { AboutMeComponent } from '../components/body-components/about-me/about-me.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AboutMeComponent]
})
export class AppComponent {
  title = 'Alex\'s Personal Site';
}
