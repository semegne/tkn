import{a as he}from"./chunk-P765WUS7.js";import{a as ue,b as me}from"./chunk-CE264D3Z.js";import{a as Y,b as Z,d as ee,e as te,f as ie,g as C,i as ne,j as oe,k as re,l as le,m as ae,o as ce,p as de,q as pe,s as se}from"./chunk-LSGPDU6X.js";import{b as _e}from"./chunk-5ZGYSYZV.js";import"./chunk-QPHC7RMV.js";import{$a as S,Ba as g,Ca as u,Fa as L,H as _,Ha as M,I as h,Ib as J,J as O,Ja as I,Lb as K,Pa as $,Qa as a,Ra as v,Sa as b,Ta as q,W as P,X as k,Ya as A,Z as l,ab as B,cb as x,db as y,ea as T,eb as z,ia as V,ja as f,na as E,nb as G,oa as d,ob as j,pb as R,qb as U,rb as H,sa as n,sb as Q,ta as o,tb as W,ua as p,ub as X,va as D,wa as N,xa as F,ya as w}from"./chunk-7E6QOOYZ.js";import"./chunk-4CLCTAJ7.js";var be=(r,i)=>({"text-danger":r,"text-success":i}),Ce=(r,i)=>({"clr-red":r,"text-success":i}),ve=(r,i)=>({option:r,index:i,margin:5}),xe=(r,i,t)=>({option:r,index:i,margin:t}),ye=(r,i)=>({"bg-purple text-white":r,"clr-grey":i});function we(r,i){if(r&1&&(n(0,"option",46),a(1),o()),r&2){let t=i.$implicit;L("value",t.folder),d("ngValue",t.url),l(),b(" ",t.fullName," ")}}function Se(r,i){r&1&&(n(0,"span"),a(1," / price:0"),o())}function $e(r,i){if(r&1&&(n(0,"span"),a(1),o()),r&2){let t=u().index,e=u();l(),q(" -> ",e.product.finish_labels[t]," | ",e.product.finish_prices[t],"")}}function Pe(r,i){if(r&1&&(n(0,"div"),F(1,51),o()),r&2){let t=i.$implicit,e=u().index;u();let c=$(123);l(),d("ngTemplateOutlet",c)("ngTemplateOutletContext",S(2,ve,t,e))}}function ke(r,i){if(r&1){let t=w();n(0,"div",47)(1,"a",48),g("click",function(){let c=_(t).index,s=u();return h(s.finishCollapseToggle(c))}),a(2),f(3,Se,2,0,"span",49)(4,$e,2,2,"span",49),o(),n(5,"div",50,2),f(7,Pe,2,5,"div",23),o()()}if(r&2){let t=i.$implicit,e=i.index,c=u();l(),d("ngClass",S(6,Ce,c.product.finish_labels[e]==" ??",c.product.finish_labels[e]!=" ??")),l(),b(" ",t.description," "),l(),d("ngIf",c.product.finish_prices[e]==0),l(),d("ngIf",c.product.finish_prices[e]!=0),l(),d("ngbCollapse",t.collapse),l(2),d("ngForOf",t.options)}}function Ee(r,i){if(r&1&&(n(0,"span"),a(1),o()),r&2){let t=i.$implicit;l(),v(t)}}function Fe(r,i){if(r&1&&(n(0,"div",52)(1,"a",53),p(2,"img",54),x(3,"lowercase"),x(4,"lowercase"),n(5,"div",55),a(6),o()()()),r&2){let t=i.$implicit,e=u();l(),M("routerLink","/catalogue/",e.product.catalogue_id,"/product/",t==null?null:t.id,""),l(),I("src","",e.media_url,"",e.product==null?null:e.product.company_code,"/",y(3,9,e.product==null?null:e.product.catalogue_code),"/prod_icons/",y(4,11,t.label),"_3d.png",k),l(4),b(" ",t.label," ")}}function Ie(r,i){if(r&1&&(n(0,"div"),F(1,51),o()),r&2){let t=i.$implicit,e=u(2),c=e.index,s=e.margin;u();let m=$(123);l(),d("ngTemplateOutlet",m)("ngTemplateOutletContext",B(2,xe,t,c,s+5))}}function Oe(r,i){if(r&1){let t=w();D(0),n(1,"a",57),g("click",function(){_(t);let c=u().option;return h(c.sub_group.collapse=!c.sub_group.collapse)}),a(2),o(),n(3,"div",50,3),f(5,Ie,2,6,"div",23),o(),N()}if(r&2){let t=u(),e=t.option,c=t.margin;l(),E("style","margin-left: ",c,"px;",P),l(),b(" ",e.sub_group.description," "),l(),d("ngbCollapse",e.sub_group.collapse),l(2),d("ngForOf",e.sub_group.options)}}function Te(r,i){if(r&1){let t=w();n(0,"a",58),g("click",function(){_(t);let c=u(),s=c.option,m=c.index,ge=u();return h(ge.finish(s.name,m,s.price))}),a(1),o()}if(r&2){let t=u(),e=t.option,c=t.index,s=t.margin,m=u();E("style","margin-left: ",s,"px;",P),d("ngClass",S(4,ye,e.name==m.product.finish_labels[c],e.name!=m.product.finish_labels[c])),l(),b(" ",e.description," ")}}function Ve(r,i){if(r&1&&f(0,Oe,6,5,"ng-container",49)(1,Te,2,7,"a",56),r&2){let t=i.option;d("ngIf",t.subgroup_id),l(),d("ngIf",!t.subgroup_id)}}var fe=class r extends _e{breadcrumbData={};product=null;price=null;qty=new C({value:"1",disabled:!0});autoCadForm=new ie({dwg_2d:new C(""),dxf_2d:new C(""),rvt_2d:new C(""),dwg_3d:new C(""),dxf_3d:new C(""),rvt_3d:new C("")});pdfs=[{fullName:"ANSI / BIFMA-Certificates",name:"anci_bifma_certificate.pdf",folder:"prod_certificates",url:`${this.media_url}${this.product?.company_code}/${this.product?.catalogue_code.toLowerCase()}/labels/${this.product?.category_label}/prod_certificates/${this.product?.category_label}.pdf`},{fullName:"Price Product Guide",name:"price_product_guide.pdf",folder:"price_guide",url:`${this.media_url}${this.product?.company_code}/${this.product?.catalogue_code.toLowerCase()}/labels/${this.product?.category_label}/price_guide/${this.product?.category_label}.pdf`},{fullName:"Installation Guide",name:"installation_guide.pdf",folder:"installation_guide",url:`${this.media_url}${this.product?.company_code}/${this.product?.catalogue_code.toLowerCase()}/labels/${this.product?.category_label}/installation_guide/${this.product?.category_label}.pdf`},{fullName:"Environment Data",name:"environment_report.pdf",folder:"env_data",url:`${this.media_url}${this.product?.company_code}/${this.product?.catalogue_code.toLowerCase()}/labels/${this.product?.category_label}/env_data/${this.product?.category_label}.pdf`}];getProduct(i){this._mainService.getProduct(i).subscribe({next:t=>{this.product=t.data,this.product.finish_labels=new Array(this.product.groups.length).fill(" ??"),this.product.finish_prices=new Array(this.product.groups.length).fill(0),this.breadcrumbData.companyCode=this.product?.company_code,this.breadcrumbData.catalogueCode=this.product.catalogue_code;let e=[{name:this.product?.company_code,router:`/catalogue/${this.product?.catalogue_id}`},{name:this.product?.category_name,router:`/catalogue/${this.product?.catalogue_id}/category/${this.product?.category_id}`},{name:this.product?.sub_category_name,router:`/catalogue/${this.product?.catalogue_id}/sub-category/${this.product?.sub_category_id}`},{name:this.product?.label,router:null}];this.breadcrumbData.breadcrumbs=e,this.price=this.product?.price}})}getProductSectionTextFile(){this._mainService.getProductFile(this.product.company_code,this.product.catalogue_code,this.product.category_label,this.product.sub_category_label).subscribe({next:i=>{this.product.description=i}})}stepDown(){this.qty.value!=1&&(this.qty.setValue(parseInt(this.qty.value)-1),this.changePrice())}stepUp(){this.qty.setValue(parseInt(this.qty.value)+1),this.changePrice()}changePrice(){this.price=this.product.price;for(let i=0;i<this.product.finish_prices.length;i++)this.price=this.price+this.product.finish_prices[i];this.price=this.price*this.qty.value,this.price=parseFloat(this.price).toFixed(2)}selectCadFiles(){var i=this.autoCadForm.value;let t=[];i.dwg_2d==!0&&t.push(`${this.media_url}${this.product?.company_code}/${this.product?.catalogue_code.toLowerCase()}/dwgfolders/dwg/2d/${this.product?.label.toLowerCase()}_2d.dwg`),i.dwg_3d==!0&&t.push(`${this.media_url}${this.product?.company_code}/${this.product?.catalogue_code.toLowerCase()}/dwgfolders/dwg/3d/${this.product?.label.toLowerCase()}_3d.dwg`),i.dxf_2d==!0&&t.push(`${this.media_url}${this.product?.company_code}/${this.product?.catalogue_code.toLowerCase()}/dwgfolders/dxf/2d/${this.product?.label.toLowerCase()}_2d.dxf`),i.dxf_3d==!0&&t.push(`${this.media_url}${this.product?.company_code}/${this.product?.catalogue_code.toLowerCase()}/dwgfolders/dxf/3d/${this.product?.label.toLowerCase()}_3d.dxf`),i.rvt_2d==!0&&t.push(`${this.media_url}${this.product?.company_code}/${this.product?.catalogue_code.toLowerCase()}/dwgfolders/rvt/2d/${this.product?.label.toLowerCase()}_2d.rvt`),i.rvt_3d==!0&&t.push(`${this.media_url}${this.product?.company_code}/${this.product?.catalogue_code.toLowerCase()}/dwgfolders/rvt/3d/${this.product?.label.toLowerCase()}_3d.rvt`);let e=setInterval(function(c){let s=c.pop(),m=document.createElement("a");s=s||"",m.setAttribute("href",s),m.click(),c.length==0&&clearInterval(e)},1e3,t)}downloadPdf(i){console.log(this.product);let t=document.createElement("a"),e=`${this.media_url}${this.product?.company_code}/${this.product?.catalogue_code.toLowerCase()}/labels/${this.product?.category_label}/${i}/${this.product?.sub_category_label}.pdf`;t.setAttribute("href",e),t.setAttribute("target","_blank"),t.click()}finishCollapseToggle(i){this.product?.groups.forEach((t,e)=>{e==i?t.collapse=!t.collapse:t.collapse=!0})}finish(i,t,e){this.product.finish_labels[t]=i,this.product.finish_prices[t]=e,this.price=+this.price+ +this.product.finish_prices[t]}addToCart(){let i=this.product.finish_labels.toString();i=i.replace(/,/g,"");let t={product_id:this.product.id,tag_name:"",order_code:this.product.label+i,finish_labels:this.product.finish_labels,finish_prices:this.product.finish_prices,qty:this.qty.value};this._cartService.add(t).subscribe({next:e=>{this.success(e.message),this._busService.sendShowCart()}})}ngOnInit(){this._activatedRoute.params.subscribe({next:i=>{let t=i.product_id;this.getProduct(t)}})}static \u0275fac=(()=>{let i;return function(e){return(i||(i=O(r)))(e||r)}})();static \u0275cmp=T({type:r,selectors:[["app-product"]],features:[A([]),V],decls:124,vars:31,consts:[["pdfSelect",""],["myFragment",""],["finishCollapse","ngbCollapse"],["subfinishCollapse","ngbCollapse"],[3,"data"],[1,"container-fluid"],[1,"row","mt-3"],[1,"col-12"],[1,"d-flex","flex-md-row","flex-column","justify-content-between","align-items-center"],[1,"flex-fill"],[1,"text-muted"],[1,"ms-2","text-dark"],[1,"d-flex","flex-md-row","flex-column","align-items-center"],[1,"form-select","form-select-sm","decorated",3,"change"],["value",""],["class","text-dark ms-2",3,"ngValue","value",4,"ngFor","ngForOf"],[1,"border-dark"],[1,"col-md-6","col-12"],[1,"img-hover-zoom"],["alt","","width","200",1,"img-rounded",3,"src"],["class","menu mb-2",4,"ngFor","ngForOf"],[1,"prod-description"],[1,"p-1",3,"ngClass"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","align-items-center"],[1,""],[1,"ms-5","qtyInput"],[1,"input-group","bg-main","mb-3"],[1,"input-group-text"],["type","button",1,"btn","bg-light-purple","border",3,"click"],["min","1","value","1","type","number",1,"form-control","form-control-sm",3,"change","formControl"],["type","button",1,"btn","btn-dark","btn-sm","btn2","w-100",3,"click"],[1,"mt-3"],[1,"row"],["class","col-6 col-lg-4 mb-3 text-center img-hover-zoom",4,"ngFor","ngForOf"],[3,"formGroup"],[1,"table","bg-transparent"],[1,"pt-3"],[1,"form-check","form-switch"],["formControlName","dwg_2d","type","checkbox","role","switch","id","flexSwitchCheckDefault",1,"form-check-input"],["formControlName","dxf_2d","type","checkbox","role","switch","id","flexSwitchCheckDefault",1,"form-check-input"],["formControlName","rvt_2d","type","checkbox","role","switch","id","flexSwitchCheckDefault",1,"form-check-input"],["formControlName","dwg_3d","type","checkbox","role","switch","id","flexSwitchCheckDefault",1,"form-check-input"],["formControlName","dxf_3d","type","checkbox","role","switch","id","flexSwitchCheckDefault",1,"form-check-input"],["formControlName","rvt_3d","type","checkbox","role","switch","id","flexSwitchCheckDefault",1,"form-check-input"],[1,"btn","btn-sm","btn2","w-100",3,"click"],[1,"text-dark","ms-2",3,"ngValue","value"],[1,"menu","mb-2"],["href","javascript:;",1,"text-decoration-none","fw-bold",3,"click","ngClass"],[4,"ngIf"],[3,"ngbCollapse"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"col-6","col-lg-4","mb-3","text-center","img-hover-zoom"],[1,"clr-purple","text-decoration-none","font-weight-bold",3,"routerLink"],["alt","","width","100",1,"img-rounded",3,"src"],[1,"mt-2"],["href","javascript:;","class","side-child-item p-1 text-decoration-none",3,"ngClass","click",4,"ngIf"],["href","javascript:;",1,"text-decoration-none","fw-bold",3,"click"],["href","javascript:;",1,"side-child-item","p-1","text-decoration-none",3,"click","ngClass"]],template:function(t,e){if(t&1){let c=w();p(0,"app-breadcrumb",4),n(1,"div",5)(2,"div",6)(3,"div",7)(4,"div",8)(5,"div",9)(6,"span")(7,"small",10),a(8,"Product Description:"),o(),n(9,"span",11),a(10),x(11,"uppercase"),o()()(),n(12,"div",9)(13,"div",12)(14,"select",13,0),g("change",function(){_(c);let m=$(15);return h(e.downloadPdf(m.value))}),n(16,"option",14),a(17,"Product info"),o(),f(18,we,2,3,"option",15),o()()()()(),p(19,"hr",16),n(20,"div",17)(21,"div")(22,"small",10),a(23,"Product:"),o(),n(24,"h6"),a(25),o(),p(26,"hr",16),n(27,"div",18),p(28,"img",19),x(29,"lowercase"),x(30,"lowercase"),o()(),n(31,"div"),p(32,"hr",16),n(33,"h6"),a(34,"Finishes"),o(),p(35,"hr",16),f(36,ke,8,9,"div",20),o()(),n(37,"div",17)(38,"div"),p(39,"br"),n(40,"h6"),a(41,"Description"),o(),p(42,"hr",16),n(43,"p"),a(44),o(),n(45,"p",21),a(46),o()(),n(47,"div"),p(48,"hr",16),n(49,"h6"),a(50,"Product Code"),o(),n(51,"h3",22),a(52),f(53,Ee,2,1,"span",23),o(),n(54,"div",24)(55,"div",25)(56,"h6",25),a(57),x(58,"currency"),o()(),n(59,"div",26)(60,"div",27)(61,"span",28),a(62,"Qty"),o(),n(63,"button",29),g("click",function(){return _(c),h(e.stepDown())}),a(64,"-"),o(),n(65,"input",30),g("change",function(){return _(c),h(e.changePrice())}),o(),n(66,"button",29),g("click",function(){return _(c),h(e.stepUp())}),a(67,"+"),o()()()(),n(68,"button",31),g("click",function(){return _(c),h(e.addToCart())}),a(69," Add to Cart "),o()()(),n(70,"div",17)(71,"div"),p(72,"hr",16),n(73,"h6",32),a(74),o(),p(75,"hr",16),n(76,"div",33),f(77,Fe,7,13,"div",34),o()()(),n(78,"div",17)(79,"div",32),p(80,"hr",16),n(81,"h6"),a(82,"Download"),o(),p(83,"hr",16),n(84,"form",35)(85,"table",36)(86,"thead")(87,"tr"),p(88,"th"),n(89,"th"),a(90,"DWG"),o(),n(91,"th"),a(92,"DXF"),o(),n(93,"th"),a(94,"Revit"),o()()(),n(95,"tbody")(96,"tr")(97,"td",37),a(98,"2D"),o(),n(99,"td")(100,"div",38),p(101,"input",39),o()(),n(102,"td")(103,"div",38),p(104,"input",40),o()(),n(105,"td")(106,"div",38),p(107,"input",41),o()()(),n(108,"tr")(109,"td",37),a(110,"3D"),o(),n(111,"td")(112,"div",38),p(113,"input",42),o()(),n(114,"td")(115,"div",38),p(116,"input",43),o()(),n(117,"td")(118,"div",38),p(119,"input",44),o()()()()(),n(120,"button",45),g("click",function(){return _(c),h(e.selectCadFiles())}),a(121," Download "),o()()()()()(),f(122,Ve,2,2,"ng-template",null,1,z)}t&2&&(d("data",e.breadcrumbData),l(10),v(y(11,20,e.product==null?null:e.product.name)),l(8),d("ngForOf",e.pdfs),l(7),v(e.product==null?null:e.product.label),l(3),I("src","",e.media_url,"",e.product==null?null:e.product.company_code,"/",y(29,22,e.product==null?null:e.product.catalogue_code),"/prod_icons/",y(30,24,e.product==null?null:e.product.label),"_3d.png",k),l(8),d("ngForOf",e.product==null?null:e.product.groups),l(8),v(e.product==null?null:e.product.sub_category_name),l(2),v(e.product==null?null:e.product.description),l(5),d("ngClass",S(28,be,e.product==null?null:e.product.finish_labels.includes(" ??"),!(e.product!=null&&e.product.finish_labels.includes(" ??")))),l(),b(" ",e.product==null?null:e.product.label," "),l(),d("ngForOf",e.product==null?null:e.product.finish_labels),l(4),v(y(58,26,e.price)),l(8),d("formControl",e.qty),l(9),b("Other ",e.product==null?null:e.product.sub_category_name," sizes"),l(3),d("ngForOf",e.product==null?null:e.product.products),l(7),d("formGroup",e.autoCadForm))},dependencies:[X,G,j,R,U,Q,H,W,K,J,he,se,ne,ce,de,Z,oe,Y,ee,te,pe,re,le,ae,me,ue],styles:[".prod-description[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif}.qtyInput[_ngcontent-%COMP%]{width:160px}.last-col[_ngcontent-%COMP%]{width:28%!important}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:transparent}"]})};export{fe as ProductComponent};
