import { Article } from "../entity/article";

export interface AppState{
    articles: ReadonlyArray<Article>;
    article: Article;
}