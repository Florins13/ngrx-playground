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
import { StoreModule } from '@ngrx/store';
import { articlesReducer} from './state/article.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './state/article.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

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
    ReactiveFormsModule,
    StoreModule.forRoot({articles: articlesReducer}),
    EffectsModule.forRoot([ArticleEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
