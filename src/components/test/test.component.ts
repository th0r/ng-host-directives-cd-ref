import { Component } from '@angular/core';
import {SomeHostDirective} from '../../directives/some-host.directive';

@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  hostDirectives: [SomeHostDirective]
})
export class TestComponent {}
