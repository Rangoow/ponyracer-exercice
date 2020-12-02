import { Component } from '@angular/core';
import {RaceService} from './services/race.service';
import {RaceModel} from './races/models/race.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private raceService: RaceService, title: Title ) {
    title.setTitle('PonyRacer - Bet on ponies');
  }

  list(): Array<RaceModel>{
    return this.raceService.list();
  }
}
