import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./article.state";
import { ArticlesService } from "../services/get-articles.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { fetchArticle, fetchArticles, fetchArticlesError, fetchArticlesSuccess, fetchArticleSuccess } from "./article.actions";
import { catchError, from, map, mergeMap, of, switchMap } from "rxjs";

@Injectable()
export class ArticleEffects {
    constructor(        
        private actions$: Actions,
        private articleService: ArticlesService
        ){}

    loadArticles$ = createEffect(()=>
        this.actions$.pipe(
            ofType(fetchArticles),
            switchMap(() => this.articleService.getArticles().pipe(
                map(articles => fetchArticlesSuccess({articles})),
                catchError(() => of(fetchArticlesError()))
              ))
    ));

    loadArticle$ = createEffect(()=>
        this.actions$.pipe(
            ofType(fetchArticle),
            switchMap((action) => this.articleService.getArticle(action.articleIdFromRoute).pipe(
                map(article => fetchArticleSuccess({article})),
                catchError(() => of(fetchArticlesError()))
            ))
        ))

}