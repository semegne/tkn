import{a as E}from"./chunk-P6C5WBN2.js";import{Ab as w,Ja as a,La as l,R as f,T as n,Xa as d,Ya as c,_ as b,da as s,fb as x,ga as g,gb as v,ia as m,ib as y,jb as B,kb as I,ma as r,na as i,pa as _,qa as C,va as u,xb as k}from"./chunk-VZCERJWG.js";function F(t,o){if(t&1&&(r(0,"span")(1,"a",6),a(2),d(3,"uppercase"),i(),a(4," | "),i()),t&2){let e=u().$implicit;n(),m("routerLink",e.router),n(),l(" ",c(3,2,e.name)," ")}}function L(t,o){if(t&1&&(r(0,"span",7),a(1),d(2,"uppercase"),i()),t&2){let e=u().$implicit;n(),l(" ",c(2,1,e.name),"")}}function M(t,o){if(t&1&&(_(0),s(1,F,5,4,"span",4)(2,L,3,3,"span",5),C()),t&2){let e=o.$implicit;n(),m("ngIf",e.router!=null),n(),m("ngIf",e.router==null)}}var S=class t{data={};media_url=E.media_url;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["app-breadcrumb"]],inputs:{data:"data"},decls:11,vars:7,consts:[[1,"d-flex","justify-content-between","align-items-center","bg-white","p-3"],[4,"ngFor","ngForOf"],["routerLink","/catalog/category",1,"clr-black"],[1,"text-danger"],[4,"ngIf"],["class","text-dark",4,"ngIf"],[1,"clr-black",3,"routerLink"],[1,"text-dark"]],template:function(e,p){e&1&&(r(0,"div",0)(1,"div"),s(2,M,3,2,"ng-container",1),i(),r(3,"div")(4,"a",2),a(5),d(6,"uppercase"),i(),a(7," | "),r(8,"a",3),d(9,"lowercase"),a(10," Award "),i()()()),e&2&&(n(2),m("ngForOf",p.data.breadcrumbs),n(3),l("",c(6,3,p.data.catalogueCode)," "),n(3),g("href",p.media_url+p.data.companyCode+"/"+c(9,5,p.data.catalogueCode)+"/awards/awards.pdf",f))},dependencies:[I,x,v,B,y,w,k],encapsulation:2})};export{S as a};
