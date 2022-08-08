import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => 
    import('./pages/homes/home/home.module').then(m => m.HomeModule)
  },
  { path: 'calculation-page', loadChildren: () => 
    import('./pages/calculation-page/calculation-page.module').then(m => m.CalculationPageModule) },
  { path: 'news', loadChildren: () => import('./pages/homes/news/news.module').then(m => m.NewsModule) },
  { path: 'nthhere', loadChildren: () => import('./pages/homes/home/nthhere/nthhere.module').then(m => m.NthhereModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
