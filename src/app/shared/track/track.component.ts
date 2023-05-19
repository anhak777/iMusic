import { Component, Input, OnInit } from '@angular/core';
import { PlayList } from '../models';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input() data: PlayList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
