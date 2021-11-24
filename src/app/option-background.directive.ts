import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appOptionBackground]'
})
export class OptionBackgroundDirective {
  @Input () correctAnswer: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') onAnswered() {
      if(this.correctAnswer) {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
      } else {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
      }
    }
}
