(self.webpackChunkspear=self.webpackChunkspear||[]).push([[371],{3932:(O,T,l)=>{l.d(T,{c:()=>m});var y=l(8069),g=l(8047),D=l(4582),f=l(8694),d=l(833),v=l(7714),M=l(6074),p=l(3945),o=l(1944),m=function(P){(0,D.Z)(R,P);var k=(0,f.Z)(R);function R(w,S){var E;return(0,y.Z)(this,R),(E=k.call(this)).source=w,E.subjectFactory=S,E._subject=null,E._refCount=0,E._connection=null,(0,o.A)(w)&&(E.lift=w.lift),E}return(0,g.Z)(R,[{key:"_subscribe",value:function(S){return this.getSubject().subscribe(S)}},{key:"getSubject",value:function(){var S=this._subject;return(!S||S.isStopped)&&(this._subject=this.subjectFactory()),this._subject}},{key:"_teardown",value:function(){this._refCount=0;var S=this._connection;this._subject=this._connection=null,S?.unsubscribe()}},{key:"connect",value:function(){var S=this,E=this._connection;if(!E){E=this._connection=new v.w0;var I=this.getSubject();E.add(this.source.subscribe((0,p.x)(I,void 0,function(){S._teardown(),I.complete()},function(N){S._teardown(),I.error(N)},function(){return S._teardown()}))),E.closed&&(this._connection=null,E=v.w0.EMPTY)}return E}},{key:"refCount",value:function(){return(0,M.x)()(this)}}]),R}(d.y)},1954:(O,T,l)=>{l.d(T,{P:()=>D});var y=l(833),g=l(4987);function D(f){return new y.y(function(d){(0,g.Xf)(f()).subscribe(d)})}},5474:(O,T,l)=>{l.d(T,{_:()=>D});var y=l(833),g=l(2971);function D(f,d){var v=(0,g.m)(f)?f:function(){return f},M=function(o){return o.error(v())};return new y.y(d?function(p){return d.schedule(M,0,p)}:M)}},3158:(O,T,l)=>{l.d(T,{K:()=>f});var y=l(4987),g=l(3945),D=l(1944);function f(d){return(0,D.e)(function(v,M){var m,p=null,o=!1;p=v.subscribe((0,g.x)(M,void 0,void 0,function(P){m=(0,y.Xf)(d(P,f(d)(v))),p?(p.unsubscribe(),p=null,m.subscribe(M)):o=!0})),o&&(p.unsubscribe(),p=null,m.subscribe(M))})}},2313:(O,T,l)=>{l.d(T,{x:()=>g});var y=l(1944);function g(D){return(0,y.e)(function(f,d){try{f.subscribe(d)}finally{d.add(D)}})}},73:(O,T,l)=>{l.d(T,{h:()=>g});var y=l(635);function g(D){return(0,y.U)(function(){return D})}},6074:(O,T,l)=>{l.d(T,{x:()=>D});var y=l(1944),g=l(3945);function D(){return(0,y.e)(function(f,d){var v=null;f._refCount++;var M=(0,g.x)(d,void 0,void 0,void 0,function(){if(!f||f._refCount<=0||0<--f._refCount)v=null;else{var p=f._connection,o=v;v=null,p&&(!o||p===o)&&p.unsubscribe(),d.unsubscribe()}});f.subscribe(M),M.closed||(v=f.connect())})}},2673:(O,T,l)=>{l.d(T,{w:()=>f});var y=l(4987),g=l(1944),D=l(3945);function f(d,v){return(0,g.e)(function(M,p){var o=null,m=0,P=!1,k=function(){return P&&!o&&p.complete()};M.subscribe((0,D.x)(p,function(R){o?.unsubscribe();var w=0,S=m++;(0,y.Xf)(d(R,S)).subscribe(o=(0,D.x)(p,function(E){return p.next(v?v(R,E,S,w++):E)},function(){o=null,k()}))},function(){P=!0,k()}))})}},4437:(O,T,l)=>{l.d(T,{b:()=>D});var y=l(833),g=l(2971);function D(f){return!!f&&(f instanceof y.y||(0,g.m)(f.lift)&&(0,g.m)(f.subscribe))}},2512:(O,T,l)=>{l.d(T,{Cb:()=>Ne,Dx:()=>re,H7:()=>ie,b2:()=>Re,ki:()=>Le,ly:()=>Ie,q6:()=>we,se:()=>Z});var E,y=l(4089),g=l(265),D=l(5603),f=l(5106),d=l(8047),v=l(8069),M=l(4582),p=l(8694),o=l(6718),m=l(4055),P=l(3267),k=function(a){(0,M.Z)(e,a);var i=(0,p.Z)(e);function e(){var t;return(0,v.Z)(this,e),(t=i.apply(this,arguments)).supportsDOMEvents=!0,t}return(0,d.Z)(e)}(m.\u0275DomAdapter),R=function(a){(0,M.Z)(e,a);var i=(0,p.Z)(e);function e(){return(0,v.Z)(this,e),i.apply(this,arguments)}return(0,d.Z)(e,[{key:"onAndCancel",value:function(n,r,u){return n.addEventListener(r,u),function(){n.removeEventListener(r,u)}}},{key:"dispatchEvent",value:function(n,r){n.dispatchEvent(r)}},{key:"remove",value:function(n){n.parentNode&&n.parentNode.removeChild(n)}},{key:"createElement",value:function(n,r){return(r=r||this.getDefaultDocument()).createElement(n)}},{key:"createHtmlDocument",value:function(){return document.implementation.createHTMLDocument("fakeTitle")}},{key:"getDefaultDocument",value:function(){return document}},{key:"isElementNode",value:function(n){return n.nodeType===Node.ELEMENT_NODE}},{key:"isShadowRoot",value:function(n){return n instanceof DocumentFragment}},{key:"getGlobalEventTarget",value:function(n,r){return"window"===r?window:"document"===r?n:"body"===r?n.body:null}},{key:"getBaseHref",value:function(n){var r=function S(){return(w=w||document.querySelector("base"))?w.getAttribute("href"):null}();return null==r?null:function I(a){(E=E||document.createElement("a")).setAttribute("href",a);var i=E.pathname;return"/"===i.charAt(0)?i:"/".concat(i)}(r)}},{key:"resetBaseElement",value:function(){w=null}},{key:"getUserAgent",value:function(){return window.navigator.userAgent}},{key:"getCookie",value:function(n){return(0,m.\u0275parseCookieValue)(document.cookie,n)}}],[{key:"makeCurrent",value:function(){(0,m.\u0275setRootDomAdapter)(new e)}}]),e}(k),w=null,N=function(){function a(){(0,v.Z)(this,a)}return(0,d.Z)(a,[{key:"addToWindow",value:function(e){o.\u0275global.getAngularTestability=function(n){var u=e.findTestabilityInTree(n,!(arguments.length>1&&void 0!==arguments[1])||arguments[1]);if(null==u)throw new o.\u0275RuntimeError(5103,!1);return u},o.\u0275global.getAllAngularTestabilities=function(){return e.getAllTestabilities()},o.\u0275global.getAllAngularRootElements=function(){return e.getAllRootElements()},o.\u0275global.frameworkStabilizers||(o.\u0275global.frameworkStabilizers=[]),o.\u0275global.frameworkStabilizers.push(function(r){var u=o.\u0275global.getAllAngularTestabilities(),s=u.length,c=!1,_=function(h){c=c||h,0==--s&&r(c)};u.forEach(function(C){C.whenStable(_)})})}},{key:"findTestabilityInTree",value:function(e,t,n){return null==t?null:e.getTestability(t)??(n?(0,m.\u0275getDOM)().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null)}}]),a}(),ce=function(){var a=function(){function i(){(0,v.Z)(this,i)}return(0,d.Z)(i,[{key:"build",value:function(){return new XMLHttpRequest}}]),i}();return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=o.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac}),a}(),L=new o.InjectionToken("EventManagerPlugins"),W=function(){var a=function(){function i(e,t){var n=this;(0,v.Z)(this,i),this._zone=t,this._eventNameToPlugin=new Map,e.forEach(function(r){r.manager=n}),this._plugins=e.slice().reverse()}return(0,d.Z)(i,[{key:"addEventListener",value:function(t,n,r){return this._findPluginFor(n).addEventListener(t,n,r)}},{key:"getZone",value:function(){return this._zone}},{key:"_findPluginFor",value:function(t){var n=this._eventNameToPlugin.get(t);if(n)return n;if(!(n=this._plugins.find(function(u){return u.supports(t)})))throw new o.\u0275RuntimeError(5101,!1);return this._eventNameToPlugin.set(t,n),n}}]),i}();return a.\u0275fac=function(e){return new(e||a)(o.\u0275\u0275inject(L),o.\u0275\u0275inject(o.NgZone))},a.\u0275prov=o.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac}),a}(),z=(0,d.Z)(function a(i){(0,v.Z)(this,a),this._doc=i}),H="ng-app-id",V=function(){var a=function(){function i(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(0,v.Z)(this,i),this.doc=e,this.appId=t,this.nonce=n,this.platformId=r,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=(0,m.isPlatformServer)(r),this.resetHostNodes()}return(0,d.Z)(i,[{key:"addStyles",value:function(t){var r,n=(0,f.Z)(t);try{for(n.s();!(r=n.n()).done;){var u=r.value;1===this.changeUsageCount(u,1)&&this.onStyleAdded(u)}}catch(c){n.e(c)}finally{n.f()}}},{key:"removeStyles",value:function(t){var r,n=(0,f.Z)(t);try{for(n.s();!(r=n.n()).done;){var u=r.value;this.changeUsageCount(u,-1)<=0&&this.onStyleRemoved(u)}}catch(c){n.e(c)}finally{n.f()}}},{key:"ngOnDestroy",value:function(){var t=this.styleNodesInDOM;t&&(t.forEach(function(s){return s.remove()}),t.clear());var r,n=(0,f.Z)(this.getAllStyles());try{for(n.s();!(r=n.n()).done;)this.onStyleRemoved(r.value)}catch(s){n.e(s)}finally{n.f()}this.resetHostNodes()}},{key:"addHost",value:function(t){this.hostNodes.add(t);var r,n=(0,f.Z)(this.getAllStyles());try{for(n.s();!(r=n.n()).done;)this.addStyleToHost(t,r.value)}catch(s){n.e(s)}finally{n.f()}}},{key:"removeHost",value:function(t){this.hostNodes.delete(t)}},{key:"getAllStyles",value:function(){return this.styleRef.keys()}},{key:"onStyleAdded",value:function(t){var r,n=(0,f.Z)(this.hostNodes);try{for(n.s();!(r=n.n()).done;)this.addStyleToHost(r.value,t)}catch(s){n.e(s)}finally{n.f()}}},{key:"onStyleRemoved",value:function(t){var n,r,u=this.styleRef;null===(n=u.get(t))||void 0===n||null===(r=n.elements)||void 0===r||r.forEach(function(s){return s.remove()}),u.delete(t)}},{key:"collectServerRenderedStyles",value:function(){var t,n=null===(t=this.doc.head)||void 0===t?void 0:t.querySelectorAll("style[".concat(H,'="').concat(this.appId,'"]'));if(null!=n&&n.length){var r=new Map;return n.forEach(function(u){null!=u.textContent&&r.set(u.textContent,u)}),r}return null}},{key:"changeUsageCount",value:function(t,n){var r=this.styleRef;if(r.has(t)){var u=r.get(t);return u.usage+=n,u.usage}return r.set(t,{usage:n,elements:[]}),n}},{key:"getStyleElement",value:function(t,n){var r=this.styleNodesInDOM,u=r?.get(n);if(u?.parentNode===t)return r.delete(n),u.removeAttribute(H),u;var s=this.doc.createElement("style");return this.nonce&&s.setAttribute("nonce",this.nonce),s.textContent=n,this.platformIsServer&&s.setAttribute(H,this.appId),s}},{key:"addStyleToHost",value:function(t,n){var r,u=this.getStyleElement(t,n);t.appendChild(u);var s=this.styleRef,c=null===(r=s.get(n))||void 0===r?void 0:r.elements;c?c.push(u):s.set(n,{elements:[u],usage:1})}},{key:"resetHostNodes",value:function(){var t=this.hostNodes;t.clear(),t.add(this.doc.head)}}]),i}();return a.\u0275fac=function(e){return new(e||a)(o.\u0275\u0275inject(m.DOCUMENT),o.\u0275\u0275inject(o.APP_ID),o.\u0275\u0275inject(o.CSP_NONCE,8),o.\u0275\u0275inject(o.PLATFORM_ID))},a.\u0275prov=o.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac}),a}(),B={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},U=/%COMP%/g,Y="%COMP%",de="_nghost-".concat(Y),fe="_ngcontent-".concat(Y),me=new o.InjectionToken("RemoveStylesOnCompDestory",{providedIn:"root",factory:function(){return!1}});function X(a,i){return i.map(function(e){return e.replace(U,a)})}var Z=function(){var a=function(){function i(e,t,n,r,u,s,c){var _=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;(0,v.Z)(this,i),this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.removeStylesOnCompDestory=r,this.doc=u,this.platformId=s,this.ngZone=c,this.nonce=_,this.rendererByCompId=new Map,this.platformIsServer=(0,m.isPlatformServer)(s),this.defaultRenderer=new j(e,u,c,this.platformIsServer)}return(0,d.Z)(i,[{key:"createRenderer",value:function(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===o.ViewEncapsulation.ShadowDom&&(n=(0,D.Z)((0,D.Z)({},n),{},{encapsulation:o.ViewEncapsulation.Emulated}));var r=this.getOrCreateRenderer(t,n);return r instanceof $?r.applyToHost(t):r instanceof K&&r.applyStyles(),r}},{key:"getOrCreateRenderer",value:function(t,n){var r=this.rendererByCompId,u=r.get(n.id);if(!u){var s=this.doc,c=this.ngZone,_=this.eventManager,C=this.sharedStylesHost,h=this.removeStylesOnCompDestory,b=this.platformIsServer;switch(n.encapsulation){case o.ViewEncapsulation.Emulated:u=new $(_,C,n,this.appId,h,s,c,b);break;case o.ViewEncapsulation.ShadowDom:return new ge(_,C,t,n,s,c,this.nonce,b);default:u=new K(_,C,n,h,s,c,b)}u.onDestroy=function(){return r.delete(n.id)},r.set(n.id,u)}return u}},{key:"ngOnDestroy",value:function(){this.rendererByCompId.clear()}}]),i}();return a.\u0275fac=function(e){return new(e||a)(o.\u0275\u0275inject(W),o.\u0275\u0275inject(V),o.\u0275\u0275inject(o.APP_ID),o.\u0275\u0275inject(me),o.\u0275\u0275inject(m.DOCUMENT),o.\u0275\u0275inject(o.PLATFORM_ID),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(o.CSP_NONCE))},a.\u0275prov=o.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac}),a}(),j=function(){function a(i,e,t,n){(0,v.Z)(this,a),this.eventManager=i,this.doc=e,this.ngZone=t,this.platformIsServer=n,this.data=Object.create(null),this.destroyNode=null}return(0,d.Z)(a,[{key:"destroy",value:function(){}},{key:"createElement",value:function(e,t){return t?this.doc.createElementNS(B[t]||t,e):this.doc.createElement(e)}},{key:"createComment",value:function(e){return this.doc.createComment(e)}},{key:"createText",value:function(e){return this.doc.createTextNode(e)}},{key:"appendChild",value:function(e,t){(J(e)?e.content:e).appendChild(t)}},{key:"insertBefore",value:function(e,t,n){e&&(J(e)?e.content:e).insertBefore(t,n)}},{key:"removeChild",value:function(e,t){e&&e.removeChild(t)}},{key:"selectRootElement",value:function(e,t){var n="string"==typeof e?this.doc.querySelector(e):e;if(!n)throw new o.\u0275RuntimeError(5104,!1);return t||(n.textContent=""),n}},{key:"parentNode",value:function(e){return e.parentNode}},{key:"nextSibling",value:function(e){return e.nextSibling}},{key:"setAttribute",value:function(e,t,n,r){if(r){t=r+":"+t;var u=B[r];u?e.setAttributeNS(u,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}},{key:"removeAttribute",value:function(e,t,n){if(n){var r=B[n];r?e.removeAttributeNS(r,t):e.removeAttribute("".concat(n,":").concat(t))}else e.removeAttribute(t)}},{key:"addClass",value:function(e,t){e.classList.add(t)}},{key:"removeClass",value:function(e,t){e.classList.remove(t)}},{key:"setStyle",value:function(e,t,n,r){r&(o.RendererStyleFlags2.DashCase|o.RendererStyleFlags2.Important)?e.style.setProperty(t,n,r&o.RendererStyleFlags2.Important?"important":""):e.style[t]=n}},{key:"removeStyle",value:function(e,t,n){n&o.RendererStyleFlags2.DashCase?e.style.removeProperty(t):e.style[t]=""}},{key:"setProperty",value:function(e,t,n){e[t]=n}},{key:"setValue",value:function(e,t){e.nodeValue=t}},{key:"listen",value:function(e,t,n){if("string"==typeof e&&!(e=(0,m.\u0275getDOM)().getGlobalEventTarget(this.doc,e)))throw new Error("Unsupported event target ".concat(e," for event ").concat(t));return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(n))}},{key:"decoratePreventDefault",value:function(e){var t=this;return function(n){if("__ngUnwrap__"===n)return e;!1===(t.platformIsServer?t.ngZone.runGuarded(function(){return e(n)}):e(n))&&n.preventDefault()}}}]),a}();function J(a){return"TEMPLATE"===a.tagName&&void 0!==a.content}var a,ge=function(a){(0,M.Z)(e,a);var i=(0,p.Z)(e);function e(t,n,r,u,s,c,_,C){var h;(0,v.Z)(this,e),(h=i.call(this,t,s,c,C)).sharedStylesHost=n,h.hostEl=r,h.shadowRoot=r.attachShadow({mode:"open"}),h.sharedStylesHost.addHost(h.shadowRoot);var G,b=X(u.id,u.styles),A=(0,f.Z)(b);try{for(A.s();!(G=A.n()).done;){var le=G.value,x=document.createElement("style");_&&x.setAttribute("nonce",_),x.textContent=le,h.shadowRoot.appendChild(x)}}catch(He){A.e(He)}finally{A.f()}return h}return(0,d.Z)(e,[{key:"nodeOrShadowRoot",value:function(n){return n===this.hostEl?this.shadowRoot:n}},{key:"appendChild",value:function(n,r){return(0,y.Z)((0,g.Z)(e.prototype),"appendChild",this).call(this,this.nodeOrShadowRoot(n),r)}},{key:"insertBefore",value:function(n,r,u){return(0,y.Z)((0,g.Z)(e.prototype),"insertBefore",this).call(this,this.nodeOrShadowRoot(n),r,u)}},{key:"removeChild",value:function(n,r){return(0,y.Z)((0,g.Z)(e.prototype),"removeChild",this).call(this,this.nodeOrShadowRoot(n),r)}},{key:"parentNode",value:function(n){return this.nodeOrShadowRoot((0,y.Z)((0,g.Z)(e.prototype),"parentNode",this).call(this,this.nodeOrShadowRoot(n)))}},{key:"destroy",value:function(){this.sharedStylesHost.removeHost(this.shadowRoot)}}]),e}(j),K=function(a){(0,M.Z)(e,a);var i=(0,p.Z)(e);function e(t,n,r,u,s,c,_,C){var h;return(0,v.Z)(this,e),(h=i.call(this,t,s,c,_)).sharedStylesHost=n,h.removeStylesOnCompDestory=u,h.rendererUsageCount=0,h.styles=C?X(C,r.styles):r.styles,h}return(0,d.Z)(e,[{key:"applyStyles",value:function(){this.sharedStylesHost.addStyles(this.styles),this.rendererUsageCount++}},{key:"destroy",value:function(){var n;this.removeStylesOnCompDestory&&(this.sharedStylesHost.removeStyles(this.styles),this.rendererUsageCount--,0===this.rendererUsageCount)&&(null===(n=this.onDestroy)||void 0===n||n.call(this))}}]),e}(j),$=function(a){(0,M.Z)(e,a);var i=(0,p.Z)(e);function e(t,n,r,u,s,c,_,C){var h;(0,v.Z)(this,e);var b=u+"-"+r.id;return(h=i.call(this,t,n,r,s,c,_,C,b)).contentAttr=function _e(a){return fe.replace(U,a)}(b),h.hostAttr=function he(a){return de.replace(U,a)}(b),h}return(0,d.Z)(e,[{key:"applyToHost",value:function(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}},{key:"createElement",value:function(n,r){var u=(0,y.Z)((0,g.Z)(e.prototype),"createElement",this).call(this,n,r);return(0,y.Z)((0,g.Z)(e.prototype),"setAttribute",this).call(this,u,this.contentAttr,""),u}}]),e}(K),ye=function(){var a=function(i){(0,M.Z)(t,i);var e=(0,p.Z)(t);function t(n){return(0,v.Z)(this,t),e.call(this,n)}return(0,d.Z)(t,[{key:"supports",value:function(r){return!0}},{key:"addEventListener",value:function(r,u,s){var c=this;return r.addEventListener(u,s,!1),function(){return c.removeEventListener(r,u,s)}}},{key:"removeEventListener",value:function(r,u,s){return r.removeEventListener(u,s)}}]),t}(z);return a.\u0275fac=function(e){return new(e||a)(o.\u0275\u0275inject(m.DOCUMENT))},a.\u0275prov=o.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac}),a}(),Q=["alt","control","meta","shift"],Ee={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Me={alt:function(i){return i.altKey},control:function(i){return i.ctrlKey},meta:function(i){return i.metaKey},shift:function(i){return i.shiftKey}},De=function(){var a=function(i){(0,M.Z)(t,i);var e=(0,p.Z)(t);function t(n){return(0,v.Z)(this,t),e.call(this,n)}return(0,d.Z)(t,[{key:"supports",value:function(r){return null!=t.parseEventName(r)}},{key:"addEventListener",value:function(r,u,s){var c=t.parseEventName(u),_=t.eventCallback(c.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(function(){return(0,m.\u0275getDOM)().onAndCancel(r,c.domEventName,_)})}}],[{key:"parseEventName",value:function(r){var u=r.toLowerCase().split("."),s=u.shift();if(0===u.length||"keydown"!==s&&"keyup"!==s)return null;var c=t._normalizeKey(u.pop()),_="",C=u.indexOf("code");if(C>-1&&(u.splice(C,1),_="code."),Q.forEach(function(b){var A=u.indexOf(b);A>-1&&(u.splice(A,1),_+=b+".")}),_+=c,0!=u.length||0===c.length)return null;var h={};return h.domEventName=s,h.fullKey=_,h}},{key:"matchEventFullKeyCode",value:function(r,u){var s=Ee[r.key]||r.key,c="";return u.indexOf("code.")>-1&&(s=r.code,c="code."),!(null==s||!s)&&(" "===(s=s.toLowerCase())?s="space":"."===s&&(s="dot"),Q.forEach(function(_){_!==s&&(0,Me[_])(r)&&(c+=_+".")}),(c+=s)===u)}},{key:"eventCallback",value:function(r,u,s){return function(c){t.matchEventFullKeyCode(c,r)&&s.runGuarded(function(){return u(c)})}}},{key:"_normalizeKey",value:function(r){return"esc"===r?"escape":r}}]),t}(z);return a.\u0275fac=function(e){return new(e||a)(o.\u0275\u0275inject(m.DOCUMENT))},a.\u0275prov=o.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac}),a}(),we=(0,o.createPlatformFactory)(o.platformCore,"browser",[{provide:o.PLATFORM_ID,useValue:m.\u0275PLATFORM_BROWSER_ID},{provide:o.PLATFORM_INITIALIZER,useValue:function Ce(){R.makeCurrent()},multi:!0},{provide:m.DOCUMENT,useFactory:function Se(){return(0,o.\u0275setDocument)(document),document},deps:[]}]),be=new o.InjectionToken(""),te=[{provide:o.\u0275TESTABILITY_GETTER,useClass:N,deps:[]},{provide:o.\u0275TESTABILITY,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]}],ne=[{provide:o.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:o.ErrorHandler,useFactory:function Te(){return new o.ErrorHandler},deps:[]},{provide:L,useClass:ye,multi:!0,deps:[m.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:L,useClass:De,multi:!0,deps:[m.DOCUMENT]},Z,V,W,{provide:o.RendererFactory2,useExisting:Z},{provide:m.XhrFactory,useClass:ce,deps:[]},[]],Re=179==l.j?((a=function(){function i(e){(0,v.Z)(this,i)}return(0,d.Z)(i,null,[{key:"withServerTransition",value:function(t){return{ngModule:i,providers:[{provide:o.APP_ID,useValue:t.appId}]}}}]),i}()).\u0275fac=function(e){return new(e||a)(o.\u0275\u0275inject(be,12))},a.\u0275mod=o.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=o.\u0275\u0275defineInjector({providers:[].concat(ne,te),imports:[m.CommonModule,o.ApplicationModule]}),a):null,re=function(){var a=function(){function i(e){(0,v.Z)(this,i),this._doc=e}return(0,d.Z)(i,[{key:"getTitle",value:function(){return this._doc.title}},{key:"setTitle",value:function(t){this._doc.title=t||""}}]),i}();return a.\u0275fac=function(e){return new(e||a)(o.\u0275\u0275inject(m.DOCUMENT))},a.\u0275prov=o.\u0275\u0275defineInjectable({token:a,factory:function(e){return e?new e:function Pe(){return new re((0,o.\u0275\u0275inject)(m.DOCUMENT))}()},providedIn:"root"}),a}();typeof window<"u"&&window;var ie=function(){var a=(0,d.Z)(function i(){(0,v.Z)(this,i)});return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=o.\u0275\u0275defineInjectable({token:a,factory:function(e){return e?new(e||a):o.\u0275\u0275inject(ue)},providedIn:"root"}),a}(),ue=function(){var a=function(i){(0,M.Z)(t,i);var e=(0,p.Z)(t);function t(n){var r;return(0,v.Z)(this,t),(r=e.call(this))._doc=n,r}return(0,d.Z)(t,[{key:"sanitize",value:function(r,u){if(null==u)return null;switch(r){case o.SecurityContext.NONE:return u;case o.SecurityContext.HTML:return(0,o.\u0275allowSanitizationBypassAndThrow)(u,"HTML")?(0,o.\u0275unwrapSafeValue)(u):(0,o.\u0275_sanitizeHtml)(this._doc,String(u)).toString();case o.SecurityContext.STYLE:return(0,o.\u0275allowSanitizationBypassAndThrow)(u,"Style")?(0,o.\u0275unwrapSafeValue)(u):u;case o.SecurityContext.SCRIPT:if((0,o.\u0275allowSanitizationBypassAndThrow)(u,"Script"))return(0,o.\u0275unwrapSafeValue)(u);throw new o.\u0275RuntimeError(5200,!1);case o.SecurityContext.URL:return(0,o.\u0275allowSanitizationBypassAndThrow)(u,"URL")?(0,o.\u0275unwrapSafeValue)(u):(0,o.\u0275_sanitizeUrl)(String(u));case o.SecurityContext.RESOURCE_URL:if((0,o.\u0275allowSanitizationBypassAndThrow)(u,"ResourceURL"))return(0,o.\u0275unwrapSafeValue)(u);throw new o.\u0275RuntimeError(5201,!1);default:throw new o.\u0275RuntimeError(5202,!1)}}},{key:"bypassSecurityTrustHtml",value:function(r){return(0,o.\u0275bypassSanitizationTrustHtml)(r)}},{key:"bypassSecurityTrustStyle",value:function(r){return(0,o.\u0275bypassSanitizationTrustStyle)(r)}},{key:"bypassSecurityTrustScript",value:function(r){return(0,o.\u0275bypassSanitizationTrustScript)(r)}},{key:"bypassSecurityTrustUrl",value:function(r){return(0,o.\u0275bypassSanitizationTrustUrl)(r)}},{key:"bypassSecurityTrustResourceUrl",value:function(r){return(0,o.\u0275bypassSanitizationTrustResourceUrl)(r)}}]),t}(ie);return a.\u0275fac=function(e){return new(e||a)(o.\u0275\u0275inject(m.DOCUMENT))},a.\u0275prov=o.\u0275\u0275defineInjectable({token:a,factory:function(e){var t;return t=e?new e:function ke(a){return new ue(a.get(m.DOCUMENT))}(o.\u0275\u0275inject(o.Injector)),t},providedIn:"root"}),a}();function Ie(){for(var a=[],i=new Set,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0,u=t;r<u.length;r++){var s=u[r],c=s.\u0275providers;i.add(s.\u0275kind),c.length&&a.push(c)}return(0,o.makeEnvironmentProviders)([[],i.has(0)?[]:(0,o.\u0275withDomHydration)(),i.has(1)?[]:(0,P.\u0275withHttpTransferCache)(),a])}var Ne=o.makeStateKey,Le=o.TransferState}}]);
//# sourceMappingURL=371.7c4978421b7bd651.js.map