webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" #editForm=\\\"ngForm\\\"> <div class=\\\"modal-header\\\"> <h4 class=\\\"modal-title\\\" id=\\\"myQualityGuardLabel\\\">Create or edit a Quality Guard Configuration</h4> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <div class=\\\"modal-body\\\"> <jhi-alert-error></jhi-alert-error> <div class=\\\"form-group\\\" [hidden]=\\\"!qualityGuard.id\\\"> <label for=\\\"id\\\">ID</label> <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"id\\\" name=\\\"id\\\" [(ngModel)]=\\\"qualityGuard.id\\\" readonly=\\\"readonly\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_qualityGuardName\\\">Quality Guard Name</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"qualityGuardName\\\" id=\\\"field_qualityGuardName\\\" [(ngModel)]=\\\"qualityGuard.qualityGuardName\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_description\\\">Description</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"description\\\" id=\\\"field_description\\\" [(ngModel)]=\\\"qualityGuard.description\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_combinationMode\\\">Combination Mode</label> <select class=\\\"form-control\\\" name=\\\"combinationMode\\\" [(ngModel)]=\\\"qualityGuard.combinationMode\\\" id=\\\"field_combinationMode\\\"> <option value=\\\"OR\\\">OR</option> <option value=\\\"AND\\\">AND</option> <option value=\\\"NA\\\">NA</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_measureProjectId\\\">Measure Project Id</label> <input type=\\\"number\\\" class=\\\"form-control\\\" name=\\\"measureProjectId\\\" id=\\\"field_measureProjectId\\\" [(ngModel)]=\\\"qualityGuard.measureProjectId\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_guardStatus\\\">Guard Status</label> <select class=\\\"form-control\\\" name=\\\"guardStatus\\\" [(ngModel)]=\\\"qualityGuard.guardStatus\\\" id=\\\"field_guardStatus\\\"> <option value=\\\"SUCCESS\\\">SUCCESS</option> <option value=\\\"WARNING\\\">WARNING</option> <option value=\\\"ERROR\\\">ERROR</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_violation\\\">Violation</label> <select class=\\\"form-control\\\" id=\\\"field_violation\\\" name=\\\"violation\\\" [(ngModel)]=\\\"qualityGuard.violation\\\"> <option [ngValue]=\\\"null\\\"></option> <option [ngValue]=\\\"violationOption.id === qualityGuard.violation?.id ? qualityGuard.violation : violationOption\\\" *ngFor=\\\"let violationOption of violations; trackBy: trackViolationById\\\">{{violationOption.id}}</option> </select> </div> </div> <div class=\\\"modal-footer\\\"> <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\" (click)=\\\"clear()\\\"> <span class=\\\"fa fa-ban\\\"></span>&nbsp;<span>Cancel</span> </button> <button type=\\\"submit\\\" [disabled]=\\\"editForm.form.invalid || isSaving\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-save\\\"></span>&nbsp;<span>Save</span> </button> </div> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWw/ZmE2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrV0FBa1cseXNFQUF5c0UsaUNBQWlDLG9CQUFvQixzTUFBc00sMEtBQTBLIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9hbmFseXNpcy10b29sL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIG5hbWU9XFxcImVkaXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlIChuZ1N1Ym1pdCk9XFxcInNhdmUoKVxcXCIgI2VkaXRGb3JtPVxcXCJuZ0Zvcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBpZD1cXFwibXlRdWFsaXR5R3VhcmRMYWJlbFxcXCI+Q3JlYXRlIG9yIGVkaXQgYSBRdWFsaXR5IEd1YXJkIENvbmZpZ3VyYXRpb248L2g0PiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+JnRpbWVzOzwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtoaWRkZW5dPVxcXCIhcXVhbGl0eUd1YXJkLmlkXFxcIj4gPGxhYmVsIGZvcj1cXFwiaWRcXFwiPklEPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJpZFxcXCIgbmFtZT1cXFwiaWRcXFwiIFsobmdNb2RlbCldPVxcXCJxdWFsaXR5R3VhcmQuaWRcXFwiIHJlYWRvbmx5PVxcXCJyZWFkb25seVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX3F1YWxpdHlHdWFyZE5hbWVcXFwiPlF1YWxpdHkgR3VhcmQgTmFtZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJxdWFsaXR5R3VhcmROYW1lXFxcIiBpZD1cXFwiZmllbGRfcXVhbGl0eUd1YXJkTmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcInF1YWxpdHlHdWFyZC5xdWFsaXR5R3VhcmROYW1lXFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfZGVzY3JpcHRpb25cXFwiPkRlc2NyaXB0aW9uPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImRlc2NyaXB0aW9uXFxcIiBpZD1cXFwiZmllbGRfZGVzY3JpcHRpb25cXFwiIFsobmdNb2RlbCldPVxcXCJxdWFsaXR5R3VhcmQuZGVzY3JpcHRpb25cXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF9jb21iaW5hdGlvbk1vZGVcXFwiPkNvbWJpbmF0aW9uIE1vZGU8L2xhYmVsPiA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNvbWJpbmF0aW9uTW9kZVxcXCIgWyhuZ01vZGVsKV09XFxcInF1YWxpdHlHdWFyZC5jb21iaW5hdGlvbk1vZGVcXFwiIGlkPVxcXCJmaWVsZF9jb21iaW5hdGlvbk1vZGVcXFwiPiA8b3B0aW9uIHZhbHVlPVxcXCJPUlxcXCI+T1I8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiQU5EXFxcIj5BTkQ8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiTkFcXFwiPk5BPC9vcHRpb24+IDwvc2VsZWN0PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX21lYXN1cmVQcm9qZWN0SWRcXFwiPk1lYXN1cmUgUHJvamVjdCBJZDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm1lYXN1cmVQcm9qZWN0SWRcXFwiIGlkPVxcXCJmaWVsZF9tZWFzdXJlUHJvamVjdElkXFxcIiBbKG5nTW9kZWwpXT1cXFwicXVhbGl0eUd1YXJkLm1lYXN1cmVQcm9qZWN0SWRcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF9ndWFyZFN0YXR1c1xcXCI+R3VhcmQgU3RhdHVzPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJndWFyZFN0YXR1c1xcXCIgWyhuZ01vZGVsKV09XFxcInF1YWxpdHlHdWFyZC5ndWFyZFN0YXR1c1xcXCIgaWQ9XFxcImZpZWxkX2d1YXJkU3RhdHVzXFxcIj4gPG9wdGlvbiB2YWx1ZT1cXFwiU1VDQ0VTU1xcXCI+U1VDQ0VTUzwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJXQVJOSU5HXFxcIj5XQVJOSU5HPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIkVSUk9SXFxcIj5FUlJPUjwvb3B0aW9uPiA8L3NlbGVjdD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF92aW9sYXRpb25cXFwiPlZpb2xhdGlvbjwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImZpZWxkX3Zpb2xhdGlvblxcXCIgbmFtZT1cXFwidmlvbGF0aW9uXFxcIiBbKG5nTW9kZWwpXT1cXFwicXVhbGl0eUd1YXJkLnZpb2xhdGlvblxcXCI+IDxvcHRpb24gW25nVmFsdWVdPVxcXCJudWxsXFxcIj48L29wdGlvbj4gPG9wdGlvbiBbbmdWYWx1ZV09XFxcInZpb2xhdGlvbk9wdGlvbi5pZCA9PT0gcXVhbGl0eUd1YXJkLnZpb2xhdGlvbj8uaWQgPyBxdWFsaXR5R3VhcmQudmlvbGF0aW9uIDogdmlvbGF0aW9uT3B0aW9uXFxcIiAqbmdGb3I9XFxcImxldCB2aW9sYXRpb25PcHRpb24gb2YgdmlvbGF0aW9uczsgdHJhY2tCeTogdHJhY2tWaW9sYXRpb25CeUlkXFxcIj57e3Zpb2xhdGlvbk9wdGlvbi5pZH19PC9vcHRpb24+IDwvc2VsZWN0PiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYmFuXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+Q2FuY2VsPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcImVkaXRGb3JtLmZvcm0uaW52YWxpZCB8fCBpc1NhdmluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zYXZlXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+U2F2ZTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Zvcm0+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hbmFseXNpcy10b29sL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYW5hbHlzaXMtdG9vbC9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24vcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration-dialog.component.html\n");

/***/ })

})