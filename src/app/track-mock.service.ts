import { Injectable } from '@angular/core';

@Injectable()
export class TrackMockService {

  songs = [
    {
      title:'Papagena Papageno',
      src:'./assets/songs/schoen_ist_auf.mp3',
      cover:'https://uc.uxpin.com/files/833359/828193/roy_black_anita-schoen_ist_es_auf_der_welt_zu_sein_s-96c66b.jpg'
    },
    {
      title:'Rotte Lippen',
      src:'./assets/songs/rote_lippen.mp3',
      cover:'https://uc.uxpin.com/files/833359/828193/51TtocdXn5L._SS500-19b248.jpg'
    },
    {
      title:'Conny',
      src:'./assets/songs/conny_froboess.mp3',
      cover:'https://uc.uxpin.com/files/833359/828193/71zo3SKrPcL._SX355_-08c4f0.jpg'
    },
    {
      title:'Mozart',
      src:'./assets/songs/fur_elise.mp3',
      cover:'./assets/covers/mozart2.jpg'
    },
    {
      title:'Papagena Papageno',
      src:'./assets/songs/carmen_lamour.mp3',
      cover:'https://uc.uxpin.com/files/833359/828193/Carmen-9c3341.jpg'
    },
    {
      title:'Mozart 2',
      src:'./assets/songs/turkish_mozart.mp3',
      cover:'https://uc.uxpin.com/files/833359/828193/mozart-1343837321-editorial-long-form-1-fa5fca.jpg'
    },
  ]
  selectedSong: any;

  constructor() { 
    this.selectedSong = this.songs[0];
  }

  selectSong() {

    const index = Math.floor(Math.random() * this.songs.length);
    this.selectedSong =  this.songs[index];
    return this.selectedSong;
  }

  getSongTitle() {
    return this.selectedSong.title;
  }

  getSongSrc() {
    return this.selectedSong.src;
  }

  getSongCover() {
    return this.selectedSong.cover;
  }
}
