import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
import { QualityGuard } from './quality-guard.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class QualityGuardService {

    private resourceUrl =  SERVER_API_URL + 'api/quality-guards';
    private byProject = 'by-project';

    constructor(private http: Http) { }

    create(qualityGuard: QualityGuard): Observable<QualityGuard> {
        const copy = this.convert(qualityGuard);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(qualityGuard: QualityGuard): Observable<QualityGuard> {
        const copy = this.convert(qualityGuard);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<QualityGuard> {
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
     * Get Quality Guards by projectID
     */
    getQualityGuardsByProjectId(id: number): Observable<ResponseWrapper> {
        return this.http.get(`${this.resourceUrl}/${this.byProject}/${id}`)
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
     * Convert a returned JSON object to QualityGuardConfiguration.
     */
    private convertItemFromServer(json: any): QualityGuard {
        const entity: QualityGuard = Object.assign(new QualityGuard(), json);
        return entity;
    }

    /**
     * Convert a QualityGuardConfiguration to a JSON which can be sent to the server.
     */
    private convert(qualityGuard: QualityGuard): QualityGuard {
        const copy: QualityGuard = Object.assign({}, qualityGuard);
        return copy;
    }
}
