import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appScrollReveal]',
    standalone: true
})
export class ScrollRevealDirective implements OnInit {
    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        // Initial State: Invisible and slightly shifted down
        this.renderer.addClass(this.el.nativeElement, 'opacity-0');
        this.renderer.addClass(this.el.nativeElement, 'translate-y-8');
        this.renderer.addClass(this.el.nativeElement, 'transition-all');
        this.renderer.addClass(this.el.nativeElement, 'duration-1000');
        this.renderer.addClass(this.el.nativeElement, 'ease-out');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Reveal State: Visible and back to original position
                    this.renderer.removeClass(this.el.nativeElement, 'opacity-0');
                    this.renderer.removeClass(this.el.nativeElement, 'translate-y-8');

                    this.renderer.addClass(this.el.nativeElement, 'opacity-100');
                    this.renderer.addClass(this.el.nativeElement, 'translate-y-0');

                    // Stop observing once revealed (one-time animation)
                    observer.unobserve(this.el.nativeElement);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of the element is visible
            rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly before bottom
        });

        observer.observe(this.el.nativeElement);
    }
}
