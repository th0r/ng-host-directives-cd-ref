import {ChangeDetectorRef, Directive, OnInit} from '@angular/core';

@Directive({
  selector: '[appSomeHost]',
  standalone: true,
})
export class SomeHostDirective implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.cd.detectChanges();
    }, 1000);
  }
}
