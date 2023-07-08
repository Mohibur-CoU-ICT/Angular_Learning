import { CommonModule } from '@angular/common';
import { DummyService } from './services/dummy.service';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [ShortenPipe, FilterPipe],
  imports: [CommonModule, FormsModule],
  exports: [ShortenPipe, FilterPipe, CommonModule, FormsModule],
  providers: [DummyService],
})
export class SharedModule {}
