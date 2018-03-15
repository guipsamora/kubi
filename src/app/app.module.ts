import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { StartComponent } from './start/start.component';
import { AnswerComponent } from './answer/answer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TrackService } from './track.service';
import { TrackMockService } from './track-mock.service';

const routes: Routes = [
	{ path: 'song', component: SongComponent },
	{ path: 'start', component: StartComponent },
  { path: 'answer', component: AnswerComponent },
  { path: '**', component: StartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    StartComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    TrackService,
    TrackMockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
