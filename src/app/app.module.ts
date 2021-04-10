import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AnimboxComponent } from './animbox.component';
import { MouseComponent } from './mouse.component';
import { FadeBlockComponent } from './fadeblock.component';

import { HomeComponent } from './routes/home.component';
import { BasicComponent } from './routes/basic.component';
import { AdvancedComponent } from './routes/advanced.component';
import { ContainedComponent } from './routes/contained.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { from } from 'rxjs';

const animationRoutes:Routes = [
  {
    path: 'animation-home',
    component: HomeComponent
  },
  {
    path: 'animation-basics',
    component: BasicComponent
  },
  {
    path: 'animation-contained',
    component: ContainedComponent
  },
  {
    path: 'animation-advanced',
    component: AdvancedComponent
  },
  {
    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AnimboxComponent,
    MouseComponent,
    FadeBlockComponent,
    HomeComponent,
    BasicComponent,
    AdvancedComponent,
    ContainedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(animationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
