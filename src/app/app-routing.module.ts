import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageHomeComponent} from './routers/page-home/page-home.component'
import {PageNotFoundComponent} from './routers/page-not-found/page-not-found.component'
import {PageVideoPlayComponent} from './routers/page-video-play/page-video-play.component';
import {PageBlogDetailComponent} from './routers/page-blog-detail/page-blog-detail.component';


const appRoutes: Routes = [
  {path: 'home', component: PageHomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'play', component: PageVideoPlayComponent},
  {path: 'blog/detail', component: PageBlogDetailComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routedComponents = [PageHomeComponent, PageNotFoundComponent, PageVideoPlayComponent, PageBlogDetailComponent];


