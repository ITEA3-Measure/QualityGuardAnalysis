/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { GuardConditionDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/guard-condition/guard-condition-delete-dialog.component';
import { GuardConditionService } from '../../../../../../main/webapp/app/entities/guard-condition/guard-condition.service';

describe('Component Tests', () => {

    describe('GuardCondition Management Delete Component', () => {
        let comp: GuardConditionDeleteDialogComponent;
        let fixture: ComponentFixture<GuardConditionDeleteDialogComponent>;
        let service: GuardConditionService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [GuardConditionDeleteDialogComponent],
                providers: [
                    GuardConditionService
                ]
            })
            .overrideTemplate(GuardConditionDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(GuardConditionDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(GuardConditionService);
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
