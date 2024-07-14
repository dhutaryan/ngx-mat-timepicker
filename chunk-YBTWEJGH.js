import{a as r}from"./chunk-Q4Z2UPH5.js";import"./chunk-P6AWNZJE.js";import{b as l}from"./chunk-VEZOGWLC.js";import{Ma as c,T as d,hb as g,ib as o,rc as y,ya as i}from"./chunk-UUUQWK2Y.js";import{a as p,b as t,g as k}from"./chunk-JPKLQMV2.js";var u=k(y());var M={title:"Getting started",mdFile:"./index.md",order:1},e=M;var h=[];var f={},m=f;var v=`<h1 id="getting-started" class="ngde">Getting started<a title="Link to heading" class="ng-doc-header-link ngde" href="/getting-started#getting-started"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">You have to install the Angular Material and set it up. <a href="https://material.angular.io/guide/getting-started" class="ngde">Learn more about the setup</a>.</p><p class="ngde">Install the ngx-mat-timepicker:</p><pre class="ngde hljs"><code class="hljs language-bash code-lines ngde" lang="bash" name="" icon="" highlightedlines="[]"><span class="line ngde">$ npm install --save @dhutaryan/ngx-mat-timepicker
</span></code></pre><p class="ngde">or</p><pre class="ngde hljs"><code class="hljs language-bash code-lines ngde" lang="bash" name="" icon="" highlightedlines="[]"><span class="line ngde">$ yarn add @dhutaryan/ngx-mat-timepicker
</span></code></pre><h2 id="import-module" class="ngde">Import module<a title="Link to heading" class="ng-doc-header-link ngde" href="/getting-started#import-module"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">Import <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/api/classes/MatTimepickerModule" class="ng-doc-code-anchor ngde" data-link-type="NgModule" class="ngde">MatTimepickerModule</a></code> to your project.</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/api/classes/MatTimepickerModule" class="ng-doc-code-anchor ngde" data-link-type="NgModule" class="ngde">MatTimepickerModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">"@dhutaryan/ngx-mat-timepicker"</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde">@NgModule</span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">    <span class="hljs-title class_ ngde"><a href="/api/api/classes/MatTimepickerModule" class="ng-doc-code-anchor ngde" data-link-type="NgModule" class="ngde">MatTimepickerModule</a></span>,
</span><span class="line ngde">    <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">  ],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">MyModule</span> {}
</span></code></pre><h2 id="adapter" class="ngde">Adapter<a title="Link to heading" class="ng-doc-header-link ngde" href="/getting-started#adapter"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">Add a timepicker adapter.</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/api/classes/MatTimepickerModule" class="ng-doc-code-anchor ngde" data-link-type="NgModule" class="ngde">MatTimepickerModule</a></span>, <a href="/api/api/functions/provideNativeDateTimeAdapter" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideNativeDateTimeAdapter</a> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">"@dhutaryan/ngx-mat-timepicker"</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde">@NgModule</span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">    <span class="hljs-title class_ ngde"><a href="/api/api/classes/MatTimepickerModule" class="ng-doc-code-anchor ngde" data-link-type="NgModule" class="ngde">MatTimepickerModule</a></span>,
</span><span class="line ngde">    <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [<span class="hljs-title function_ ngde"><a href="/api/api/functions/provideNativeDateTimeAdapter" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideNativeDateTimeAdapter</a></span>()]
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">MyModule</span> {}
</span></code></pre><p class="ngde">or create and add your own</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde"><a href="/api/api/classes/MatTimepickerModule" class="ng-doc-code-anchor ngde" data-link-type="NgModule" class="ngde">MatTimepickerModule</a></span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">"@dhutaryan/ngx-mat-timepicker"</span>;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-meta ngde">@NgModule</span>({
</span><span class="line ngde">  <span class="hljs-attr ngde">imports</span>: [
</span><span class="line ngde">    <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">    <span class="hljs-title class_ ngde"><a href="/api/api/classes/MatTimepickerModule" class="ng-doc-code-anchor ngde" data-link-type="NgModule" class="ngde">MatTimepickerModule</a></span>,
</span><span class="line ngde">    <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">  ],
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [{ <span class="hljs-attr ngde">provide</span>: <span class="hljs-title class_ ngde"><a href="/api/api/classes/TimeAdapter" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">TimeAdapter</a></span>, <span class="hljs-attr ngde">useClass</span>: <span class="hljs-title class_ ngde">MyTimeAdapter</span> }],
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">MyModule</span> {}
</span></code></pre><h2 id="theming" class="ngde">Theming<a title="Link to heading" class="ng-doc-header-link ngde" href="/getting-started#theming"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">Then you have to define a theme. <a href="https://material.angular.io/guide/theming" class="ngde">More details about theming</a>. As ngx-mat-timepicker uses some material components, it's necessary to add theme for them.</p><pre class="ngde hljs"><code class="hljs language-scss code-lines ngde" lang="scss" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">@use</span> <span class="hljs-string ngde">"@angular/material"</span> as mat;
</span><span class="line ngde"><span class="hljs-keyword ngde">@use</span> <span class="hljs-string ngde">"@dhutaryan/ngx-mat-timepicker"</span> as mat-timepicker;
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-variable ngde">$my-theme</span>: mat.<span class="hljs-built_in ngde">define-theme</span>(...);
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
</span></code></pre>`,w=(()=>{let s=class s extends l{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=v,this.page=e,this.demoAssets=m}};s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=d({type:s,selectors:[["ng-doc-page-getting-started"]],standalone:!0,features:[g([{provide:l,useExisting:s},h,e.providers??[]]),i,o],decls:1,vars:0,template:function(n,x){n&1&&c(0,"ng-doc-page")},dependencies:[r],encapsulation:2,changeDetection:0});let a=s;return a})(),T=[t(p({},(0,u.isRoute)(e.route)?e.route:{}),{path:"",component:w,title:"Getting started"})],R=T;export{w as DynamicComponent,R as default};
