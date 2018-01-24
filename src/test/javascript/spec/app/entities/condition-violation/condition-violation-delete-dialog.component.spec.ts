/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { ConditionViolationDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/condition-violation/condition-violation-delete-dialog.component';
import { ConditionViolationService } from '../../../../../../main/webapp/app/entities/condition-violation/condition-violation.service';

describe('Component Tests', () => {

    describe('ConditionViolation Management Delete Component', () => {
        let comp: ConditionViolationDeleteDialogComponent;
        let fixture: ComponentFixture<ConditionViolationDeleteDialogComponent>;
        let service: ConditionViolationService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [ConditionViolationDeleteDialogComponent],
                providers: [
                    ConditionViolationService
                ]
            })
            .overrideTemplate(ConditionViolationDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ConditionViolationDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ConditionViolationService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
