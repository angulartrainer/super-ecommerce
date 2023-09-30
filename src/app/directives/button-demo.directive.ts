import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// attribute
// class

// <button superButtonDemo>Hello</button>

@Directive({
  selector: '[superButtonDemo]',
  standalone: true
})
export class ButtonDemoDirective {

  @HostListener("mouseover") onMouseOver(){
    this.renderer.setStyle(this.el.nativeElement, "color", "red");
  }

  @HostListener("mouseout") onMouseOut(){
    this.renderer.setStyle(this.el.nativeElement, "color", "yellow");
  }

  constructor(private el: ElementRef, private renderer : Renderer2) { 
    
  
      this.renderer.setStyle(this.el.nativeElement, "color", "yellow");
  }

}
