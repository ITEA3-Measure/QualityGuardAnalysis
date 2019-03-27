import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
import { ResponseWrapper } from '../../shared/model/response-wrapper.model';
import { IncidentStatus } from './incident-status.model';

@Injectable()
export class QualityGuardIncidentHistoryService {

    private resourceUrl =  SERVER_API_URL + 'api/quality-guard/incident-history';
    private guardStatus = 'guard-status';
    private id = 'id';
    private interval = 'intervalAgregation';

    constructor(private http: Http) { }

    retrieveIncidentsHistory(idQualityGuard: number, intervalAgregation: string): Observable<ResponseWrapper> {
        return this.http.get(`${this.resourceUrl}/${this.guardStatus}?${this.id}=${idQualityGuard}&${this.interval}=${intervalAgregation}`)
            .map((res: Response) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
      const jsonResponse = res.json();
      const result = [];
      for (let i = 0; i < jsonResponse.length; i++) {
        result.push(this.convertItemFromServer(jsonResponse[i]));
      }
      return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
       * Convert a returned JSON object to IncidentStatus.
       */
    private convertItemFromServer(json: any): IncidentStatus {
      const entity: IncidentStatus = Object.assign(new IncidentStatus(), json);
      return entity;
    }

}
