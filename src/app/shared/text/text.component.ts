import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
export type TextAlign = 'left' | 'right' | 'center';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {
  @Input() public isMuted = false;
  @Input() public isBold = false;
  @Input() public size: Size = 'base';
  @Input() public textAlign: TextAlign = 'left';
  @Input() public truncate = false;

  public content?: string;
}
