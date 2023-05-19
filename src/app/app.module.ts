import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MainComponent } from './main/main.component';
import { RadioComponent } from './radio/radio.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { FooterComponent } from './footer/footer.component';
import { MusicComponent } from './music/music.component';
import { SharedModule } from './shared/shared.module';
import { ReleaseSliderComponent } from './music/release-slider/release-slider.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MainComponent,
    RadioComponent,
    PlaylistsComponent,
    FooterComponent,
    MusicComponent,
    ReleaseSliderComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
