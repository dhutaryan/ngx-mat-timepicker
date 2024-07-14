import{a as o}from"./chunk-Q4Z2UPH5.js";import"./chunk-P6AWNZJE.js";import{b as l}from"./chunk-VEZOGWLC.js";import{Ma as c,T as p,hb as g,ib as m,rc as k,ya as d}from"./chunk-UUUQWK2Y.js";import{a as t,b as i,g as j}from"./chunk-JPKLQMV2.js";var u=j(k());var b={title:"Theming",mdFile:"./index.md",order:4},e=b;var r=[];var f={},h=f;var v=`<h1 id="theming" class="ngde">Theming<a title="Link to heading" class="ng-doc-header-link ngde" href="/theming#theming"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde"><code class="ngde">ngx-mat-timepicker</code> supports both material 2 and material 3. Tokens API allows you to customize styles by easy way.</p><h2 id="material-3" class="ngde">Material 3<a title="Link to heading" class="ng-doc-header-link ngde" href="/theming#material-3"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code class="hljs language-scss code-lines ngde" lang="scss" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">@use</span> <span class="hljs-string ngde">"@angular/material"</span> as mat;
</span><span class="line ngde"><span class="hljs-keyword ngde">@use</span> <span class="hljs-string ngde">"@dhutaryan/ngx-mat-timepicker"</span> as mat-timepicker;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-variable ngde">$my-theme</span>: mat.<span class="hljs-built_in ngde">define-light-theme</span>(...);
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-comment ngde">// timepicker uses these component</span>
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.form-field-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.input-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.button-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.fab-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.icon-button-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.divider-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-comment ngde">// timepicker theme</span>
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat-timepicker.timepicker-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-comment ngde">// if you want to support color attribute in M3 add compatibility mixin</span>
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.color-variants-backwards-compatibility(<span class="hljs-variable ngde">$my-theme</span>)
</span></code></pre><p class="ngde">Will be updated...</p><h2 id="material-2" class="ngde">Material 2<a title="Link to heading" class="ng-doc-header-link ngde" href="/theming#material-2"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code class="hljs language-scss code-lines ngde" lang="scss" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">@use</span> <span class="hljs-string ngde">"@angular/material"</span> as mat;
</span><span class="line ngde"><span class="hljs-keyword ngde">@use</span> <span class="hljs-string ngde">"@dhutaryan/ngx-mat-timepicker"</span> as mat-timepicker;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-variable ngde">$my-theme</span>: mat.<span class="hljs-built_in ngde">define-light-theme</span>(...);
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-comment ngde">// timepicker uses these component</span>
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.form-field-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.input-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.button-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.fab-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.icon-button-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat.divider-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span><span class="line ngde"><span class="hljs-comment ngde">// timepicker theme</span>
</span><span class="line ngde"><span class="hljs-keyword ngde">@include</span> mat-timepicker.timepicker-theme(<span class="hljs-variable ngde">$my-theme</span>);
</span></code></pre><p class="ngde">Will be updated...</p>`,w=(()=>{let s=class s extends l{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=v,this.page=e,this.demoAssets=h}};s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=p({type:s,selectors:[["ng-doc-page-theming"]],standalone:!0,features:[g([{provide:l,useExisting:s},r,e.providers??[]]),d,m],decls:1,vars:0,template:function(a,x){a&1&&c(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0});let n=s;return n})(),$=[i(t({},(0,u.isRoute)(e.route)?e.route:{}),{path:"",component:w,title:"Theming"})],M=$;export{w as DynamicComponent,M as default};
