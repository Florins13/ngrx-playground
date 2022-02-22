import { state } from '@angular/animations';
import {createReducer, on} from '@ngrx/store';
import { Article } from '../entity/article';
import { addArticle, fetchArticle, fetchArticlesSuccess, fetchArticleSuccess, removeArticle } from './article.actions';

export const initialState: Article[] = [];

export const articlesReducer = createReducer(
    initialState,
    on(addArticle, (state, {article})=>{
        return [...state, article]; 
    }),
    on(removeArticle, (state, {articleId})=> state.filter(({id}) => id !== articleId)),
    on(fetchArticlesSuccess, (state, {articles}) => articles),
    on(fetchArticleSuccess, (state, {article}) => [...state,article])
)
