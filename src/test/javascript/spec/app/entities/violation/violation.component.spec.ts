/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { ViolationComponent } from '../../../../../../main/webapp/app/entities/violation/violation.component';
import { ViolationService } from '../../../../../../main/webapp/app/entities/violation/violation.service';
import { Violation } from '../../../../../../main/webapp/app/entities/violation/violation.model';

describe('Component Tests', () => {

    describe('Violation Management Component', () => {
        let comp: ViolationComponent;
        let fixture: ComponentFixture<ViolationComponent>;
        let service: ViolationService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [ViolationComponent],
                providers: [
                    ViolationService
                ]
            })
            .overrideTemplate(ViolationComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ViolationComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ViolationService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Violation(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.violations[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
