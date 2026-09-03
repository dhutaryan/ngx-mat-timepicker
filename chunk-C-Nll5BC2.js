import{c as x,i as D,s as w$1}from"./chunk-BvLNTZtx.js";import{$ as Ot,A as Ir,An as hh,Ar as xC,At as X2,B as Ky,Bn as mD,Br as ze$1,Bt as Z2,C as F_,Cn as fN,Ct as Vo$1,D as Hg,Dr as wi$1,Dt as Wn$1,En as gt$1,Et as Wf,Gt as Zu,H as Li$1,Hn as mr,In as lD,J as Nc,Jn as oI,Jt as _c,Kn as nn$1,Kt as _M,L as KI,Lr as ya,Lt as Ye,M as Jf,Mr as y,Mt as Xa$1,N as Jt$1,Nn as ig,Nr as yD,Nt as Xf,On as hM,Ot as Wy,Pn as j_,Pt as Y2,Q as Oa,R as Kf,Rt as Yf,St as Vg,Tn as gn$1,Tt as W2,Ut as Zf,V as Le,Vn as mS,Vr as zy,Vt as Zc,W as M$1,Wt as Zs$1,X as OC,Xt as _t,Yn as p,Z as O_,Zn as pe,_r as uv,an as b_,ar as sD,at as Ri$1,bn as em,br as vI,bt as Us$1,c as Br,cr as te,ct as S_,d as Cr,dr as uD,er as q,et as P_,fr as uM,gn as eD,gr as ui,i as B,ir as rh,it as R$1,jn as iD,jt as X_,k as Ic,kn as hN,kt as X,l as C_,ln as bi$1,lr as tn$1,lt as Sc,mn as dI,mr as ue,mt as T_,nn as ao$1,nt as Qf,o as B_,on as bc,or as se,ot as S,qn as oD,qt as __,r as Aa,rr as qy,rt as Qy,s as Be,sn as be$1,tr as qf,tt as Q,u as Cc,ut as Se,v as E,vn as ee$1,wn as fR,wr as vo$1,wt as W,x as Eh,xr as vM,xt as V_,yr as vD,z as Ku,zn as le,zt as Yu}from"./chunk-CpIwkLTV.js";import{At as qo$1,D as yn$1,Dt as ko,Et as kn,G as Kc,H as Jp,J as Pn$1,K as Kp,Lt as ze$2,M as Bo$1,Mt as tc,Pt as tu,T as ue$1,V as Ji$1,Z as Rt,_ as Ye$1,_t as go,at as Yi$1,b as de,f as Nt$1,g as Wt,h as Vt,ht as g2,it as Wi$1,j as Bf,jt as sp,lt as cf,m as Tt,pt as ff,rt as Vn$1,st as Zf$1,u as Je,vt as gt$2,wt as jo$1,x as et,xt as ir$1,z as Ii$1}from"./main-ZREOV35O.js";import"./chunk-Czhj5DkR.js";import"./chunk-DYoQFjfa.js";import{t as Ii$2}from"./chunk-BcqaFGfm.js";var mi=D(tc());function J(a){return a!=null&&`${a}`!=`false`}var ct;var Ka=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function On(){if(ct)return ct;if(typeof document!=`object`||!document)return ct=new Set(Ka),ct;let a=document.createElement(`input`);return ct=new Set(Ka.filter(i=>(a.setAttribute(`type`,i),a.type===i))),ct}var Pn=class{_box;_destroyed=new Q;_resizeSubject=new Q;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new R$1(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(be$1(e=>e.some(t=>t.target===i)),Ku({bufferSize:1,refCount:!0}),Wn$1(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Qa=(()=>{class a{_cleanupErrorListener;_observers=new Map;_ngZone=p(B);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||`content-box`;return this._observers.has(n)||this._observers.set(n,new Pn(n)),this._observers.get(n).observe(e)}static ɵfac=function(t){return new(t||a)};static ɵprov=W({token:a,factory:a.ɵfac})}return a})();var Qt=new y(`MATERIAL_ANIMATIONS`);var Xa=null;function Ja(){return p(Qt,{optional:!0})?.animationsDisabled||p(KI,{optional:!0})===`NoopAnimations`?`di-disabled`:(Xa??=p(Tt).matchMedia(`(prefers-reduced-motion)`).matches,Xa?`reduced-motion`:`enabled`)}function Re(){return Ja()!==`enabled`}var fi=[`notch`];var gi=[`*`];var es=[`iconPrefixContainer`];var ts=[`textPrefixContainer`];var ns=[`iconSuffixContainer`];var as=[`textSuffixContainer`];var ki=[`textField`];var bi=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var yi=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function vi(a,i){a&1&&Ic(0,`span`,21)}function Bi(a,i){if(a&1&&(Xa$1(0,`label`,20),j_(1,1),C_(2,vi,1,0,`span`,21),qf()),a&2){let e=P_(2);Qy(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),vo$1(`for`,e._control.disableAutomaticLabeling?null:e._control.id),mS(2),b_(!e.hideRequiredMarker&&e._control.required?2:-1)}}function _i(a,i){if(a&1&&C_(0,Bi,3,5,`label`,20),a&2)b_(P_()._hasFloatingLabel()?0:-1)}function Ei(a,i){a&1&&Ic(0,`div`,7)}function Fi(a,i){}function xi(a,i){if(a&1&&qy(0,Fi,0,0,`ng-template`,13),a&2){P_(2);Qy(`ngTemplateOutlet`,V_(1))}}function Ci(a,i){if(a&1&&(Xa$1(0,`div`,9),C_(1,xi,1,1,null,13),qf()),a&2){let e=P_();Qy(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),mS(),b_(e._forceDisplayInfixLabel()?-1:1)}}function Ai(a,i){a&1&&(Xa$1(0,`div`,10,2),j_(2,2),qf())}function Si(a,i){a&1&&(Xa$1(0,`div`,11,3),j_(2,3),qf())}function Di(a,i){}function Mi(a,i){if(a&1&&qy(0,Di,0,0,`ng-template`,13),a&2){P_();Qy(`ngTemplateOutlet`,V_(1))}}function Ni(a,i){a&1&&(Xa$1(0,`div`,14,4),j_(2,4),qf())}function Ti(a,i){a&1&&(Xa$1(0,`div`,15,5),j_(2,5),qf())}function wi(a,i){a&1&&Ic(0,`div`,16)}function Ii(a,i){a&1&&(Xa$1(0,`div`,18),j_(1,6),qf())}function Ri(a,i){if(a&1&&(Xa$1(0,`mat-hint`,22),uM(1),qf()),a&2){let e=P_(2);Qy(`id`,e._hintLabelId),mS(),mD(e.hintLabel)}}function Oi(a,i){if(a&1&&(Xa$1(0,`div`,19),C_(1,Ri,2,2,`mat-hint`,22),j_(2,7),Ic(3,`div`,23),j_(4,8),qf()),a&2){let e=P_();mS(),b_(e.hintLabel?1:-1)}}var T=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=Ot({type:a,selectors:[[`mat-label`]]})}return a})();var ds=new y(`MatError`);var ee=(()=>{class a{align=`start`;id=p(Wi$1).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||a)};static ɵdir=Ot({type:a,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,n){t&2&&(eD(`id`,n.id),vo$1(`align`,null),lD(`mat-mdc-form-field-hint-end`,n.align===`end`))},inputs:{align:`align`,id:`id`}})}return a})();var ps=new y(`MatPrefix`);var Ln=new y(`MatSuffix`);var O=(()=>{class a{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(t){return new(t||a)};static ɵdir=Ot({type:a,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[vM([{provide:Ln,useExisting:a}])]})}return a})();var ms=new y(`FloatingLabelParent`);var ss=(()=>{class a{_elementRef=p(ze$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=p(Qa);_ngZone=p(B);_parent=p(ms);_resizeSubscription=new ue;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Pi(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||a)};static ɵdir=Ot({type:a,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,n){t&2&&lD(`mdc-floating-label--float-above`,n.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return a})();function Pi(a){let i=a;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var is=`mdc-line-ripple--active`;var Xt=`mdc-line-ripple--deactivating`;var os=(()=>{class a{_elementRef=p(ze$1);_cleanupTransitionEnd;constructor(){let e=p(B),t=p(Jt$1);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Xt),e.add(is)}deactivate(){this._elementRef.nativeElement.classList.add(Xt)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(Xt);e.propertyName===`opacity`&&n&&t.remove(is,Xt)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||a)};static ɵdir=Ot({type:a,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return a})();var rs=(()=>{class a{_elementRef=p(ze$1);_ngZone=p(B);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=Ri$1({type:a,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(t,n){if(t&1&&oD(fi,5),t&2){let s;Kf(s=Xf())&&(n._notch=s.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(t,n){t&2&&lD(`mdc-notched-outline--notched`,n.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:gi,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(t,n){t&1&&(F_(),Ky(0,`div`,1),Wf(1,`div`,2,0),j_(3),Zf(),Ky(4,`div`,3))},encapsulation:2})}return a})();var Jt=(()=>{class a{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(t){return new(t||a)};static ɵdir=Ot({type:a})}return a})();var dt=new y(`MatFormField`);var en=new y(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var ls=`fill`;var Li=`auto`;var cs=`fixed`;var Hi=`translateY(-50%)`;var M=(()=>{class a{_elementRef=p(ze$1);_changeDetectorRef=p(Cr);_platform=p(Rt);_idGenerator=p(Wi$1);_ngZone=p(B);_defaults=p(en,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Z2(`iconPrefixContainer`);_textPrefixContainerSignal=Z2(`textPrefixContainer`);_iconSuffixContainerSignal=Z2(`iconSuffixContainer`);_textSuffixContainerSignal=Z2(`textSuffixContainer`);_prefixSuffixContainers=Ir(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Y2(T);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=J(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Li}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||ls;this._appearanceSignal.set(t)}_appearanceSignal=te(ls);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||cs}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||cs}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Q;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Re();constructor(){let e=this._defaults,t=p(qo$1);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ya(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ir(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,n=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Vo$1([void 0,void 0]),q(()=>[t.errorState,t.userAriaDescribedBy]),vI(),be$1(([[s,o],[f,v]])=>s!==f||o!==v)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(Wn$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),dI(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){X2({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ir(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let s=this._hintChildren?this._hintChildren.find(f=>f.align===`start`):null,o=this._hintChildren?this._hintChildren.find(f=>f.align===`end`):null;s?e.push(s.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(s=>s.id));let t=this._control.describedByIds,n;if(t){let s=this._describedByIds||e;n=e.concat(t.filter(o=>o&&!s.includes(o)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,s=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,f=t?.getBoundingClientRect().width??0,v=n?.getBoundingClientRect().width??0,N=s?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Hi} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${o+f}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,o+f+v+N]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||a)};static ɵcmp=Ri$1({type:a,selectors:[[`mat-form-field`]],contentQueries:function(t,n,s){if(t&1&&(iD(s,n._labelChild,T,5),bc(s,Jt,5)(s,ps,5)(s,Ln,5)(s,ds,5)(s,ee,5)),t&2){B_();let o;Kf(o=Xf())&&(n._formFieldControl=o.first),Kf(o=Xf())&&(n._prefixChildren=o),Kf(o=Xf())&&(n._suffixChildren=o),Kf(o=Xf())&&(n._errorChildren=o),Kf(o=Xf())&&(n._hintChildren=o)}},viewQuery:function(t,n){if(t&1&&(sD(n._iconPrefixContainerSignal,es,5)(n._textPrefixContainerSignal,ts,5)(n._iconSuffixContainerSignal,ns,5)(n._textSuffixContainerSignal,as,5),oD(ki,5)(es,5)(ts,5)(ns,5)(as,5)(ss,5)(rs,5)(os,5)),t&2){B_(4);let s;Kf(s=Xf())&&(n._textField=s.first),Kf(s=Xf())&&(n._iconPrefixContainer=s.first),Kf(s=Xf())&&(n._textPrefixContainer=s.first),Kf(s=Xf())&&(n._iconSuffixContainer=s.first),Kf(s=Xf())&&(n._textSuffixContainer=s.first),Kf(s=Xf())&&(n._floatingLabel=s.first),Kf(s=Xf())&&(n._notchedOutline=s.first),Kf(s=Xf())&&(n._lineRipple=s.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(t,n){t&2&&lD(`mat-mdc-form-field-label-always-float`,n._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,n._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,n._hasIconSuffix)(`mat-form-field-invalid`,n._control.errorState)(`mat-form-field-disabled`,n._control.disabled)(`mat-form-field-autofilled`,n._control.autofilled)(`mat-form-field-appearance-fill`,n.appearance==`fill`)(`mat-form-field-appearance-outline`,n.appearance==`outline`)(`mat-form-field-hide-placeholder`,n._hasFloatingLabel()&&!n._shouldLabelFloat())(`mat-primary`,n.color!==`accent`&&n.color!==`warn`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`ng-untouched`,n._shouldForward(`untouched`))(`ng-touched`,n._shouldForward(`touched`))(`ng-pristine`,n._shouldForward(`pristine`))(`ng-dirty`,n._shouldForward(`dirty`))(`ng-valid`,n._shouldForward(`valid`))(`ng-invalid`,n._shouldForward(`invalid`))(`ng-pending`,n._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[vM([{provide:dt,useExisting:a},{provide:ms,useExisting:a}])],ngContentSelectors:yi,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(t,n){if(t&1&&(F_(bi),qy(0,_i,1,1,`ng-template`,null,0,_M),Xa$1(2,`div`,6,1),Cc(`click`,function(o){return n._control.onContainerClick(o)}),C_(4,Ei,1,0,`div`,7),Xa$1(5,`div`,8),C_(6,Ci,2,2,`div`,9),C_(7,Ai,3,0,`div`,10),C_(8,Si,3,0,`div`,11),Xa$1(9,`div`,12),C_(10,Mi,1,1,null,13),j_(11),qf(),C_(12,Ni,3,0,`div`,14),C_(13,Ti,3,0,`div`,15),qf(),C_(14,wi,1,0,`div`,16),qf(),Xa$1(15,`div`,17),C_(16,Ii,2,0,`div`,18)(17,Oi,5,1,`div`,19),qf()),t&2){let s;mS(2),lD(`mdc-text-field--filled`,!n._hasOutline())(`mdc-text-field--outlined`,n._hasOutline())(`mdc-text-field--no-label`,!n._hasFloatingLabel())(`mdc-text-field--disabled`,n._control.disabled)(`mdc-text-field--invalid`,n._control.errorState),mS(2),b_(!n._hasOutline()&&!n._control.disabled?4:-1),mS(2),b_(n._hasOutline()?6:-1),mS(),b_(n._hasIconPrefix?7:-1),mS(),b_(n._hasTextPrefix?8:-1),mS(2),b_(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),mS(2),b_(n._hasTextSuffix?12:-1),mS(),b_(n._hasIconSuffix?13:-1),mS(),b_(n._hasOutline()?-1:14),mS(),lD(`mat-mdc-form-field-subscript-dynamic-size`,n.subscriptSizing===`dynamic`);let o=n._getSubscriptMessageType();mS(),b_((s=o)===`error`?16:s===`hint`?17:-1)}},dependencies:[ss,rs,hN,os,ee],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return a})();var Ze=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=nn$1({type:a});static ɵinj=_t({imports:[Je,M,Vn$1]})}return a})();var Vi=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=Ri$1({type:a,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,n){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return a})();var zi={passive:!0};var us=(()=>{class a{_platform=p(Rt);_ngZone=p(B);_renderer=p(mr).createRenderer(null,null);_styleLoader=p(jo$1);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return le;this._styleLoader.load(Vi);let t=Kc(e),n=this._monitoredElements.get(t);if(n)return n.subject;let s=new Q,o=`cdk-text-field-autofilled`,f=N=>{N.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>s.next({target:N.target,isAutofilled:!0}))):N.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>s.next({target:N.target,isAutofilled:!1})))},v=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,f,zi)));return this._monitoredElements.set(t,{subject:s,unlisten:v}),s}stopMonitoring(e){let t=Kc(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||a)};static ɵprov=W({token:a,factory:a.ɵfac})}return a})();var hs=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=nn$1({type:a});static ɵinj=_t({})}return a})();var fs=new y(``);var tn=new y(`MAT_INPUT_VALUE_ACCESSOR`);var gs=(()=>{class a{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),n=e().touched();return t&&n}static ɵfac=function(t){return new(t||a)};static ɵprov=W({token:a,factory:a.ɵfac})}return a})();var nn=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(i,e,t,n,s){this._defaultMatcher=i,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=s,e?ui(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let i=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==i&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(i){if(this.formField&&i?.isSignalErrorState)return i.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return i?.isErrorState(t,e)??!1}};var Ui=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var ji=new y(`MAT_INPUT_CONFIG`);var w=(()=>{class a{_elementRef=p(ze$1);_platform=p(Rt);ngControl=p(ze$2,{optional:!0,self:!0});_autofillMonitor=p(us);_ngZone=p(B);_formField=p(dt,{optional:!0});_renderer=p(Jt$1);_uid=p(Wi$1).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=p(ji,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new Q;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=J(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(go.required)??!1}set required(e){this._required=J(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&On().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=J(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>On().has(e));constructor(){let e=p(cf,{optional:!0}),t=p(ff,{optional:!0}),n=p(gs),s=p(tn,{optional:!0,self:!0}),o=p(fs,{optional:!0,self:!0}),f=this._elementRef.nativeElement,v=f.nodeName.toLowerCase();s?ui(s.value)?this._signalBasedValueAccessor=s:this._inputValueAccessor=s:this._inputValueAccessor=f,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(f,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new nn(n,o||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=v===`select`,this._isTextarea=v===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=f.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&ya(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type===`number`?(t.type=`text`,t.setSelectionRange(0,0),t.type=`number`):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ui.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||a)};static ɵdir=Ot({type:a,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(t,n){t&1&&Cc(`focus`,function(){return n._focusChanged(!0)})(`blur`,function(){return n._focusChanged(!1)})(`input`,function(){return n._onInput()}),t&2&&(eD(`id`,n.id)(`disabled`,n.disabled&&!n.disabledInteractive)(`required`,n.required),vo$1(`name`,n.name||null)(`readonly`,n._getReadonlyAttribute())(`aria-disabled`,n.disabled&&n.disabledInteractive?`true`:null)(`aria-invalid`,n.empty&&n.required?null:n.errorState)(`aria-required`,n.required)(`id`,n.id),lD(`mat-input-server`,n._isServer)(`mat-mdc-form-field-textarea-control`,n._isInFormField&&n._isTextarea)(`mat-mdc-form-field-input-control`,n._isInFormField)(`mat-mdc-input-disabled-interactive`,n.disabledInteractive)(`mdc-text-field__input`,n._isInFormField)(`mat-mdc-native-select-inline`,n._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Li$1]},exportAs:[`matInput`],features:[vM([{provide:Jt,useExisting:a}]),gt$1]})}return a})();var an=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=nn$1({type:a});static ɵinj=_t({imports:[Ze,Ze,hs,Vn$1]})}return a})();function ks(a){return Error(`Unable to find icon with the name "${a}"`)}function qi(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function bs(a){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${a}".`)}function ys(a){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${a}".`)}var Oe=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}};var Bs=(()=>{class a{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=[`material-icons`,`mat-ligature-font`];constructor(e,t,n,s){this._httpClient=e,this._sanitizer=t,this._errorHandler=s,this._document=n}addSvgIcon(e,t,n){return this.addSvgIconInNamespace(``,e,t,n)}addSvgIconLiteral(e,t,n){return this.addSvgIconLiteralInNamespace(``,e,t,n)}addSvgIconInNamespace(e,t,n,s){return this._addSvgIconConfig(e,t,new Oe(n,null,s))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,n,s){let o=this._sanitizer.sanitize(X.HTML,n);if(!o)throw ys(n);let f=yn$1(o);return this._addSvgIconConfig(e,t,new Oe(``,f,s))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace(``,e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace(``,e,t)}addSvgIconSetInNamespace(e,t,n){return this._addSvgIconSetConfig(e,new Oe(t,null,n))}addSvgIconSetLiteralInNamespace(e,t,n){let s=this._sanitizer.sanitize(X.HTML,t);if(!s)throw ys(t);let o=yn$1(s);return this._addSvgIconSetConfig(e,new Oe(``,o,n))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(X.RESOURCE_URL,e);if(!t)throw bs(e);let n=this._cachedIconsByUrl.get(t);return n?M$1(sn(n)):this._loadSvgIconFromConfig(new Oe(e,null)).pipe(Le(s=>this._cachedIconsByUrl.set(t,s)),q(s=>sn(s)))}getNamedSvgIcon(e,t=``){let n=vs(t,e),s=this._svgIconConfigs.get(n);if(s)return this._getSvgFromConfig(s);if(s=this._getIconConfigFromResolvers(t,e),s)return this._svgIconConfigs.set(n,s),this._getSvgFromConfig(s);let o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):Zu(ks(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?M$1(sn(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(q(t=>sn(t)))}_getSvgFromIconSetConfigs(e,t){let n=this._extractIconWithNameFromAnySet(e,t);if(n)return M$1(n);return oI(t.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(gn$1(f=>{let N=`Loading icon set URL: ${this._sanitizer.sanitize(X.RESOURCE_URL,o.url)} failed: ${f.message}`;return this._errorHandler.handleError(new Error(N)),M$1(null)})))).pipe(q(()=>{let o=this._extractIconWithNameFromAnySet(e,t);if(!o)throw ks(e);return o}))}_extractIconWithNameFromAnySet(e,t){for(let n=t.length-1;n>=0;n--){let s=t[n];if(s.svgText&&s.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(s),f=this._extractSvgIconFromSet(o,e,s.options);if(f)return f}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Le(t=>e.svgText=t),q(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?M$1(null):this._fetchIcon(e).pipe(Le(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,n){let s=e.querySelector(`[id="${t}"]`);if(!s)return null;let o=s.cloneNode(!0);if(o.removeAttribute(`id`),o.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(o,n);if(o.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(o),n);let f=this._svgElementFromString(yn$1(`<svg></svg>`));return f.appendChild(o),this._setSvgAttributes(f,n)}_svgElementFromString(e){let t=this._document.createElement(`DIV`);t.innerHTML=e;let n=t.querySelector(`svg`);if(!n)throw Error(`<svg> tag not found`);return n}_toSvgElement(e){let t=this._svgElementFromString(yn$1(`<svg></svg>`)),n=e.attributes;for(let s=0;s<n.length;s++){let{name:o,value:f}=n[s];o!==`id`&&t.setAttribute(o,f)}for(let s=0;s<e.childNodes.length;s++)e.childNodes[s].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[s].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute(`fit`,``),e.setAttribute(`height`,`100%`),e.setAttribute(`width`,`100%`),e.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),e.setAttribute(`focusable`,`false`),t&&t.viewBox&&e.setAttribute(`viewBox`,t.viewBox),e}_fetchIcon(e){let{url:t,options:n}=e,s=n?.withCredentials??!1;if(!this._httpClient)throw qi();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let o=this._sanitizer.sanitize(X.RESOURCE_URL,t);if(!o)throw bs(t);let f=this._inProgressUrlFetches.get(o);if(f)return f;let v=this._httpClient.get(o,{responseType:`text`,withCredentials:s}).pipe(q(N=>yn$1(N)),Br(()=>this._inProgressUrlFetches.delete(o)),Us$1());return this._inProgressUrlFetches.set(o,v),v}_addSvgIconConfig(e,t,n){return this._svgIconConfigs.set(vs(e,t),n),this}_addSvgIconSetConfig(e,t){let n=this._iconSetConfigs.get(e);return n?n.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let n=0;n<this._resolvers.length;n++){let s=this._resolvers[n](t,e);if(s)return $i(s)?new Oe(s.url,null,s.options):new Oe(s,null)}}static ɵfac=function(t){return new(t||a)(E(Zc,8),E(fR),E(ee$1,8),E(Ye))};static ɵprov=S({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function sn(a){return a.cloneNode(!0)}function vs(a,i){return a+`:`+i}function $i(a){return!!(a.url&&a.options)}var Wi=[`*`];var Yi=new y(`MAT_ICON_DEFAULT_OPTIONS`);var Zi=new y(`mat-icon-location`,{providedIn:`root`,factory:()=>{let a=p(ee$1),i=a?a.location:null;return{getPathname:()=>i?i.pathname+i.search:``}}});var _s=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var Gi=_s.map(a=>`[${a}]`).join(`, `);var Ki=/^url\(['"]?#(.*?)['"]?\)$/;var Es=(()=>{class a{_elementRef=p(ze$1);_iconRegistry=p(Bs);_location=p(Zi);_errorHandler=p(Ye);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ue.EMPTY;constructor(){let e=p(new _c(`aria-hidden`),{optional:!0}),t=p(Yi,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(e){if(!e)return[``,``];let t=e.split(`:`);switch(t.length){case 1:return[``,t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let n=e.childNodes[t];(n.nodeType!==1||n.nodeName.toLowerCase()===`svg`)&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>e.classList.remove(n)),t.forEach(n=>e.classList.add(n)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e==`string`?e.trim().split(` `)[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((n,s)=>{n.forEach(o=>{s.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Gi),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let s=0;s<t.length;s++)_s.forEach(o=>{let f=t[s],v=f.getAttribute(o),N=v?v.match(Ki):null;if(N){let D=n.get(f);D||(D=[],n.set(f,D)),D.push({name:o,value:N[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,n]=this._splitIconName(e);t&&(this._svgNamespace=t),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,t).pipe(Be(1)).subscribe(s=>this._setSvgElement(s),s=>{let o=`Error retrieving icon ${t}:${n}! ${s.message}`;this._errorHandler.handleError(new Error(o))})}}static ɵfac=function(t){return new(t||a)};static ɵcmp=Ri$1({type:a,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(t,n){t&2&&(vo$1(`data-mat-icon-type`,n._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,n._svgName||n.fontIcon)(`data-mat-icon-namespace`,n._svgNamespace||n.fontSet)(`fontIcon`,n._usingFontIcon()?n.fontIcon:null),X_(n.color?`mat-`+n.color:``),lD(`mat-icon-inline`,n.inline)(`mat-icon-no-color`,n.color!==`primary`&&n.color!==`accent`&&n.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,Li$1],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:Wi,decls:1,vars:0,template:function(t,n){t&1&&(F_(),j_(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return a})();var Fs=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=nn$1({type:a});static ɵinj=_t({imports:[Vn$1]})}return a})();var me=(function(a){return a[a.FADING_IN=0]=`FADING_IN`,a[a.VISIBLE=1]=`VISIBLE`,a[a.FADING_OUT=2]=`FADING_OUT`,a[a.HIDDEN=3]=`HIDDEN`,a})(me||{});var on=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=me.HIDDEN;constructor(i,e,t,n=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}};var xs=et({passive:!0,capture:!0});var Hn=class{_events=new Map;addHandler(i,e,t,n){let s=this._events.get(e);if(s){let o=s.get(t);o?o.add(n):s.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,xs)})}removeHandler(i,e,t){let n=this._events.get(i);if(!n)return;let s=n.get(e);s&&(s.delete(t),s.size===0&&n.delete(e),n.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,xs)))}_delegateEventHandler=i=>{let e=ko(i);e&&this._events.get(i.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(s=>s.handleEvent(i))})}};var pt={enterDuration:225,exitDuration:150};var Xi=800;var Cs=et({passive:!0,capture:!0});var As=[`mousedown`,`touchstart`];var Ss=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Ji=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=Ri$1({type:a,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(t,n){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return a})();var mt=class a{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Hn;constructor(i,e,t,n,s){this._target=i,this._ngZone=e,this._platform=n,n.isBrowser&&(this._containerElement=Kc(t)),s&&s.get(jo$1).load(Ji)}fadeInRipple(i,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=w$1(w$1({},pt),t.animation);t.centered&&(i=n.left+n.width/2,e=n.top+n.height/2);let o=t.radius||eo(i,e,n),f=i-n.left,v=e-n.top,N=s.enterDuration,D=document.createElement(`div`);D.classList.add(`mat-ripple-element`),D.style.left=`${f-o}px`,D.style.top=`${v-o}px`,D.style.height=`${o*2}px`,D.style.width=`${o*2}px`,t.color!=null&&(D.style.backgroundColor=t.color),D.style.transitionDuration=`${N}ms`,this._containerElement.appendChild(D);let Fe=window.getComputedStyle(D),Qe=Fe.transitionProperty,ge=Fe.transitionDuration,Te=Qe===`none`||ge===`0s`||ge===`0s, 0s`||n.width===0&&n.height===0,oe=new on(this,D,t,Te);D.style.transform=`scale3d(1, 1, 1)`,oe.state=me.FADING_IN,t.persistent||(this._mostRecentTransientRipple=oe);let we=null;return!Te&&(N||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Tt=()=>{we&&(we.fallbackTimer=null),clearTimeout(ea),this._finishRippleTransition(oe)},Xe=()=>this._destroyRipple(oe),ea=setTimeout(Xe,N+100);D.addEventListener(`transitionend`,Tt),D.addEventListener(`transitioncancel`,Xe),we={onTransitionEnd:Tt,onTransitionCancel:Xe,fallbackTimer:ea}}),this._activeRipples.set(oe,we),(Te||!N)&&this._finishRippleTransition(oe),oe}fadeOutRipple(i){if(i.state===me.FADING_OUT||i.state===me.HIDDEN)return;let e=i.element,t=w$1(w$1({},pt),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity=`0`,i.state=me.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Kc(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,As.forEach(t=>{a._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type===`mousedown`?this._onMousedown(i):i.type===`touchstart`?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ss.forEach(e=>{this._triggerElement.addEventListener(e,this,Cs)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===me.FADING_IN?this._startFadeOutTransition(i):i.state===me.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=me.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=me.HIDDEN,e!==null&&(i.element.removeEventListener(`transitionend`,e.onTransitionEnd),i.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=de(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Xi;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!ue$1(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===me.VISIBLE||i.config.terminateOnPointerUp&&i.state===me.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(As.forEach(e=>a._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Ss.forEach(e=>i.removeEventListener(e,this,Cs)),this._pointerUpEventsRegistered=!1))}};function eo(a,i,e){let t=Math.max(Math.abs(a-e.left),Math.abs(a-e.right)),n=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+n*n)}var rn=new y(`mat-ripple-global-options`);var Vn=(()=>{class a{_elementRef=p(ze$1);_animationsDisabled=Re();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=p(B),t=p(Rt),n=p(rn,{optional:!0}),s=p(pe);this._globalOptions=n||{},this._rippleRenderer=new mt(this,e,this._elementRef,t,s)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:w$1(w$1(w$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,n){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,t,w$1(w$1({},this.rippleConfig),n)):this._rippleRenderer.fadeInRipple(0,0,w$1(w$1({},this.rippleConfig),e))}static ɵfac=function(t){return new(t||a)};static ɵdir=Ot({type:a,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(t,n){t&2&&lD(`mat-ripple-unbounded`,n.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return a})();var to={capture:!0};var no=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var zn=`mat-ripple-loader-uninitialized`;var Un=`mat-ripple-loader-class-name`;var Ds=`mat-ripple-loader-centered`;var ln=`mat-ripple-loader-disabled`;var Ms=(()=>{class a{_document=p(ee$1);_animationsDisabled=Re();_globalRippleOptions=p(rn,{optional:!0});_platform=p(Rt);_ngZone=p(B);_injector=p(pe);_eventCleanups;_hosts=new Map;constructor(){let e=p(mr).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>no.map(t=>e.listen(this._document,t,this._onInteraction,to)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(zn,this._globalRippleOptions?.namespace??``),(t.className||!e.hasAttribute(Un))&&e.setAttribute(Un,t.className||``),t.centered&&e.setAttribute(Ds,``),t.disabled&&e.setAttribute(ln,``)}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(ln,``):e.removeAttribute(ln)}_onInteraction=e=>{let t=ko(e);if(t instanceof HTMLElement){let n=t.closest(`[${zn}="${this._globalRippleOptions?.namespace??``}"]`);n&&this._createRipple(n)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let t=this._document.createElement(`span`);t.classList.add(`mat-ripple`,e.getAttribute(Un)),e.append(t);let n=this._globalRippleOptions,s=this._animationsDisabled?0:n?.animation?.enterDuration??pt.enterDuration,o=this._animationsDisabled?0:n?.animation?.exitDuration??pt.exitDuration,f={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(ln),rippleConfig:{centered:e.hasAttribute(Ds),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:s,exitDuration:o}}},v=new mt(f,this._ngZone,t,this._platform,this._injector),N=!f.rippleDisabled;N&&v.setupTriggerEvents(e),this._hosts.set(e,{target:f,renderer:v,hasSetUpEvents:N}),e.removeAttribute(zn)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(t){return new(t||a)};static ɵprov=W({token:a,factory:a.ɵfac})}return a})();var Ns=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵcmp=Ri$1({type:a,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return a})();var ao=[`*`,[[``,`progressIndicator`,``]]];var so=[`*`,`[progressIndicator]`];function io(a,i){a&1&&(Wf(0,`div`,1),j_(1,1),Zf())}var oo=new y(`MAT_BUTTON_CONFIG`);function Ts(a){return a==null?void 0:hh(a)}var cn=(()=>{class a{_elementRef=p(ze$1);_ngZone=p(B);_animationsDisabled=Re();_config=p(oo,{optional:!0});_focusMonitor=p(Nt$1);_cleanupClick;_renderer=p(Jt$1);_rippleLoader=p(Ms);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Nc(!1,{transform:Li$1});constructor(){p(jo$1).load(Ns);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(t){return new(t||a)};static ɵdir=Ot({type:a,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(t,n){t&2&&(vo$1(`disabled`,n._getDisabledAttribute())(`aria-disabled`,n._getAriaDisabled())(`tabindex`,n._getTabIndex()),X_(n.color?`mat-`+n.color:``),lD(`mat-mdc-button-progress-indicator-shown`,n.showProgress())(`mat-mdc-button-disabled`,n.disabled)(`mat-mdc-button-disabled-interactive`,n.disabledInteractive)(`mat-unthemed`,!n.color)(`_mat-animation-noopable`,n._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,Li$1],disabled:[2,`disabled`,`disabled`,Li$1],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,Li$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Li$1],tabIndex:[2,`tabIndex`,`tabIndex`,Ts],_tabindex:[2,`tabindex`,`_tabindex`,Ts],showProgress:[1,`showProgress`]}})}return a})();var xt=(()=>{class a extends cn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(t){return new(t||a)};static ɵcmp=Ri$1({type:a,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[zy],ngContentSelectors:so,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(t,n){t&1&&(F_(ao),Ky(0,`span`,0),j_(1),C_(2,io,2,0,`div`,1),Ky(3,`span`,2)(4,`span`,3)),t&2&&(mS(2),b_(n.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return a})();var Ct=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=nn$1({type:a});static ɵinj=_t({imports:[Vn$1]})}return a})();var Is=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var Rs=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function ro(a,i){a&1&&(Wf(0,`div`,2),j_(1,3),Zf())}function lo(a,i){a&1&&(Wf(0,`div`,2),j_(1,3),Zf())}var co=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`;var ws=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var ut=(()=>{class a extends cn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=po(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,n=this._appearance?ws.get(this._appearance):null,s=ws.get(e);n&&t.remove(...n),t.add(...s),this._appearance=e}static ɵfac=function(t){return new(t||a)};static ɵcmp=Ri$1({type:a,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[zy],ngContentSelectors:Rs,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(t,n){t&1&&(F_(Is),Ky(0,`span`,0),j_(1),Wf(2,`span`,1),j_(3,1),Zf(),j_(4,2),C_(5,ro,2,0,`div`,2),Ky(6,`span`,3)(7,`span`,4)),t&2&&(lD(`mdc-button__ripple`,!n._isFab)(`mdc-fab__ripple`,n._isFab),mS(5),b_(n.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return a})();function po(a){return a.hasAttribute(`mat-raised-button`)?`elevated`:a.hasAttribute(`mat-stroked-button`)?`outlined`:a.hasAttribute(`mat-flat-button`)?`filled`:a.hasAttribute(`mat-button`)?`text`:null}var qn=new y(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>jn});var jn={color:`accent`};var dn=(()=>{class a extends cn{_options=p(qn,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||jn,this.color=this._options.color||jn.color}static ɵfac=function(t){return new(t||a)};static ɵcmp=Ri$1({type:a,selectors:[[`button`,`mat-mini-fab`,``],[`a`,`mat-mini-fab`,``],[`button`,`matMiniFab`,``],[`a`,`matMiniFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mdc-fab--mini`,`mat-mdc-mini-fab`],exportAs:[`matButton`,`matAnchor`],features:[zy],ngContentSelectors:Rs,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(t,n){t&1&&(F_(Is),Ky(0,`span`,0),j_(1),Wf(2,`span`,1),j_(3,1),Zf(),j_(4,2),C_(5,lo,2,0,`div`,2),Ky(6,`span`,3)(7,`span`,4)),t&2&&(lD(`mdc-button__ripple`,!n._isFab)(`mdc-fab__ripple`,n._isFab),mS(5),b_(n.showProgress()?5:-1))},styles:[co],encapsulation:2})}return a})();var be=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=nn$1({type:a});static ɵinj=_t({imports:[Ct,Vn$1]})}return a})();var pn=(()=>{class a{get vertical(){return this._vertical}set vertical(e){this._vertical=J(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=J(e)}_inset=!1;static ɵfac=function(t){return new(t||a)};static ɵcmp=Ri$1({type:a,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(t,n){t&2&&(vo$1(`aria-orientation`,n.vertical?`vertical`:`horizontal`),lD(`mat-divider-vertical`,n.vertical)(`mat-divider-horizontal`,!n.vertical)(`mat-divider-inset`,n.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(t,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return a})();var mn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=nn$1({type:a});static ɵinj=_t({imports:[Vn$1]})}return a})();var $n=new y(`mat-timepicker-scroll-strategy`);function mo(a){return()=>a.scrollStrategies.reposition()}var Ps={provide:$n,deps:[ir$1],useFactory:mo};var ce=(()=>{class a{constructor(){this.changes=new Q,this.inputsTitle=`Enter time`,this.dialsTitle=`Select time`,this.hourInputHint=`Hour`,this.minuteInputHint=`Minute`,this.openTimepickerLabel=`Open timepicker`,this.closeTimepickerLabel=`Close timepicker`,this.okButton=`OK`,this.cancelButton=`Cancel`,this.am=`AM`,this.pm=`PM`}static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵprov=S({token:a,factory:a.ɵfac,providedIn:`root`})}}return a})();var uo=[[[``,`matTimepickerToggleIcon`,``]]];var ho=[`[matTimepickerToggleIcon]`];function fo(a,i){a&1&&(em(),Xa$1(0,`svg`,2),Ic(1,`path`,3),qf())}var Wn=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵdir=Ot({type:a,selectors:[[``,`matTimepickerToggleIcon`,``]]})}}return a})();var I=(()=>{class a{get disabled(){return this._disabled===void 0&&this.timepicker?this.timepicker.disabled:!!this._disabled}set disabled(e){this._disabled=J(e)}constructor(e,t,n){this._intl=t,this._cdr=n,this._stateChanges=ue.EMPTY;let s=Number(e);this.tabIndex=s||s===0?s:null}ngOnChanges(e){e.timepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}open(e){this.timepicker&&!this.disabled&&(this.timepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.timepicker?this.timepicker.stateChanges:M$1(),t=this.timepicker&&this.timepicker.timepickerInput?this.timepicker.timepickerInput.stateChanges:M$1(),n=this.timepicker?dI(this.timepicker.openedStream,this.timepicker.closedStream):M$1();this._stateChanges.unsubscribe(),this._stateChanges=dI(this._intl.changes,e,t,n).subscribe(()=>this._cdr.markForCheck())}static{this.ɵfac=function(t){return new(t||a)(wi$1(`tabindex`),se(ce),se(Cr))}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`mat-timepicker-toggle`]],contentQueries:function(t,n,s){if(t&1&&bc(s,Wn,5),t&2){let o;Kf(o=Xf())&&(n.customIcon=o.first)}},hostAttrs:[1,`mat-timepicker-toggle`],hostVars:7,hostBindings:function(t,n){t&1&&Cc(`click`,function(o){return n.open(o)}),t&2&&(vo$1(`tabindex`,null),lD(`mat-timepicker-toggle-active`,n.timepicker&&n.timepicker.opened)(`mat-accent`,n.timepicker&&n.timepicker.color===`accent`)(`mat-warn`,n.timepicker&&n.timepicker.color===`warn`))},inputs:{timepicker:[0,`for`,`timepicker`],disabled:`disabled`,disableRipple:`disableRipple`,tabIndex:`tabIndex`,ariaLabel:[0,`aria-label`,`ariaLabel`]},exportAs:[`matTimepickerToggle`],features:[gt$1],ngContentSelectors:ho,decls:4,vars:6,consts:[[`button`,``],[`type`,`button`,`mat-icon-button`,``,3,`disabled`,`disableRipple`],[`viewBox`,`0 0 24 24`,`width`,`24`,`height`,`24`,`fill`,`currentColor`,`focusable`,`false`,1,`mat-timepicker-toggle-default-icon`],[`d`,`M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12.5,7H11v6l5.2,3.2l0.8-1.3l-4.5-2.7V7z`]],template:function(t,n){t&1&&(F_(uo),Xa$1(0,`button`,1,0),C_(2,fo,2,0,`:svg:svg`,2),j_(3),qf()),t&2&&(Qy(`disabled`,n.disabled)(`disableRipple`,n.disableRipple),vo$1(`aria-haspopup`,n.timepicker?`dialog`:null)(`aria-label`,n.ariaLabel||n._intl.openTimepickerLabel)(`tabindex`,n.disabled?-1:n.tabIndex),mS(2),b_(n.customIcon?-1:2))},dependencies:[be,xt],styles:[`.mat-form-field .mat-form-field-prefix .mat-timepicker-toggle-default-icon,.mat-form-field .mat-form-field-suffix .mat-timepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field .mat-form-field-prefix .mat-icon-button .mat-timepicker-toggle-default-icon,.mat-form-field .mat-form-field-suffix .mat-icon-button .mat-timepicker-toggle-default-icon{margin:auto}.mat-timepicker-toggle{color:var(--%NS%mat-timepicker-toggle-color, var(--%NS%mat-sys-on-surface-variant))}.mat-timepicker-toggle.mat-timepicker-toggle-active button{color:var(--%NS%mat-timepicker-toggle-active-color, var(--%NS%mat-sys-primary))}
`],encapsulation:2})}}return a})();function St(a){return a?128*1.25:128}function un(a){return a?16*1.5:16}function ft(a){return St(a)-un(a)}function Ne(a){return a?100*1.25:100}function Ls(a){return Ne(a)-un(a)*2}var bo=(a,i)=>i.value;function yo(a,i){if(a&1&&(Xa$1(0,`button`,3),uM(1),qf()),a&2){let e=i.$implicit,t=P_();uD(`left`,e.left,`px`)(`top`,e.top,`px`),lD(`mat-clock-dial-cell-active`,t._isActiveCell(e.value))(`mat-clock-dial-cell-disabled`,e.disabled),Qy(`tabIndex`,t._isActiveCell(e.value)?0:-1)(`color`,t._isActiveCell(e.value)?t.color:void 0),vo$1(`aria-disabled`,e.disabled||null),mS(),Jf(` `,e.displayValue,` `)}}var hn=Array(60).fill(null).map((a,i)=>i);var fn=(()=>{class a{get selectedMinute(){return this._selectedMinute}set selectedMinute(e){this._selectedMinute=e}get interval(){return this._interval}set interval(e){this._interval=Bf(e)||1}get availableMinutes(){return this._availableMinutes}set availableMinutes(e){this._availableMinutes=e,this._initMinutes()}get touchUi(){return this._touchUi}set touchUi(e){this._touchUi=e}get disabled(){return!this.availableMinutes.includes(this.selectedMinute)}get isMinutePoint(){return!!this.minutes.find(e=>e.value===this.selectedMinute)}constructor(e,t,n){this._element=e,this._cdr=t,this._document=n,this._selectedMinute=0,this._interval=1,this._availableMinutes=[],this.selectedChange=new Se,this.minutes=[]}ngOnInit(){this._initMinutes()}_handStyles(){let e=Math.round(this._selectedMinute*6),t=Ne(this.touchUi),n=St(this.touchUi)-Ne(this.touchUi);return{transform:`rotate(${e}deg)`,height:`${t}px`,"margin-top":`${n}px`}}_onUserAction(e){e.cancelable&&e.preventDefault(),this._setMinute(e);let t=dI(Yu(this._document,`mousemove`),Yu(this._document,`touchmove`)).pipe(ig(0)).subscribe({next:n=>{n.preventDefault(),this._setMinute(n)}});dI(Yu(this._document,`mouseup`),Yu(this._document,`touchend`)).pipe(Be(1)).subscribe({next:()=>{t.unsubscribe()}})}_isActiveCell(e){return this.selectedMinute===e}_setMinute(e){let t=this._element.nativeElement,n=this._getWindow(),s=t.getBoundingClientRect(),o=t.offsetWidth,f=t.offsetHeight,v=e instanceof MouseEvent?e.pageX:e.touches[0].pageX,N=e instanceof MouseEvent?e.pageY:e.touches[0].pageY,D=o/2-(v-s.left-n.scrollX),Fe=f/2-(N-s.top-n.scrollY),Qe=Math.PI/(30/this.interval),ge=Math.atan2(-D,Fe),Te=ge<0?Math.PI*2+ge:ge,oe=Math.round(Te/Qe)*this.interval,we=oe===60?0:oe;this.availableMinutes.includes(we)&&this.availableMinutes.includes(we)&&(this.selectedMinute=we,this.selectedChange.emit(this.selectedMinute)),this._cdr.detectChanges()}_initMinutes(){this.minutes=hn.filter(e=>e%5===0).map(e=>{let t=e/30*Math.PI;return{value:e,displayValue:e===0?`00`:String(e),left:ft(this.touchUi)+Math.sin(t)*Ne(this.touchUi),top:ft(this.touchUi)-Math.cos(t)*Ne(this.touchUi),disabled:!this.availableMinutes.includes(e)}})}_getWindow(){return this._document.defaultView||window}static{this.ɵfac=function(t){return new(t||a)(se(ze$1),se(Cr),se(ee$1))}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`mat-minutes-clock-dial`]],hostAttrs:[1,`mat-clock-dial`,`mat-clock-dial-minutes`],hostBindings:function(t,n){t&1&&Cc(`mousedown`,function(o){return n._onUserAction(o)})(`touchstart`,function(o){return n._onUserAction(o)})},inputs:{selectedMinute:`selectedMinute`,interval:`interval`,availableMinutes:`availableMinutes`,color:`color`,touchUi:`touchUi`},outputs:{selectedChange:`selectedChange`},exportAs:[`matMinutesClockDial`],decls:4,vars:5,consts:[[1,`mat-clock-dial-hand`,3,`ngStyle`],[`tabindex`,`0`,1,`mat-clock-dial-hand-point`],[`mat-mini-fab`,``,`disableRipple`,``,1,`mat-clock-dial-cell`,3,`tabIndex`,`left`,`top`,`mat-clock-dial-cell-active`,`mat-clock-dial-cell-disabled`,`color`],[`mat-mini-fab`,``,`disableRipple`,``,1,`mat-clock-dial-cell`,3,`tabIndex`,`color`]],template:function(t,n){t&1&&(Xa$1(0,`div`,0),Ic(1,`div`,1),qf(),T_(2,yo,2,12,`button`,2,bo)),t&2&&(lD(`mat-clock-dial-hand-pointless`,n.isMinutePoint)(`mat-clock-dial-hand-disabled`,n.disabled),Qy(`ngStyle`,n._handStyles()),mS(2),__(n.minutes))},dependencies:[Eh,fN,be,dn],styles:[`.mat-clock-dial{position:relative;display:block;width:16rem;height:16rem;margin:0 auto;border-radius:50%;background-color:var(--%NS%mat-timepicker-clock-dial-background-color, var(--%NS%mat-sys-surface-container-highest))}.mat-clock-dial:before{position:absolute;top:50%;left:50%;width:.4375rem;height:.4375rem;border-radius:50%;transform:translate(-50%,-50%);content:"";background-color:var(--%NS%mat-timepicker-clock-dial-center-point-color, var(--%NS%mat-sys-primary))}[mat-mini-fab].mat-clock-dial-cell{position:absolute;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:50%;box-shadow:none;color:var(--%NS%mat-timepicker-clock-dial-cell-text-color, var(--%NS%mat-sys-on-surface))}[mat-mini-fab].mat-clock-dial-cell:disabled{pointer-events:none}[mat-mini-fab].mat-clock-dial-cell:focus,[mat-mini-fab].mat-clock-dial-cell:hover,[mat-mini-fab].mat-clock-dial-cell:active,[mat-mini-fab].mat-clock-dial-cell:focus:active{box-shadow:none}[mat-mini-fab].mat-clock-dial-cell.mat-clock-dial-cell-disabled.mat-clock-dial-cell-active{background-color:var(--%NS%mat-timepicker-clock-dial-cell-active-disabled-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 40%, transparent));color:var(--%NS%mat-timepicker-clock-dial-cell-active-text-color, var(--%NS%mat-sys-on-primary))}.mat-clock-dial-cell:not(.mat-primary):not(.mat-accent):not(.mat-warn){background:var(--%NS%mat-timepicker-clock-dial-cell-unthemable-color, transparent)}.mat-clock-dial-cell.mat-clock-dial-cell-active{color:var(--%NS%mat-timepicker-clock-dial-cell-active-text-color, var(--%NS%mat-sys-on-primary));background-color:var(--%NS%mat-timepicker-clock-dial-cell-active-background-color, var(--%NS%mat-sys-primary))}.mat-clock-dial-cell.mat-clock-dial-cell-disabled{color:var(--%NS%mat-timepicker-clock-dial-cell-disabled-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 40%, transparent))}.mat-clock-dial-cell.mat-clock-dial-cell-disabled .mat-mdc-button-persistent-ripple:before{background-color:var(--%NS%mat-timepicker-clock-dial-cell-disabled-background-color, transparent)}.mat-timepicker-content-touch .mat-clock-dial{width:20rem;height:20rem}.mat-timepicker-content-touch [mat-mini-fab].mat-clock-dial-cell{width:3rem;height:3rem;font-size:1.125rem}.mat-clock-dial-hand{position:absolute;inset:0;width:1px;margin:0 auto;transform-origin:bottom}.mat-clock-dial-hand:before{position:absolute;top:-.25rem;left:-.25rem;width:calc(.5rem + 1px);height:calc(.5rem + 1px);border-radius:50%;content:""}.mat-clock-dial-hand.mat-clock-dial-hand-disabled{background-color:var(--%NS%mat-timepicker-clock-dial-hand-disabled-color, transparent)}.mat-clock-dial-hand.mat-clock-dial-hand-disabled:before{background-color:var(--%NS%mat-timepicker-clock-dial-hand-value-point-disabled-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 40%, transparent))}.mat-clock-dial-hand:not(.mat-clock-dial-hand-disabled){background-color:var(--%NS%mat-timepicker-clock-dial-hand-color, var(--%NS%mat-sys-primary))}.mat-clock-dial-hand:not(.mat-clock-dial-hand-disabled):before{background-color:var(--%NS%mat-timepicker-clock-dial-hand-value-point-color, var(--%NS%mat-sys-primary))}.mat-clock-dial-hand.mat-clock-dial-hand-pointless:before{content:none}
`],encapsulation:2})}}return a})();var vo=(a,i)=>i.value;function Bo(a,i){if(a&1&&(Xa$1(0,`button`,2),uM(1),qf()),a&2){let e=i.$implicit,t=P_();uD(`left`,e.left,`px`)(`top`,e.top,`px`),lD(`mat-clock-dial-cell-active`,t._isActiveCell(e.value))(`mat-clock-dial-cell-disabled`,e.disabled),Qy(`tabIndex`,t._isActiveCell(e.value)?0:-1)(`color`,t._isActiveCell(e.value)?t.color:void 0),vo$1(`aria-disabled`,e.disabled||null),mS(),Jf(` `,e.displayValue,` `)}}var Dt=Array(24).fill(null).map((a,i)=>i);var gn=(()=>{class a{get selectedHour(){return this._selectedHour}set selectedHour(e){this._selectedHour=e}get isMeridiem(){return this._isMeridiem}set isMeridiem(e){this._isMeridiem=e}get availableHours(){return this._availableHours}set availableHours(e){this._availableHours=e,this._initHours()}get touchUi(){return this._touchUi}set touchUi(e){this._touchUi=e,this._initHours()}get disabledHand(){return!this.availableHours.includes(this.selectedHour)}get isHour(){return!!this.hours.find(e=>e.value===this.selectedHour)}constructor(e,t,n){this._element=e,this._cdr=t,this._document=n,this._availableHours=[],this.selectedChange=new Se,this.hours=[]}ngOnInit(){this._initHours()}_handStyles(){let e=Math.round(this.selectedHour*30),t=this._getRadius(this.selectedHour),n=t,s=St(this.touchUi)-t;return{transform:`rotate(${e}deg)`,height:`${n}px`,"margin-top":`${s}px`}}_onUserAction(e){e.cancelable&&e.preventDefault(),this._setHour(e);let t=dI(Yu(this._document,`mousemove`),Yu(this._document,`touchmove`)).pipe(ig(0)).subscribe({next:n=>{n.preventDefault(),this._setHour(n)}});dI(Yu(this._document,`mouseup`),Yu(this._document,`touchend`)).pipe(Be(1)).subscribe({next:()=>{t.unsubscribe(),this.selectedChange.emit({hour:this.selectedHour,changeView:!0})}})}_isActiveCell(e){return this.selectedHour===e}_setHour(e){let t=this._element.nativeElement,n=this._getWindow(),s=t.getBoundingClientRect(),o=t.offsetWidth,f=t.offsetHeight,v=e instanceof MouseEvent?e.pageX:e.touches[0].pageX,N=e instanceof MouseEvent?e.pageY:e.touches[0].pageY,D=o/2-(v-s.left-n.scrollX),Fe=f/2-(N-s.top-n.scrollY),Qe=Math.PI/6,ge=Math.atan2(-D,Fe),Te=ge<0?Math.PI*2+ge:ge,oe=Math.round(Te/Qe),Tt=Math.sqrt(D*D+Fe*Fe)>Ne(this.touchUi)-un(this.touchUi),Xe=this._getHourValue(oe,Tt);this.availableHours.includes(Xe)&&(this.selectedHour=Xe,this.selectedChange.emit({hour:this.selectedHour})),this._cdr.detectChanges()}_getHourValue(e,t){let n=e===0||e===12;return this.isMeridiem?n?12:e:t?n?0:e:n?12:e+12}_initHours(){let e=this.isMeridiem?Dt.slice(1,13):Dt;this.hours=e.map(t=>{let n=t/6*Math.PI,s=this._getRadius(t);return{value:t,displayValue:t===0?`00`:String(t),left:ft(this.touchUi)+Math.sin(n)*s,top:ft(this.touchUi)-Math.cos(n)*s,disabled:!this.availableHours.includes(t)}})}_getRadius(e){return this.isMeridiem?Ne(this.touchUi):e>=0&&e<12?Ne(this.touchUi):Ls(this.touchUi)}_getWindow(){return this._document.defaultView||window}static{this.ɵfac=function(t){return new(t||a)(se(ze$1),se(Cr),se(ee$1))}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`mat-hours-clock-dial`]],hostAttrs:[1,`mat-clock-dial`,`mat-clock-dial-hours`],hostBindings:function(t,n){t&1&&Cc(`mousedown`,function(o){return n._onUserAction(o)})(`touchstart`,function(o){return n._onUserAction(o)})},inputs:{selectedHour:`selectedHour`,isMeridiem:`isMeridiem`,availableHours:`availableHours`,color:`color`,touchUi:`touchUi`},outputs:{selectedChange:`selectedChange`},exportAs:[`matHoursClockDial`],decls:3,vars:5,consts:[[1,`mat-clock-dial-hand`,3,`ngStyle`],[`mat-mini-fab`,``,`disableRipple`,``,1,`mat-clock-dial-cell`,3,`tabIndex`,`left`,`top`,`mat-clock-dial-cell-active`,`mat-clock-dial-cell-disabled`,`color`],[`mat-mini-fab`,``,`disableRipple`,``,1,`mat-clock-dial-cell`,3,`tabIndex`,`color`]],template:function(t,n){t&1&&(Ic(0,`div`,0),T_(1,Bo,2,12,`button`,1,vo)),t&2&&(lD(`mat-clock-dial-hand-pointless`,n.isHour)(`mat-clock-dial-hand-disabled`,n.disabledHand),Qy(`ngStyle`,n._handStyles()),mS(),__(n.hours))},dependencies:[Eh,fN,be,dn],styles:[`.mat-clock-dial{position:relative;display:block;width:16rem;height:16rem;margin:0 auto;border-radius:50%;background-color:var(--%NS%mat-timepicker-clock-dial-background-color, var(--%NS%mat-sys-surface-container-highest))}.mat-clock-dial:before{position:absolute;top:50%;left:50%;width:.4375rem;height:.4375rem;border-radius:50%;transform:translate(-50%,-50%);content:"";background-color:var(--%NS%mat-timepicker-clock-dial-center-point-color, var(--%NS%mat-sys-primary))}[mat-mini-fab].mat-clock-dial-cell{position:absolute;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:50%;box-shadow:none;color:var(--%NS%mat-timepicker-clock-dial-cell-text-color, var(--%NS%mat-sys-on-surface))}[mat-mini-fab].mat-clock-dial-cell:disabled{pointer-events:none}[mat-mini-fab].mat-clock-dial-cell:focus,[mat-mini-fab].mat-clock-dial-cell:hover,[mat-mini-fab].mat-clock-dial-cell:active,[mat-mini-fab].mat-clock-dial-cell:focus:active{box-shadow:none}[mat-mini-fab].mat-clock-dial-cell.mat-clock-dial-cell-disabled.mat-clock-dial-cell-active{background-color:var(--%NS%mat-timepicker-clock-dial-cell-active-disabled-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 40%, transparent));color:var(--%NS%mat-timepicker-clock-dial-cell-active-text-color, var(--%NS%mat-sys-on-primary))}.mat-clock-dial-cell:not(.mat-primary):not(.mat-accent):not(.mat-warn){background:var(--%NS%mat-timepicker-clock-dial-cell-unthemable-color, transparent)}.mat-clock-dial-cell.mat-clock-dial-cell-active{color:var(--%NS%mat-timepicker-clock-dial-cell-active-text-color, var(--%NS%mat-sys-on-primary));background-color:var(--%NS%mat-timepicker-clock-dial-cell-active-background-color, var(--%NS%mat-sys-primary))}.mat-clock-dial-cell.mat-clock-dial-cell-disabled{color:var(--%NS%mat-timepicker-clock-dial-cell-disabled-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 40%, transparent))}.mat-clock-dial-cell.mat-clock-dial-cell-disabled .mat-mdc-button-persistent-ripple:before{background-color:var(--%NS%mat-timepicker-clock-dial-cell-disabled-background-color, transparent)}.mat-timepicker-content-touch .mat-clock-dial{width:20rem;height:20rem}.mat-timepicker-content-touch [mat-mini-fab].mat-clock-dial-cell{width:3rem;height:3rem;font-size:1.125rem}.mat-clock-dial-hand{position:absolute;inset:0;width:1px;margin:0 auto;transform-origin:bottom}.mat-clock-dial-hand:before{position:absolute;top:-.25rem;left:-.25rem;width:calc(.5rem + 1px);height:calc(.5rem + 1px);border-radius:50%;content:""}.mat-clock-dial-hand.mat-clock-dial-hand-disabled{background-color:var(--%NS%mat-timepicker-clock-dial-hand-disabled-color, transparent)}.mat-clock-dial-hand.mat-clock-dial-hand-disabled:before{background-color:var(--%NS%mat-timepicker-clock-dial-hand-value-point-disabled-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 40%, transparent))}.mat-clock-dial-hand:not(.mat-clock-dial-hand-disabled){background-color:var(--%NS%mat-timepicker-clock-dial-hand-color, var(--%NS%mat-sys-primary))}.mat-clock-dial-hand:not(.mat-clock-dial-hand-disabled):before{background-color:var(--%NS%mat-timepicker-clock-dial-hand-value-point-color, var(--%NS%mat-sys-primary))}.mat-clock-dial-hand.mat-clock-dial-hand-pointless:before{content:none}
`],encapsulation:2})}}return a})();var Yn=new y(`MAT_TIME_LOCALE`,{providedIn:`root`,factory:_o});function _o(){return p(Sc)}var z=class{getValidTimeOrNull(i){return this.isTimeInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isTimeInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i}sameTime(i,e){if(i&&e){let t=this.isValid(i),n=this.isValid(e);return t&&n?!this.compareTime(i,e):t==n}return i==e}clampTime(i,e,t){return e&&this.compareTime(i,e)<0?e:t&&this.compareTime(i,t)>0?t:i}};var Fo=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;var Hs=(()=>{class a extends z{constructor(e){super(),this._matTimeLocale=p(Yn,{optional:!0}),e!==void 0&&(this._matTimeLocale=e),super.setLocale(this._matTimeLocale)}now(){return new Date}parse(e,t){if(typeof e==`number`)return new Date(e);let{hour:n,minute:s,meridiem:o}=this.parseTime(e),f=o===`pm`&&n<12?n+12:n,v=new Date;return v.setHours(f),v.setMinutes(s),e?new Date(v):null}parseTime(e){let t=e.replace(/(\sam|\spm|\sAM|\sPM|am|pm|AM|PM)/g,``),n=e.replace(t,``).trim().toLowerCase(),[s,o]=t.split(`:`);return{hour:Number(s),minute:Number(o),meridiem:n}}getHour(e){return e.getHours()}getMinute(e){return e.getMinutes()}updateHour(e,t){let n=new Date(e.getTime());return n.setHours(t),n}updateMinute(e,t){let n=new Date(e.getTime());return n.setMinutes(t),n}getPeriod(e){return e.getHours()<12?`am`:`pm`}format(e,t){if(!this.isValid(e))throw Error(`NativeDateTimeAdapter: Cannot format invalid date.`);let n=new Intl.DateTimeFormat(this.locale,x(w$1({},t),{timeZone:`utc`}));return this._format(n,e)}deserialize(e){if(typeof e==`string`){if(!e)return null;if(Fo.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isTimeInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}compareTime(e,t){return e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()}_format(e,t){let n=new Date;return n.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),n.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(n)}static{this.ɵfac=function(t){return new(t||a)(E(Yn,8))}}static{this.ɵprov=S({token:a,factory:a.ɵfac})}}return a})();var Vs=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵmod=nn$1({type:a})}static{this.ɵinj=_t({providers:[xo()]})}}return a})();function xo(){return{provide:z,useClass:Hs}}var bn=(()=>{class a{get selected(){return this._selected}set selected(e){if(this._selected=this._timeAdapter.getValidTimeOrNull(this._timeAdapter.deserialize(e)),!this._selected)return;let t=this._timeAdapter.getHour(this._selected);this.selectedHour=t>12&&this.isMeridiem?t-12:t,t===0&&this.isMeridiem&&(this.selectedHour=12),this.selectedMinute=this._timeAdapter.getMinute(this._selected),this.availableHours=Dt,this.isMeridiem&&(this.period=this._timeAdapter.getPeriod(this._selected)),this.availableMinutes=hn,this._setMinHour(),this._setMaxHour(),this._setMinMinute(),this._setMaxMinute()}get minTime(){return this._minTime}set minTime(e){this._minTime=this._timeAdapter.getValidTimeOrNull(this._timeAdapter.deserialize(e)),e&&(this._setMinHour(),this._setMinMinute(),this._setDisabledPeriod())}get maxTime(){return this._maxTime}set maxTime(e){this._maxTime=this._timeAdapter.getValidTimeOrNull(this._timeAdapter.deserialize(e)),e&&(this._setMaxHour(),this._setMaxMinute(),this._setDisabledPeriod())}get minuteInterval(){return this._minuteInterval}set minuteInterval(e){this._minuteInterval=Bf(e)||1}constructor(e){this._timeAdapter=e,this._minuteInterval=1,this.color=`primary`,this._userSelection=new Se,this.selectedChange=new Se,this.selectedHour=0,this.selectedMinute=0,this.disabledPeriod=null,this.availableMinutes=hn,this.availableHours=Dt,this._focusActiveCellAfterViewChecked=!1}ngAfterContentInit(){this.selected||(this.selected=this._timeAdapter.clampTime(this._timeAdapter.now(),this.minTime,this.maxTime),this._userSelection.emit(this.selected))}ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this.focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}_onHourSelected(e){this.selectedHour=e;let t=this._timeAdapter.updateHour(this.selected,this._getHourBasedOnPeriod(e));this._timeSelected(t)}_onMinuteSelected(e){this.selectedMinute=e;let t=this._timeAdapter.updateMinute(this.selected,e);this._timeSelected(t)}_onPeriodChanged(e){this.period=e;let t=this._timeAdapter.updateHour(this.selected,this._getHourBasedOnPeriod(this.selectedHour));this._timeSelected(t)}_getAvailableHours(){return this.isMeridiem?this.availableHours.filter(e=>this.period===`am`?e<12:this.period===`pm`?e>=12:e).map(e=>e>12?e-12:e===0?12:e):this.availableHours}_onKeydown(e,t){switch(t){case`hour`:this._handleHourKeydown(e);break;case`minute`:this._handleMinuteKeydown(e);break}}_handleHourKeydown(e){let t=this._getAvailableHours(),n=t.findIndex(s=>s===this.selectedHour);if(t.length){switch(e.keyCode){case 38:n+1>=t.length||n<0?this._onHourSelected(t[0]):this._onHourSelected(t[n+1]);break;case 40:n-1<0||n<0?this._onHourSelected(t[t.length-1]):this._onHourSelected(t[n-1]);break;default:break}this._scheduleFocusActiveCellAfterViewChecked()}}_handleMinuteKeydown(e){let t=this.availableMinutes,n=t.findIndex(s=>s===this.selectedMinute);if(t.length)switch(e.keyCode){case 38:if(n+this.minuteInterval>=t.length||n<0){let s=60-this.selectedMinute+Math.min(...this.availableMinutes),f=Math.ceil(s/this.minuteInterval)*this.minuteInterval,v=this.selectedMinute+f,N=t.findIndex(D=>D===v-60);this._onMinuteSelected(t[N])}else this._onMinuteSelected(t[n+this.minuteInterval]);break;case 40:if(n-this.minuteInterval<0||n<0){let s=60+this.selectedMinute-Math.max(...this.availableMinutes),f=Math.ceil(s/this.minuteInterval)*this.minuteInterval,v=this.selectedMinute-f,N=t.findIndex(D=>D===v+60);this._onMinuteSelected(t[N])}else this._onMinuteSelected(t[n-this.minuteInterval]);break;default:break}}_getHourBasedOnPeriod(e){let t=this.isMeridiem&&this.period===`pm`,n=this.isMeridiem&&this.period===`am`;return t?e===12?e:e+12:n&&e===12?0:e}_timeSelected(e){e&&!this._timeAdapter.sameTime(e,this.selected)&&this.selectedChange.emit(e),this._userSelection.emit(e)}_setMinHour(){if(!this.minTime)return;let e=this._timeAdapter.getHour(this.minTime);this.availableHours=this.availableHours.filter(t=>t>=e)}_setMaxHour(){if(!this.maxTime)return;let e=this._timeAdapter.getHour(this.maxTime);this.availableHours=this.availableHours.filter(t=>t<=e)}_setMinMinute(){if(!this.selected||!this.minTime)return;let e=this._timeAdapter.getHour(this.selected),t=this._timeAdapter.getHour(this.minTime),n=e>t?0:this._timeAdapter.getMinute(this.minTime);this.availableMinutes=this.availableMinutes.filter(s=>s>=n),e<t&&(this.availableMinutes=[])}_setMaxMinute(){if(!this.selected||!this.maxTime)return;let e=this._timeAdapter.getHour(this.selected),t=this._timeAdapter.getHour(this.maxTime),n=e<t?59:this._timeAdapter.getMinute(this.maxTime);this.availableMinutes=this.availableMinutes.filter(s=>s<=n),e>t&&(this.availableMinutes=[])}_setDisabledPeriod(){if(this.minTime&&this._timeAdapter.getHour(this.minTime)>=12&&(this.disabledPeriod=`am`),this.maxTime){let e=this._timeAdapter.getHour(this.maxTime),t=this._timeAdapter.getHour(this.maxTime);(e<12||e===12&&t===0)&&(this.disabledPeriod=`pm`)}}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}static{this.ɵfac=function(t){return new(t||a)(se(z,8))}}static{this.ɵdir=Ot({type:a,inputs:{selected:`selected`,minTime:`minTime`,maxTime:`maxTime`,minuteInterval:`minuteInterval`,isMeridiem:`isMeridiem`,color:`color`},outputs:{_userSelection:`_userSelection`,selectedChange:`selectedChange`}})}}return a})();function Gn(a){return a<10?`0${a}`:`${a}`}function yn(a,i){return Gn(i&&a===0?12:a)}var Co=[`Backspace`,`Delete`,`ArrowLeft`,`ArrowRight`,`Tab`];var Ao=new y(`MatTimepickerInputKeydownHandler`,{factory:()=>a=>{let i=/^[0-9]$/.test(a.key),e=Co.includes(a.code);!i&&!e&&a.preventDefault()}});var Kn=(()=>{class a{get value(){return this._value}set value(e){this._value=e,this.hasFocus||this.setInputValue(this._value),setTimeout(()=>{this.setInputPlaceholder(this._value)},0)}_keydown(e){this._keydownHandler(e)}get inputElement(){return this.element.nativeElement}get hasFocus(){return this.element?.nativeElement===this._document.activeElement}constructor(e,t,n){this.element=e,this._cdr=t,this._document=n,this.timeChanged=new Se,this._keydownHandler=p(Ao)}focus(){this.setInputValue(null)}blur(){let e=!isNaN(Number(this.inputElement.value)),t=this._formatValue(e?Number(this.inputElement.value||this._value):this.value);this.setInputValue(t),this.setInputPlaceholder(t),this.timeChanged.emit(t)}setInputValue(e){e!==null?this.inputElement.value=this._withZeroPrefix(e):this.inputElement.value=``,this._cdr.markForCheck()}setInputPlaceholder(e){this.inputElement.placeholder=this._withZeroPrefix(e),this._cdr.markForCheck()}static{this.ɵfac=function(t){return new(t||a)(se(ze$1),se(Cr),se(ee$1))}}static{this.ɵdir=Ot({type:a,hostBindings:function(t,n){t&1&&Cc(`keydown`,function(o){return n._keydown(o)})},inputs:{value:`value`},outputs:{timeChanged:`timeChanged`}})}}return a})();var So=[[[``,`hours`,``]],[[``,`minutes`,``]],[[``,`mat-time-period`,``]],`*`];var Do=[`[hours]`,`[minutes]`,`[mat-time-period]`,`*`];var vn=(()=>{class a{constructor(){this.orientation=`vertical`}static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`mat-timepicker-content-layout`]],hostAttrs:[1,`mat-timepicker-content-layout`],hostVars:4,hostBindings:function(t,n){t&2&&lD(`mat-timepicker-content-layout-horizontal`,n.orientation===`horizontal`)(`mat-timepicker-content-layout-vertical`,n.orientation===`vertical`)},inputs:{title:`title`,orientation:`orientation`},exportAs:[`matTimepickerContent`],ngContentSelectors:Do,decls:12,vars:1,consts:[[1,`mat-timepicker-content-layout-title`],[1,`mat-timepicker-content-layout-container`],[1,`mat-timepicker-content-layout-values`],[1,`mat-timepicker-content-layout-hours`],[1,`mat-timepicker-content-layout-separator`],[1,`mat-timepicker-content-layout-minutes`]],template:function(t,n){t&1&&(F_(So),Wf(0,`h6`,0),uM(1),Zf(),Wf(2,`div`,1)(3,`div`,2)(4,`div`,3),j_(5),Zf(),Wf(6,`span`,4),uM(7,`:`),Zf(),Wf(8,`div`,5),j_(9,1),Zf(),j_(10,2),Zf(),j_(11,3),Zf()),t&2&&(mS(),mD(n.title))},styles:[`.mat-timepicker-content-layout-title{color:var(--%NS%mat-timepicker-content-layout-title-color, var(--%NS%mat-sys-on-surface-variant));font-size:var(--%NS%mat-timepicker-content-layout-title-font-size, 12px);font-weight:var(--%NS%mat-timepicker-content-layout-title-font-weight, var(--%NS%mat-sys-title-medium-weight))}h6.mat-timepicker-content-layout-title{margin-top:0rem;margin-bottom:1.25rem;letter-spacing:.05rem}.mat-timepicker-content-layout-values{display:flex;justify-content:center}.mat-time-period{margin-left:.75rem}.mat-timepicker-content-layout-horizontal h6.mat-timepicker-content-layout-title{margin-bottom:0}.mat-timepicker-content-layout-horizontal .mat-timepicker-content-layout-container{display:flex;gap:4rem;align-items:center}.mat-timepicker-content-layout-horizontal .mat-timepicker-content-layout-values{flex-wrap:wrap}.mat-timepicker-content-layout-horizontal .mat-time-period{margin-top:.75rem;margin-left:0}.mat-timepicker-content-layout-hours,.mat-timepicker-content-layout-minutes{width:6rem}.mat-timepicker-content-layout-separator{display:flex;justify-content:center;align-self:center;width:1.5rem;height:1.75rem;font-weight:500;font-size:var(--%NS%mat-timepicker-content-layout-separator-font-size, 3rem);line-height:var(--%NS%mat-timepicker-content-layout-separator-line-height, 1.25rem)}
`],encapsulation:2})}}return a})();var gt=(()=>{class a{constructor(e){this._intl=e,this.vertical=Nc(!0,{transform:Li$1}),this.period=Nc(`am`),this.disabledPeriod=Nc(null),this.periodChanged=W2(),this._currentPeriod=rh(()=>this.period())}setPeriod(e,t){e.preventDefault(),this._currentPeriod.set(t),this.periodChanged.emit(t)}_isPeriodDisabled(e){return this.disabledPeriod()?this.disabledPeriod()===e:!1}static{this.ɵfac=function(t){return new(t||a)(se(ce))}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`mat-time-period`]],hostAttrs:[1,`mat-time-period`],hostVars:5,hostBindings:function(t,n){t&2&&(vo$1(`aria-orientation`,n.vertical()?`vertical`:`horizontal`),lD(`mat-time-period-vertical`,n.vertical())(`mat-time-period-horizontal`,!n.vertical()))},inputs:{vertical:[1,`vertical`],period:[1,`period`],disabledPeriod:[1,`disabledPeriod`]},outputs:{periodChanged:`periodChanged`},decls:5,vars:11,consts:[[`tabindex`,`0`,`matRipple`,``,1,`mat-time-period-item`,3,`click`,`keydown.space`],[3,`vertical`]],template:function(t,n){t&1&&(Xa$1(0,`div`,0),Cc(`click`,function(o){return n.setPeriod(o,`am`)})(`keydown.space`,function(o){return n.setPeriod(o,`am`)}),uM(1),qf(),Ic(2,`mat-divider`,1),Xa$1(3,`div`,0),Cc(`click`,function(o){return n.setPeriod(o,`pm`)})(`keydown.space`,function(o){return n.setPeriod(o,`pm`)}),uM(4),qf()),t&2&&(lD(`mat-time-period-item-active`,n._currentPeriod()===`am`)(`mat-time-period-item-disabled`,n._isPeriodDisabled(`am`)),mS(),Jf(` `,n._intl.am,`
`),mS(),Qy(`vertical`,!n.vertical()),mS(),lD(`mat-time-period-item-active`,n._currentPeriod()===`pm`)(`mat-time-period-item-disabled`,n._isPeriodDisabled(`pm`)),mS(),Jf(` `,n._intl.pm,`
`))},dependencies:[mn,pn,Ct,Vn],styles:[`.mat-time-period{display:flex;text-align:center;border-width:1px;border-style:solid;border-radius:.25rem;box-sizing:border-box;border-color:var(--%NS%mat-timepicker-time-period-border-color, var(--%NS%mat-sys-outline))}.mat-time-period-vertical{flex-direction:column;width:3.25rem;height:4.5rem}.mat-time-period-vertical .mat-time-period-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-time-period-vertical .mat-time-period-item:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-time-period-horizontal{flex-direction:row;max-width:13.5rem;width:100%;height:2.5rem}.mat-time-period-horizontal .mat-time-period-item:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.mat-time-period-horizontal .mat-time-period-item:last-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.mat-time-period-item{display:flex;flex-direction:column;justify-content:center;flex-grow:1;height:100%;font-size:.875rem;font-weight:500;cursor:pointer}.mat-time-period-item-active{color:var(--%NS%mat-timepicker-time-period-active-text-color, var(--%NS%mat-sys-on-tertiary-container));background-color:var(--%NS%mat-timepicker-time-period-active-background-color, var(--%NS%mat-sys-tertiary-container))}.mat-time-period-item-disabled{pointer-events:none;color:var(--%NS%mat-timepicker-time-period-disabled-text-color, var(--%NS%mat-sys-on-surface-variant));background-color:var(--%NS%mat-timepicker-time-period-disabled-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 20%, transparent))}.mat-divider{border-top-color:inherit}.mat-divider.mat-divider-vertical{border-right-color:inherit}
`],encapsulation:2})}}return a})();function Mo(a,i){if(a&1){let e=O_();Yf(0,3),Xa$1(1,`mat-time-period`,7),Cc(`periodChanged`,function(n){Vg(e);return Hg(P_()._onPeriodChanged(n))}),qf(),Qf()}if(a&2){let e=P_();mS(),Qy(`period`,e.period)(`disabledPeriod`,e.disabledPeriod)(`vertical`,e.orientation()===`vertical`)}}function No(a,i){if(a&1){let e=O_();Xa$1(0,`mat-hours-clock-dial`,8),Oa(`mat-clock-dial-leave`),Aa(`mat-clock-dial-enter`),Cc(`selectedChange`,function(n){Vg(e);return Hg(P_()._onHourChanged(n))})(`keydown`,function(n){Vg(e);return Hg(P_()._onKeydown(n,`hour`))}),qf()}if(a&2){let e=P_();Qy(`color`,e.color)(`selectedHour`,e.selectedHour)(`isMeridiem`,e.isMeridiem)(`availableHours`,e._getAvailableHours())(`touchUi`,e.touchUi())}}function To(a,i){if(a&1){let e=O_();Xa$1(0,`mat-minutes-clock-dial`,9),Oa(`mat-clock-dial-leave`),Aa(`mat-clock-dial-enter`),Cc(`selectedChange`,function(n){Vg(e);return Hg(P_()._onMinuteSelected(n))})(`keydown`,function(n){Vg(e);return Hg(P_()._onKeydown(n,`minute`))}),qf()}if(a&2){let e=P_();Qy(`color`,e.color)(`selectedMinute`,e.selectedMinute)(`interval`,e.minuteInterval)(`availableMinutes`,e.availableMinutes)(`touchUi`,e.touchUi())}}var Ge=(()=>{class a extends bn{constructor(e,t,n,s){super(t),this._intl=e,this._elementRef=n,this._cdr=s,this.orientation=Nc(`vertical`),this.touchUi=Nc(!1),this.currentView=Nc(`hours`),this.viewChanged=W2(),this.isHoursView=Ir(()=>this._view()===`hours`),this._view=rh(()=>this.currentView()),ya(()=>this.viewChanged.emit(this._view()))}onViewChange(e,t){e.preventDefault(),this._view.set(t)}focusActiveCell(){let e=this._elementRef.nativeElement.querySelector(`.mat-timepicker-content .mat-clock-dial-cell-active`);if(e){e.focus();return}let t=this._elementRef.nativeElement.querySelector(`.mat-timepicker-content .mat-clock-dial-hand-point`);t&&t.focus()}_withZeroPrefix(e){return e===0?`00`:yn(e,this.isMeridiem)}_onMinuteSelected(e){super._onMinuteSelected(e),this._cdr.detectChanges()}_onHourChanged({hour:e,changeView:t=!1}){t&&this._view.set(`minutes`),this._onHourSelected(e),this._cdr.detectChanges()}static{this.ɵfac=function(t){return new(t||a)(se(ce),se(z,8),se(ze$1),se(Cr))}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`mat-clock-dials`]],hostAttrs:[`role`,`dial`,1,`mat-clock-dials`],inputs:{orientation:[1,`orientation`],touchUi:[1,`touchUi`],currentView:[1,`currentView`]},outputs:{viewChanged:`viewChanged`},exportAs:[`matClockDials`],features:[zy],decls:9,vars:13,consts:[[3,`title`,`orientation`],[`tabindex`,`0`,`hours`,``,1,`mat-clock-dial-value`,3,`click`,`keydown.space`],[`tabindex`,`0`,`minutes`,``,1,`mat-clock-dial-value`,3,`click`,`keydown.space`],[`mat-time-period`,``],[1,`mat-clock-dial-faces`],[3,`color`,`selectedHour`,`isMeridiem`,`availableHours`,`touchUi`],[3,`color`,`selectedMinute`,`interval`,`availableMinutes`,`touchUi`],[3,`periodChanged`,`period`,`disabledPeriod`,`vertical`],[3,`selectedChange`,`keydown`,`color`,`selectedHour`,`isMeridiem`,`availableHours`,`touchUi`],[3,`selectedChange`,`keydown`,`color`,`selectedMinute`,`interval`,`availableMinutes`,`touchUi`]],template:function(t,n){t&1&&(Xa$1(0,`mat-timepicker-content-layout`,0)(1,`div`,1),Cc(`click`,function(o){return n.onViewChange(o,`hours`)})(`keydown.space`,function(o){return n.onViewChange(o,`hours`)}),uM(2),qf(),Xa$1(3,`div`,2),Cc(`click`,function(o){return n.onViewChange(o,`minutes`)})(`keydown.space`,function(o){return n.onViewChange(o,`minutes`)}),uM(4),qf(),C_(5,Mo,2,3,`ng-container`,3),Xa$1(6,`div`,4),C_(7,No,1,5,`mat-hours-clock-dial`,5),C_(8,To,1,5,`mat-minutes-clock-dial`,6),qf()()),t&2&&(Qy(`title`,n._intl.dialsTitle)(`orientation`,n.orientation()),mS(),lD(`mat-clock-dial-value-active`,n.isHoursView()),mS(),Jf(` `,n._withZeroPrefix(n.selectedHour),` `),mS(),lD(`mat-clock-dial-value-active`,!n.isHoursView()),mS(),Jf(` `,n._withZeroPrefix(n.selectedMinute),` `),mS(),b_(n.isMeridiem?5:-1),mS(),lD(`mat-clock-dial-faces-horizontal`,n.orientation()===`horizontal`),mS(),b_(n.isHoursView()?7:-1),mS(),b_(n.isHoursView()?-1:8))},dependencies:[vn,gn,fn,gt],styles:[`.mat-clock-dial-values{display:flex;width:100%}.mat-clock-dial-value{display:flex;align-items:center;justify-content:center;height:4.5rem;border-radius:.25rem;cursor:pointer;background-color:var(--%NS%mat-timepicker-clock-dial-value-background-color, var(--%NS%mat-sys-surface-container-highest));font-family:var(--%NS%mat-timepicker-clock-dial-value-font-family, var(--%NS%mat-sys-body-medium-font));font-size:var(--%NS%mat-timepicker-clock-dial-value-font-size, 2rem);letter-spacing:var(--%NS%mat-timepicker-clock-dial-value-letter-spacing, .5px)}.mat-clock-dial-value.mat-clock-dial-value-active{color:var(--%NS%mat-timepicker-clock-dial-value-active-text-color, var(--%NS%mat-sys-on-surface-variant));background-color:var(--%NS%mat-timepicker-clock-dial-value-active-background-color, var(--%NS%mat-sys-primary-container))}.mat-clock-dial-faces{margin-top:2.25rem}.mat-clock-dial-faces.mat-clock-dial-faces-horizontal{margin-top:0}.mat-clock-dial-cell.mat-clock-dial-cell-disabled:hover{cursor:default}.mat-clock-dial-enter{animation:clock-dial-enter-animation .1s ease-out}.mat-clock-dial-leave{animation:clock-dial-leave-animation 0s ease-in}@keyframes clock-dial-enter-animation{0%{opacity:0;visibility:hidden;transform:scale(1.05)}to{opacity:1;visibility:visible;transform:scale(1)}}@keyframes clock-dial-leave-animation{0%{opacity:1;visibility:visible;transform:scale(1)}to{opacity:0;visibility:hidden;transform:scale(1.05)}}
`],encapsulation:2})}}return a})();function Io(a,i){if(a&1){let e=O_();Yf(0,5),Xa$1(1,`mat-time-period`,6),Cc(`periodChanged`,function(n){Vg(e);return Hg(P_()._onPeriodChanged(n))}),qf(),Qf()}if(a&2){let e=P_();mS(),Qy(`period`,e.period)(`disabledPeriod`,e.disabledPeriod)}}var Ro=(()=>{class a extends Kn{get availableHours(){return this._availableHours}set availableHours(e){this._availableHours=e}constructor(e,t,n){super(e,t,n),this._availableHours=[]}_withZeroPrefix(e){return yn(e,this.isMeridiem)}_formatValue(e){let n=this.isMeridiem&&(e===0||e===24)?12:e===24?0:this.isMeridiem&&e>12?e-12:e;if(this.isMeridiem){if(!this.availableHours.length)return this.value;if(n===12&&this.availableHours.includes(12))return 12;if(n===12&&!this.availableHours.includes(12))return Math.min(...this.availableHours);if(n>=1&&n<12){let s=this.availableHours[this.availableHours.length-1];return Math.min(Math.max(n,Math.min(...this.availableHours)),s)}}return Math.min(Math.max(n,Math.min(...this.availableHours)),Math.max(...this.availableHours))}static{this.ɵfac=function(t){return new(t||a)(se(ze$1),se(Cr),se(ee$1))}}static{this.ɵdir=Ot({type:a,selectors:[[`input`,`matHourInput`,``]],hostAttrs:[1,`mat-time-input`],hostBindings:function(t,n){t&1&&Cc(`focus`,function(){return n.focus()})(`blur`,function(){return n.blur()})},inputs:{availableHours:`availableHours`,isMeridiem:`isMeridiem`},exportAs:[`matTimeInput`],features:[zy]})}}return a})();var Oo=(()=>{class a extends Kn{get interval(){return this._interval}set interval(e){this._interval=Bf(e)||1}get availableMinutes(){return this._availableMinutes}set availableMinutes(e){this._availableMinutes=e}constructor(e,t,n){super(e,t,n),this._interval=1,this._availableMinutes=[]}_withZeroPrefix(e){return Gn(e)}_formatValue(e){if(!this.availableMinutes.length)return this.value;let t=Math.round(e/this.interval)*this.interval;return Math.min(Math.max(t,Math.min(...this.availableMinutes)),Math.max(...this.availableMinutes))}static{this.ɵfac=function(t){return new(t||a)(se(ze$1),se(Cr),se(ee$1))}}static{this.ɵdir=Ot({type:a,selectors:[[`input`,`matMinuteInput`,``]],hostAttrs:[1,`mat-time-input`],hostBindings:function(t,n){t&1&&Cc(`focus`,function(){return n.focus()})(`blur`,function(){return n.blur()})},inputs:{interval:`interval`,availableMinutes:`availableMinutes`},exportAs:[`matTimeInput`],features:[zy]})}}return a})();var Ke=(()=>{class a extends bn{constructor(e,t,n){super(t),this._intl=e,this._elementRef=n,this._skipNextTickFocus=!1}focusActiveCell(){let e=this._elementRef.nativeElement.querySelector(`.mat-timepicker-content input`);e&&!this._skipNextTickFocus&&(e.focus(),this._skipNextTickFocus=!0)}static{this.ɵfac=function(t){return new(t||a)(se(ce),se(z,8),se(ze$1))}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`mat-time-inputs`]],hostAttrs:[1,`mat-time-inputs`],features:[zy],decls:10,vars:12,consts:[[3,`title`],[`appearance`,`outline`,`hours`,``,1,`mat-time-inputs-field`,3,`color`],[`type`,`text`,`inputmode`,`numeric`,`maxlength`,`2`,`matInput`,``,`matHourInput`,``,3,`timeChanged`,`keydown`,`isMeridiem`,`value`,`availableHours`],[`appearance`,`outline`,`minutes`,``,1,`mat-time-inputs-field`,3,`color`],[`type`,`text`,`inputmode`,`numeric`,`maxlength`,`2`,`matInput`,``,`matMinuteInput`,``,3,`timeChanged`,`keydown`,`value`,`interval`,`availableMinutes`],[`mat-time-period`,``],[3,`periodChanged`,`period`,`disabledPeriod`]],template:function(t,n){t&1&&(Xa$1(0,`mat-timepicker-content-layout`,0)(1,`mat-form-field`,1)(2,`input`,2),Cc(`timeChanged`,function(o){return n._onHourSelected(o)})(`keydown`,function(o){return n._onKeydown(o,`hour`)}),qf(),Xa$1(3,`mat-hint`),uM(4),qf()(),Xa$1(5,`mat-form-field`,3)(6,`input`,4),Cc(`timeChanged`,function(o){return n._onMinuteSelected(o)})(`keydown`,function(o){return n._onKeydown(o,`minute`)}),qf(),Xa$1(7,`mat-hint`),uM(8),qf()(),C_(9,Io,2,2,`ng-container`,5),qf()),t&2&&(Qy(`title`,n._intl.inputsTitle),mS(),Qy(`color`,n.color),mS(),Qy(`isMeridiem`,n.isMeridiem)(`value`,n.selectedHour)(`availableHours`,n._getAvailableHours()),mS(2),mD(n._intl.hourInputHint),mS(),Qy(`color`,n.color),mS(),Qy(`value`,n.selectedMinute)(`interval`,n.minuteInterval)(`availableMinutes`,n.availableMinutes),mS(2),mD(n._intl.minuteInputHint),mS(),b_(n.isMeridiem?9:-1))},dependencies:[Ze,M,ee,an,w,vn,Ro,Oo,gt],styles:[`.mat-time-inputs{display:block}.mat-time-inputs .mat-timepicker-content-layout-separator{margin-top:-1.5rem}.mat-time-inputs-field{display:block}.mat-time-inputs-field.mat-form-field-appearance-outline .mat-mdc-form-field-flex{margin:0}.mat-time-inputs-field.mat-form-field-appearance-outline .mat-mdc-text-field-wrapper{top:0;margin:0;background-color:var(--%NS%mat-timepicker-time-inputs-field-background-color, var(--%NS%mat-sys-surface-container-highest))}.mat-time-inputs-field.mat-form-field-appearance-outline:not(.mat-focused) .mdc-notched-outline__leading,.mat-time-inputs-field.mat-form-field-appearance-outline:not(.mat-focused) .mdc-notched-outline__notch,.mat-time-inputs-field.mat-form-field-appearance-outline:not(.mat-focused) .mdc-notched-outline__trailing{border-style:none}.mat-time-inputs-field.mat-form-field-appearance-outline .mat-mdc-form-field-subscript-wrapper{margin-top:.75rem;line-height:1;letter-spacing:.05rem}.mat-time-inputs-field.mat-form-field-appearance-outline .mat-mdc-form-field-subscript-wrapper .mat-mdc-form-field-hint-wrapper{padding-left:0}.mat-time-inputs-field.mat-form-field-appearance-outline input.mat-mdc-input-element{font-size:var(--%NS%mat-timepicker-time-inputs-field-font-size, 2rem);line-height:var(--%NS%mat-timepicker-time-inputs-field-line-height, 1.25)}.mat-time-inputs-field .mat-mdc-form-field-bottom-align:before{height:0}.mat-time-inputs-field .mat-mdc-form-field-infix{border-top:none;text-align:center}.mat-time-inputs-field input.mat-mdc-input-element{margin-top:0;text-align:center}
`],encapsulation:2})}}return a})();var kt=(()=>{class a{updateSelection(e,t){let n=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:n})}constructor(e){this._adapter=e,this._selectionChanged=new Q,this.selectionChanged=this._selectionChanged}ngOnDestroy(){this._selectionChanged.complete()}static{this.ɵfac=function(t){return new(t||a)(E(z))}}static{this.ɵprov=S({token:a,factory:a.ɵfac})}}return a})();var zs=(()=>{class a extends kt{constructor(e){super(e)}add(e){super.updateSelection(e,this)}clone(){let e=new a(this._adapter);return e.updateSelection(this.selection,this),e}static{this.ɵfac=function(t){return new(t||a)(E(z))}}static{this.ɵprov=S({token:a,factory:a.ɵfac})}}return a})();function Lo(a,i){return a||new zs(i)}var Us={provide:kt,deps:[[new xC,new OC,zs],z],useFactory:Lo};function Ho(a,i){if(a&1){let e=O_();Xa$1(0,`button`,6),Cc(`click`,function(){Vg(e);return Hg(P_(2).onToggleMode(`dial`))}),em(),Xa$1(1,`svg`,7),Ic(2,`path`,8),qf()()}}function Vo(a,i){}function zo(a,i){if(a&1){let e=O_();Xa$1(0,`mat-time-inputs`,2),Cc(`_userSelection`,function(n){Vg(e);return Hg(P_()._handleUserSelection(n))}),qf(),Xa$1(1,`div`,3),C_(2,Ho,3,0,`button`,4),qy(3,Vo,0,0,`ng-template`,5),qf()}if(a&2){let e=P_();Qy(`id`,e.timepicker.id)(`color`,e.color)(`isMeridiem`,e.isMeridiem)(`selected`,e._getSelected())(`minTime`,e.timepicker._getMinTime())(`maxTime`,e.timepicker._getMaxTime())(`minuteInterval`,e.minuteInterval),mS(2),b_(e.showToggleModeButton?2:-1),mS(),Qy(`cdkPortalOutlet`,e._actionsPortal)}}function Uo(a,i){if(a&1){let e=O_();Xa$1(0,`button`,6),Cc(`click`,function(){Vg(e);return Hg(P_(2).onToggleMode(`input`))}),em(),Xa$1(1,`svg`,7),Ic(2,`path`,10),qf()()}}function jo(a,i){}function qo(a,i){if(a&1){let e=O_();Xa$1(0,`mat-clock-dials`,9),Cc(`_userSelection`,function(n){Vg(e);return Hg(P_()._handleUserSelection(n))}),qf(),Xa$1(1,`div`,3),C_(2,Uo,3,0,`button`,4),qy(3,jo,0,0,`ng-template`,5),qf()}if(a&2){let e=P_();Qy(`id`,e.timepicker.id)(`color`,e.color)(`isMeridiem`,e.isMeridiem)(`selected`,e._getSelected())(`minTime`,e.timepicker._getMinTime())(`maxTime`,e.timepicker._getMaxTime())(`minuteInterval`,e.minuteInterval)(`orientation`,e.orientation)(`touchUi`,e.timepicker.touchUi),mS(2),b_(e.showToggleModeButton?2:-1),mS(),Qy(`cdkPortalOutlet`,e._actionsPortal)}}var Bn=(()=>{class a{constructor(e,t){if(this._globalModel=e,this._changeDetectorRef=t,this._animationsDisabled=p(Qt,{optional:!0})?.animationsDisabled,this._actionsPortal=null,this._isAnimating=!1,this._animationDone=new Q,this._elementRef=p(ze$1),this._ngZone=p(B),this._handleAnimationEvent=n=>{let s=this._elementRef.nativeElement;n.target!==s||!n.animationName.startsWith(`_mat-timepicker-content`)||(clearTimeout(this._animationFallback),this._isAnimating=n.type===`animationstart`,s.classList.toggle(`mat-timepicker-content-animating`,this._isAnimating),this._isAnimating||this._animationDone.next())},this._closeButtonText=p(ce).closeTimepickerLabel,!this._animationsDisabled){let n=this._elementRef.nativeElement,s=p(Jt$1);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[s.listen(n,`animationstart`,this._handleAnimationEvent),s.listen(n,`animationend`,this._handleAnimationEvent),s.listen(n,`animationcancel`,this._handleAnimationEvent)])}}ngAfterViewInit(){if(this._stateChanges=this.timepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._animationsDisabled){(this._dials||this._inputs)?.focusActiveCell();return}this._animationDone.pipe(Be(1)).subscribe(()=>{(this._dials||this._inputs)?.focusActiveCell()})}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_startExitAnimation(){this._elementRef.nativeElement.classList.add(`mat-timepicker-content-exit`),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}onToggleMode(e){this.mode=e}_getSelected(){return this._model?.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=this._globalModel.clone(),this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}_handleUserSelection(e){let t=e;this._model.add(t)}static{this.ɵfac=function(t){return new(t||a)(se(kt),se(Cr))}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`mat-timepicker-content`]],viewQuery:function(t,n){if(t&1&&oD(Ge,5)(Ke,5),t&2){let s;Kf(s=Xf())&&(n._dials=s.first),Kf(s=Xf())&&(n._inputs=s.first)}},hostAttrs:[1,`mat-timepicker-content`],hostVars:6,hostBindings:function(t,n){t&2&&(X_(n.color?`mat-`+n.color:``),lD(`mat-timepicker-content-touch`,n.timepicker.touchUi)(`mat-timepicker-content-animations-enabled`,!n._animationsDisabled))},exportAs:[`matTimepickerContent`],decls:5,vars:7,consts:[[`cdkTrapFocus`,``,`role`,`dialog`,1,`mat-timepicker-content-container`],[`type`,`button`,`mat-raised-button`,``,1,`mat-timepicker-close-button`,3,`focus`,`blur`,`click`,`color`],[3,`_userSelection`,`id`,`color`,`isMeridiem`,`selected`,`minTime`,`maxTime`,`minuteInterval`],[1,`mat-timepicker-content-actions`],[`mat-icon-button`,``,1,`mat-time-toggle-mode-button`],[3,`cdkPortalOutlet`],[`mat-icon-button`,``,1,`mat-time-toggle-mode-button`,3,`click`],[`xmlns`,`http://www.w3.org/2000/svg`,`height`,`24`,`width`,`24`,`viewBox`,`0 0 24 24`],[`d`,`m15.175 16.625 1.475-1.45-3.6-3.6V7.1h-2.075v5.3ZM12 21.95q-2.075 0-3.887-.787-1.813-.788-3.15-2.125-1.338-1.338-2.125-3.151Q2.05 14.075 2.05 12t.788-3.887q.787-1.813 2.125-3.15Q6.3 3.625 8.113 2.837 9.925 2.05 12 2.05t3.887.787q1.813.788 3.151 2.126 1.337 1.337 2.125 3.15.787 1.812.787 3.887t-.787 3.887q-.788 1.813-2.125 3.151-1.338 1.337-3.151 2.125-1.812.787-3.887.787ZM12 12Zm0 7.8q3.225 0 5.513-2.275Q19.8 15.25 19.8 12q0-3.25-2.287-5.525Q15.225 4.2 12 4.2T6.488 6.475Q4.2 8.75 4.2 12q0 3.25 2.288 5.525Q8.775 19.8 12 19.8Z`],[3,`_userSelection`,`id`,`color`,`isMeridiem`,`selected`,`minTime`,`maxTime`,`minuteInterval`,`orientation`,`touchUi`],[`d`,`M4 19q-.825 0-1.412-.587Q2 17.825 2 17V7q0-.825.588-1.412Q3.175 5 4 5h16q.825 0 1.413.588Q22 6.175 22 7v10q0 .825-.587 1.413Q20.825 19 20 19Zm0-2h16V7H4v10Zm4-1h8v-2H8Zm-3-3h2v-2H5Zm3 0h2v-2H8Zm3 0h2v-2h-2Zm3 0h2v-2h-2Zm3 0h2v-2h-2ZM5 10h2V8H5Zm3 0h2V8H8Zm3 0h2V8h-2Zm3 0h2V8h-2Zm3 0h2V8h-2ZM4 17V7v10Z`]],template:function(t,n){if(t&1&&(Xa$1(0,`div`,0),C_(1,zo,4,9)(2,qo,4,11),Xa$1(3,`button`,1),Cc(`focus`,function(){return n._closeButtonFocused=!0})(`blur`,function(){return n._closeButtonFocused=!1})(`click`,function(){return n.timepicker.close()}),uM(4),qf()()),t&2){let s;vo$1(`aria-modal`,!0)(`aria-labelledby`,n._dialogLabelId??void 0),mS(),b_((s=n.mode)===`input`?1:s===`dial`?2:-1),mS(2),lD(`cdk-visually-hidden`,!n._closeButtonFocused),Qy(`color`,n.color||`primary`),mS(),Jf(` `,n._closeButtonText,` `)}},dependencies:[tu,Kp,Wt,Vt,Ke,Ge,be,ut,xt],styles:[`.mat-timepicker-content{color:var(--%NS%mat-timepicker-content-text-color, var(--%NS%mat-sys-on-surface));background-color:var(--%NS%mat-timepicker-content-background-color, var(--%NS%mat-sys-surface-container-high));border-radius:var(--%NS%mat-timepicker-content-border-radius, var(--%NS%mat-sys-corner-large))}.mat-timepicker-content.mat-timepicker-content-animations-enabled{animation:_mat-timepicker-content-dropdown-enter .12s cubic-bezier(0,0,.2,1)}.mat-timepicker-content-touch.mat-timepicker-content-animations-enabled{animation:_mat-timepicker-content-dialog-enter .15s cubic-bezier(0,0,.2,1)}.mat-timepicker-content-container{position:relative;display:flex;flex-direction:column;padding:1rem 1.5rem}.mat-timepicker-content-actions{display:flex;justify-content:space-between;margin-right:-1rem;margin-top:1.5rem}.mat-time-toggle-mode-button{display:flex;align-items:center;justify-content:center;width:3.25rem;height:3.25rem;margin-left:-.75rem;margin-bottom:-.25rem}.mat-time-toggle-mode-button svg{fill:var(--%NS%mat-timepicker-toggle-mode-button-color, var(--%NS%mat-sys-on-surface-variant))}button.mat-timepicker-close-button{position:absolute;top:100%;left:0;margin-top:.5rem}.mat-timepicker-content-animating button.mat-timepicker-close-button{display:none}.mat-timepicker-content-exit.mat-timepicker-content-animations-enabled{animation:_mat-timepicker-content-exit .1s linear}@keyframes _mat-timepicker-content-dropdown-enter{0%{opacity:0;transform:scaleY(.8)}to{opacity:1;transform:none}}@keyframes _mat-timepicker-content-dialog-enter{0%{opacity:0;transform:scale(.7)}to{opacity:1;transform:none}}@keyframes _mat-timepicker-content-exit{0%{opacity:1}to{opacity:0}}
`],encapsulation:2})}}return a})();var _n=new y(`MAT_DEFAULT_ACITONS`);var Zo=new y(`MAT_TIMEPICKER_DEFAULT_OPTIONS`);var Go=`popup`;var Ko=`dial`;var Qo=`12h`;var Xo=0;var ze=(()=>{class a{get disabled(){return this._disabled===void 0&&this.timepickerInput?this.timepickerInput.disabled:!!this._disabled}set disabled(e){let t=J(e);t!==this._disabled&&(this._disabled=t,this.stateChanges.next(void 0))}get opened(){return this._opened}set opened(e){J(e)?this.open():this.close()}get openAs(){return this._openAs||this._defaults?.openAs||Go}set openAs(e){this._openAs=e}get color(){return this._color||this._defaults?.color||(this.timepickerInput?this.timepickerInput.getThemePalette():void 0)}set color(e){this._color=e}get mode(){return this._mode||this._defaults?.mode||Ko}set mode(e){this._mode=e}get format(){return this._format||this._defaults?.format||Qo}set format(e){this._format=e}get showToggleModeButton(){return this._showToggleModeButton}set showToggleModeButton(e){this._showToggleModeButton=e}get minuteInterval(){return this._minuteInterval||this._defaults?.minuteInterval||1}set minuteInterval(e){this._minuteInterval=Bf(e)}get orientation(){return this._orientation||this._defaults?.orientation||`vertical`}set orientation(e){this._orientation=e}get touchUi(){return this._touchUi}set touchUi(e){this._touchUi=J(e),e&&(this.openAs=`dialog`)}_getMinTime(){return this.timepickerInput&&this.timepickerInput.min}_getMaxTime(){return this.timepickerInput&&this.timepickerInput.max}constructor(e,t,n,s,o,f,v){this._viewContainerRef=e,this._overlay=t,this._injector=n,this._defaultActionsComponent=o,this._model=f,this._defaults=v,this._opened=!1,this._showToggleModeButton=!0,this._touchUi=!1,this.xPosition=`start`,this.yPosition=`below`,this.restoreFocus=!0,this.openedStream=new Se,this.closedStream=new Se,this.id=`mat-timepicker-${Xo++}`,this._actionsPortal=null,this.stateChanges=new Q,this._backdropHarnessClass=`${this.id}-backdrop`,this._focusedElementBeforeOpen=null,this._document=p(ee$1),this._scrollStrategy=s,v&&(this.showToggleModeButton=v.showToggleModeButton!==void 0?v.showToggleModeButton:!0)}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let n=this._overlayRef.getConfig().positionStrategy;n instanceof gt$2&&(this._setConnectedPositions(n),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this.stateChanges.complete()}open(){if(!(this._opened||this.disabled||this._componentRef?.instance._isAnimating)){if(!this.timepickerInput)throw Error(`Attempted to open an MatTimepicker with no associated input.`);this._focusedElementBeforeOpen=sp(),this._openOverlay(),this._opened=!0,this.openedStream.emit()}}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus==`function`,t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:n,location:s}=this._componentRef;n._animationDone.pipe(Be(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||s.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),n._startExitAnimation()}e?setTimeout(t):t()}registerInput(e){if(this.timepickerInput)throw Error(`A MatTimepicker can only be associated with a single input.`);return this.timepickerInput=e,this._model}registerActions(e){if(this._actionsPortal)throw Error(`A MatTimepicker can only be associated with a single actions row.`);this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){let t=new kn(this._defaultActionsComponent);e.timepicker=this,e.color=this.color,e.mode=this.mode,e.isMeridiem=this.format===`12h`,e.showToggleModeButton=this.showToggleModeButton,e.minuteInterval=this.minuteInterval,e.orientation=this.orientation,e._dialogLabelId=this.timepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal||t,!1)}_openOverlay(){this._destroyOverlay();let e=this.openAs===`dialog`,t=new kn(Bn,this._viewContainerRef),n=this._overlayRef=this._overlay.create(new Ji$1({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?`cdk-overlay-dark-backdrop`:`mat-overlay-transparent-backdrop`,this._backdropHarnessClass],direction:`ltr`,scrollStrategy:e?this._overlay.scrollStrategies.block():this._scrollStrategy(),panelClass:`mat-timepicker-${this.openAs}`}));this._getCloseStream(n).subscribe(s=>{s&&s.preventDefault(),this.close()}),n.keydownEvents().subscribe(s=>{let o=s.keyCode;(o===38||o===40||o===33||o===34)&&s.preventDefault()}),this._componentRef=n.attach(t),this._forwardContentValues(this._componentRef.instance),e||bi$1(()=>{n.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return this._overlay.position().global().centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=this._overlay.position().flexibleConnectedTo(this.timepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(`.mat-timepicker-content`).withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition===`end`?`end`:`start`,n=t===`start`?`end`:`start`,s=this.yPosition===`above`?`bottom`:`top`,o=s===`top`?`bottom`:`top`;return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:s},{originX:t,originY:s,overlayX:t,overlayY:o},{originX:n,originY:o,overlayX:n,overlayY:s},{originX:n,originY:s,overlayX:n,overlayY:o}])}_getCloseStream(e){return dI(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(be$1(t=>t.keyCode===27&&!Jp(t)||this.timepickerInput&&Jp(t,`altKey`)&&t.keyCode===38)))}static{this.ɵfac=function(t){return new(t||a)(se(tn$1),se(ir$1),se(pe),se($n),se(_n),se(kt),se(Zo,8))}}static{this.ɵdir=Ot({type:a,inputs:{disabled:`disabled`,opened:`opened`,openAs:`openAs`,color:`color`,mode:`mode`,format:`format`,showToggleModeButton:`showToggleModeButton`,minuteInterval:`minuteInterval`,orientation:`orientation`,touchUi:[2,`touchUi`,`touchUi`,Li$1],xPosition:`xPosition`,yPosition:`yPosition`,restoreFocus:[2,`restoreFocus`,`restoreFocus`,Li$1]},outputs:{openedStream:`opened`,closedStream:`closed`},features:[gt$1]})}}return a})();var P=(()=>{class a extends ze{static{this.ɵfac=(()=>{let e;return function(n){return(e||(e=uv(a)))(n||a)}})()}static{this.ɵcmp=Ri$1({type:a,selectors:[[`mat-timepicker`]],hostAttrs:[1,`mat-timepicker`],hostVars:6,hostBindings:function(t,n){t&2&&lD(`mat-primary`,n.color!==`accent`&&n.color!==`warn`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)},exportAs:[`matTimepicker`],features:[vM([Us,{provide:ze,useExisting:a}]),zy],decls:0,vars:0,template:function(t,n){},encapsulation:2})}}return a})();var bt=class{constructor(i,e){this.target=i,this.targetElement=e,this.value=this.target.value}};var qs={hour:`2-digit`,minute:`2-digit`};var $s=(()=>{class a{get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e)}get disabled(){return!!this._disabled}set disabled(e){let t=J(e),n=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&n.blur&&n.blur()}constructor(e,t){this._elementRef=e,this._timeAdapter=t,this.timeChange=new Se,this.timeInput=new Se,this.stateChanges=new Q,this._onTouched=()=>{},this._validatorOnChange=()=>{},this._cvaOnChange=()=>{},this._valueChangesSubscription=ue.EMPTY,this._lastValueValid=!1,this._parseValidator=()=>this._lastValueValid?null:{matTimepickerParse:{text:this._elementRef.nativeElement.value}},this._minValidator=n=>{let s=this._timeAdapter.getValidTimeOrNull(this._timeAdapter.deserialize(n.value)),o=this._getMinTime();return!o||!s||this._timeAdapter.compareTime(o,s)<=0?null:{matTimepickerMin:{min:o,actual:s}}},this._maxValidator=n=>{let s=this._timeAdapter.getValidTimeOrNull(this._timeAdapter.deserialize(n.value)),o=this._getMaxTime();return!o||!s||this._timeAdapter.compareTime(o,s)>=0?null:{matTimepickerMax:{max:o,actual:s}}}}ngOnChanges(e){er(e,this._timeAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this.stateChanges.complete()}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let n=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(n),this._cvaOnChange(n),this._onTouched(),this._formatValue(n),this.timeInput.emit(new bt(this,this._elementRef.nativeElement)),this.timeChange.emit(new bt(this,this._elementRef.nativeElement))}})}_onInput(e){let t=e.target.value,n=this._lastValueValid,s=this._timeAdapter.parse(t,qs);this._lastValueValid=this._isValidValue(s),s=this._timeAdapter.getValidTimeOrNull(s);let o=!this._timeAdapter.sameTime(s,this.value);!s||o?this._cvaOnChange(s):(t&&!this.value&&this._cvaOnChange(s),n!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(s),this.timeInput.emit(new bt(this,this._elementRef.nativeElement)))}_onChange(){this.timeChange.emit(new bt(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}writeValue(e){this.value=e}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}_assignValueProgrammatically(e){e=this._timeAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._timeAdapter.getValidTimeOrNull(e),this._assignValue(e),this._formatValue(e)}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._timeAdapter.format(e,qs):``}_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator]}_isValidValue(e){return!e||this._timeAdapter.isValid(e)}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}static{this.ɵfac=function(t){return new(t||a)(se(ze$1),se(z,8))}}static{this.ɵdir=Ot({type:a,inputs:{value:`value`,disabled:`disabled`},outputs:{timeChange:`timeChange`,timeInput:`timeInput`},features:[gt$1]})}}return a})();function er(a,i){let e=Object.keys(a);for(let t of e){let{previousValue:n,currentValue:s}=a[t];if(i.isTimeInstance(n)&&i.isTimeInstance(s)){if(!i.sameTime(n,s))return!0}else return!0}return!1}var tr={provide:Ii$1,useExisting:Zs$1(()=>R),multi:!0};var nr={provide:Pn$1,useExisting:Zs$1(()=>R),multi:!0};var R=(()=>{class a extends $s{set matTimepicker(e){e&&(this._timepicker=e,this._registerModel(e.registerInput(this)))}get min(){return this._min}set min(e){let t=this._timeAdapter.getValidTimeOrNull(this._timeAdapter.deserialize(e));this._timeAdapter.sameTime(t,this._min)||(this._min=t,this._validatorOnChange())}get max(){return this._max}set max(e){let t=this._timeAdapter.getValidTimeOrNull(this._timeAdapter.deserialize(e));this._timeAdapter.sameTime(t,this._max)||(this._max=t,this._validatorOnChange())}constructor(e,t,n){super(e,t),this._formField=n,this._validator=go.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getThemePalette(){return this._formField?this._formField.color:void 0}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute(`aria-labelledby`)}_getMinTime(){return this._min}_getMaxTime(){return this._max}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getValueFromModel(e){return e}_shouldHandleChangeEvent(e){return e.source!==this}static{this.ɵfac=function(t){return new(t||a)(se(ze$1),se(z,8),se(dt,8))}}static{this.ɵdir=Ot({type:a,selectors:[[`input`,`matTimepicker`,``]],hostAttrs:[1,`mat-timepicker-input`],hostVars:5,hostBindings:function(t,n){t&1&&Cc(`input`,function(o){return n._onInput(o)})(`change`,function(){return n._onChange()})(`blur`,function(){return n._onBlur()}),t&2&&(eD(`disabled`,n.disabled),vo$1(`aria-haspopup`,n._timepicker?`dialog`:null)(`aria-owns`,n._timepicker?.opened&&n._timepicker.id||null)(`min`,n.min||null)(`max`,n.max||null))},inputs:{matTimepicker:`matTimepicker`,min:`min`,max:`max`},exportAs:[`matTimepickerInput`],features:[vM([tr,nr,{provide:tn,useExisting:a}]),zy]})}}return a})();var Ws=[`*`];function ar(a,i){a&1&&(Wf(0,`div`,0),j_(1),Zf())}var Ys=`.mat-timepicker-actions-container{margin-left:auto}.mat-timepicker-actions{display:flex;gap:.5rem;align-items:center;margin-top:.5rem}
`;var Qn=(()=>{class a{constructor(e){this._timepicker=e}_applySelection(){this._timepicker._applyPendingSelection(),this._timepicker.close()}static{this.ɵfac=function(t){return new(t||a)(se(ze))}}static{this.ɵdir=Ot({type:a,selectors:[[``,`matTimepickerApply`,``]],hostBindings:function(t,n){t&1&&Cc(`click`,function(){return n._applySelection()})}})}}return a})();var Xn=(()=>{class a{constructor(e){this._timepicker=e}close(){this._timepicker.close()}static{this.ɵfac=function(t){return new(t||a)(se(ze))}}static{this.ɵdir=Ot({type:a,selectors:[[``,`matTimepickerCancel`,``]],hostBindings:function(t,n){t&1&&Cc(`click`,function(){return n.close()})}})}}return a})();var Zs=(()=>{class a{constructor(e,t){this._timepicker=e,this._viewContainerRef=t}ngAfterViewInit(){this._portal=new Yi$1(this._template,this._viewContainerRef),this._timepicker.registerActions(this._portal)}ngOnDestroy(){this._timepicker.removeActions(this._portal),this._portal&&this._portal.isAttached&&this._portal?.detach()}static{this.ɵfac=function(t){return new(t||a)(se(ze),se(tn$1))}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`mat-timepicker-actions`]],viewQuery:function(t,n){if(t&1&&oD(ao$1,5),t&2){let s;Kf(s=Xf())&&(n._template=s.first)}},hostAttrs:[1,`mat-timepicker-actions-container`],ngContentSelectors:Ws,decls:1,vars:0,consts:[[1,`mat-timepicker-actions`]],template:function(t,n){t&1&&(F_(),Wy(0,ar,2,0,`ng-template`))},styles:[Ys],encapsulation:2})}}return a})();var Jn=(()=>{class a{constructor(e,t){this._timepicker=e,this._intl=t,this.color=te(void 0)}ngOnInit(){this.color.set(this._timepicker.color)}static{this.ɵfac=function(t){return new(t||a)(se(ze),se(ce))}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`mat-timepicker-default-actions`]],hostAttrs:[1,`mat-timepicker-actions-container`],ngContentSelectors:Ws,decls:6,vars:4,consts:[[1,`mat-timepicker-actions`],[`mat-button`,``,`matTimepickerCancel`,``,3,`color`],[`mat-button`,``,`matTimepickerApply`,``,3,`color`]],template:function(t,n){t&1&&(F_(),Xa$1(0,`div`,0),j_(1),Xa$1(2,`button`,1),uM(3),qf(),Xa$1(4,`button`,2),uM(5),qf()()),t&2&&(mS(2),Qy(`color`,n.color()),mS(),Jf(` `,n._intl.cancelButton,` `),mS(),Qy(`color`,n.color()),mS(),Jf(` `,n._intl.okButton,` `))},dependencies:[be,ut,Qn,Xn],styles:[Ys],encapsulation:2})}}return a})();var Gs=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵmod=nn$1({type:a})}static{this.ɵinj=_t({providers:[ce,Ps,{provide:_n,useValue:Jn},{provide:qn,useValue:{color:`unthemed`}}],imports:[Zf$1,tu,Wt,I,Bn,Ke,Ge,gn,fn,gt,Jn,Bo$1]})}}return a})();var Ks=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-basic`]],standalone:!1,decls:9,vars:2,consts:[[`timepicker`,``],[`type`,`text`,`matInput`,``,3,`matTimepicker`],[`matSuffix`,``,3,`for`]],template:function(t,n){if(t&1&&(Xa$1(0,`mat-form-field`)(1,`mat-label`),uM(2,`Choose a time`),qf(),Ic(3,`input`,1)(4,`mat-timepicker-toggle`,2)(5,`mat-timepicker`,null,0),Xa$1(7,`mat-hint`),uM(8,`hh:mm`),qf()()),t&2){let s=V_(6);mS(3),Qy(`matTimepicker`,s),mS(),Qy(`for`,s)}},dependencies:[M,T,ee,O,w,P,I,R],encapsulation:2})}}return a})();var Qs=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-custom-toggle-icon`]],standalone:!1,decls:9,vars:2,consts:[[`timepicker`,``],[`type`,`text`,`matInput`,``,3,`matTimepicker`],[`matSuffix`,``,3,`for`],[`matTimepickerToggleIcon`,``]],template:function(t,n){if(t&1&&(Xa$1(0,`mat-form-field`)(1,`mat-label`),uM(2,`Choose a time`),qf(),Ic(3,`input`,1),Xa$1(4,`mat-timepicker-toggle`,2)(5,`mat-icon`,3),uM(6,`punch_clock`),qf()(),Ic(7,`mat-timepicker`,null,0),qf()),t&2){let s=V_(8);mS(3),Qy(`matTimepicker`,s),mS(),Qy(`for`,s)}},dependencies:[M,T,O,w,Es,P,I,Wn,R],encapsulation:2})}}return a})();var Xs=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-input-mode`]],standalone:!1,decls:9,vars:2,consts:[[`timepicker`,``],[`type`,`text`,`matInput`,``,3,`matTimepicker`],[`matSuffix`,``,3,`for`],[`mode`,`input`]],template:function(t,n){if(t&1&&(Xa$1(0,`mat-form-field`)(1,`mat-label`),uM(2,`Choose a time`),qf(),Ic(3,`input`,1)(4,`mat-timepicker-toggle`,2)(5,`mat-timepicker`,3,0),Xa$1(7,`mat-hint`),uM(8,`hh:mm`),qf()()),t&2){let s=V_(6);mS(3),Qy(`matTimepicker`,s),mS(),Qy(`for`,s)}},dependencies:[M,T,ee,O,w,P,I,R],encapsulation:2})}}return a})();var Js=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-format`]],standalone:!1,decls:9,vars:2,consts:[[`timepicker`,``],[`type`,`text`,`matInput`,``,3,`matTimepicker`],[`matSuffix`,``,3,`for`],[`format`,`24h`]],template:function(t,n){if(t&1&&(Xa$1(0,`mat-form-field`)(1,`mat-label`),uM(2,`Choose a time`),qf(),Ic(3,`input`,1)(4,`mat-timepicker-toggle`,2)(5,`mat-timepicker`,3,0),Xa$1(7,`mat-hint`),uM(8,`hh:mm`),qf()()),t&2){let s=V_(6);mS(3),Qy(`matTimepicker`,s),mS(),Qy(`for`,s)}},dependencies:[M,T,ee,O,w,P,I,R],encapsulation:2})}}return a})();var ei=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-dialog`]],standalone:!1,decls:9,vars:2,consts:[[`timepicker`,``],[`type`,`text`,`matInput`,``,3,`matTimepicker`],[`matSuffix`,``,3,`for`],[`openAs`,`dialog`]],template:function(t,n){if(t&1&&(Xa$1(0,`mat-form-field`)(1,`mat-label`),uM(2,`Choose a time`),qf(),Ic(3,`input`,1)(4,`mat-timepicker-toggle`,2)(5,`mat-timepicker`,3,0),Xa$1(7,`mat-hint`),uM(8,`hh:mm`),qf()()),t&2){let s=V_(6);mS(3),Qy(`matTimepicker`,s),mS(),Qy(`for`,s)}},dependencies:[M,T,ee,O,w,P,I,R],encapsulation:2})}}return a})();var ti=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-color-palette`]],standalone:!1,decls:14,vars:4,consts:[[`accentTimepicker`,``],[`customTimepicker`,``],[`color`,`accent`],[`type`,`text`,`matInput`,``,3,`matTimepicker`],[`matSuffix`,``,3,`for`],[`color`,`warn`],[`color`,`primary`]],template:function(t,n){if(t&1&&(Xa$1(0,`mat-form-field`,2)(1,`mat-label`),uM(2,`Inherited color`),qf(),Ic(3,`input`,3)(4,`mat-timepicker-toggle`,4)(5,`mat-timepicker`,null,0),qf(),Xa$1(7,`mat-form-field`,5)(8,`mat-label`),uM(9,`Custom color`),qf(),Ic(10,`input`,3)(11,`mat-timepicker-toggle`,4)(12,`mat-timepicker`,6,1),qf()),t&2){let s=V_(6),o=V_(13);mS(3),Qy(`matTimepicker`,s),mS(),Qy(`for`,s),mS(6),Qy(`matTimepicker`,o),mS(),Qy(`for`,o)}},dependencies:[M,T,O,w,P,I,R],styles:[`.mat-mdc-form-field[_ngcontent-%COMP%]{display:block;width:max-content}`]})}}return a})();var ni=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-horizontal`]],standalone:!1,decls:7,vars:2,consts:[[`timepicker`,``],[`type`,`text`,`matInput`,``,3,`matTimepicker`],[`matSuffix`,``,3,`for`],[`orientation`,`horizontal`]],template:function(t,n){if(t&1&&(Xa$1(0,`mat-form-field`)(1,`mat-label`),uM(2,`Choose a time`),qf(),Ic(3,`input`,1)(4,`mat-timepicker-toggle`,2)(5,`mat-timepicker`,3,0),qf()),t&2){let s=V_(6);mS(3),Qy(`matTimepicker`,s),mS(),Qy(`for`,s)}},dependencies:[M,T,O,w,P,I,R],encapsulation:2})}}return a})();var ai=(()=>{class a{constructor(){this.now=new Date,this.min=new Date(2023,11,1,4,23),this.max=new Date(2023,11,1,20,45)}static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-validation`]],standalone:!1,decls:7,vars:4,consts:[[`timepicker`,``],[`type`,`text`,`matInput`,``,3,`matTimepicker`,`min`,`max`],[`matSuffix`,``,3,`for`]],template:function(t,n){if(t&1&&(Xa$1(0,`mat-form-field`)(1,`mat-label`),uM(2,`Choose a time`),qf(),Ic(3,`input`,1)(4,`mat-timepicker-toggle`,2)(5,`mat-timepicker`,null,0),qf()),t&2){let s=V_(6);mS(3),Qy(`matTimepicker`,s)(`min`,n.min)(`max`,n.max),mS(),Qy(`for`,s)}},dependencies:[M,T,O,w,P,I,R],encapsulation:2})}}return a})();function ir(a,i){if(a&1&&(Xa$1(0,`div`),uM(1),qf()),a&2){let e=i.$implicit;mS(),mD(e)}}var si=(()=>{class a{constructor(){this.events=[]}addEvent(e,t){this.events.push(`${e}: ${t.value}`)}static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-events`]],standalone:!1,decls:9,vars:2,consts:[[`timepicker`,``],[`type`,`text`,`matInput`,``,3,`timeInput`,`timeChange`,`matTimepicker`],[`matSuffix`,``,3,`for`]],template:function(t,n){if(t&1&&(Xa$1(0,`mat-form-field`)(1,`mat-label`),uM(2,`Input & change events`),qf(),Xa$1(3,`input`,1),Cc(`timeInput`,function(o){return n.addEvent(`input`,o)})(`timeChange`,function(o){return n.addEvent(`change`,o)}),qf(),Ic(4,`mat-timepicker-toggle`,2)(5,`mat-timepicker`,null,0),qf(),T_(7,ir,2,1,`div`,null,S_)),t&2){let s=V_(6);mS(3),Qy(`matTimepicker`,s),mS(),Qy(`for`,s),mS(3),__(n.events)}},dependencies:[M,T,O,w,P,I,R],encapsulation:2})}}return a})();var ii=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-disabling`]],standalone:!1,decls:21,vars:6,consts:[[`timepicker1`,``],[`timepicker2`,``],[`timepicker3`,``],[`type`,`text`,`matInput`,``,`disabled`,``,3,`matTimepicker`],[`matSuffix`,``,3,`for`],[`type`,`text`,`matInput`,``,3,`matTimepicker`],[`matSuffix`,``,`disabled`,``,3,`for`],[`disabled`,`false`]],template:function(t,n){if(t&1&&(Xa$1(0,`mat-form-field`)(1,`mat-label`),uM(2,`Completely disabled`),qf(),Ic(3,`input`,3)(4,`mat-timepicker-toggle`,4)(5,`mat-timepicker`,null,0),qf(),Xa$1(7,`mat-form-field`)(8,`mat-label`),uM(9,`Popup disabled`),qf(),Ic(10,`input`,5)(11,`mat-timepicker-toggle`,6)(12,`mat-timepicker`,null,1),qf(),Xa$1(14,`mat-form-field`)(15,`mat-label`),uM(16,`Input disabled`),qf(),Ic(17,`input`,3)(18,`mat-timepicker-toggle`,4)(19,`mat-timepicker`,7,2),qf()),t&2){let s=V_(6),o=V_(13),f=V_(20);mS(3),Qy(`matTimepicker`,s),mS(),Qy(`for`,s),mS(6),Qy(`matTimepicker`,o),mS(),Qy(`for`,o),mS(6),Qy(`matTimepicker`,f),mS(),Qy(`for`,f)}},dependencies:[M,T,O,w,P,I,R],styles:[`.mat-mdc-form-field[_ngcontent-%COMP%]{display:block;width:max-content}`]})}}return a})();var oi=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-action-buttons`]],standalone:!1,decls:12,vars:2,consts:[[`timepicker`,``],[`type`,`text`,`matInput`,``,3,`matTimepicker`],[`matSuffix`,``,3,`for`],[`matTimepickerCancel`,``],[`matTimepickerApply`,``]],template:function(t,n){if(t&1&&(Xa$1(0,`mat-form-field`)(1,`mat-label`),uM(2,`Choose a time`),qf(),Ic(3,`input`,1)(4,`mat-timepicker-toggle`,2),Xa$1(5,`mat-timepicker`,null,0)(7,`mat-timepicker-actions`)(8,`button`,3),uM(9,`Cancel`),qf(),Xa$1(10,`button`,4),uM(11,`Apply`),qf()()()()),t&2){let s=V_(6);mS(3),Qy(`matTimepicker`,s),mS(),Qy(`for`,s)}},dependencies:[M,T,O,w,P,I,R,Zs,Qn,Xn],encapsulation:2})}}return a})();var ri=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-manually-toggle`]],standalone:!1,decls:11,vars:2,consts:[[`timepicker`,``],[`type`,`text`,`matInput`,``,3,`matTimepicker`],[`matSuffix`,``,3,`for`],[`mat-raised-button`,``,3,`click`]],template:function(t,n){if(t&1){let s=O_();Xa$1(0,`mat-form-field`)(1,`mat-label`),uM(2,`Choose a time`),qf(),Ic(3,`input`,1)(4,`mat-timepicker-toggle`,2)(5,`mat-timepicker`,null,0),Xa$1(7,`mat-hint`),uM(8,`hh:mm`),qf()(),Xa$1(9,`button`,3),Cc(`click`,function(){Vg(s);return Hg(V_(6).open())}),uM(10,`Open`),qf()}if(t&2){let s=V_(6);mS(3),Qy(`matTimepicker`,s),mS(),Qy(`for`,s)}},dependencies:[M,T,ee,O,w,ut,P,I,R],styles:[`.mat-mdc-form-field[_ngcontent-%COMP%]{margin-right:1rem}`]})}}return a})();var li=(()=>{class a{constructor(){this.date=new Date}static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-inline`]],standalone:!1,decls:5,vars:3,consts:[[3,`selectedChange`,`selected`]],template:function(t,n){t&1&&(Xa$1(0,`mat-clock-dials`,0),yD(`selectedChange`,function(o){return hM(n.date,o)||(n.date=o),o}),qf(),Ic(1,`mat-divider`),Xa$1(2,`mat-time-inputs`,0),yD(`selectedChange`,function(o){return hM(n.date,o)||(n.date=o),o}),qf(),Xa$1(3,`span`),uM(4),qf()),t&2&&(vD(`selected`,n.date),mS(2),vD(`selected`,n.date),mS(2),mD(n.date))},dependencies:[pn,Ke,Ge],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}`]})}}return a})();var ci=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`docs-touch-ui`]],standalone:!1,decls:9,vars:2,consts:[[`timepicker`,``],[`type`,`text`,`matInput`,``,3,`matTimepicker`],[`matSuffix`,``,3,`for`],[`touchUi`,``]],template:function(t,n){if(t&1&&(Xa$1(0,`mat-form-field`)(1,`mat-label`),uM(2,`Choose a time`),qf(),Ic(3,`input`,1)(4,`mat-timepicker-toggle`,2)(5,`mat-timepicker`,3,0),Xa$1(7,`mat-hint`),uM(8,`hh:mm`),qf()()),t&2){let s=V_(6);mS(3),Qy(`matTimepicker`,s),mS(),Qy(`for`,s)}},dependencies:[M,T,ee,O,w,P,I,R],encapsulation:2})}}return a})();var En=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵmod=nn$1({type:a})}static{this.ɵinj=_t({providers:[{provide:en,useValue:{appearance:`fill`}}],imports:[Eh,g2,Ze,an,Fs,be,mn,Gs,Vs]})}}return a})();var Nt={title:`Usage`,mdFile:`./index.md`,order:2,imports:[En],demos:{BasicComponent:Ks,CustomToggleIconComponent:Qs,InputModeComponent:Xs,FormatComponent:Js,DialogComponent:ei,ColorPaletteComponent:ti,HorizontalComponent:ni,ValidationComponent:ai,EventsComponent:si,DisablingComponent:ii,ActionButtonsComponent:oi,ManuallyToggleComponent:ri,InlineComponent:li,TouchUiComponent:ci}};var di=[];var pi={BasicComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-basic'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './basic.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> BasicComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Choose a time</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-hint</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">hh:mm</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-hint</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}],CustomToggleIconComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-custom-toggle-icon'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './custom-toggle-icon.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> CustomToggleIconComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Choose a time</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">    &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-icon</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matTimepickerToggleIcon</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">punch_clock</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-icon</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}],InputModeComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-input-mode'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './input-mode.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> InputModeComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Choose a time</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> mode</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"input"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-hint</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">hh:mm</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-hint</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}],FormatComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-format'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './format.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> FormatComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Choose a time</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> format</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"24h"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-hint</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">hh:mm</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-hint</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}],DialogComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-dialog'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './dialog.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> DialogComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Choose a time</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> openAs</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"dialog"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-hint</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">hh:mm</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-hint</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}],ColorPaletteComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-color-palette'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './color-palette.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  styles</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    .mat-mdc-form-field</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">      display</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#F29668;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> block</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">      width</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#F29668;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> max-content</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    }</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">  \`</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> ColorPaletteComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> color</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"accent"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Inherited color</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"accentTimepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    matSuffix</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"accentTimepicker"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  >&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">accentTimepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> color</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"warn"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Custom color</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"customTimepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    matSuffix</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"customTimepicker"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  >&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">customTimepicker</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> color</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"primary"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}],HorizontalComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-horizontal'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './horizontal.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> HorizontalComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Choose a time</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> orientation</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"horizontal"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}],ValidationComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-validation'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './validation.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> ValidationComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  now</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> new</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> Date</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  min</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> new</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> Date</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde">2023</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 11</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 1</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 4</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 23</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  max</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> new</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> Date</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde">2023</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 11</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 1</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 20</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 45</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Choose a time</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    matInput</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    [min]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"min"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    [max]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"max"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}],EventsComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { <a href="api/classes/api/MatTimepickerInputEvent" class="ng-doc-code-anchor ngde">MatTimepickerInputEvent</a> } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'mat-timepicker'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-events'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './events.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> EventsComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  events</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">[] </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> []</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">  addEvent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">type</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> string</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde"> event</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> <a href="api/classes/api/MatTimepickerInputEvent" class="ng-doc-code-anchor ngde">MatTimepickerInputEvent</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">Date</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">>)</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde"> void</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">    this</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">events</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">push</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">\`</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">\${</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">type</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">}</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">: </span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">\${</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">event</span><span style="color:#032F62;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">value</span><span style="color:#032F62;--shiki-dark:#FF8F40" class="ngde">}</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">\`</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Input &#x26; change events</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    matInput</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    (timeInput)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"addEvent('input', $event)"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    (timeChange)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"addEvent('change', $event)"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">@for</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (event </span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">of</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> events; track event) {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">{{ event }}</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">div</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre>`}],DisablingComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-disabling'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './disabling.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  styles</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    .mat-mdc-form-field</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">      display</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#F29668;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> block</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">      width</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#F29668;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> max-content</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    }</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">  \`</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> DisablingComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Completely disabled</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> disabled</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker1"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker1"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker1</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Popup disabled</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker2"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    matSuffix</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker2"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    disabled</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  >&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker2</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Input disabled</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> disabled</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker3"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker3"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker3</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> disabled</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"false"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}],ActionButtonsComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-action-buttons'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './action-buttons.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> ActionButtonsComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Choose a time</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">    &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-actions</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">      &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matTimepickerCancel</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Cancel</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">      &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matTimepickerApply</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Apply</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">    &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-actions</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}],ManuallyToggleComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-manually-toggle'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './manually-toggle.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  styles</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    .mat-mdc-form-field</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">      margin-right</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 1</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">rem</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    }</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">  \`</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> ManuallyToggleComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Choose a time</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-hint</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">hh:mm</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-hint</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> mat-raised-button</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> (click)</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker.open()"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Open</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">button</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}],InlineComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-inline'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './inline.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  styles</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> \`</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">    :host</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">      display</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#F29668;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> flex</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">      flex-direction</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#F29668;font-style:inherit;--shiki-dark-font-style:italic" class="ngde"> column</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#39BAE6" class="ngde">      gap</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> 1</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">rem</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    }</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">  \`</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> InlineComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#BFBDB6" class="ngde">  date</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> =</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> new</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> Date</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">()</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-clock-dials</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [(selected)]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"date"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-clock-dials</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-divider</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-time-inputs</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [(selected)]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"date"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-time-inputs</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">span</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">{{ date }}</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">span</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}],TouchUiComponent:[{title:`TypeScript`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">import</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> { ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> Component } </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">from</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> '@angular/core'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">Component</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  selector</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'docs-touch-ui'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  templateUrl</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> './touch-ui.component.html'</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  changeDetection</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> ChangeDetectionStrategy</span><span style="color:#24292E;--shiki-dark:#F29668" class="ngde">.</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">OnPush</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  standalone</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#D2A6FF" class="ngde"> false</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> TouchUiComponent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`},{title:`HTML`,code:`<pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-angular-html"><span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Choose a time</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-label</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">input</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> type</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matInput</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [matTimepicker]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> matSuffix</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> [for]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker-toggle</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> #</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">timepicker</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"> touchUi</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">>&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-timepicker</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">  &#x3C;</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-hint</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">hh:mm</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-hint</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#39BAE6" class="ngde">mat-form-field</span><span style="color:#24292E;--shiki-dark:#39BAE680" class="ngde">></span></span></code></pre>`}]};var cr=`<h2 id="basic" href="usage" headinglink="true" class="ngde">Basic<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="basic"></ng-doc-heading-anchor></h2><p class="ngde">The timepicker allows users to enter a time either through text input, or by choosing a time from the dial or by inputs.</p><p class="ngde">First, it will be checked if any time is selected, if so it will open pop-up with that time. Otherwise it will open pop-up with the current time.</p><ng-doc-demo componentname="BasicComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><h2 id="connecting-a-timepicker-to-an-input" href="usage" headinglink="true" class="ngde">Connecting a timepicker to an input<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="connecting-a-timepicker-to-an-input"></ng-doc-heading-anchor></h2><p class="ngde">A timepicker is composed of a text input and a pop-up with <code class="ngde">dial</code> or <code class="ngde">inputs</code> view, connected via the <code class="ngde ng-doc-code-with-link"><a href="api/classes/api/MatTimepickerInput" class="ng-doc-code-anchor ngde">matTimepicker</a></code> property on the text input.</p><p class="ngde">There is also an optional timepicker toggle button that gives the user an easy way to open the timepicker pop-up.</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">input type</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> matInput [matTimepicker]</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> /></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">mat</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">timepicker</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">toggle matSuffix [for]</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;/</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">mat</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">-</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">-</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">toggle</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">mat</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">timepicker #timepicker</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;/</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">mat</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">-</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span></span></code></pre><p class="ngde">This works exactly the same with an input that is part of an <code class="ngde">&#x3C;mat-form-field></code> and the toggle can easily be used as a prefix or suffix on the Material input:</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">mat</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">form</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">field</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">  &#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">mat</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">label</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">Choose a time</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;/</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">mat</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">label</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">  &#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">input type</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"text"</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> matInput [matTimepicker]</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde"> /></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">  &#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">mat</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">timepicker</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">toggle matSuffix [for]</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">=</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde">"timepicker"</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;/</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">mat</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">-</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">-</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">toggle</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">  &#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">mat</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">timepicker #timepicker</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">&#x3C;/</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">mat</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">-</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">timepicker</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">  &#x3C;</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">mat</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">hint</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">hh</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">mm</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;/</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">mat</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">hint</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">&#x3C;/</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">mat</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">form</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">-</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">field</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">></span></span></code></pre><p class="ngde">If you want to customize the icon that is rendered inside the mat-timepicker-toggle, you can do so by using the matTimepickerToggleIcon directive:</p><ng-doc-demo componentname="CustomToggleIconComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><h2 id="starting-view" href="usage" headinglink="true" class="ngde">Starting view<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="starting-view"></ng-doc-heading-anchor></h2><p class="ngde">The <code class="ngde">mode</code> property of <code class="ngde ng-doc-code-with-link">&#x3C;<a href="api/classes/api/MatTimepicker" class="ng-doc-code-anchor ngde">mat-timepicker</a>></code> can be used to set the view that will show up when the pop-up first opens. It can be set to <code class="ngde">dial</code> (default) and <code class="ngde">input</code>.</p><ng-doc-demo componentname="InputModeComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><p class="ngde">The are two time formats <code class="ngde">12h</code> and <code class="ngde">24h</code>. The <code class="ngde">format</code> property of <code class="ngde ng-doc-code-with-link">&#x3C;<a href="api/classes/api/MatTimepicker" class="ng-doc-code-anchor ngde">mat-timepicker</a>></code> is used to set the format for the timepicker. <code class="ngde">12h</code> is used by default.</p><ng-doc-demo componentname="FormatComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><p class="ngde">By default, the timepicker is opened as pop-up. Use <code class="ngde">openAs</code> property with <code class="ngde">dialog</code> value to open it as material dialog.</p><ng-doc-demo componentname="DialogComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><p class="ngde">There is an additional view for <code class="ngde">dial</code> mode. You can use <code class="ngde">orientation</code> property for <code class="ngde ng-doc-code-with-link">&#x3C;<a href="api/classes/api/MatTimepicker" class="ng-doc-code-anchor ngde">mat-timepicker</a>></code> to set elements horizontally. It works for <code class="ngde">dial</code> mode only.</p><ng-doc-demo componentname="HorizontalComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><h2 id="setting-the-selected-time" href="usage" headinglink="true" class="ngde">Setting the selected time<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="setting-the-selected-time"></ng-doc-heading-anchor></h2><p class="ngde">The type of values that the timepicker expects depends on the type of TimeAdapter provided in your application. The <code class="ngde ng-doc-code-with-link"><a href="api/classes/api/MatNativeDateTimeModule" class="ng-doc-code-anchor ngde">MatNativeDateTimeModule</a></code>, for example, works directly with plain JavaScript Date objects. This use of the adapter pattern allows the timepicker component to work with any arbitrary time representation with a custom <code class="ngde ng-doc-code-with-link"><a href="api/classes/api/TimeAdapter" class="ng-doc-code-anchor ngde">TimeAdapter</a></code>.</p><h2 id="changing-colors" href="usage" headinglink="true" class="ngde">Changing colors<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="changing-colors"></ng-doc-heading-anchor></h2><p class="ngde">The timepicker will automatically inherit the color palette (<code class="ngde">primary</code>, <code class="ngde">accent</code>, or <code class="ngde">warn</code>) from the <code class="ngde">mat-form-field</code> it is attached to. If you would like to specify a different palette for the timepicker you can do so by setting the color property on <code class="ngde ng-doc-code-with-link"><a href="api/classes/api/MatTimepicker" class="ng-doc-code-anchor ngde">mat-timepicker</a></code>.</p><ng-doc-demo componentname="ColorPaletteComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><h2 id="time-validation" href="usage" headinglink="true" class="ngde">Time validation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="time-validation"></ng-doc-heading-anchor></h2><p class="ngde">There are two properties to add time validation to the timepicker input - <code class="ngde">min</code> and <code class="ngde">max</code>. In addition to enforcing validation on the input, these properties will disable all hours and minutes on the timepicker before or after the respective values and prevent the user from choosing the time past the hours or minutes containing the min or max time.</p><ng-doc-demo componentname="ValidationComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><p class="ngde">There are different errors that can be checked:</p><ul class="ngde"><li class="ngde">a value that violates the <code class="ngde">min</code> property will have a <code class="ngde">matTimepickerMin</code> error</li><li class="ngde">a value that violates the <code class="ngde">max</code> property will have a <code class="ngde">matTimepickerMax</code> error</li><li class="ngde">a value that can not be parsed will have a <code class="ngde">matTimepickerParse</code> error</li></ul><h2 id="input-and-change-events" href="usage" headinglink="true" class="ngde">Input and change events<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="input-and-change-events"></ng-doc-heading-anchor></h2><p class="ngde">The input's native <code class="ngde">(input)</code> and <code class="ngde">(change)</code> events will only trigger due to user interaction with the input element; they will not fire when the user selects a time from the timepicker popup. Therefore, the timepicker input also has support for <code class="ngde">(timeInput)</code> and <code class="ngde">(timeChange)</code> events. These trigger when the user interacts with either the input or the popup.</p><p class="ngde">The <code class="ngde">(timeInput)</code> event will fire whenever the value changes due to the user typing or selecting a time from the timepicker. The <code class="ngde">(timeChange)</code> event will fire whenever the user finishes typing input (on <code class="ngde">&#x3C;input></code> blur), or when the user chooses a time from the timepicker.</p><ng-doc-demo componentname="EventsComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><h2 id="disabling-parts-of-the-timepicker" href="usage" headinglink="true" class="ngde">Disabling parts of the timepicker<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="disabling-parts-of-the-timepicker"></ng-doc-heading-anchor></h2><p class="ngde">As with any standard <code class="ngde">&#x3C;input></code>, it is possible to disable the timepicker input by adding the disabled property. By default, the <code class="ngde ng-doc-code-with-link">&#x3C;<a href="api/classes/api/MatTimepicker" class="ng-doc-code-anchor ngde">mat-timepicker</a>></code> and <code class="ngde ng-doc-code-with-link">&#x3C;<a href="api/classes/api/MatTimepickerToggle" class="ng-doc-code-anchor ngde">mat-timepicker-toggle</a>></code> will inherit their disabled state from the <code class="ngde">&#x3C;input></code>, but this can be overridden by setting the disabled property on the timepicker or toggle elements. This can be useful if you want to disable text input but allow selection via the timepicker or vice-versa.</p><ng-doc-demo componentname="DisablingComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><h2 id="confirmation-action-buttons" href="usage" headinglink="true" class="ngde">Confirmation action buttons<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="confirmation-action-buttons"></ng-doc-heading-anchor></h2><p class="ngde">By default, the timepicker uses "OK" and "Cancel" buttons. If you want to change default buttons, you can <code class="ngde ng-doc-code-with-link">&#x3C;<a href="api/classes/api/MatTimepickerActions" class="ng-doc-code-anchor ngde">mat-timepicker-actions</a>></code> element inside <code class="ngde ng-doc-code-with-link">&#x3C;<a href="api/classes/api/MatTimepicker" class="ng-doc-code-anchor ngde">mat-timepicker</a>></code> with with own buttons marked with the <code class="ngde ng-doc-code-with-link"><a href="api/classes/api/MatTimepickerCancel" class="ng-doc-code-anchor ngde">matTimepickerCancel</a></code> and <code class="ngde ng-doc-code-with-link"><a href="api/classes/api/MatTimepickerApply" class="ng-doc-code-anchor ngde">matTimepickerApply</a></code> attributes respectively. Doing so will replace default buttons by yours.</p><ng-doc-demo componentname="ActionButtonsComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><h2 id="touch-ui-mode" href="usage" headinglink="true" class="ngde">Touch UI mode<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="touch-ui-mode"></ng-doc-heading-anchor></h2><p class="ngde">The timepicker normally opens as a popup under the input. However this is not ideal for touch devices that don't have as much screen real estate and need bigger click targets. For this reason <code class="ngde ng-doc-code-with-link">&#x3C;<a href="api/classes/api/MatTimepicker" class="ng-doc-code-anchor ngde">mat-timepicker</a>></code> has a touchUi property that can be set to true in order to enable a more touch friendly UI where the timepicker opens in a dialog and has a larger elements. Applied for dial mode only.</p><ng-doc-demo componentname="TouchUiComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><h2 id="manually-open-and-close-the-timepicker" href="usage" headinglink="true" class="ngde">Manually open and close the timepicker<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="manually-open-and-close-the-timepicker"></ng-doc-heading-anchor></h2><p class="ngde">The timepicker popup can be programmatically controlled using the <code class="ngde">open</code> and <code class="ngde">close</code> methods on the <code class="ngde ng-doc-code-with-link">&#x3C;<a href="api/classes/api/MatTimepicker" class="ng-doc-code-anchor ngde">mat-timepicker</a>></code>. It also has an opened property that reflects the status of the popup.</p><ng-doc-demo componentname="ManuallyToggleComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><h2 id="using-inline-style" href="usage" headinglink="true" class="ngde">Using inline style<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="using-inline-style"></ng-doc-heading-anchor></h2><p class="ngde">If you want to allow the user to select a time from the timepicker that is inlined on the page rather than contained in a popup, you can use <code class="ngde ng-doc-code-with-link">&#x3C;<a href="api/classes/api/MatClockDials" class="ng-doc-code-anchor ngde">mat-clock-dials</a>></code> or <code class="ngde ng-doc-code-with-link">&#x3C;<a href="api/classes/api/MatTimeInputs" class="ng-doc-code-anchor ngde">mat-time-inputs</a>></code> directly.</p><ng-doc-demo componentname="InlineComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><h2 id="inputs-keydown-handler" href="usage" headinglink="true" class="ngde">Inputs keydown handler<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="inputs-keydown-handler"></ng-doc-heading-anchor></h2><p class="ngde">The timepicker has <code class="ngde">input</code> mode where user can type time. User can type only numbers and some special chars like Backspace, Delete, etc. This is a bit tricky because some other language keyboards (e.g. French) use a key combination to type numbers.</p><p class="ngde">So, this is why there is a <code class="ngde ng-doc-code-with-link"><a href="api/variables/api/MAT_TIMEPICKER_INPUTS_KEYDOWN_HANDLER" class="ng-doc-code-anchor ngde">MAT_TIMEPICKER_INPUTS_KEYDOWN_HANDLER</a></code>. You can provide you implementation how you will handle it.</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">{</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">  provide</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> <a href="api/variables/api/MAT_TIMEPICKER_INPUTS_KEYDOWN_HANDLER" class="ng-doc-code-anchor ngde">MAT_TIMEPICKER_INPUTS_KEYDOWN_HANDLER</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde">  useValue</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> (</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">event</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> KeyboardEvent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">    // your implementation</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  }</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span></span></code></pre><p class="ngde">or use function</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde"><a href="api/functions/api/provideMatTimepickerInputsKeydownHandler" class="ng-doc-code-anchor ngde">provideMatTimepickerInputsKeydownHandler</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">((</span><span style="color:#E36209;--shiki-dark:#D2A6FF" class="ngde">event</span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> KeyboardEvent</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">) </span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">=></span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#ACB6BF8C;font-style:inherit;--shiki-dark-font-style:italic" class="ngde">  // your implementation</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">)</span></span></code></pre><h2 id="internationalization" href="usage" headinglink="true" class="ngde">Internationalization<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="internationalization"></ng-doc-heading-anchor></h2><p class="ngde">By default, the <code class="ngde ng-doc-code-with-link"><a href="api/variables/api/MAT_TIME_LOCALE" class="ng-doc-code-anchor ngde">MAT_TIME_LOCALE</a></code> injection token will use the existing <code class="ngde">LOCALE_ID</code> locale code from <code class="ngde">@angular/core</code>. If you want to override it, you can provide a new value for the <code class="ngde ng-doc-code-with-link"><a href="api/variables/api/MAT_TIME_LOCALE" class="ng-doc-code-anchor ngde">MAT_TIME_LOCALE</a></code> token:</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">NgModule</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  providers</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    {provide</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#005CC5;--shiki-dark:#E6B673" class="ngde"> <a href="api/variables/api/MAT_TIME_LOCALE" class="ng-doc-code-anchor ngde">MAT_TIME_LOCALE</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> useValue</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#032F62;--shiki-dark:#AAD94C" class="ngde"> 'en-GB'</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  ]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> MyApp</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre><p class="ngde">It's also possible to set the locale at runtime using the <code class="ngde">setLocale</code> method of the <code class="ngde ng-doc-code-with-link"><a href="api/classes/api/TimeAdapter" class="ng-doc-code-anchor ngde">TimeAdapter</a></code>.</p><h3 id="localizing-labels-and-messages" href="usage" headinglink="true" class="ngde">Localizing labels and messages<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="localizing-labels-and-messages"></ng-doc-heading-anchor></h3><p class="ngde">The various text strings used by the timepicker are provided through MatTimepickerIntl. Localization of these messages can be done by providing a subclass with translated values in your application root module.</p><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde">@</span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">NgModule</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  imports</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"><a href="api/classes/api/MatTimepickerModule" class="ng-doc-code-anchor ngde">MatTimepickerModule</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> <a href="api/classes/api/MatNativeDateTimeModule" class="ng-doc-code-anchor ngde">MatNativeDateTimeModule</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  providers</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">    {provide</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> <a href="api/classes/api/MatTimepickerIntl" class="ng-doc-code-anchor ngde">MatTimepickerIntl</a></span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> useClass</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">:</span><span style="color:#24292E;--shiki-dark:#E6B673" class="ngde"> MyIntl</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">}</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">  ]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">})</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">export</span><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde"> class</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> MyApp</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde"> {}</span></span></code></pre>`;var dr=(()=>{class a extends Ye$1{constructor(){super(),this.pageType=`guide`,this.pageContent=cr,this.page=Nt,this.demoAssets=pi}static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵcmp=Ri$1({type:a,selectors:[[`ng-doc-page-jqlk5mn6`]],features:[vM([{provide:Ye$1,useExisting:a},di,Nt.providers??[]]),zy],decls:1,vars:0,template:function(t,n){t&1&&Ic(0,`ng-doc-page`)},dependencies:[Ii$2,En],encapsulation:2})}}return a})();var ef=[x(w$1({},(0,mi.isRoute)(Nt.route)?Nt.route:{}),{path:``,component:dr,title:`Usage`})];export{dr as PageComponent,ef as default};