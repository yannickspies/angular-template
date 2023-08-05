import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonHolderComponent } from './button-holder/button-holder.component';

@NgModule({
  imports: [ButtonComponent, CommonModule, ButtonHolderComponent],
  exports: [ButtonComponent, ButtonHolderComponent],
})
export class SharedModule {}
