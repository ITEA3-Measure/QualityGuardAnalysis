import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class QualityGuardConfigurationService {

  baseUrl = 'http://localhost:8585/api'

    qualityGuardsArray = [];

    constructor(private http: Http) {

    }

    getAllQualityGuards() {
        return this.http.get(this.baseUrl + '/quality-guards')
                .map((response: Response) => response.json())
                .catch(this._errorHandler);
    }

    _errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error || 'Internal server error');
    }
}
