import { Injectable } from '@angular/core';
import { Track } from './track.model';

@Injectable()
export class TrackService {

  track: Track;

  constructor() { }

  saveTrack(newTrack: Track) {
    this.track = newTrack;
  }

  getTitle(): string {
    return this.track ? this.track.title : null;
  }
}
