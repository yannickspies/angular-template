import { ChangeDetectionStrategy, Component, Input, Optional, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { noop, takeUntil } from 'rxjs';
import { Size, TextComponent } from '../text/text.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextComponent],
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent extends BaseComponent implements ControlValueAccessor {
  // Every checkbox has its own unique increment number, checkbox needs a unique id.
  static increment = 1;

  @Input() public label?: string;
  @Input() public description?: string;

  /**
   * Unique value for the checkbox.
   */
  @Input() public id = `app-checkbox-${++CheckboxComponent.increment}`;
  @Input() public name?: string;
  @Input() public size: Size = 'base';
  @Input() public labelSize: Size = 'sm';

  public formControl = new FormControl<boolean | null>(null);

  private fnOnTouchedCallback: () => void = noop;
  private fnOnChangeCallback: (value: boolean | null) => void = noop;

  public constructor(@Self() @Optional() public control?: NgControl) {
    super();

    if (this.control) {
      this.control.valueAccessor = this;
    }

    this.formControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((x) => {
      if (x !== this.control?.value) {
        this.fnOnChangeCallback(x);
      }
    });
  }

  public registerOnChange(fn: (value: boolean | null) => void): void {
    this.fnOnChangeCallback = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.fnOnTouchedCallback = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  }

  public writeValue(value: boolean): void {
    this.formControl.patchValue(value, { emitEvent: false, onlySelf: true });
  }
}
