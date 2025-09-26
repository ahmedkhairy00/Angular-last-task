import { Directive, ElementRef, HostListener,Renderer2  } from '@angular/core';

@Directive({
  selector: '[appChangeBorder]'
})
export class ChangeBorderDirective {
  private parent: HTMLElement;
  constructor(private el : ElementRef, private renderer: Renderer2) {
    
    // Save parent reference
    this.parent = this.el.nativeElement.parentElement;

     // Add smooth animation
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease, box-shadow 0.3s ease');
    if (this.parent) {
      this.renderer.setStyle(this.parent, 'transition', 'background-color 0.3s ease');
    }
   }

  
  // Hover → Fly + scale + transparent background
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.2) translateY(-10px)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 10px 20px rgba(0,0,0,0.25)');
    this.renderer.setStyle(this.el.nativeElement, 'background' , 'transparent');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');

    if (this.parent) {
      this.renderer.setStyle(this.parent, 'background-color', 'rgba(255,255,255,0.2)'); // transparent white overlay
    }
  }

  // Leave → reset everything
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1) translateY(0)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');

    if (this.parent) {
      this.renderer.removeStyle(this.parent, 'background-color');
    }
    
  }

  
}

