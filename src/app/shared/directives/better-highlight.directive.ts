import { 
  Directive, 
  ElementRef, 
  Renderer2, 
  OnInit,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'blue';
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.eleRef, "background-color", 'blue');
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = 'red';
  }

}
