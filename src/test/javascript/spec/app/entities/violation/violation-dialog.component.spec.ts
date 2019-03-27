/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { ViolationDialogComponent } from '../../../../../../main/webapp/app/entities/violation/violation-dialog.component';
import { ViolationService } from '../../../../../../main/webapp/app/entities/violation/violation.service';
import { Violation } from '../../../../../../main/webapp/app/entities/violation/violation.model';
import { QualityGuardService } from '../../../../../../main/webapp/app/entities/quality-guard';

describe('Component Tests', () => {

    describe('Violation Management Dialog Component', () => {
        let comp: ViolationDialogComponent;
        let fixture: ComponentFixture<ViolationDialogComponent>;
        let service: ViolationService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [ViolationDialogComponent],
                providers: [
                    QualityGuardService,
                    ViolationService
                ]
            })
            .overrideTemplate(ViolationDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ViolationDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ViolationService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Violation(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.violation = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'violationListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Violation();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.violation = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'violationListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
