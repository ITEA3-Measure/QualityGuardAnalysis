/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { QualityGuardAnalysisTestModule } from '../../../test.module';
import { QualityGuardDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/quality-guard/quality-guard-delete-dialog.component';
import { QualityGuardService } from '../../../../../../main/webapp/app/entities/quality-guard/quality-guard.service';

describe('Component Tests', () => {

    describe('QualityGuard Management Delete Component', () => {
        let comp: QualityGuardDeleteDialogComponent;
        let fixture: ComponentFixture<QualityGuardDeleteDialogComponent>;
        let service: QualityGuardService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [QualityGuardAnalysisTestModule],
                declarations: [QualityGuardDeleteDialogComponent],
                providers: [
                    QualityGuardService
                ]
            })
            .overrideTemplate(QualityGuardDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(QualityGuardDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(QualityGuardService);
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
