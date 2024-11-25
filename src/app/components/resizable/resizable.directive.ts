import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Output, inject } from '@angular/core';
import {
  distinctUntilChanged,
  map,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { Observable, fromEvent } from 'rxjs';

@Directive({
  selector: '[resizable]',
  standalone: true,
})
export class ResizableDirective {
  private readonly elementRef = inject(ElementRef);
  private readonly documentRef = inject(DOCUMENT);

  @Output()
  readonly resizable: Observable<number>;

  constructor() {
    this.resizable = this.initializeResize();
  }

  private initializeResize(): Observable<number> {
    return fromEvent<MouseEvent>(
      this.elementRef.nativeElement,
      'mousedown'
    ).pipe(
      tap((event: MouseEvent) => event.preventDefault()),
      switchMap(() => {
        const initialWidth = this.getInitialWidth();

        return fromEvent<MouseEvent>(this.documentRef, 'mousemove').pipe(
          map(({ clientX }) => this.calculateNewWidth(clientX, initialWidth)),
          distinctUntilChanged(),
          takeUntil(fromEvent(this.documentRef, 'mouseup'))
        );
      })
    );
  }

  private getInitialWidth(): { width: number; right: number } {
    const closestTh = this.elementRef.nativeElement.closest('th');

    return closestTh
      ? closestTh.getBoundingClientRect()
      : { width: 0, right: 0 };
  }

  private calculateNewWidth(
    clientX: number,
    initial: { width: number; right: number }
  ): number {
    const MIN_COLUMNS_WIDTH = 60;

    return Math.max(initial.width + clientX - initial.right, MIN_COLUMNS_WIDTH);
  }
}
