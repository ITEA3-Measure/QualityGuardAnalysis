/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { GuardConditionDetailComponent } from '../../../../../../main/webapp/app/entities/guard-condition/guard-condition-detail.component';
import { GuardConditionService } from '../../../../../../main/webapp/app/entities/guard-condition/guard-condition.service';
import { GuardCondition } from '../../../../../../main/webapp/app/entities/guard-condition/guard-condition.model';

describe('Component Tests', () => {

    describe('GuardCondition Management Detail Component', () => {
        let comp: GuardConditionDetailComponent;
        let fixture: ComponentFixture<GuardConditionDetailComponent>;
        let service: GuardConditionService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [GuardConditionDetailComponent],
                providers: [
                    GuardConditionService
                ]
            })
            .overrideTemplate(GuardConditionDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(GuardConditionDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(GuardConditionService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new GuardCondition(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.guardCondition).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
