import { Directive, HostListener, HostBinding, Input } from '@angular/core';
import { Exercice1Component } from './exercice-1.component';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') changeColor: string;
  @Input() textColor : string;

  @HostListener('window:keydown', ['$event']) windowonKeyDown($event) {
    console.log($event);

    switch($event.key){
      case 'ArrowLeft':
        this.changeColor ='red';
        break;
      case 'ArrowRight':
        this.changeColor = 'purple';
        break;
      case 'ArrowUp':
        this.changeColor = 'green';
        break;
      case 'ArrowDown':
        this.changeColor = 'blue';
        break;
      default:
        this.changeColor = null;
    }
  }
  



  constructor() { }


}
