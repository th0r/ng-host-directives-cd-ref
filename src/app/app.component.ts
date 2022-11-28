import { Component } from '@angular/core';
import {TestComponent} from '../components/test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    TestComponent
  ],
  standalone: true
})
export class AppComponent {
  title = 'ng-host-directives-cd-ref';
}
