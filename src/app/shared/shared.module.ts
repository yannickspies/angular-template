import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonHolderComponent } from './button-holder/button-holder.component';
import { TextComponent } from './text/text.component';
import { HeadingComponent } from './heading/heading.component';
import { IconComponent } from './icon/icon.component';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  imports: [
    ButtonComponent,
    CommonModule,
    ButtonHolderComponent,
    TextComponent,
    HeadingComponent,
    IconComponent,
    InputTextComponent,
  ],
  exports: [ButtonComponent, ButtonHolderComponent, TextComponent, HeadingComponent, IconComponent, InputTextComponent],
})
export class SharedModule {}
