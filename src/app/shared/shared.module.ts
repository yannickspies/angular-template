import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonHolderComponent } from './button-holder/button-holder.component';
import { TextComponent } from './text/text.component';
import { HeadingComponent } from './heading/heading.component';

@NgModule({
  imports: [ButtonComponent, CommonModule, ButtonHolderComponent, TextComponent, HeadingComponent],
  exports: [ButtonComponent, ButtonHolderComponent, TextComponent, HeadingComponent],
})
export class SharedModule {}
