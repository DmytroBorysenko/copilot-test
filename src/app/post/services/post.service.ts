import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../../shared/interfaces/post.interface';
import { QueryParam } from '../../shared/interfaces/query-param.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private API_URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts(queryParam: QueryParam = { _limit: 1 }): Observable<Post[]> {
    let params = new HttpParams({
      fromObject: {
        _limit: queryParam._limit.toString(),
      },
    });
    return this.http.get<Post[]>(this.API_URL, { params });
  }
}
