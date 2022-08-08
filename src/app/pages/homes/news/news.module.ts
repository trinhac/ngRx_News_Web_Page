import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { GetArticlesService } from 'src/app/services/article/get-articles.service';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule, SharedModule],
})
export class NewsModule {}
