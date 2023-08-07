import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-validation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormValidationComponent {
  @Input()
  public errorMessage?: string = undefined;
}
