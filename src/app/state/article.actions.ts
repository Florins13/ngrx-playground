import {createAction,props} from '@ngrx/store';
import {Article} from '../entity/article';

export const addArticle = createAction(
    '[Article] Add Article',
    props<{article: Article}>()
);

export const removeArticle = createAction(
    '[Article] Remove Article',
    props<{articleId: number}>()
);

export const fetchArticles = createAction('[Article List] Fetch Articles');

export const fetchArticle = createAction('[Article] Fetch Article',
    props<{articleIdFromRoute: number}>()
);

export const fetchArticleSuccess = createAction(
    '[Article] Fetch Article on Success',
    props<{article: Article}>()
);

export const fetchArticlesSuccess = createAction(
    '[Article List] Fetch Articles on Success',
    props<{articles: Article[]}>()
);

export const fetchArticlesError = createAction('[Article List] Fetch Articles on Error');