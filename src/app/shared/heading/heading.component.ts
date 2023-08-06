import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingComponent {
  @Input() public size: Size = 'xl';
}
