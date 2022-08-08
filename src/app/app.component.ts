import { Component, OnInit} from '@angular/core';
import { NbMenuItem, NbThemeService } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article, ArticlesState } from "./ngrx/states/article.states";
import * as ArticleActions from './ngrx/actions/article.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  title = 'TheNews';
  constructor(private sidebarService: NbSidebarService, 
              private router:Router, 
              private themeService: NbThemeService,
              private store: Store<{articles:ArticlesState}>) {
    this.articles$=this.store.select((state)=>state.articles.list)
}

  ngOnInit(): void {}

  navigateTo(url:string){
    this.router.navigate([url])
  }


  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
  items: NbMenuItem[] = [
    {
      title: 'Profile',
      badge: {
        text: '3',
        status: 'primary',
      },
      children: [
        {
          title: 'Messages',
          badge: {
            status: 'danger',
          },
        },
        {
          title: 'Notifications',
          badge: {
            dotMode: true,
            status: 'warning',
          },
        },
        {
          title: 'Emails',
          badge: {
            text: 'new',
            status: 'success',
          },
        },
      ],
    },
  ];


  articles$: Observable<Article[]>;

  loadArticles(){
    this.store.dispatch(ArticleActions.getPaginate({
      page: 1,
      perPage:1,
    }));
  }

}

