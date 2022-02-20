import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './list-article/add-article/add-article.component';
import { ArticleComponent } from './list-article/article/article.component';
import { ListArticleComponent } from './list-article/list-article.component';

const routes: Routes = [
  { path: 'articles', component: ListArticleComponent },
  { path: 'articles/:id', component: ArticleComponent},
  { path: 'addArticle', component: AddArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
