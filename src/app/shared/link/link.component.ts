import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appearance } from '../button/button.component';
import { Size } from '../text/text.component';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() public appearance: Appearance = 'primary';
  @Input() public isDisabled?: boolean;
  @Input() public size: Size = 'base';
  @Input() public isBold = false;
  @Input() public truncate = false;

  @HostBinding('role') public role = 'link';
}
