import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteFormComponent } from './quote-form/quote-form.component';

const routes: Routes = [
  {
    path: '',
    component: QuoteFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstructionRoutingModule {}
