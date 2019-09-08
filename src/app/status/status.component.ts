import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

export interface Status {
  viewValue: string;
  color: string;
}

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})
export class StatusComponent {
    constructor(private http: HttpClient) {}

    @Input()
    selectedValue: string;

    statuses: { [key: string]: object } = {
        'OK': {viewValue: 'OK', color: 'Lime'},
        '!OK': {viewValue: '!OK', color: 'Red'},
        'TODO': {viewValue: 'TODO', color: 'Gold'},
        'En route': {viewValue: 'En route', color: 'Silver'}
    };

    updateStatus(planetID: number, status: string) {
        const body = '{ "status": "' + status + '" }';
        this.http.post(environment.API_URL + '/planets/' + planetID, body);
    }
}
