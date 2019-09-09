import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

import { environment } from 'src/environments/environment';

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})

export class PlanetListComponent {
  planets = [];
  updateForm: any;

  statuses = [
    {value: 'OK', viewValue: 'OK'},
    {value: 'NOT_OK', viewValue: '!OK'},
    {value: 'TODO', viewValue: 'TODO'},
    {value: 'EN_ROUTE', viewValue: 'En route'}
  ];

  statusColors = {OK: 'Lime', NOT_OK: 'Red', TODO: 'Gold', EN_ROUTE: 'Silver'};

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.get_planets();
    this.updateForm = this.formBuilder.group({
      description: '',
      status: ''
    });
  }

  get_planets() {
    this.http.get(environment.API_URL + '/planets').subscribe((res: any[]) => {
        this.planets = res;
    });
  }

  onSubmit(event: any) {
    const desc = event.target.querySelector('textarea').value;
    const stat = event.target.querySelector('select').value;
    const planetID = event.target.querySelector('input').value;

    const body = { status: stat, description: desc};
    this.http.put(environment.API_URL + '/planets/' + planetID, body, {observe: 'response'}).subscribe(response => {
      if (response.status != 200) {
        console.log('Failed to update planets, status was: ' + response.status);
      }
    });

  }

}
