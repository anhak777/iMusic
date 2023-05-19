import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
})
export class LeftSidebarComponent implements OnInit {
  public userName:string = 'Jonah';
  public logged:boolean = false;
  public expanded:boolean = false;
  public anonImg:string = '../../assets/img/user-default.png';
  public userImg:string = '../../assets/img/user-jakob.png';
  public playLists = [
    { cover: '../../assets/img/playlist_01.png', title: 'Workout music' },
    { cover: '../../assets/img/playlist_02.png', title: 'The Rush' },
    { cover: '../../assets/img/playlist_03.png', title: "Kill'em all" },
    { cover: '../../assets/img/playlist_04.png', title: 'DejaVue' },
    { cover: '../../assets/img/playlist_05.png', title: 'Momentum' },
  ];

  constructor() {}

  ngOnInit(): void {}

  login() {
    this.logged = true;
  }

  expand() {
    this.expanded = !this.expanded;
  }
}
