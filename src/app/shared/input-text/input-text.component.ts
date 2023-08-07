import { ChangeDetectionStrategy, Component, Input, OnInit, Optional, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { noop, takeUntil, distinctUntilChanged } from 'rxjs';
import { Size } from '../text/text.component';
import { BaseComponent } from '../base/base.component';

export type SupportedInputTypes = 'text' | 'password' | 'email' | 'number';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent extends BaseComponent implements ControlValueAccessor, OnInit {
  @Input() public size: Size = 'base';
  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public placeholder?: string | undefined;
  @Input() public type: SupportedInputTypes = 'text';
  @Input() public min: number | undefined;

  public formControl = new FormControl<string | null>(null);
  public required = false;

  private fnOnTouchedCallback: () => void = noop;
  private fnOnChangeCallback: (value: string | null) => void = noop;

  public constructor(@Self() @Optional() public control?: NgControl) {
    super();

    if (this.control) {
      this.control.valueAccessor = this;
    }

    this.formControl.valueChanges.pipe(takeUntil(this.destroy$), distinctUntilChanged()).subscribe((value) => {
      this.fnOnChangeCallback(value);
    });
  }

  public ngOnInit(): void {
    // Inherit validators from ControlValueAccessor
    this.formControl.setValidators(this.control?.control?.validator as ValidatorFn);
    this.required = this.control?.control?.hasValidator(Validators.required) || false;
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
}
