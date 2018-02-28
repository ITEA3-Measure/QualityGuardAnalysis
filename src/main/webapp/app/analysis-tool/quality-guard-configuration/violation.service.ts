import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
import { Violation } from './violation.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class ViolationService {

    private resourceUrl =  SERVER_API_URL + 'api/violations';
    private byProject = 'by-project';
    private byQualityGuard = 'by-quality-guard';

    constructor(private http: Http) { }

    create(violation: Violation): Observable<Violation> {
        const copy = this.convert(violation);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(violation: Violation): Observable<Violation> {
        const copy = this.convert(violation);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Violation> {
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
     * Get Violations by projectID and qualityGuardId
     */
    getViolationsByProjectIdAndQualityGuardId(idProject: number, idQualityGuard: number): Observable<ResponseWrapper> {
        return this.http.get(`${this.resourceUrl}/${this.byProject}/${idProject}/${this.byQualityGuard}/${idQualityGuard}`)
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
     * Convert a returned JSON object to Violation.
     */
    private convertItemFromServer(json: any): Violation {
        const entity: Violation = Object.assign(new Violation(), json);
        return entity;
    }

    /**
     * Convert a Violation to a JSON which can be sent to the server.
     */
    private convert(violation: Violation): Violation {
        const copy: Violation = Object.assign({}, violation);
        return copy;
    }
}
