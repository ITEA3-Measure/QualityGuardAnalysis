/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { QualityGuardComponent } from '../../../../../../main/webapp/app/entities/quality-guard/quality-guard.component';
import { QualityGuardService } from '../../../../../../main/webapp/app/entities/quality-guard/quality-guard.service';
import { QualityGuard } from '../../../../../../main/webapp/app/entities/quality-guard/quality-guard.model';

describe('Component Tests', () => {

    describe('QualityGuard Management Component', () => {
        let comp: QualityGuardComponent;
        let fixture: ComponentFixture<QualityGuardComponent>;
        let service: QualityGuardService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [QualityGuardComponent],
                providers: [
                    QualityGuardService
                ]
            })
            .overrideTemplate(QualityGuardComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(QualityGuardComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(QualityGuardService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new QualityGuard(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.qualityGuards[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
