import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ConstructionRoutingModule } from './construction-routing.module';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [QuoteFormComponent, QuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConstructionRoutingModule,
    NzButtonModule,
    NzCarouselModule,
    NzTypographyModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzToolTipModule,
    NzRadioModule,
    NzIconModule,
    NzAffixModule,
    NzTagModule,
  ],
})
export class ConstructionModule {}
