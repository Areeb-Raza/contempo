import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormStepComponent } from './form-step/form-step.component';

const routes: Routes = [
  {
    path: 'new-quote',

    component: QuoteFormComponent,
    children: [
      {
        path: 'step/:id',
        component: FormStepComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstructionRoutingModule {}
