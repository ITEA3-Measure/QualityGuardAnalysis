/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { GuardConditionComponent } from '../../../../../../main/webapp/app/entities/guard-condition/guard-condition.component';
import { GuardConditionService } from '../../../../../../main/webapp/app/entities/guard-condition/guard-condition.service';
import { GuardCondition } from '../../../../../../main/webapp/app/entities/guard-condition/guard-condition.model';

describe('Component Tests', () => {

    describe('GuardCondition Management Component', () => {
        let comp: GuardConditionComponent;
        let fixture: ComponentFixture<GuardConditionComponent>;
        let service: GuardConditionService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [GuardConditionComponent],
                providers: [
                    GuardConditionService
                ]
            })
            .overrideTemplate(GuardConditionComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(GuardConditionComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(GuardConditionService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new GuardCondition(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.guardConditions[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
