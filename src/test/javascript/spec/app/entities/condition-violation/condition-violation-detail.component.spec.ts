/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { ConditionViolationDetailComponent } from '../../../../../../main/webapp/app/entities/condition-violation/condition-violation-detail.component';
import { ConditionViolationService } from '../../../../../../main/webapp/app/entities/condition-violation/condition-violation.service';
import { ConditionViolation } from '../../../../../../main/webapp/app/entities/condition-violation/condition-violation.model';

describe('Component Tests', () => {

    describe('ConditionViolation Management Detail Component', () => {
        let comp: ConditionViolationDetailComponent;
        let fixture: ComponentFixture<ConditionViolationDetailComponent>;
        let service: ConditionViolationService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [ConditionViolationDetailComponent],
                providers: [
                    ConditionViolationService
                ]
            })
            .overrideTemplate(ConditionViolationDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ConditionViolationDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ConditionViolationService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new ConditionViolation(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.conditionViolation).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
