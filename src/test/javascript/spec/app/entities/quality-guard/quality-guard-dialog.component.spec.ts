/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { QualityGuardDialogComponent } from '../../../../../../main/webapp/app/entities/quality-guard/quality-guard-dialog.component';
import { QualityGuardService } from '../../../../../../main/webapp/app/entities/quality-guard/quality-guard.service';
import { QualityGuard } from '../../../../../../main/webapp/app/entities/quality-guard/quality-guard.model';
import { ViolationService } from '../../../../../../main/webapp/app/entities/violation';

describe('Component Tests', () => {

    describe('QualityGuard Management Dialog Component', () => {
        let comp: QualityGuardDialogComponent;
        let fixture: ComponentFixture<QualityGuardDialogComponent>;
        let service: QualityGuardService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [QualityGuardDialogComponent],
                providers: [
                    ViolationService,
                    QualityGuardService
                ]
            })
            .overrideTemplate(QualityGuardDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(QualityGuardDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(QualityGuardService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new QualityGuard(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.qualityGuard = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'qualityGuardListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new QualityGuard();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.qualityGuard = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'qualityGuardListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
