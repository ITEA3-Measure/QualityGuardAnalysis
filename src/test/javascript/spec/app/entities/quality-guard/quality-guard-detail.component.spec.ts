/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { QualityGuardDetailComponent } from '../../../../../../main/webapp/app/entities/quality-guard/quality-guard-detail.component';
import { QualityGuardService } from '../../../../../../main/webapp/app/entities/quality-guard/quality-guard.service';
import { QualityGuard } from '../../../../../../main/webapp/app/entities/quality-guard/quality-guard.model';

describe('Component Tests', () => {

    describe('QualityGuard Management Detail Component', () => {
        let comp: QualityGuardDetailComponent;
        let fixture: ComponentFixture<QualityGuardDetailComponent>;
        let service: QualityGuardService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [QualityGuardDetailComponent],
                providers: [
                    QualityGuardService
                ]
            })
            .overrideTemplate(QualityGuardDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(QualityGuardDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(QualityGuardService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new QualityGuard(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.qualityGuard).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
