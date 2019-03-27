/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { ConditionViolationComponent } from '../../../../../../main/webapp/app/entities/condition-violation/condition-violation.component';
import { ConditionViolationService } from '../../../../../../main/webapp/app/entities/condition-violation/condition-violation.service';
import { ConditionViolation } from '../../../../../../main/webapp/app/entities/condition-violation/condition-violation.model';

describe('Component Tests', () => {

    describe('ConditionViolation Management Component', () => {
        let comp: ConditionViolationComponent;
        let fixture: ComponentFixture<ConditionViolationComponent>;
        let service: ConditionViolationService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [ConditionViolationComponent],
                providers: [
                    ConditionViolationService
                ]
            })
            .overrideTemplate(ConditionViolationComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ConditionViolationComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ConditionViolationService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new ConditionViolation(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.conditionViolations[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
