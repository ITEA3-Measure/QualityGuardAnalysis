/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { ViolationDetailComponent } from '../../../../../../main/webapp/app/entities/violation/violation-detail.component';
import { ViolationService } from '../../../../../../main/webapp/app/entities/violation/violation.service';
import { Violation } from '../../../../../../main/webapp/app/entities/violation/violation.model';

describe('Component Tests', () => {

    describe('Violation Management Detail Component', () => {
        let comp: ViolationDetailComponent;
        let fixture: ComponentFixture<ViolationDetailComponent>;
        let service: ViolationService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [ViolationDetailComponent],
                providers: [
                    ViolationService
                ]
            })
            .overrideTemplate(ViolationDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ViolationDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ViolationService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Violation(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.violation).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
