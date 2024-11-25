import {
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { ResizableDirective } from './resizable.directive';

const BAR_WIDTH = 2;

@Component({
  selector: 'th[resizable]',
  standalone: true,
  imports: [ResizableDirective],
  templateUrl: './resizable.component.html',
  styleUrl: './resizable.component.scss',
})
export class ResizableComponent implements OnInit {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  @HostBinding('style.width.px')
  width: number | null = null;

  public ngOnInit(): void {
    this.setResizableBarMargin();
  }

  public onResize(width: any) {
    this.width = Number(width);
  }

  private setResizableBarMargin(): void {
    const thElement = this.getClosestThElement();
    const resizableBar = this.getResizableBarElement();

    if (thElement && resizableBar) {
      const paddingRight = this.extractNumericPadding(thElement);

      this.renderer.setStyle(
        resizableBar,
        'margin-right',
        `-${paddingRight + BAR_WIDTH}px`
      );
    }
  }

  private getClosestThElement(): HTMLElement | null {
    return this.elementRef.nativeElement.closest('th');
  }

  private getResizableBarElement(): HTMLElement | null {
    return this.elementRef.nativeElement.querySelector('.resizable-bar');
  }

  /**
   * Extracts the numeric padding-right value from the given element.
   * @param element The element to calculate padding for.
   * @returns The numeric value of padding-right in pixels.
   */
  private extractNumericPadding(element: HTMLElement): number {
    if (typeof window === 'undefined') return 0;

    const style = window.getComputedStyle(element);

    return parseFloat(style.paddingRight) || 0;
  }
}
