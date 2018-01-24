import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { GuardCondition } from './guard-condition.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class GuardConditionService {

    private resourceUrl =  SERVER_API_URL + 'api/guard-conditions';

    constructor(private http: Http) { }

    create(guardCondition: GuardCondition): Observable<GuardCondition> {
        const copy = this.convert(guardCondition);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(guardCondition: GuardCondition): Observable<GuardCondition> {
        const copy = this.convert(guardCondition);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<GuardCondition> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
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
     * Convert a returned JSON object to GuardCondition.
     */
    private convertItemFromServer(json: any): GuardCondition {
        const entity: GuardCondition = Object.assign(new GuardCondition(), json);
        return entity;
    }

    /**
     * Convert a GuardCondition to a JSON which can be sent to the server.
     */
    private convert(guardCondition: GuardCondition): GuardCondition {
        const copy: GuardCondition = Object.assign({}, guardCondition);
        return copy;
    }
}
