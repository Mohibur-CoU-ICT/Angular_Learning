import { AuthComponent } from './auth/auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerCompponent } from './shared/loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthComponent, LoadingSpinnerCompponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'auth', component: AuthComponent }]),
  ],
})
export class AuthModule {}
