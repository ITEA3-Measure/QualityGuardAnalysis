webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" #editForm=\\\"ngForm\\\"> <div class=\\\"modal-header\\\"> <h4 class=\\\"modal-title\\\" id=\\\"myQualityGuardLabel\\\">Create or edit a Quality Guard </h4> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <div class=\\\"modal-body\\\"> <jhi-alert-error></jhi-alert-error> <div class=\\\"form-group\\\" [hidden]=\\\"!qualityGuardConfiguration.id\\\"> <label for=\\\"id\\\">ID</label> <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"id\\\" name=\\\"id\\\" [(ngModel)]=\\\"qualityGuardConfiguration.id\\\" readonly=\\\"readonly\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_qualityGuardName\\\">Quality Guard Name</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"qualityGuardName\\\" id=\\\"field_qualityGuardName\\\" [(ngModel)]=\\\"qualityGuardConfiguration.qualityGuardName\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_description\\\">Description</label> <textarea rows=\\\"5\\\" class=\\\"form-control\\\" name=\\\"description\\\" id=\\\"field_description\\\" [(ngModel)]=\\\"qualityGuardConfiguration.description\\\"></textarea> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_warningValue\\\">Warning Value</label> <input type=\\\"number\\\" class=\\\"form-control\\\" name=\\\"warningValue\\\" id=\\\"field_warningValue\\\" [(ngModel)]=\\\"qualityGuardConfiguration.warningValue\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_errorValue\\\">Error Value</label> <input type=\\\"number\\\" class=\\\"form-control\\\" name=\\\"errorValue\\\" id=\\\"field_errorValue\\\" [(ngModel)]=\\\"qualityGuardConfiguration.errorValue\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_guardStatus\\\">Guard Status</label> <select class=\\\"form-control\\\" name=\\\"guardStatus\\\" [(ngModel)]=\\\"qualityGuard.guardStatus\\\" id=\\\"field_guardStatus\\\"> <option value=\\\"SUCCESS\\\">SUCCESS</option> <option value=\\\"WARNING\\\">WARNING</option> <option value=\\\"ERROR\\\">ERROR</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_violation\\\">Violation</label> <select class=\\\"form-control\\\" id=\\\"field_violation\\\" name=\\\"violation\\\" [(ngModel)]=\\\"qualityGuard.violation\\\"> <option [ngValue]=\\\"null\\\"></option> <option [ngValue]=\\\"violationOption.id === qualityGuard.violation?.id ? qualityGuard.violation : violationOption\\\" *ngFor=\\\"let violationOption of violations; trackBy: trackViolationById\\\">{{violationOption.id}}</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_combinationMode\\\">Combination Mode</label> <select class=\\\"form-control\\\" name=\\\"combinationMode\\\" [(ngModel)]=\\\"qualityGuardConfiguration.combinationMode\\\" id=\\\"field_combinationMode\\\"> <option value=\\\"OR\\\">OR</option> <option value=\\\"AND\\\">AND</option> <option value=\\\"NA\\\">NA</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_intervalAgregation\\\">Analysis Interval Agregation</label> <select class=\\\"form-control\\\" name=\\\"intervalAgregation\\\" [(ngModel)]=\\\"guardConditionConfiguration.intervalAgregation\\\" id=\\\"field_intervalAgregation\\\"> <option value=\\\"STRICT\\\">STRICT</option> <option value=\\\"MOY_MIN\\\">MOY_MIN</option> <option value=\\\"MOY_HH\\\">MOY_HH</option> <option value=\\\"MOY_DD\\\">MOY_DD</option> <option value=\\\"MOY_WW\\\">MOY_WW</option> <option value=\\\"MOY_MM\\\">MOY_MM</option> </select> </div> </div> <div class=\\\"modal-footer\\\"> <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\" (click)=\\\"clear()\\\"> <span class=\\\"fa fa-ban\\\"></span>&nbsp;<span>Cancel</span> </button> <button type=\\\"submit\\\" [disabled]=\\\"editForm.form.invalid || isSaving\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-save\\\"></span>&nbsp;<span>Save</span> </button> </div> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWw/ZmE2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxVkFBcVYsb3BFQUFvcEUsaUNBQWlDLG9CQUFvQiwybUNBQTJtQywwS0FBMEsiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGUgKG5nU3VibWl0KT1cXFwic2F2ZSgpXFxcIiAjZWRpdEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGlkPVxcXCJteVF1YWxpdHlHdWFyZExhYmVsXFxcIj5DcmVhdGUgb3IgZWRpdCBhIFF1YWxpdHkgR3VhcmQgPC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbaGlkZGVuXT1cXFwiIXF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb24uaWRcXFwiPiA8bGFiZWwgZm9yPVxcXCJpZFxcXCI+SUQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImlkXFxcIiBuYW1lPVxcXCJpZFxcXCIgWyhuZ01vZGVsKV09XFxcInF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb24uaWRcXFwiIHJlYWRvbmx5PVxcXCJyZWFkb25seVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX3F1YWxpdHlHdWFyZE5hbWVcXFwiPlF1YWxpdHkgR3VhcmQgTmFtZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJxdWFsaXR5R3VhcmROYW1lXFxcIiBpZD1cXFwiZmllbGRfcXVhbGl0eUd1YXJkTmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcInF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb24ucXVhbGl0eUd1YXJkTmFtZVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX2Rlc2NyaXB0aW9uXFxcIj5EZXNjcmlwdGlvbjwvbGFiZWw+IDx0ZXh0YXJlYSByb3dzPVxcXCI1XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCIgaWQ9XFxcImZpZWxkX2Rlc2NyaXB0aW9uXFxcIiBbKG5nTW9kZWwpXT1cXFwicXVhbGl0eUd1YXJkQ29uZmlndXJhdGlvbi5kZXNjcmlwdGlvblxcXCI+PC90ZXh0YXJlYT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF93YXJuaW5nVmFsdWVcXFwiPldhcm5pbmcgVmFsdWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ3YXJuaW5nVmFsdWVcXFwiIGlkPVxcXCJmaWVsZF93YXJuaW5nVmFsdWVcXFwiIFsobmdNb2RlbCldPVxcXCJxdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uLndhcm5pbmdWYWx1ZVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX2Vycm9yVmFsdWVcXFwiPkVycm9yIFZhbHVlPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZXJyb3JWYWx1ZVxcXCIgaWQ9XFxcImZpZWxkX2Vycm9yVmFsdWVcXFwiIFsobmdNb2RlbCldPVxcXCJxdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uLmVycm9yVmFsdWVcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF9ndWFyZFN0YXR1c1xcXCI+R3VhcmQgU3RhdHVzPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJndWFyZFN0YXR1c1xcXCIgWyhuZ01vZGVsKV09XFxcInF1YWxpdHlHdWFyZC5ndWFyZFN0YXR1c1xcXCIgaWQ9XFxcImZpZWxkX2d1YXJkU3RhdHVzXFxcIj4gPG9wdGlvbiB2YWx1ZT1cXFwiU1VDQ0VTU1xcXCI+U1VDQ0VTUzwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJXQVJOSU5HXFxcIj5XQVJOSU5HPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIkVSUk9SXFxcIj5FUlJPUjwvb3B0aW9uPiA8L3NlbGVjdD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF92aW9sYXRpb25cXFwiPlZpb2xhdGlvbjwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImZpZWxkX3Zpb2xhdGlvblxcXCIgbmFtZT1cXFwidmlvbGF0aW9uXFxcIiBbKG5nTW9kZWwpXT1cXFwicXVhbGl0eUd1YXJkLnZpb2xhdGlvblxcXCI+IDxvcHRpb24gW25nVmFsdWVdPVxcXCJudWxsXFxcIj48L29wdGlvbj4gPG9wdGlvbiBbbmdWYWx1ZV09XFxcInZpb2xhdGlvbk9wdGlvbi5pZCA9PT0gcXVhbGl0eUd1YXJkLnZpb2xhdGlvbj8uaWQgPyBxdWFsaXR5R3VhcmQudmlvbGF0aW9uIDogdmlvbGF0aW9uT3B0aW9uXFxcIiAqbmdGb3I9XFxcImxldCB2aW9sYXRpb25PcHRpb24gb2YgdmlvbGF0aW9uczsgdHJhY2tCeTogdHJhY2tWaW9sYXRpb25CeUlkXFxcIj57e3Zpb2xhdGlvbk9wdGlvbi5pZH19PC9vcHRpb24+IDwvc2VsZWN0PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX2NvbWJpbmF0aW9uTW9kZVxcXCI+Q29tYmluYXRpb24gTW9kZTwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY29tYmluYXRpb25Nb2RlXFxcIiBbKG5nTW9kZWwpXT1cXFwicXVhbGl0eUd1YXJkQ29uZmlndXJhdGlvbi5jb21iaW5hdGlvbk1vZGVcXFwiIGlkPVxcXCJmaWVsZF9jb21iaW5hdGlvbk1vZGVcXFwiPiA8b3B0aW9uIHZhbHVlPVxcXCJPUlxcXCI+T1I8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiQU5EXFxcIj5BTkQ8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiTkFcXFwiPk5BPC9vcHRpb24+IDwvc2VsZWN0PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX2ludGVydmFsQWdyZWdhdGlvblxcXCI+QW5hbHlzaXMgSW50ZXJ2YWwgQWdyZWdhdGlvbjwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiaW50ZXJ2YWxBZ3JlZ2F0aW9uXFxcIiBbKG5nTW9kZWwpXT1cXFwiZ3VhcmRDb25kaXRpb25Db25maWd1cmF0aW9uLmludGVydmFsQWdyZWdhdGlvblxcXCIgaWQ9XFxcImZpZWxkX2ludGVydmFsQWdyZWdhdGlvblxcXCI+IDxvcHRpb24gdmFsdWU9XFxcIlNUUklDVFxcXCI+U1RSSUNUPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIk1PWV9NSU5cXFwiPk1PWV9NSU48L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiTU9ZX0hIXFxcIj5NT1lfSEg8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiTU9ZX0REXFxcIj5NT1lfREQ8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiTU9ZX1dXXFxcIj5NT1lfV1c8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiTU9ZX01NXFxcIj5NT1lfTU08L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1iYW5cXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj5DYW5jZWw8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiZWRpdEZvcm0uZm9ybS5pbnZhbGlkIHx8IGlzU2F2aW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNhdmVcXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj5TYXZlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZm9ybT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hbmFseXNpcy10b29sL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration-dialog.component.html\n");

/***/ })

})