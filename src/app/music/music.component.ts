import { Component, OnInit } from '@angular/core';
import { AlbumList, GenreList, PlayList } from '../shared/models';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  public genreList: GenreList[] = [
    {genreName: 'RAP', bgColor: '#2449ee', gradient: 'linear-gradient(53deg, #2449ee 0.00%, #5a72f3 100.00%)', hover: false},
    {genreName: 'Rock', bgColor: '#ee2424', gradient: 'linear-gradient(46deg, #ee2424 0.00%, #f35454 100.00%)', hover: false},
    {genreName: 'R&B and soul', bgColor: '#c53aff', gradient: 'linear-gradient(49deg, #c53aff 0.00%, #cd5cfc 100.00%)', hover: false},
    {genreName: 'Jazz', bgColor: '#e19614', gradient: 'linear-gradient(53deg, #e19614 0.00%, #ffbc48 100.00%)', hover: false},
    {genreName: 'Blues', bgColor: '#14a2e1', gradient: 'linear-gradient(54deg, #14a2e1 0.00%, #0d6b94 100.00%)', hover: false},
    {genreName: 'Indie', bgColor: '#8e47d2', gradient: 'linear-gradient(49deg, #8e47d2 0.00%, #5b319c 100.00%)', hover: false},
    {genreName: 'Reggae', bgColor: '#0ab42a', gradient: 'linear-gradient(-129deg, #0ab42a 0.00%, #2aef4b 100.00%)', hover: false},
    {genreName: 'Country', bgColor: '#bf6739', gradient: 'linear-gradient(44deg, #bf6739 0.00%, #f2a251 100.00%)', hover: false},
    {genreName: 'Soundtrack', bgColor: '#92959e', gradient: 'linear-gradient(-125deg, #92959e 0.00%, #747478 100.00%)', hover: false},
    {genreName: 'Holiday', bgColor: '#98c634', gradient: 'linear-gradient(-122deg, #98c634 0.00%, #a8d12f 100.00%)', hover: false},
    {genreName: 'Children\'s Music', bgColor: ' #ff6ed9', gradient: 'linear-gradient(-127deg, #ff6ed9 0.00%, #ff82c1 100.00%)', hover: false},
    {genreName: 'Classical', bgColor: '#272a34', gradient: 'linear-gradient(47deg, #272a34 0.00%, #373b46 100.00%)', hover: false},
    {genreName: 'Dance & electronic', bgColor: '#29edbe', gradient: 'linear-gradient(47deg, #29edbe 0.00%, #16c1af 100.00%)', hover: false},
    {genreName: 'Pop', bgColor: '#ef29c7', gradient: 'linear-gradient(47deg, #ef29c7 0.00%, #ff46a9 100.00%)', hover: false},
    {genreName: 'World', bgColor: '#63b3f9', gradient: 'linear-gradient(47deg, #63b3f9 0.00%, #4eaaf9 100.00%)', hover: false},
  ]
  public trackList: PlayList[] = [
    {
      id: '01',
      songTitle: 'Lose Yourself',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '02',
      songTitle: 'Love the way you are',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '03',
      songTitle: 'Mockingbird',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '04',
      songTitle: 'Venom',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '05',
      songTitle: 'Mosh',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '06',
      songTitle: 'Lose Yourself',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '07',
      songTitle: 'Love the way you are',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '08',
      songTitle: 'Mockingbird',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '09',
      songTitle: 'Venom',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '10',
      songTitle: 'Mosh',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '11',
      songTitle: 'Lose Yourself',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '12',
      songTitle: 'Love the way you are',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '13',
      songTitle: 'Mockingbird',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '14',
      songTitle: 'Venom',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '15',
      songTitle: 'Mosh',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '16',
      songTitle: 'Lose Yourself',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '17',
      songTitle: 'Love the way you are',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '18',
      songTitle: 'Mockingbird',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '19',
      songTitle: 'Venom',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '20',
      songTitle: 'Mosh',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '21',
      songTitle: 'Lose Yourself',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '22',
      songTitle: 'Love the way you are',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '23',
      songTitle: 'Mockingbird',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '24',
      songTitle: 'Venom',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
    {
      id: '25',
      songTitle: 'Mosh',
      artistName: 'Eminem',
      duration: '4:45',
      playing: false,
    },
  ];
  public albumList: AlbumList[] = [
    {
      coverImg: '../../../assets/img/Album_cover_01.png',
      albumName: 'Kamimaze',
      artistName: 'Green Day',
      year: 2009
    },
    {
      coverImg: '../../../assets/img/Album_cover_02.png',
      albumName: 'She',
      artistName: 'John Star',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_03.png',
      albumName: 'The Weekend',
      artistName: 'Starboy',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_04.png',
      albumName: 'Karma De Javu',
      artistName: 'Niki Pope',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_02.png',
      albumName: 'She',
      artistName: 'John Star',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_03.png',
      albumName: 'The Weekend',
      artistName: 'Starboy',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_01.png',
      albumName: 'Kamimaze',
      artistName: 'Green Day',
      year: 2009
    },
    {
      coverImg: '../../../assets/img/Album_cover_02.png',
      albumName: 'She',
      artistName: 'John Star',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_03.png',
      albumName: 'The Weekend',
      artistName: 'Starboy',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_04.png',
      albumName: 'Karma De Javu',
      artistName: 'Niki Pope',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_02.png',
      albumName: 'She',
      artistName: 'John Star',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_03.png',
      albumName: 'The Weekend',
      artistName: 'Starboy',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_01.png',
      albumName: 'Kamimaze',
      artistName: 'Green Day',
      year: 2009
    },
    {
      coverImg: '../../../assets/img/Album_cover_02.png',
      albumName: 'She',
      artistName: 'John Star',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_03.png',
      albumName: 'The Weekend',
      artistName: 'Starboy',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_04.png',
      albumName: 'Karma De Javu',
      artistName: 'Niki Pope',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_02.png',
      albumName: 'She',
      artistName: 'John Star',
      year: 2019
    },
    {
      coverImg: '../../../assets/img/Album_cover_03.png',
      albumName: 'The Weekend',
      artistName: 'Starboy',
      year: 2019
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  mouseOver(i: number) {
    this.genreList[i].hover = true
    console.log(i)
  }

  mouseOut(i: number) {
    this.genreList[i].hover = false
  }

}
