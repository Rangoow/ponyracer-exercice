import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  constructor() { }

  races: Array<any> = [];

  ngOnInit(): void {
    this.races = [{ name: 'Lyon' }, { name: 'London' }];
  }



}
