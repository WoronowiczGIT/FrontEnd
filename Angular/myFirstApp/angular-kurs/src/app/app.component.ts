import { Component } from '@angular/core';
import { ClickService } from './serviceDemo/services/click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickService]
})
export class AppComponent {
  title = 'Tytuł kursu';
}



