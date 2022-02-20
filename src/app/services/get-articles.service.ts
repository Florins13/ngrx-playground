import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../entity/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  baseUrl: string = `https://jsonplaceholder.typicode.com`
  @Output() newArticle = new EventEmitter<Article>();
  
  constructor(private http:HttpClient) { }

  
  emitNewArticle(newArticle: Article){
    this.newArticle.emit(newArticle);
  }

  getArticles(){
    return this.http.get<Article[]>(`${this.baseUrl}/posts`);
  }

  getArticle(id:number){
    return this.http.get<Article>(`${this.baseUrl}/posts/${id}`);
  }

  addArticle(title: string,body: string, userId: number){
    return this.http.post<{id:number,title: string,body: string, userId: number}>(`${this.baseUrl}/posts`, {title: title,body: body, userId: userId});
  }

  removeArticle(id:number){
    return this.http.delete(`${this.baseUrl}/posts/${id}`);
  }
}
