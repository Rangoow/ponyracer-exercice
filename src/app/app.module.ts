import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import {ApiService} from './services/api.service';
import {RaceService} from './services/race.service';
import {FakeRaceService} from './services/fake-race.service';

const IS_PROD = false;

@NgModule({
  declarations: [AppComponent, MenuComponent, RacesComponent],
  imports: [BrowserModule],
  providers: [ApiService,
    {provide: RaceService,
      useClass: IS_PROD ? RaceService : FakeRaceService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
