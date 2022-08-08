import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetArticlesService } from 'src/app/services/article/get-articles.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private articlesService: GetArticlesService,  private router:Router) {}

  ngOnInit(): void {
    this.articlesService.getPaginated(1,10);
    console.log(this.articlesService)
  }

  navigateTo(url:string){
    this.router.navigate([url]);
  }

}
