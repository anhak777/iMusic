import { Component, Input, OnInit } from '@angular/core';
import { AlbumList } from '../models';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() data: AlbumList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
