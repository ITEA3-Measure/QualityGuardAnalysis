/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { ConditionViolationDialogComponent } from '../../../../../../main/webapp/app/entities/condition-violation/condition-violation-dialog.component';
import { ConditionViolationService } from '../../../../../../main/webapp/app/entities/condition-violation/condition-violation.service';
import { ConditionViolation } from '../../../../../../main/webapp/app/entities/condition-violation/condition-violation.model';
import { GuardConditionService } from '../../../../../../main/webapp/app/entities/guard-condition';
import { ViolationService } from '../../../../../../main/webapp/app/entities/violation';

describe('Component Tests', () => {

    describe('ConditionViolation Management Dialog Component', () => {
        let comp: ConditionViolationDialogComponent;
        let fixture: ComponentFixture<ConditionViolationDialogComponent>;
        let service: ConditionViolationService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [ConditionViolationDialogComponent],
                providers: [
                    GuardConditionService,
                    ViolationService,
                    ConditionViolationService
                ]
            })
            .overrideTemplate(ConditionViolationDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ConditionViolationDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ConditionViolationService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new ConditionViolation(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.conditionViolation = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'conditionViolationListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new ConditionViolation();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.conditionViolation = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'conditionViolationListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
