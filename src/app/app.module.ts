import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,
         NbLayoutModule, 
         NbSidebarModule,
         NbThemeService,
         NbMenuModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { FormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { articlesReducer } from './ngrx/reducers/article.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './ngrx/effects/article.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    StoreModule.forRoot ({
      articles: articlesReducer,
    }, {}),
    EffectsModule.forRoot([
      ArticleEffects, 
     ])
  ],
  providers: [NbThemeService],
  bootstrap: [AppComponent],
})
export class AppModule { }


