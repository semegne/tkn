import{a as S}from"./chunk-5ZGYSYZV.js";import{Ca as u,Ib as w,Lb as E,Qa as a,Sa as l,X as f,Z as n,cb as c,db as d,ea as b,ja as s,ma as g,oa as m,ob as v,pb as y,rb as B,sa as r,sb as I,ta as i,ua as _,ub as k,va as C,wa as x}from"./chunk-7E6QOOYZ.js";function L(t,o){if(t&1&&(r(0,"span")(1,"a",7),a(2),c(3,"uppercase"),i(),a(4," | "),i()),t&2){let e=u().$implicit;n(),m("routerLink",e.router),n(),l(" ",d(3,2,e.name)," ")}}function M(t,o){if(t&1&&(r(0,"span",8),a(1),c(2,"uppercase"),i()),t&2){let e=u().$implicit;n(),l(" ",d(2,1,e.name),"")}}function N(t,o){if(t&1&&(C(0),s(1,L,5,4,"span",5)(2,M,3,3,"span",6),x()),t&2){let e=o.$implicit;n(),m("ngIf",e.router!=null),n(),m("ngIf",e.router==null)}}var F=class t{data={};media_url=S.media_url;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["app-breadcrumb"]],inputs:{data:"data"},decls:12,vars:7,consts:[[1,"d-flex","justify-content-between","align-items-center","bg-white","p-3"],[4,"ngFor","ngForOf"],["routerLink","/catalog/category",1,"clr-black"],["target","_blank",1,"text-danger"],[1,"fa","fa-circle"],[4,"ngIf"],["class","text-dark",4,"ngIf"],[1,"clr-black",3,"routerLink"],[1,"text-dark"]],template:function(e,p){e&1&&(r(0,"div",0)(1,"div"),s(2,N,3,2,"ng-container",1),i(),r(3,"div")(4,"a",2),a(5),c(6,"uppercase"),i(),a(7," | "),r(8,"a",3),c(9,"lowercase"),_(10,"i",4),a(11," Award "),i()()()),e&2&&(n(2),m("ngForOf",p.data.breadcrumbs),n(3),l("",d(6,3,p.data.catalogueCode)," "),n(3),g("href",p.media_url+p.data.companyCode+"/"+d(9,5,p.data.catalogueCode)+"/awards/awards.pdf",f))},dependencies:[k,v,y,I,B,E,w],encapsulation:2})};export{F as a};
