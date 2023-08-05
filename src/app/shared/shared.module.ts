import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [],
  imports: [ButtonComponent, CommonModule],
  exports: [ButtonComponent],
})
export class SharedModule {}
