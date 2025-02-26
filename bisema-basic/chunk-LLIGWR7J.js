import{a as x}from"./chunk-ZUSSVWCL.js";import{b as P,c as u,d as M,e as k,f as N,g as f,h as V,k as D,l as T,q as j}from"./chunk-G7Y2ZS3Y.js";import{b as O}from"./chunk-Y6CEYV4J.js";import"./chunk-64QROMKM.js";import{Aa as s,B as h,Eb as L,H as y,Oa as d,Qa as E,Ra as b,Wa as w,X as l,ca as g,ga as S,ha as v,ma as a,mb as F,qa as t,ra as r,rb as I,sa as m,ta as c,ua as p,za as C}from"./chunk-RPBBG52S.js";import"./chunk-4CLCTAJ7.js";function z(n,o){if(n&1&&(c(0),t(1,"div"),d(2),r(),p()),n&2){let e=s(2);l(2),E(" ",e.fieldLabel+"  is required!"," ")}}function Y(n,o){n&1&&(c(0),t(1,"div"),d(2," Both passwords must match. "),r(),p())}function R(n,o){n&1&&(c(0),t(1,"div"),d(2," Invalid Email format "),r(),p())}function U(n,o){if(n&1&&(c(0),t(1,"div"),d(2),r(),p()),n&2){let e=s(2);l(2),b(" ",e.fieldLabel," maximum length should be ",e.control==null||e.control.errors==null?null:e.control.errors.maxlength.requiredLength," ")}}function H(n,o){if(n&1&&(c(0),t(1,"div"),d(2),r(),p()),n&2){let e=s(2);l(2),b(" ",e.fieldLabel," minimum length should be ",e.control==null||e.control.errors==null?null:e.control.errors.minlength.requiredLength," ")}}function J(n,o){if(n&1&&(c(0),v(1,z,3,1,"ng-container",0)(2,Y,3,0,"ng-container",0)(3,R,3,0,"ng-container",0)(4,U,3,2,"ng-container",0)(5,H,3,2,"ng-container",0),p()),n&2){let e=s();l(),a("ngIf",e.control==null||e.control.errors==null?null:e.control.errors.required),l(),a("ngIf",e.control==null||e.control.errors==null?null:e.control.errors.PasswordNoMatch),l(),a("ngIf",e.control==null||e.control.errors==null?null:e.control.errors.email),l(),a("ngIf",e.control==null||e.control.errors==null?null:e.control.errors.maxlength),l(),a("ngIf",e.control==null||e.control.errors==null?null:e.control.errors.minlength)}}var _=class n{control;fieldLabel="";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-validation-error"]],inputs:{control:"control",fieldLabel:"fieldLabel"},decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,i){e&1&&v(0,J,6,5,"ng-container",0),e&2&&a("ngIf",(i.control==null?null:i.control.invalid)&&((i.control==null?null:i.control.dirty)||(i.control==null?null:i.control.touched)))},dependencies:[I,F],encapsulation:2})};var A=class n extends O{_authService=h(x);_router=h(L);loginForm=new N({subdomain:new f("",[u.required]),email:new f("",[u.required,u.email]),password:new f("",[u.required]),type:new f("user")});getControl(o){return this.loginForm.get(o)}login(){if(this.loginForm.invalid){this.loginForm.markAllAsTouched(),this.loginForm.markAsDirty();return}this._authService.login(this.loginForm.value).subscribe({next:o=>{if(o.status=="error"){this.error(o.message);return}if(o.role==1){this.error("You are not authorized to login");return}this.success(o.message),this._storrageService.setItem("token",o.data),this._storrageService.setItem("subdomain",this.loginForm.value.subdomain),this._router.navigateByUrl("")},error:o=>{this.error(o.message)}})}static \u0275fac=(()=>{let o;return function(i){return(o||(o=y(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["app-login"]],features:[w([x]),S],decls:46,vars:8,consts:[[1,"d-flex","align-items-center","justify-content-center",2,"height","100vh"],[1,"card","w-md-100"],[1,"card-body","bg-purple"],[1,"text-center","text-white"],[3,"submit","formGroup"],[1,"form-group","mb-1"],[1,"input-group"],["type","text","placeholder","Please enter subdomain","formControlName","subdomain",1,"form-control"],[1,"input-group-append"],[1,"input-group-text","h-100"],["aria-hidden","true",1,"fa","fa-server"],[1,"text-white"],[3,"control","fieldLabel"],["type","text","placeholder","Your Email","formControlName","email",1,"form-control"],["aria-hidden","true",1,"fa","fa-envelope"],["type","password","placeholder","Your Password","formControlName","password",1,"form-control"],["aria-hidden","true",1,"fa","fa-key"],[1,"d-flex","justify-content-between"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","flexSwitchCheckDefault",1,"form-check-input"],[1,"d-flex"],["type","button",1,"btn","bg-light","me-2",3,"click"],[1,"input-group","d-flex","justify-content-end"],[1,"input-group-prepend"],["aria-hidden","true",1,"fa","fa-lock"],["type","submit",1,"btn","btn2","border-white",3,"disabled"],["aria-hidden","true",1,"fa","fa-arrow-right"]],template:function(e,i){e&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),c(3),t(4,"h1",3),d(5,"BiSemA"),r(),t(6,"p",3),d(7,"Please enter your account details to login"),r(),t(8,"form",4),C("submit",function(){return i.login()}),t(9,"div",5)(10,"div",6),m(11,"input",7),t(12,"div",8)(13,"span",9),m(14,"i",10),r()()(),t(15,"label",11),m(16,"app-validation-error",12),r()(),t(17,"div",5)(18,"div",6),m(19,"input",13),t(20,"div",8)(21,"span",9),m(22,"i",14),r()()(),t(23,"label",11),m(24,"app-validation-error",12),r()(),t(25,"div",5)(26,"div",6),m(27,"input",15),t(28,"div",8)(29,"span",9),m(30,"i",16),r()()(),t(31,"label",11),m(32,"app-validation-error",12),r()(),t(33,"div",17)(34,"div",18),m(35,"input",19),r(),t(36,"div",20)(37,"button",21),C("click",function(){return i.loginForm.reset()}),d(38," Cancel "),r(),t(39,"div",22)(40,"div",23)(41,"span",9),m(42,"i",24),r()(),t(43,"button",25),m(44,"i",26),d(45," Login "),r()()()()(),p(),r()()()),e&2&&(l(8),a("formGroup",i.loginForm),l(8),a("control",i.getControl("subdomain"))("fieldLabel","Subdomain"),l(8),a("control",i.getControl("email"))("fieldLabel","Email"),l(8),a("control",i.getControl("password"))("fieldLabel","Password"),l(11),a("disabled",!i.loginForm.valid))},dependencies:[j,V,P,M,k,D,T,_],styles:[".card[_ngcontent-%COMP%]{width:35%}.project_table_header[_ngcontent-%COMP%]{font-size:14px!important;font-weight:700;position:relative;float:left;margin:8px 0}.project_table_header_border[_ngcontent-%COMP%]{border-top:1px solid #fff}.project_table_body[_ngcontent-%COMP%]{max-height:288px;overflow-y:auto}.project_error_message[_ngcontent-%COMP%]{width:100%}.new_project_button[_ngcontent-%COMP%]{margin:10px 10px 0 0}.project_table_even_row[_ngcontent-%COMP%]{background-color:#eedfff}.dialog[_ngcontent-%COMP%]{top:50%;left:50%;width:50em;margin-top:-9em;margin-left:-25em;position:fixed;border:none!important;z-index:9999}.dialog_overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;opacity:.4;z-index:999}"]})};export{A as LoginComponent};
