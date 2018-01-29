import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-quality-guard-configuration',
  templateUrl: './quality-guard-configuration.component.html',
  styleUrls: ['quality-guard-configuration.component.css']
})
export class QualityGuardConfigurationComponent implements OnInit {

  allQualityGuards = [
    { name : 'My Quality Guard 1', rule : 'Measure 1 > (30 \' 40) AND Measure 2 > (10 \' 20)' },
    { name : 'My Quality Guard 2', rule : 'Measure 1 > (30 \' 40) AND Measure 2 > (10 \' 20)' },
    { name : 'My Quality Guard 3', rule : 'Measure 1 > (30 \' 40) AND Measure 2 > (10 \' 20)' }
  ]

  qualitGuards: Array<any> = [];
  guardCondition: Array<any> = [];
  errorMessage: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((res) => console.log(res.id));
  }

  ngOnInit() {
    this.getAllQualityGuards();
  }

  getAllQualityGuards() {
    // this.qualityGuardConfigurationService.getAllQualityGuards().subscribe(
    // (data) => this.qualitGuards = data,
    // (error) => this.errorMessage = error
    // )
    return this.allQualityGuards;
  }

  addNewQualityGuard(qg) {
    console.log(qg.qualityGuardName);
    console.log(qg.description);
  }

}
