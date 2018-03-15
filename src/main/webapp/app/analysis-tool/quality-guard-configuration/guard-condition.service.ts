import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../../app.constants';
import { GuardCondition } from './guard-condition.model';
import { ResponseWrapper, createRequestOption } from '../../shared';
import { MeasureInstanceType } from './measure-instance-type.model';

@Injectable()
export class GuardConditionService {

    private resourceUrl =  SERVER_API_URL + 'api/guard-conditions';
    private byProject = 'by-project';
    private measureInstanceType = 'measure-instance-type';

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

    /**
     *  Get Guard Conditions by ProjectID
     */
    getGuardConditionsByProjectId(id: number): Observable<ResponseWrapper> {
        return this.http.get(`${this.resourceUrl}/${this.byProject}/${id}`)
            .map((res: Response) => this.convertResponse(res));
    }

    /**
     *  Get MeasureInstanceType
     */
    getMeasureInstanceType(idProject: number): Observable<ResponseWrapper> {
        return this.http.get(`${this.resourceUrl}/${this.measureInstanceType}/${this.byProject}/${idProject}`)
            .map((res: Response) => this.convertResponseMeasureInstanceType(res));
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

    private convertResponseMeasureInstanceType(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServerToMeasureInstanceType(jsonResponse[i]));
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
     * Convert a returned JSON object to MeasureInstanceType.
     */
    private convertItemFromServerToMeasureInstanceType(json: any): MeasureInstanceType {
        const entity: MeasureInstanceType = Object.assign(new MeasureInstanceType(), json);
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
