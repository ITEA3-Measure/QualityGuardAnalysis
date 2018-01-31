import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseWrapper } from '../../shared';
import { QualityGuardService } from './quality-guard.service';
import { QualityGuard } from './quality-guard.model';
import { JhiAlertService } from 'ng-jhipster';

@Component({
  selector: 'jhi-quality-guard-configuration',
  templateUrl: './quality-guard.component.html',
  styleUrls: ['quality-guard.component.css']
})
export class QualityGuardComponent implements OnInit {

  qualityGuardsByProject: Array<QualityGuard> = [];
  errorMessage: any;

  constructor(
        private route: ActivatedRoute,
        private qualityGuardService: QualityGuardService,
        private jhiAlertService: JhiAlertService,
  ) {
    // this.route.params.subscribe((res) => console.log('project id => ' + res.id));
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.qualityGuardService.getQualityGuardsByProjectId(1).subscribe(
      (res: ResponseWrapper) => {
        this.qualityGuardsByProject = res.json;
      },
      (res: ResponseWrapper) => this.onError(res.json)
    );
  }

  private onError(error) {
    this.jhiAlertService.error(error.message, null, null);
  }

}
