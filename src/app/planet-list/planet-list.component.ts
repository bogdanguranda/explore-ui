import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})

export class PlanetListComponent {
  planets = [];

  constructor(private http: HttpClient) {
    this.get_planets();
  }

  get_planets() {
    this.http.get(environment.API_URL + '/planets').subscribe((res: any[]) => {
        this.planets = res;
    });
  }
}
