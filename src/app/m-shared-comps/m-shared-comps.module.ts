import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { SectionComponent } from './section/section.component';
import { ImageholderComponent } from './imageholder/imageholder.component';
import { HeadingComponent } from './heading/heading.component';

@NgModule({
  declarations: [
    DividerComponent,
    SectionComponent,
    ImageholderComponent,
    HeadingComponent,
  ],
  imports: [CommonModule],
  exports: [
    DividerComponent,
    SectionComponent,
    ImageholderComponent,
    HeadingComponent,
  ],
})
export class MSharedCompsModule {}
