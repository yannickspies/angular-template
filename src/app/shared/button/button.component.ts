import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type Appearance = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class ButtonComponent {
  @Input() appearance: Appearance = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() public isDisabled?: boolean;
  @Input() public rounded = false;
  @Input() public isBlock?: boolean;
  @Input() public type: ButtonType = 'button';

  @Output() public click = new EventEmitter<Event>();

  public onClick(event: Event): void {
    event.stopPropagation();

    if (this.isDisabled !== true && this.click.observed) {
      this.click.emit();
    }
  }
}
