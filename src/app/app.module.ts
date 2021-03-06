import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './list-article/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { AddArticleComponent } from './list-article/add-article/add-article.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListArticleComponent,
    FooterComponent,
    ArticleComponent,
    AddArticleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
