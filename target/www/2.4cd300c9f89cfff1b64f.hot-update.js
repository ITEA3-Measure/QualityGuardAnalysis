webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" #editForm=\\\"ngForm\\\"> <div class=\\\"modal-header\\\"> <h4 class=\\\"modal-title\\\" id=\\\"myQualityGuardLabel\\\">Create or edit a Quality Guard </h4> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <div class=\\\"modal-body\\\"> <jhi-alert-error></jhi-alert-error> <div class=\\\"form-group\\\" [hidden]=\\\"!qualityGuardConfiguration.id\\\"> <label for=\\\"id\\\">ID</label> <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"id\\\" name=\\\"id\\\" [(ngModel)]=\\\"qualityGuardConfiguration.id\\\" readonly=\\\"readonly\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_qualityGuardName\\\">Quality Guard Name</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"qualityGuardName\\\" id=\\\"field_qualityGuardName\\\" [(ngModel)]=\\\"qualityGuardConfiguration.qualityGuardName\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_description\\\">Description</label> <textarea rows=\\\"5\\\" class=\\\"form-control\\\" name=\\\"description\\\" id=\\\"field_description\\\" [(ngModel)]=\\\"qualityGuardConfiguration.description\\\"></textarea> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_warningValue\\\">Warning Value</label> <input type=\\\"number\\\" class=\\\"form-control\\\" name=\\\"warningValue\\\" id=\\\"field_warningValue\\\" [(ngModel)]=\\\"qualityGuardConfiguration.warningValue\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_errorValue\\\">Error Value</label> <input type=\\\"number\\\" class=\\\"form-control\\\" name=\\\"errorValue\\\" id=\\\"field_errorValue\\\" [(ngModel)]=\\\"qualityGuardConfiguration.errorValue\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_guardStatus\\\">Guard Status</label> <select class=\\\"form-control\\\" name=\\\"guardStatus\\\" [(ngModel)]=\\\"qualityGuard.guardStatus\\\" id=\\\"field_guardStatus\\\"> <option value=\\\"SUCCESS\\\">SUCCESS</option> <option value=\\\"WARNING\\\">WARNING</option> <option value=\\\"ERROR\\\">ERROR</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_combinationMode\\\">Combination Mode</label> <select class=\\\"form-control\\\" name=\\\"combinationMode\\\" [(ngModel)]=\\\"qualityGuardConfiguration.combinationMode\\\" id=\\\"field_combinationMode\\\"> <option value=\\\"OR\\\">OR</option> <option value=\\\"AND\\\">AND</option> <option value=\\\"NA\\\">NA</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_intervalAgregation\\\">Analysis Interval Agregation</label> <select class=\\\"form-control\\\" name=\\\"intervalAgregation\\\" [(ngModel)]=\\\"guardCondition.intervalAgregation\\\" id=\\\"field_intervalAgregation\\\"> <option value=\\\"STRICT\\\">STRICT</option> <option value=\\\"MOY_MIN\\\">MOY_MIN</option> <option value=\\\"MOY_HH\\\">MOY_HH</option> <option value=\\\"MOY_DD\\\">MOY_DD</option> <option value=\\\"MOY_WW\\\">MOY_WW</option> <option value=\\\"MOY_MM\\\">MOY_MM</option> </select> </div> </div> <div class=\\\"modal-footer\\\"> <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\" (click)=\\\"clear()\\\"> <span class=\\\"fa fa-ban\\\"></span>&nbsp;<span>Cancel</span> </button> <button type=\\\"submit\\\" [disabled]=\\\"editForm.form.invalid || isSaving\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-save\\\"></span>&nbsp;<span>Save</span> </button> </div> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWw/ZmE2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxVkFBcVYsMHpGQUEwekYsMEtBQTBLIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9hbmFseXNpcy10b29sL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIG5hbWU9XFxcImVkaXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlIChuZ1N1Ym1pdCk9XFxcInNhdmUoKVxcXCIgI2VkaXRGb3JtPVxcXCJuZ0Zvcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBpZD1cXFwibXlRdWFsaXR5R3VhcmRMYWJlbFxcXCI+Q3JlYXRlIG9yIGVkaXQgYSBRdWFsaXR5IEd1YXJkIDwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW2hpZGRlbl09XFxcIiFxdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uLmlkXFxcIj4gPGxhYmVsIGZvcj1cXFwiaWRcXFwiPklEPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJpZFxcXCIgbmFtZT1cXFwiaWRcXFwiIFsobmdNb2RlbCldPVxcXCJxdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uLmlkXFxcIiByZWFkb25seT1cXFwicmVhZG9ubHlcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF9xdWFsaXR5R3VhcmROYW1lXFxcIj5RdWFsaXR5IEd1YXJkIE5hbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicXVhbGl0eUd1YXJkTmFtZVxcXCIgaWQ9XFxcImZpZWxkX3F1YWxpdHlHdWFyZE5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJxdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uLnF1YWxpdHlHdWFyZE5hbWVcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF9kZXNjcmlwdGlvblxcXCI+RGVzY3JpcHRpb248L2xhYmVsPiA8dGV4dGFyZWEgcm93cz1cXFwiNVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZGVzY3JpcHRpb25cXFwiIGlkPVxcXCJmaWVsZF9kZXNjcmlwdGlvblxcXCIgWyhuZ01vZGVsKV09XFxcInF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb24uZGVzY3JpcHRpb25cXFwiPjwvdGV4dGFyZWE+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfd2FybmluZ1ZhbHVlXFxcIj5XYXJuaW5nIFZhbHVlPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwid2FybmluZ1ZhbHVlXFxcIiBpZD1cXFwiZmllbGRfd2FybmluZ1ZhbHVlXFxcIiBbKG5nTW9kZWwpXT1cXFwicXVhbGl0eUd1YXJkQ29uZmlndXJhdGlvbi53YXJuaW5nVmFsdWVcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF9lcnJvclZhbHVlXFxcIj5FcnJvciBWYWx1ZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVycm9yVmFsdWVcXFwiIGlkPVxcXCJmaWVsZF9lcnJvclZhbHVlXFxcIiBbKG5nTW9kZWwpXT1cXFwicXVhbGl0eUd1YXJkQ29uZmlndXJhdGlvbi5lcnJvclZhbHVlXFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfZ3VhcmRTdGF0dXNcXFwiPkd1YXJkIFN0YXR1czwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZ3VhcmRTdGF0dXNcXFwiIFsobmdNb2RlbCldPVxcXCJxdWFsaXR5R3VhcmQuZ3VhcmRTdGF0dXNcXFwiIGlkPVxcXCJmaWVsZF9ndWFyZFN0YXR1c1xcXCI+IDxvcHRpb24gdmFsdWU9XFxcIlNVQ0NFU1NcXFwiPlNVQ0NFU1M8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiV0FSTklOR1xcXCI+V0FSTklORzwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJFUlJPUlxcXCI+RVJST1I8L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfY29tYmluYXRpb25Nb2RlXFxcIj5Db21iaW5hdGlvbiBNb2RlPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjb21iaW5hdGlvbk1vZGVcXFwiIFsobmdNb2RlbCldPVxcXCJxdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uLmNvbWJpbmF0aW9uTW9kZVxcXCIgaWQ9XFxcImZpZWxkX2NvbWJpbmF0aW9uTW9kZVxcXCI+IDxvcHRpb24gdmFsdWU9XFxcIk9SXFxcIj5PUjwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJBTkRcXFwiPkFORDwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJOQVxcXCI+TkE8L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfaW50ZXJ2YWxBZ3JlZ2F0aW9uXFxcIj5BbmFseXNpcyBJbnRlcnZhbCBBZ3JlZ2F0aW9uPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJpbnRlcnZhbEFncmVnYXRpb25cXFwiIFsobmdNb2RlbCldPVxcXCJndWFyZENvbmRpdGlvbi5pbnRlcnZhbEFncmVnYXRpb25cXFwiIGlkPVxcXCJmaWVsZF9pbnRlcnZhbEFncmVnYXRpb25cXFwiPiA8b3B0aW9uIHZhbHVlPVxcXCJTVFJJQ1RcXFwiPlNUUklDVDwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJNT1lfTUlOXFxcIj5NT1lfTUlOPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIk1PWV9ISFxcXCI+TU9ZX0hIPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIk1PWV9ERFxcXCI+TU9ZX0REPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIk1PWV9XV1xcXCI+TU9ZX1dXPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIk1PWV9NTVxcXCI+TU9ZX01NPC9vcHRpb24+IDwvc2VsZWN0PiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYmFuXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+Q2FuY2VsPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcImVkaXRGb3JtLmZvcm0uaW52YWxpZCB8fCBpc1NhdmluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zYXZlXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+U2F2ZTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Zvcm0+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hbmFseXNpcy10b29sL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYW5hbHlzaXMtdG9vbC9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24vcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration-dialog.component.html\n");

/***/ })

})