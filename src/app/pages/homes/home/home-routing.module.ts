import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
    {
      path: '',
      loadChildren: () =>
      import('../news/news.module').then ((m) => m.NewsModule)
    },
    
    {
      path: 'nothinghere',
      loadChildren: () =>
      import('../home/nthhere/nthhere.module').then ((m) => m.NthhereModule)
    },
    
    ] 
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
