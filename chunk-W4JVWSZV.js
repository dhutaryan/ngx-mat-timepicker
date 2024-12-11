import{a as lt}from"./chunk-5NURASTB.js";import{a as w,b as N,c as st}from"./chunk-E3BBKM4W.js";import{B as K,C as U,F as J,H as Q,I as X,J as Y,K as Z,L as tt,M as et,N as nt,O as ot,P as it,Ya as ct,Za as at,ab as pt,bb as gt,x as W}from"./chunk-GLICIFRM.js";import{$a as y,Cb as B,Eb as R,Gc as rt,I as F,Ia as l,Ka as I,Ma as C,Pa as f,Pb as v,T as u,Ua as p,Xb as j,Ya as O,Yb as H,Za as D,_a as x,ab as i,bb as r,cb as d,ec as z,ia as P,jb as A,lb as _,mb as E,nb as G,oc as V,qc as $,rc as q,va as o,wb as s,xb as b,yb as h,yc as Ct}from"./chunk-KBFFLKJI.js";import{a as L,b as T,h as ft}from"./chunk-TWZW5B45.js";var M=ft(Ct(),1);var _t=["ng-doc-button-toggle",""],ht=["*"],dt=(()=>{class t extends nt{constructor(){super({host:it()})}clickEvent(){this.updateModel(this.checked()?null:this.value)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["","ng-doc-button-toggle",""]],hostBindings:function(n,c){n&1&&A("click",function(){return c.clickEvent()})},features:[C],attrs:_t,ngContentSelectors:ht,decls:1,vars:0,template:function(n,c){n&1&&(E(),G(0))},styles:["[_nghost-%COMP%]{font-family:var(--ng-doc-font-family);font-variant:no-contextual;color:var(--ng-doc-text);line-height:var(--ng-doc-line-height);font-size:var(--ng-doc-font-size);font-weight:var(--ng-doc-font-weight);position:relative;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;border-radius:calc(var(--ng-doc-base-gutter) / 2);border:1px solid var(--ng-doc-button-border-color, transparent);padding:var(--ng-doc-button-padding, calc(var(--ng-doc-base-gutter) / 2) var(--ng-doc-base-gutter));background:var(--ng-doc-button-background)}[_nghost-%COMP%]:hover{text-decoration:none;border:1px solid var(--ng-doc-button-hover-border-color, var(--ng-doc-base-3))}[aria-checked=true][_nghost-%COMP%]{border:1px solid var(--ng-doc-button-hover-border-color, var(--ng-doc-base-3));background:var(--ng-doc-button-checked-background, var(--ng-doc-base-1));--ng-doc-text: var(--ng-doc-heading-color)}"],changeDetection:0})}}return t})();var mt=(()=>{class t extends et{constructor(){super()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=I({type:t,selectors:[["","ngDocRadioGroup",""]],features:[B([ot(t)]),C]})}}return t})();var vt=t=>[t];function Mt(t,a){if(t&1&&(i(0,"li")(1,"button",9),d(2,"ng-doc-kind-icon",10),s(3),r()()),t&2){let e=a.$implicit;o(),p("value",e),o(),p("kind",e),o(),h(" ",e," ")}}function Pt(t,a){if(t&1&&(i(0,"h3"),s(1,"Declaration types"),r(),i(2,"ul",8),x(3,Mt,4,3,"li",null,D),r()),t&2){let e=_();o(3),y(e.types())}}function Ot(t,a){if(t&1&&(i(0,"li")(1,"button",9),s(2),r()()),t&2){let e=a.$implicit;o(),p("value",e),o(),h(" ",e," ")}}function Dt(t,a){if(t&1&&(i(0,"h3"),s(1,"Scopes"),r(),i(2,"ul",11),x(3,Ot,3,2,"li",null,D),r()),t&2){let e=_();o(3),y(e.scopes())}}function xt(t,a){if(t&1&&(i(0,"li",17)(1,"a",18),d(2,"ng-doc-kind-icon",19),s(3),r()()),t&2){let e=a.$implicit;o(),p("routerLink",R(4,vt,e.route)),o(),p("kind",e.type)("ngDocTooltip",e.type),o(),h(" ",e.name," ")}}function yt(t,a){if(t&1&&(i(0,"ul",15),f(1,xt,4,6,"li",16),r()),t&2){let e=_().$implicit;o(),p("ngForOf",e.items)}}function bt(t,a){if(t&1&&(i(0,"div",12)(1,"h3",13),s(2),r(),f(3,yt,2,1,"ul",14),r()),t&2){let e=a.$implicit;o(2),b(e.title),o(),p("ngIf",e.items.length)}}var ut=(()=>{class t{constructor(){this.title=P("API References"),this.segment=P(),this.formBuilder=u(Y),this.route=u(V),this.router=u($),this.httpClient=u(z),this.formGroup=this.formBuilder.group({filter:[""],scope:[""],type:[""]}),this.filter=N(this.formGroup.valueChanges.pipe(F(this.formGroup.value)),{initialValue:this.formGroup.value}),this.apiList=N(this.httpClient.get((0,M.asArray)("assets/ng-doc",this.segment(),"api-list.json").join("/")),{initialValue:[]}),this.scopes=v(()=>(0,M.asArray)(new Set(this.apiList().flatMap(e=>e.title))).sort()),this.types=v(()=>(0,M.asArray)(new Set(this.apiList().flatMap(e=>e.items).flatMap(e=>e.type))).sort()),this.route.queryParamMap.pipe(w()).subscribe(e=>this.formGroup.setValue({filter:e.get("filter")||null,scope:e.get("scope")||null,type:e.get("type")||null})),this.formGroup.valueChanges.pipe(w()).subscribe(e=>this.router.navigate([],{relativeTo:this.route,queryParams:e,queryParamsHandling:"merge"})),this.filteredApiList=v(()=>{let{filter:e,scope:n,type:c}=this.filter();return this.apiList().filter(g=>!n||g.title===n).map(g=>T(L({},g),{items:g.items.filter(m=>m.name.toLowerCase().includes(e?.toLowerCase()??"")&&(!c||m.type===c)).sort((m,S)=>m.type.localeCompare(S.type)||m.name.localeCompare(S.name))})).filter(g=>g.items.length)})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["ng-doc-api-list"]],inputs:{title:[1,"title"],segment:[1,"segment"]},decls:13,vars:5,consts:[["ng-doc-text",""],[1,"ng-doc-api-list-wrapper"],[3,"formGroup"],[1,"ng-doc-api-list-filter-input"],["icon","search","ngDocInputWrapperLeft",""],["ngDocInputString","","formControlName","filter","placeholder","Declaration name...","ngDocAutofocus",""],[1,"ng-doc-api-list"],["class","ng-doc-api-scope",4,"ngFor","ngForOf"],["ngDocRadioGroup","","formControlName","type",1,"ng-doc-filter-list"],["ng-doc-button-toggle","",1,"ng-doc-filter-button",3,"value"],["size","medium",3,"kind"],["ngDocRadioGroup","","formControlName","scope",1,"ng-doc-filter-list"],[1,"ng-doc-api-scope"],["ng-doc-text","",1,"ng-doc-scope-title"],["class","ng-doc-scope-items",4,"ngIf"],[1,"ng-doc-scope-items"],["class","ng-doc-scope-item",4,"ngFor","ngForOf"],[1,"ng-doc-scope-item"],[1,"ng-doc-scope-item-link",3,"routerLink"],["size","medium",3,"kind","ngDocTooltip"]],template:function(n,c){n&1&&(i(0,"h1",0),s(1),r(),i(2,"div",1)(3,"form",2),f(4,Pt,5,0)(5,Dt,5,0),i(6,"h3"),s(7,"Filter"),r(),i(8,"ng-doc-input-wrapper",3),d(9,"ng-doc-icon",4)(10,"input",5),r()(),i(11,"div",6),f(12,bt,4,2,"div",7),r()()),n&2&&(o(),b(c.title()),o(2),p("formGroup",c.formGroup),o(),O(c.types().length?4:-1),o(),O(c.scopes().length?5:-1),o(7),p("ngForOf",c.filteredApiList()))},dependencies:[pt,H,Z,J,W,K,U,tt,Q,X,ct,rt,at,st,j,lt,gt,q,mt,dt],styles:["[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .ng-doc-filter-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr);gap:var(--ng-doc-base-gutter);list-style:none;padding:0}@container api-list-wrapper (max-width: 775px){[_nghost-%COMP%]   .ng-doc-filter-list[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}@container api-list-wrapper (max-width: 600px){[_nghost-%COMP%]   .ng-doc-filter-list[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@container api-list-wrapper (max-width: 500px){[_nghost-%COMP%]   .ng-doc-filter-list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@container api-list-wrapper (max-width: 350px){[_nghost-%COMP%]   .ng-doc-filter-list[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}[_nghost-%COMP%]   .ng-doc-filter-list[_ngcontent-%COMP%]   .ng-doc-filter-button[_ngcontent-%COMP%]{justify-content:flex-start;text-wrap:nowrap;width:100%}[_nghost-%COMP%]   .ng-doc-filter-list[_ngcontent-%COMP%]   .ng-doc-filter-button[_ngcontent-%COMP%]   ng-doc-kind-icon[_ngcontent-%COMP%]{margin-right:var(--ng-doc-base-gutter)}[_nghost-%COMP%]   .ng-doc-api-list-filter-input[_ngcontent-%COMP%]{max-width:450px}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]{container:api-list-wrapper/inline-size}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-filter[_ngcontent-%COMP%]{display:flex;margin-top:calc(var(--ng-doc-base-gutter) * 3);flex-wrap:wrap;gap:calc(var(--ng-doc-base-gutter) * 2)}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-filter[_ngcontent-%COMP%]   .ng-doc-api-filter-item[_ngcontent-%COMP%]{width:200px}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]{margin-top:calc(var(--ng-doc-base-gutter) * 2)}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]{margin-top:calc(var(--ng-doc-base-gutter) * 3);list-style:none;padding:0}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]   .ng-doc-scope-item[_ngcontent-%COMP%]{float:left;width:33%;overflow:hidden;min-width:330px;text-overflow:ellipsis;white-space:nowrap}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]   .ng-doc-scope-item[_ngcontent-%COMP%]   .ng-doc-scope-item-link[_ngcontent-%COMP%]{display:flex;align-items:center;border-left:1px solid var(--ng-doc-border-color);padding:var(--ng-doc-base-gutter);color:var(--ng-doc-text);background:color-mix(in srgb,var(--ng-doc-scope-item-link-background),transparent 90%);text-decoration:none}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]   .ng-doc-scope-item[_ngcontent-%COMP%]   .ng-doc-scope-item-link[_ngcontent-%COMP%]:hover{color:var(--ng-doc-heading-color);border-left-color:var(--ng-doc-primary);--ng-doc-scope-item-link-background: var(--ng-doc-primary)}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]   .ng-doc-scope-item[_ngcontent-%COMP%]   .ng-doc-scope-item-link[_ngcontent-%COMP%]   ng-doc-kind-icon[_ngcontent-%COMP%]{margin-right:var(--ng-doc-base-gutter);text-decoration:none!important}[_nghost-%COMP%]   ng-doc-input-wrapper[_ngcontent-%COMP%]   ng-doc-icon[_ngcontent-%COMP%]{--ng-doc-icon-color: var(--ng-doc-text-muted)}"],changeDetection:0})}}return t})();var wt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=l({type:t,selectors:[["ng-doc-api-list-page-2z2ru1jn"]],decls:1,vars:0,consts:[["title","API","segment",""]],template:function(n,c){n&1&&d(0,"ng-doc-api-list",0)},dependencies:[ut],encapsulation:2,changeDetection:0})}}return t})(),Nt=[{path:"",component:wt}],oe=Nt;export{wt as DynamicComponent,oe as default};