webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" #editForm=\\\"ngForm\\\"> <div class=\\\"modal-header\\\"> <h4 class=\\\"modal-title\\\" id=\\\"myQualityGuardLabel\\\">Create or edit a Quality Guard </h4> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <div class=\\\"modal-body\\\"> <jhi-alert-error></jhi-alert-error> <div class=\\\"form-group\\\" [hidden]=\\\"!qualityGuard.id\\\"> <label for=\\\"id\\\">ID</label> <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"id\\\" name=\\\"id\\\" [(ngModel)]=\\\"qualityGuard.id\\\" readonly=\\\"readonly\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_qualityGuardName\\\">Quality Guard Name</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"qualityGuardName\\\" id=\\\"field_qualityGuardName\\\" [(ngModel)]=\\\"qualityGuard.qualityGuardName\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_description\\\">Description</label> <textarea rows=\\\"5\\\" class=\\\"form-control\\\" name=\\\"description\\\" id=\\\"field_description\\\" [(ngModel)]=\\\"qualityGuard.description\\\"></textarea> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_operator\\\">Operator</label> <select class=\\\"form-control\\\" name=\\\"operator\\\" [(ngModel)]=\\\"qualityGuard.guardConditions\\\" id=\\\"field_operator\\\"> <option value=\\\"SUPERIOR\\\">SUPERIOR</option> <option value=\\\"INFERIOR\\\">INFERIOR</option> <option value=\\\"EQUAL\\\">EQUAL</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_operator\\\">Operator</label> <select class=\\\"form-control\\\" name=\\\"operator\\\" [(ngModel)]=\\\"qualityGuard.operator\\\" id=\\\"field_operator\\\"> <option value=\\\"SUPERIOR\\\">SUPERIOR</option> <option value=\\\"INFERIOR\\\">INFERIOR</option> <option value=\\\"EQUAL\\\">EQUAL</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_warningValue\\\">Warning Value</label> <input type=\\\"number\\\" class=\\\"form-control\\\" name=\\\"warningValue\\\" id=\\\"field_warningValue\\\" [(ngModel)]=\\\"qualityGuard.warningValue\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_errorValue\\\">Error Value</label> <input type=\\\"number\\\" class=\\\"form-control\\\" name=\\\"errorValue\\\" id=\\\"field_errorValue\\\" [(ngModel)]=\\\"qualityGuard.errorValue\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_combinationMode\\\">Combination Mode</label> <select class=\\\"form-control\\\" name=\\\"combinationMode\\\" [(ngModel)]=\\\"qualityGuard.combinationMode\\\" id=\\\"field_combinationMode\\\"> <option value=\\\"OR\\\">OR</option> <option value=\\\"AND\\\">AND</option> <option value=\\\"NA\\\">NA</option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_intervalAgregation\\\">Analysis Interval Agregation</label> <select class=\\\"form-control\\\" name=\\\"intervalAgregation\\\" [(ngModel)]=\\\"qualityGuard.intervalAgregation\\\" id=\\\"field_intervalAgregation\\\"> <option value=\\\"STRICT\\\">STRICT</option> <option value=\\\"MOY_MIN\\\">MOY_MIN</option> <option value=\\\"MOY_HH\\\">MOY_HH</option> <option value=\\\"MOY_DD\\\">MOY_DD</option> <option value=\\\"MOY_WW\\\">MOY_WW</option> <option value=\\\"MOY_MM\\\">MOY_MM</option> </select> </div> </div> <div class=\\\"modal-footer\\\"> <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\" (click)=\\\"clear()\\\"> <span class=\\\"fa fa-ban\\\"></span>&nbsp;<span>Cancel</span> </button> <button type=\\\"submit\\\" [disabled]=\\\"editForm.form.invalid || isSaving\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-save\\\"></span>&nbsp;<span>Save</span> </button> </div> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWw/ZmE2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxVkFBcVYsK2pHQUErakcsMEtBQTBLIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9hbmFseXNpcy10b29sL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIG5hbWU9XFxcImVkaXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlIChuZ1N1Ym1pdCk9XFxcInNhdmUoKVxcXCIgI2VkaXRGb3JtPVxcXCJuZ0Zvcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBpZD1cXFwibXlRdWFsaXR5R3VhcmRMYWJlbFxcXCI+Q3JlYXRlIG9yIGVkaXQgYSBRdWFsaXR5IEd1YXJkIDwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW2hpZGRlbl09XFxcIiFxdWFsaXR5R3VhcmQuaWRcXFwiPiA8bGFiZWwgZm9yPVxcXCJpZFxcXCI+SUQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImlkXFxcIiBuYW1lPVxcXCJpZFxcXCIgWyhuZ01vZGVsKV09XFxcInF1YWxpdHlHdWFyZC5pZFxcXCIgcmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfcXVhbGl0eUd1YXJkTmFtZVxcXCI+UXVhbGl0eSBHdWFyZCBOYW1lPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInF1YWxpdHlHdWFyZE5hbWVcXFwiIGlkPVxcXCJmaWVsZF9xdWFsaXR5R3VhcmROYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwicXVhbGl0eUd1YXJkLnF1YWxpdHlHdWFyZE5hbWVcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF9kZXNjcmlwdGlvblxcXCI+RGVzY3JpcHRpb248L2xhYmVsPiA8dGV4dGFyZWEgcm93cz1cXFwiNVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZGVzY3JpcHRpb25cXFwiIGlkPVxcXCJmaWVsZF9kZXNjcmlwdGlvblxcXCIgWyhuZ01vZGVsKV09XFxcInF1YWxpdHlHdWFyZC5kZXNjcmlwdGlvblxcXCI+PC90ZXh0YXJlYT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaWVsZF9vcGVyYXRvclxcXCI+T3BlcmF0b3I8L2xhYmVsPiA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm9wZXJhdG9yXFxcIiBbKG5nTW9kZWwpXT1cXFwicXVhbGl0eUd1YXJkLmd1YXJkQ29uZGl0aW9uc1xcXCIgaWQ9XFxcImZpZWxkX29wZXJhdG9yXFxcIj4gPG9wdGlvbiB2YWx1ZT1cXFwiU1VQRVJJT1JcXFwiPlNVUEVSSU9SPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIklORkVSSU9SXFxcIj5JTkZFUklPUjwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJFUVVBTFxcXCI+RVFVQUw8L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfb3BlcmF0b3JcXFwiPk9wZXJhdG9yPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJvcGVyYXRvclxcXCIgWyhuZ01vZGVsKV09XFxcInF1YWxpdHlHdWFyZC5vcGVyYXRvclxcXCIgaWQ9XFxcImZpZWxkX29wZXJhdG9yXFxcIj4gPG9wdGlvbiB2YWx1ZT1cXFwiU1VQRVJJT1JcXFwiPlNVUEVSSU9SPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XFxcIklORkVSSU9SXFxcIj5JTkZFUklPUjwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJFUVVBTFxcXCI+RVFVQUw8L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfd2FybmluZ1ZhbHVlXFxcIj5XYXJuaW5nIFZhbHVlPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwid2FybmluZ1ZhbHVlXFxcIiBpZD1cXFwiZmllbGRfd2FybmluZ1ZhbHVlXFxcIiBbKG5nTW9kZWwpXT1cXFwicXVhbGl0eUd1YXJkLndhcm5pbmdWYWx1ZVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX2Vycm9yVmFsdWVcXFwiPkVycm9yIFZhbHVlPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZXJyb3JWYWx1ZVxcXCIgaWQ9XFxcImZpZWxkX2Vycm9yVmFsdWVcXFwiIFsobmdNb2RlbCldPVxcXCJxdWFsaXR5R3VhcmQuZXJyb3JWYWx1ZVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX2NvbWJpbmF0aW9uTW9kZVxcXCI+Q29tYmluYXRpb24gTW9kZTwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY29tYmluYXRpb25Nb2RlXFxcIiBbKG5nTW9kZWwpXT1cXFwicXVhbGl0eUd1YXJkLmNvbWJpbmF0aW9uTW9kZVxcXCIgaWQ9XFxcImZpZWxkX2NvbWJpbmF0aW9uTW9kZVxcXCI+IDxvcHRpb24gdmFsdWU9XFxcIk9SXFxcIj5PUjwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJBTkRcXFwiPkFORDwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJOQVxcXCI+TkE8L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfaW50ZXJ2YWxBZ3JlZ2F0aW9uXFxcIj5BbmFseXNpcyBJbnRlcnZhbCBBZ3JlZ2F0aW9uPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJpbnRlcnZhbEFncmVnYXRpb25cXFwiIFsobmdNb2RlbCldPVxcXCJxdWFsaXR5R3VhcmQuaW50ZXJ2YWxBZ3JlZ2F0aW9uXFxcIiBpZD1cXFwiZmllbGRfaW50ZXJ2YWxBZ3JlZ2F0aW9uXFxcIj4gPG9wdGlvbiB2YWx1ZT1cXFwiU1RSSUNUXFxcIj5TVFJJQ1Q8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cXFwiTU9ZX01JTlxcXCI+TU9ZX01JTjwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJNT1lfSEhcXFwiPk1PWV9ISDwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJNT1lfRERcXFwiPk1PWV9ERDwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJNT1lfV1dcXFwiPk1PWV9XVzwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVxcXCJNT1lfTU1cXFwiPk1PWV9NTTwvb3B0aW9uPiA8L3NlbGVjdD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWJhblxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuPkNhbmNlbDwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJlZGl0Rm9ybS5mb3JtLmludmFsaWQgfHwgaXNTYXZpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc2F2ZVxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuPlNhdmU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC9mb3JtPiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYW5hbHlzaXMtdG9vbC9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24vcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration-dialog.component.html\n");

/***/ })

})