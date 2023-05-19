import { Component, OnInit } from '@angular/core';
import { PlayList } from '../shared/models';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  public leftTab: boolean = true;
  public rightTab: boolean = false;
  public trackPlaying: boolean = false;
  public nowPlayingList: PlayList[] = [
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Lose Yourself',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Love the way you are',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Mockingbird',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Venom',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Mosh',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Lose Yourself',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Love the way you are',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Mockingbird',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Venom',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Mosh',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Lose Yourself',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Love the way you are',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Mockingbird',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Venom',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Mosh',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Lose Yourself',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Love the way you are',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Mockingbird',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Venom',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Mosh',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Lose Yourself',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Love the way you are',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Mockingbird',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Venom',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_item.png',
      songTitle: 'Mosh',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
  ];
  public suggestedList: PlayList[] = [
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Lose Yourself',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Love the way you are',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Mockingbird',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Venom',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Mosh',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Lose Yourself',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Love the way you are',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Mockingbird',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Venom',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Mosh',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Lose Yourself',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Love the way you are',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Mockingbird',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Venom',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Mosh',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Lose Yourself',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Love the way you are',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Mockingbird',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Venom',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Mosh',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Lose Yourself',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Love the way you are',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Mockingbird',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Venom',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
    {
      coverImg: '../../assets/img/playlist_05.png',
      songTitle: 'Mosh',
      artistName: 'Cher',
      duration: '4:45',
      playing: false,
    },
  ];
  public playlist: PlayList[] = this.nowPlayingList;

  constructor() {}

  ngOnInit(): void {}

  switchToleftTab(): void {
    this.leftTab = true;
    this.rightTab = false;
    this.playlist = this.nowPlayingList;
  }

  switchTorightTab(): void {
    this.leftTab = false;
    this.rightTab = true;
    this.playlist = this.suggestedList;
  }

  turnOnPlayer(i: number) {
    for (let j = 0; j < this.playlist.length; j++) {
      if (i === j) {
        this.playlist[i].playing = !this.playlist[i].playing;
      } else {
        this.playlist[j].playing = false;
      }
    }
  }
}
