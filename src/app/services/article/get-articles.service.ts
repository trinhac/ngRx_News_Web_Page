import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetArticlesService {

  constructor(private http: HttpClient) { }

  getPaginated(page: number, perPage: number): Observable <any>{
    let observeResutl = this.http.get(
      `https://social.runwayclub.dev/api/articles/latest?page=${page}&per_page=${perPage}`
      );
      return observeResutl;
    };
    
  }

