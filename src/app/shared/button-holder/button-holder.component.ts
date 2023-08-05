import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-holder',
  templateUrl: './button-holder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class ButtonHolderComponent {
  @Input() public side: 'between' | 'start' | 'center' | 'end' = 'end';
}
