import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonHolderComponent } from './button-holder/button-holder.component';
import { TextComponent } from './text/text.component';
import { HeadingComponent } from './heading/heading.component';
import { IconComponent } from './icon/icon.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputPasswordWithToggleModule } from './input-password-with-toggle/input-password-with-toggle.module';

@NgModule({
  imports: [
    ButtonComponent,
    CommonModule,
    ButtonHolderComponent,
    TextComponent,
    HeadingComponent,
    IconComponent,
    InputTextComponent,
    InputPasswordWithToggleModule,
  ],
  exports: [
    ButtonComponent,
    ButtonHolderComponent,
    TextComponent,
    HeadingComponent,
    IconComponent,
    InputTextComponent,
    InputPasswordWithToggleModule,
  ],
})
export class SharedModule {}
