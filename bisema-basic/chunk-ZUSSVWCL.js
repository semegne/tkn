import{a as n}from"./chunk-Y6CEYV4J.js";import{A as o,ub as e,x as i}from"./chunk-RPBBG52S.js";var a=class t{constructor(r){this.http=r}api_url=n.api_url;login(r){return this.http.post(`${this.api_url}login`,r)}logout(){return this.http.post(`${this.api_url}logout`,{})}static \u0275fac=function(p){return new(p||t)(o(e))};static \u0275prov=i({token:t,factory:t.\u0275fac})};export{a};
