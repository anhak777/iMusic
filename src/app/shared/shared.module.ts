import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlusButtonComponent } from './plus-button/plus-button.component';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [PlusButtonComponent, TrackComponent, AlbumComponent],
  imports: [CommonModule],
  exports: [CommonModule, PlusButtonComponent, TrackComponent, AlbumComponent],
})
export class SharedModule {}
