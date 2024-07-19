"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8361],{8361:(q,p,m)=>{m.r(p),m.d(p,{startInputShims:()=>Z});var g=m(467),l=m(8476),T=m(909),y=m(4920),R=m(4379);m(8438);const M=new WeakMap,P=(e,t,s,o=0,r=!1)=>{M.has(e)!==s&&(s?H(e,t,o,r):G(e,t))},H=(e,t,s,o=!1)=>{const r=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,o&&(n.disabled=!0),r.appendChild(n),M.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=M.get(e);s&&(M.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",U="$ionPaddingTimer",B=(e,t,s)=>{const o=e[U];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},F=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&B(t,0,s)},{once:!0})};let w=0;const x="data-ionic-skip-scroll-assist",V=(e,t,s,o,r,n,i,a=!1)=>{const _=n&&(void 0===i||i.mode===R.a.None);let L=!1;const u=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==L?W(e,t,s,o,S.detail.keyboardHeight,_,a,u,!1):L=!0},c=()=>{L=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c)},h=function(){var S=(0,g.A)(function*(){t.hasAttribute(x)?t.removeAttribute(x):(W(e,t,s,o,r,_,a,u),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",c))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h),()=>{e.removeEventListener("focusin",h),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c)}},K=e=>{document.activeElement!==e&&(e.setAttribute(x,"true"),e.focus())},W=function(){var e=(0,g.A)(function*(t,s,o,r,n,i,a=!1,_=0,L=!0){if(!o&&!r)return;const u=((e,t,s,o)=>{var r;return((e,t,s,o)=>{const r=e.top,n=e.bottom,i=t.top,_=i+15,u=Math.min(t.bottom,o-s)-50-n,f=_-r,c=Math.round(u<0?-u:f>0?-f:0),h=Math.min(c,r-i),b=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,b)),scrollPadding:s,inputSafeY:4-(r-_)}})((null!==(r=e.closest("ion-item,[ion-item]"))&&void 0!==r?r:e).getBoundingClientRect(),t.getBoundingClientRect(),s,o)})(t,o||r,n,_);if(o&&Math.abs(u.scrollAmount)<4)return K(s),void(i&&null!==o&&(B(o,w),F(s,o,()=>w=0)));if(P(t,s,!0,u.inputSafeY,a),K(s),(0,y.r)(()=>t.click()),i&&o&&(w=u.scrollPadding,B(o,w)),typeof window<"u"){let f;const c=function(){var S=(0,g.A)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",c),o&&(yield(0,T.c)(o,0,u.scrollAmount,u.scrollDuration)),P(t,s,!1,u.inputSafeY),K(s),i&&F(s,o,()=>w=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",c)};if(o){const S=yield(0,T.g)(o);if(L&&u.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===s.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",c),void(f=setTimeout(c,1e3))}c()}});return function(s,o,r,n,i,a){return e.apply(this,arguments)}}(),Z=function(){var e=(0,g.A)(function*(t,s){if(void 0===l.d)return;const o="ios"===s,r="android"===s,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",o),_=t.getBoolean("inputBlurring",!1),L=t.getBoolean("scrollPadding",!0),u=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,c=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var v=(0,g.A)(function*(d){yield new Promise(I=>(0,y.c)(d,I));const O=d.shadowRoot||d,A=O.querySelector("input")||O.querySelector("textarea"),D=(0,T.f)(d),j=D?null:d.closest("ion-footer");if(A){if(D&&a&&!f.has(d)){const I=((e,t,s)=>{if(!s||!t)return()=>{};const o=a=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,a)},r=()=>P(e,t,!1),n=()=>o(!0),i=()=>o(!1);return(0,y.a)(s,"ionScrollStart",n),(0,y.a)(s,"ionScrollEnd",i),t.addEventListener("blur",r),()=>{(0,y.b)(s,"ionScrollStart",n),(0,y.b)(s,"ionScrollEnd",i),t.removeEventListener("blur",r)}})(d,A,D);f.set(d,I)}if("date"!==A.type&&"datetime-local"!==A.type&&(D||j)&&i&&!c.has(d)){const I=V(d,A,D,j,n,L,h,r);c.set(d,I)}}});return function(O){return v.apply(this,arguments)}}();_&&(()=>{let e=!0,t=!1;const s=document;(0,y.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=s.activeElement;if(!a||a.matches(C))return;const _=i.target;_!==a&&(_.matches(C)||_.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const v of u)S(v);l.d.addEventListener("ionInputDidLoad",v=>{S(v.detail)}),l.d.addEventListener("ionInputDidUnload",v=>{(v=>{if(a){const d=f.get(v);d&&d(),f.delete(v)}if(i){const d=c.get(v);d&&d(),c.delete(v)}})(v.detail)})});return function(s,o){return e.apply(this,arguments)}}()}}]);