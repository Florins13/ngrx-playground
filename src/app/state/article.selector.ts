import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Article } from "../entity/article";
import { AppState } from "./article.state";

export const selectArticle = (state: AppState) => state.article;

export const selectArticles = createFeatureSelector<ReadonlyArray<Article>>('articles');

export const selectAllArticles = createSelector(
    selectArticles,
    (state: ReadonlyArray<Article>) => state
);

export const selectOneArticle = createSelector(
    selectArticle,
    (state: Article) => state
);
