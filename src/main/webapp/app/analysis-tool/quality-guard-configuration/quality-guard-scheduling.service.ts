import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
import { QualityGuard } from './quality-guard.model';

@Injectable()
export class QualityGuardSchedulingService {

    private resourceUrl =  SERVER_API_URL + 'api/quality-guard/sheduling';
    private id = 'id';
    private start = 'start';
    private stop = 'stop';

    constructor(private http: Http) { }

    startQualityGuardSchedule(id: number): Observable<QualityGuard>  {
      return this.http.get(`${this.resourceUrl}/${this.start}?${this.id}=${id}`).map((res: Response) => res.json());
    }

    stopQualityGuardSchedule(id: number): Observable<QualityGuard>  {
      return this.http.get(`${this.resourceUrl}/${this.stop}?${this.id}=${id}`).map((res: Response) => res.json());
    }

}
