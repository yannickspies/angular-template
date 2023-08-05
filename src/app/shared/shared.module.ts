import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonHolderComponent } from './button-holder/button-holder.component';
import { TextComponent } from './text/text.component';

@NgModule({
  imports: [ButtonComponent, CommonModule, ButtonHolderComponent, TextComponent],
  exports: [ButtonComponent, ButtonHolderComponent, TextComponent],
})
export class SharedModule {}
