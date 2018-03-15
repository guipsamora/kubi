import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Router } from '@angular/router';
import { TrackMockService } from '../track-mock.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  trackTitle: string;

  constructor(private trackService: TrackService, private router: Router, public trackMockService: TrackMockService) { 

  }

  ngOnInit() {
    this.trackTitle = this.trackService.getTitle();
  }

  goToStart() {
    this.router.navigate(['/start']);
  }

  goToSong() {
    this.router.navigate(['/song']);
  }

}
