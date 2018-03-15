import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { TrackService } from '../track.service';
import { Track } from '../track.model';
import { Router } from '@angular/router';
import { TrackMockService } from '../track-mock.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})

export class SongComponent implements OnInit {

  track: string;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private trackService: TrackService,
              private router: Router, public trackMockService: TrackMockService) { 
    this.trackMockService.selectSong();
    /*this.http.get<Track>('http://localhost:8888/getTrack').subscribe(res => {
      this.track = res.id;
      this.trackService.saveTrack(res);
    })*/
  }

  

  ngOnInit() {
  }

  getTrackUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed?uri=spotify:track:"+this.track);
  }

  goToAnswer(){
    this.router.navigate(['/answer']);
  }

  updateSong() {
    this.http.get<Track>('http://localhost:8888/getTrack').subscribe(res => {
      this.track = res.id;
      this.trackService.saveTrack(res);
    })
  }
}
