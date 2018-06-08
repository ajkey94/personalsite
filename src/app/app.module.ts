import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../components/body-components/about-me/about-me.component';
import { PhotographyComponent } from '../components/body-components/photography/photography.component';
import { ProjectsComponent } from '../components/body-components/projects/projects.component';

const appRoutes: Routes = [
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    PhotographyComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
