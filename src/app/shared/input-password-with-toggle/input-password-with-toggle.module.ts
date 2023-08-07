import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputPasswordWithToggleComponent } from './input-password-with-toggle.component';
import { IconComponent } from '../icon/icon.component';
import { InputTextComponent } from '../input-text/input-text.component';

@NgModule({
  imports: [CommonModule, InputTextComponent, ReactiveFormsModule, IconComponent],
  declarations: [InputPasswordWithToggleComponent],
  exports: [InputPasswordWithToggleComponent],
})
export class InputPasswordWithToggleModule {}
