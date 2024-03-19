import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { SectionComponent } from './section/section.component';
import { ImageholderComponent } from './imageholder/imageholder.component';
import { HeadingComponent } from './heading/heading.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    DividerComponent,
    SectionComponent,
    ImageholderComponent,
    HeadingComponent,
    ButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    DividerComponent,
    SectionComponent,
    ImageholderComponent,
    HeadingComponent,
    ButtonComponent,
  ],
})
export class MSharedCompsModule {}
