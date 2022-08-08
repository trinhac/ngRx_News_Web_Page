import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetArticlesService } from 'src/app/services/article/get-articles.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(private articlesService: GetArticlesService,){}

  articles: any[] = [];

  ngOnInit(): void{
    this.articlesService.getPaginated(1,10).subscribe((data)=>{
      this.articles.length = 0
      for(let article of data) {
        this.articles.push(article);
      }
    });
  } 

  reDir(link:string){
    window.open(link,'_blank');
  }
}

  

  // constructor(private http: HttpClient) { }
  // private url: string = 'https://social.runwayclub.dev/';
  // articles: any[] = [];
  // ngOnInit(): void {
  //   this.getArticlesWithNumbPage(10, 1);
  // }
  // getAllArticles() {
  //   this.http.get(this.url + 'api/articles/latest').subscribe((data) => {
  //     this.articles = [...(data as any)];
  //     console.log(this.articles);
  //   });
  // }
  // getArticlesWithNumbPage(perPage: number, page: number) {
  //   this.http
  //     .get(this.url + `api/articles/latest?page=${page}&per_page=${perPage}`)
  //     .subscribe((data) => {
  //       this.articles = [...(data as any)];
  //       for (let article of this.articles) {
  //         this.http
  //           .get(this.url + 'api/articles/' + article.id)
  //           .subscribe((data) => {
  //             article['body_html'] = (data as any)['body_html'];
  //           });
  //       }
  //       console.log(this.articles);
  //     });
  // }
  // 