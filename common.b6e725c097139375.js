"use strict";(self.webpackChunkux_ui_project=self.webpackChunkux_ui_project||[]).push([[592],{9162:(A,p,o)=>{o.d(p,{eJ:()=>j,_N:()=>H});var r=o(4650),a=o(9751),f=o(576);function v(e){return!!e&&(e instanceof a.y||(0,f.m)(e.lift)&&(0,f.m)(e.subscribe))}var y=o(9841),x=o(457),w=o(4707),M=o(9635),m=o(727),c=o(1884),g=o(8505),C=o(3900);let d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Yz7({token:e,factory:function(){return function P(e){return e instanceof r.R0b}((0,r.f3M)(r.R0b))?new S:(0,r.f3M)(R)},providedIn:"root"}),e})(),R=(()=>{class e extends d{constructor(t){super(),this.appRef=t,this.isScheduled=!1}schedule(){this.isScheduled||(this.isScheduled=!0,requestAnimationFrame(()=>{this.appRef.tick(),this.isScheduled=!1}))}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(r.z2F))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class S extends d{schedule(){}}let h=(()=>{class e{constructor(t,i){this.cdRef=t,this.tickScheduler=i}schedule(){this.cdRef.markForCheck(),this.tickScheduler.schedule()}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(r.sBO),r.LFG(d))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})();function T(e){const n=function b(e){return n=>e[n.type]?.(n)}(e),t=new w.t(1);return{nextPotentialObservable(i){t.next(i)},handlePotentialObservableChanges:()=>t.pipe((0,c.x)(),function O(){return(0,M.z)((0,C.w)(e=>{const n=function V(e){return v(e)?e:function L(e){return function E(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}(e)&&Object.keys(e).length>0&&Object.values(e).every(v)}(e)?(0,y.a)(function F(e){return Object.keys(e).reduce((n,t)=>({...n,[t]:e[t].pipe((0,c.x)())}),{})}(e)):function D(e){return"function"==typeof e?.then}(e)?(0,x.D)(e):new a.y(n=>{n.next(e)})}(e);let t=!0,i=!0;return new a.y(u=>{const l=n.subscribe({next(s){u.next({type:"next",value:s,reset:t,synchronous:i}),t=!1},error(s){u.next({type:"error",error:s,reset:t,synchronous:i}),t=!1},complete(){u.next({type:"complete",reset:t,synchronous:i}),t=!1}});return t&&(u.next({type:"suspense",reset:t,synchronous:!0}),t=!1),i=!1,l})}))}(),(0,c.x)(k),(0,g.b)(n))}}function k(e,n){return e.type===n.type&&e.reset===n.reset&&("next"===n.type?e.value===n.value:"error"!==n.type||e.error===n.error)}let j=(()=>{class e{constructor(t,i,u,l){this.mainTemplateRef=t,this.viewContainerRef=i,this.errorHandler=u,this.renderScheduler=l,this.isMainViewCreated=!1,this.isSuspenseViewCreated=!1,this.viewContext={$implicit:void 0,ngrxLet:void 0,error:void 0,complete:!1},this.renderEventManager=T({suspense:()=>{this.viewContext.$implicit=void 0,this.viewContext.ngrxLet=void 0,this.viewContext.error=void 0,this.viewContext.complete=!1,this.renderSuspenseView()},next:s=>{this.viewContext.$implicit=s.value,this.viewContext.ngrxLet=s.value,s.reset&&(this.viewContext.error=void 0,this.viewContext.complete=!1),this.renderMainView(s.synchronous)},error:s=>{this.viewContext.error=s.error,s.reset&&(this.viewContext.$implicit=void 0,this.viewContext.ngrxLet=void 0,this.viewContext.complete=!1),this.renderMainView(s.synchronous),this.errorHandler.handleError(s.error)},complete:s=>{this.viewContext.complete=!0,s.reset&&(this.viewContext.$implicit=void 0,this.viewContext.ngrxLet=void 0,this.viewContext.error=void 0),this.renderMainView(s.synchronous)}}),this.subscription=new m.w0}set ngrxLet(t){this.renderEventManager.nextPotentialObservable(t)}static ngTemplateContextGuard(t,i){return!0}ngOnInit(){this.subscription.add(this.renderEventManager.handlePotentialObservableChanges().subscribe())}ngOnDestroy(){this.subscription.unsubscribe()}renderMainView(t){this.isSuspenseViewCreated&&(this.isSuspenseViewCreated=!1,this.viewContainerRef.clear()),this.isMainViewCreated||(this.isMainViewCreated=!0,this.viewContainerRef.createEmbeddedView(this.mainTemplateRef,this.viewContext)),t||this.renderScheduler.schedule()}renderSuspenseView(){this.isMainViewCreated&&(this.isMainViewCreated=!1,this.viewContainerRef.clear()),this.suspenseTemplateRef&&!this.isSuspenseViewCreated&&(this.isSuspenseViewCreated=!0,this.viewContainerRef.createEmbeddedView(this.suspenseTemplateRef))}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(r.Rgc),r.Y36(r.s_b),r.Y36(r.qLn),r.Y36(h))},e.\u0275dir=r.lG2({type:e,selectors:[["","ngrxLet",""]],inputs:{ngrxLet:"ngrxLet",suspenseTemplateRef:["ngrxLetSuspenseTpl","suspenseTemplateRef"]},features:[r._Bn([h])]}),e})(),H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({}),e})()}}]);