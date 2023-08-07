import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ValidatorFn } from '@angular/forms';
import { noop, takeUntil } from 'rxjs';
import { SupportedInputTypes } from '../input-text/input-text.component';
import { Size } from '../text/text.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-input-password-with-toggle',
  templateUrl: './input-password-with-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordWithToggleComponent extends BaseComponent implements ControlValueAccessor, OnInit {
  @Input() public size: Size = 'base';
  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public placeholder?: string;

  public formControl = new FormControl<string | null>(null);

  public inputType: SupportedInputTypes = 'password';

  private fnOnTouchedCallback: () => void = noop;
  private fnOnChangeCallback: (value: string | null) => void = noop;

  public constructor(
    private readonly cdr: ChangeDetectorRef,
    @Self() @Optional() public control?: NgControl
  ) {
    super();

    if (this.control) {
      this.control.valueAccessor = this;
    }

    this.formControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.fnOnChangeCallback(value);
    });
  }

  public ngOnInit(): void {
    // Inherit validators from ControlValueAccessor
    this.formControl.setValidators(this.control?.control?.validator as ValidatorFn);
  }

  public writeValue(value: string): void {
    this.formControl.patchValue(value, { emitEvent: false, onlySelf: true });
  }

  public registerOnChange(fn: (value: string | null) => void): void {
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

  public onToggle(event: Event): void {
    event.stopPropagation();
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
    this.cdr.detectChanges();
  }
}
