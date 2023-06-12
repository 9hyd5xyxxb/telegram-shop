import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButton, MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule, //
    MatButtonModule,
  ],
  exports: [
    MatButton, //
  ],
})
export class UiModule {}
