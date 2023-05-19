import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './music/music.component';
import { RadioComponent } from './radio/radio.component';
import { PlaylistsComponent } from './playlists/playlists.component';

const routes: Routes = [
  { path: '',   redirectTo: 'music', pathMatch: 'full' },
  { path: 'music', component: MusicComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'playlists', component: PlaylistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
