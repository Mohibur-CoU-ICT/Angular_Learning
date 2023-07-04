import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [FilterPipesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'filter-pipes', component: FilterPipesComponent },
    ]),
  ],
})
export class FilterModule {}
