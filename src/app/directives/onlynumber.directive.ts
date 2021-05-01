import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnlynumber]'
})
export class OnlynumberDirective {

  @Input() appOnlyNumber: boolean;

  constructor() { }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent): boolean {
    const regExp = new RegExp('^[0-9]');
    if (regExp.test(event.key)) {
      return true;

    } else if (event.ctrlKey) {
      return true;

    } else {
      return false;
    }


  }

}
