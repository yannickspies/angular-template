import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Size } from '../text/text.component';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() public name!: string;

  /**
   * If not set, it will adopt the size of the parents HTML element.
   */
  @Input() public size?: Size;

  public iconName = '';

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['name']?.currentValue) {
      const name = changes['name'].currentValue;

      this.iconName = `fa fa-${name}`;

      this.changeDetectorRef.detectChanges();
    }
  }
}
