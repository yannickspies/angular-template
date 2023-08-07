import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseComponent {
  protected destroy$: Subject<void> = new Subject();

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
    this.destroy$ = new Subject();
  }
}
