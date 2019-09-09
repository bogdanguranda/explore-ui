import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

import { environment } from 'src/environments/environment';

export interface Status {
  value: string;
  viewValue: string;
  color: string;
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
    {value: 'OK', viewValue: 'OK', color: 'Lime'},
    {value: 'NOT_OK', viewValue: '!OK', color: 'Red'},
    {value: 'TODO', viewValue: 'TODO', color: 'Gold'},
    {value: 'EN_ROUTE', viewValue: 'En route', color: 'Silver'}
  ];

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
    const status = event.target.querySelector('select').value;
    const planetID = event.target.querySelector('input').value;

    console.warn('Form submitted with description: ', desc);
    console.warn('Form submitted with status: ', status);
    console.warn('Planet ID: ', planetID);

    const body = '{ "status": "' + status + '", "description": "' + desc  + '" }';
    this.http.post(environment.API_URL + '/planets/' + planetID, body);
  }

}
