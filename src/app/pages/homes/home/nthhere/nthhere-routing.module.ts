import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NthhereComponent } from './nthhere.component';

const routes: Routes = [{ path: '', component: NthhereComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NthhereRoutingModule { }
