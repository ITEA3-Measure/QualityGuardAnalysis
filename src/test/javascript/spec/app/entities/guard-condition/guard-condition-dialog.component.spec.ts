/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { GuardConditionDialogComponent } from '../../../../../../main/webapp/app/entities/guard-condition/guard-condition-dialog.component';
import { GuardConditionService } from '../../../../../../main/webapp/app/entities/guard-condition/guard-condition.service';
import { GuardCondition } from '../../../../../../main/webapp/app/entities/guard-condition/guard-condition.model';
import { QualityGuardService } from '../../../../../../main/webapp/app/entities/quality-guard';

describe('Component Tests', () => {

    describe('GuardCondition Management Dialog Component', () => {
        let comp: GuardConditionDialogComponent;
        let fixture: ComponentFixture<GuardConditionDialogComponent>;
        let service: GuardConditionService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [GuardConditionDialogComponent],
                providers: [
                    QualityGuardService,
                    GuardConditionService
                ]
            })
            .overrideTemplate(GuardConditionDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(GuardConditionDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(GuardConditionService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new GuardCondition(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.guardCondition = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'guardConditionListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new GuardCondition();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.guardCondition = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'guardConditionListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
