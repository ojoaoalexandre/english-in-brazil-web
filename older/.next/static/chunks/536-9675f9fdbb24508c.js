"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{87536:function(e,t,r){r.d(t,{Gc:function(){return E},RV:function(){return O},cI:function(){return xe}});var s=r(67294),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,n=e=>null==e;const o=e=>"object"===typeof e;var u=e=>!n(e)&&!Array.isArray(e)&&o(e)&&!i(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),d=e=>Array.isArray(e)?e.filter(Boolean):[],f=e=>void 0===e,y=(e,t,r)=>{if(!t||!u(e))return r;const s=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>n(e)?e:e[t]),e);return f(s)||s===e?f(e[t])?r:e[t]:s};const m="blur",h="focusout",g="onBlur",v="onChange",p="onSubmit",b="onTouched",_="all",V="max",A="min",w="maxLength",F="minLength",x="pattern",S="required",k="validate",D=s.createContext(null),E=()=>s.useContext(D),O=e=>{const{children:t,...r}=e;return s.createElement(D.Provider,{value:r},t)};var C=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t._proxyFormState[a]!==_&&(t._proxyFormState[a]=!s||_),r&&(r[a]=!0),e[a]}});return a},L=e=>u(e)&&!Object.keys(e).length,T=(e,t,r,s)=>{r(e);const{name:a,...i}=e;return L(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find((e=>t[e]===(!s||_)))},N=e=>Array.isArray(e)?e:[e];function j(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var U=e=>"string"===typeof e,B=(e,t,r,s,a)=>U(e)?(s&&t.watch.add(e),y(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),y(r,e)))):(s&&(t.watchAll=!0),r),M="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document;function q(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(M&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;if(t=r?[]:{},Array.isArray(e)||(e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")})(e))for(const r in e)t[r]=q(e[r]);else t=e}return t}var P=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},I=e=>/^\w*$/.test(e),R=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function $(e,t,r){let s=-1;const a=I(t)?[t]:R(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e}const H=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=y(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else u(s)&&H(s,t)}}};var W=e=>({isOnSubmit:!e||e===p,isOnBlur:e===g,isOnChange:e===v,isOnAll:e===_,isOnTouch:e===b}),G=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),z=(e,t,r)=>{const s=d(y(e,r));return $(s,"root",t[r]),$(e,r,s),e},J=e=>"boolean"===typeof e,K=e=>"file"===e.type,Q=e=>"function"===typeof e,X=e=>{if(!M)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Y=e=>U(e)||s.isValidElement(e),Z=e=>"radio"===e.type,ee=e=>e instanceof RegExp;const te={value:!1,isValid:!1},re={value:!0,isValid:!0};var se=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?re:{value:e[0].value,isValid:!0}:re:te}return te};const ae={isValid:!1,value:null};var ie=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),ae):ae;function ne(e,t,r="validate"){if(Y(e)||Array.isArray(e)&&e.every(Y)||J(e)&&!e)return{type:r,message:Y(e)?e:"",ref:t}}var oe=e=>u(e)&&!ee(e)?e:{value:e,message:""},ue=async(e,t,r,s,i)=>{const{ref:o,refs:l,required:c,maxLength:d,minLength:m,min:h,max:g,pattern:v,validate:p,name:b,valueAsNumber:_,mount:D,disabled:E}=e._f,O=y(t,b);if(!D||E)return{};const C=l?l[0]:o,T=e=>{s&&C.reportValidity&&(C.setCustomValidity(J(e)?"":e||""),C.reportValidity())},N={},j=Z(o),B=a(o),M=j||B,q=(_||K(o))&&f(o.value)&&f(O)||X(o)&&""===o.value||""===O||Array.isArray(O)&&!O.length,I=P.bind(null,b,r,N),R=(e,t,r,s=w,a=F)=>{const i=e?t:r;N[b]={type:e?s:a,message:i,ref:o,...I(e?s:a,i)}};if(i?!Array.isArray(O)||!O.length:c&&(!M&&(q||n(O))||J(O)&&!O||B&&!se(l).isValid||j&&!ie(l).isValid)){const{value:e,message:t}=Y(c)?{value:!!c,message:c}:oe(c);if(e&&(N[b]={type:S,message:t,ref:C,...I(S,t)},!r))return T(t),N}if(!q&&(!n(h)||!n(g))){let e,t;const s=oe(g),a=oe(h);if(n(O)||isNaN(O)){const r=o.valueAsDate||new Date(O),i=e=>new Date((new Date).toDateString()+" "+e),n="time"==o.type,u="week"==o.type;U(s.value)&&O&&(e=n?i(O)>i(s.value):u?O>s.value:r>new Date(s.value)),U(a.value)&&O&&(t=n?i(O)<i(a.value):u?O<a.value:r<new Date(a.value))}else{const r=o.valueAsNumber||(O?+O:O);n(s.value)||(e=r>s.value),n(a.value)||(t=r<a.value)}if((e||t)&&(R(!!e,s.message,a.message,V,A),!r))return T(N[b].message),N}if((d||m)&&!q&&(U(O)||i&&Array.isArray(O))){const e=oe(d),t=oe(m),s=!n(e.value)&&O.length>e.value,a=!n(t.value)&&O.length<t.value;if((s||a)&&(R(s,e.message,t.message),!r))return T(N[b].message),N}if(v&&!q&&U(O)){const{value:e,message:t}=oe(v);if(ee(e)&&!O.match(e)&&(N[b]={type:x,message:t,ref:o,...I(x,t)},!r))return T(t),N}if(p)if(Q(p)){const e=ne(await p(O,t),C);if(e&&(N[b]={...e,...I(k,e.message)},!r))return T(e.message),N}else if(u(p)){let e={};for(const s in p){if(!L(e)&&!r)break;const a=ne(await p[s](O,t),C,s);a&&(e={...a,...I(s,a.message)},T(a.message),r&&(N[b]=e))}if(!L(e)&&(N[b]={ref:C,...e},!r))return N}return T(!0),N};function le(e,t){const r=Array.isArray(t)?t:I(t)?[t]:R(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(u(s)&&L(s)||Array.isArray(s)&&function(e){for(const t in e)if(!f(e[t]))return!1;return!0}(s))&&le(e,r.slice(0,-1)),e}function ce(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var de=e=>n(e)||!o(e);function fe(e,t){if(de(e)||de(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!fe(r,e):r!==e)return!1}}return!0}var ye=e=>"select-multiple"===e.type,me=e=>X(e)&&e.isConnected,he=e=>{for(const t in e)if(Q(e[t]))return!0;return!1};function ge(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!he(e[s])?(t[s]=Array.isArray(e[s])?[]:{},ge(e[s],t[s])):n(e[s])||(t[s]=!0);return t}function ve(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!he(e[a])?f(t)||de(r[a])?r[a]=Array.isArray(e[a])?ge(e[a],[]):{...ge(e[a])}:ve(e[a],n(t)?{}:t[a],r[a]):fe(e[a],t[a])?delete r[a]:r[a]=!0;return r}var pe=(e,t)=>ve(e,t,ge(t)),be=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e?NaN:e?+e:e:r&&U(e)?new Date(e):s?s(e):e;function _e(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return K(t)?t.files:Z(t)?ie(e.refs).value:ye(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?se(e.refs).value:be(f(t.value)?e.ref.value:t.value,e)}var Ve=e=>f(e)?e:ee(e)?e.source:u(e)?ee(e.value)?e.value.source:e.value:e;function Ae(e,t,r){const s=y(e,r);if(s||I(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=y(t,s),n=y(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}const we={mode:p,reValidateMode:v,shouldFocusError:!0};function Fe(e={},t){let r={...we,...e};const s=e.resetOptions&&e.resetOptions.keepDirtyValues;let o,g={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},v={},p=(u(r.defaultValues)||u(r.values))&&q(r.defaultValues||r.values)||{},b=r.shouldUnregister?{}:q(p),V={action:!1,mount:!1,watch:!1},A={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w=0;const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={watch:ce(),array:ce(),state:ce()},S=W(r.mode),k=W(r.reValidateMode),D=r.criteriaMode===_,E=async e=>{if(F.isValid||e){const e=r.resolver?L((await P()).errors):await I(v,!0);e!==g.isValid&&x.state.next({isValid:e})}},O=e=>F.isValidating&&x.state.next({isValidating:e}),C=(e,t,r,s)=>{const a=y(v,e);if(a){const i=y(b,e,f(r)?y(p,e):r);f(i)||s&&s.defaultChecked||t?$(b,e,t?i:_e(a._f)):ee(e,i),V.mount&&E()}},T=(e,t,r,s,a)=>{let i=!1,n=!1;const o={name:e};if(!r||s){F.isDirty&&(n=g.isDirty,g.isDirty=o.isDirty=R(),i=n!==o.isDirty);const r=fe(y(p,e),t);n=y(g.dirtyFields,e),r?le(g.dirtyFields,e):$(g.dirtyFields,e,!0),o.dirtyFields=g.dirtyFields,i=i||F.dirtyFields&&n!==!r}if(r){const t=y(g.touchedFields,e);t||($(g.touchedFields,e,r),o.touchedFields=g.touchedFields,i=i||F.touchedFields&&t!==r)}return i&&a&&x.state.next(o),i?o:{}},j=(t,r,s,a)=>{const i=y(g.errors,t),n=F.isValid&&J(r)&&g.isValid!==r;var u;if(e.delayError&&s?(u=()=>((e,t)=>{$(g.errors,e,t),x.state.next({errors:g.errors})})(t,s),o=e=>{clearTimeout(w),w=window.setTimeout(u,e)},o(e.delayError)):(clearTimeout(w),o=null,s?$(g.errors,t,s):le(g.errors,t)),(s?!fe(i,s):i)||!L(a)||n){const e={...a,...n&&J(r)?{isValid:r}:{},errors:g.errors,name:t};g={...g,...e},x.state.next(e)}O(!1)},P=async e=>await r.resolver(b,r.context,((e,t,r,s)=>{const a={};for(const i of e){const e=y(t,i);e&&$(a,i,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||A.mount,v,r.criteriaMode,r.shouldUseNativeValidation)),I=async(e,t,s={valid:!0})=>{for(const a in e){const i=e[a];if(i){const{_f:e,...a}=i;if(e){const a=A.array.has(e.name),n=await ue(i,b,D,r.shouldUseNativeValidation,a);if(n[e.name]&&(s.valid=!1,t))break;!t&&(y(n,e.name)?a?z(g.errors,n,e.name):$(g.errors,e.name,n[e.name]):le(g.errors,e.name))}a&&await I(a,t,s)}}return s.valid},R=(e,t)=>(e&&t&&$(b,e,t),!fe(ie(),p)),Y=(e,t,r)=>B(e,A,{...V.mount?b:f(t)?p:U(e)?{[e]:t}:t},r,t),ee=(e,t,r={})=>{const s=y(v,e);let i=t;if(s){const r=s._f;r&&(!r.disabled&&$(b,e,be(t,r)),i=X(r.ref)&&n(t)?"":t,ye(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach((e=>e.checked=e.value===i)):K(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||x.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&T(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ae(e)},te=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,o=y(v,n);!A.array.has(e)&&de(a)&&(!o||o._f)||i(a)?ee(n,a,r):te(n,a,r)}},re=(e,r,s={})=>{const a=y(v,e),i=A.array.has(e),o=q(r);$(b,e,o),i?(x.array.next({name:e,values:b}),(F.isDirty||F.dirtyFields)&&s.shouldDirty&&x.state.next({name:e,dirtyFields:pe(p,b),isDirty:R(e,o)})):!a||a._f||n(o)?ee(e,o,s):te(e,o,s),G(e,A)&&x.state.next({}),x.watch.next({name:e}),!V.mount&&t()},se=async e=>{const t=e.target;let s=t.name;const a=y(v,s);if(a){let n,u;const c=t.type?_e(a._f):l(e),d=e.type===m||e.type===h,f=!((i=a._f).mount&&(i.required||i.min||i.max||i.maxLength||i.minLength||i.pattern||i.validate))&&!r.resolver&&!y(g.errors,s)&&!a._f.deps||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(d,y(g.touchedFields,s),g.isSubmitted,k,S),p=G(s,A,d);$(b,s,c),d?(a._f.onBlur&&a._f.onBlur(e),o&&o(0)):a._f.onChange&&a._f.onChange(e);const _=T(s,c,d,!1),V=!L(_)||p;if(!d&&x.watch.next({name:s,type:e.type}),f)return F.isValid&&E(),V&&x.state.next({name:s,...p?{}:_});if(!d&&p&&x.state.next({}),O(!0),r.resolver){const{errors:e}=await P([s]),t=Ae(g.errors,v,s),r=Ae(e,v,t.name||s);n=r.error,s=r.name,u=L(e)}else n=(await ue(a,b,D,r.shouldUseNativeValidation))[s],n?u=!1:F.isValid&&(u=await I(v,!0));a._f.deps&&ae(a._f.deps),j(s,u,n,_)}var i},ae=async(e,t={})=>{let s,a;const i=N(e);if(O(!0),r.resolver){const t=await(async e=>{const{errors:t}=await P();if(e)for(const r of e){const e=y(t,r);e?$(g.errors,r,e):le(g.errors,r)}else g.errors=t;return t})(f(e)?e:i);s=L(t),a=e?!i.some((e=>y(t,e))):s}else e?(a=(await Promise.all(i.map((async e=>{const t=y(v,e);return await I(t&&t._f?{[e]:t}:t)})))).every(Boolean),(a||g.isValid)&&E()):a=s=await I(v);return x.state.next({...!U(e)||F.isValid&&s!==g.isValid?{}:{name:e},...r.resolver||!e?{isValid:s}:{},errors:g.errors,isValidating:!1}),t.shouldFocus&&!a&&H(v,(e=>e&&y(g.errors,e)),e?i:A.mount),a},ie=e=>{const t={...p,...V.mount?b:{}};return f(e)?t:U(e)?y(t,e):e.map((e=>y(t,e)))},ne=(e,t)=>({invalid:!!y((t||g).errors,e),isDirty:!!y((t||g).dirtyFields,e),isTouched:!!y((t||g).touchedFields,e),error:y((t||g).errors,e)}),oe=(e,t={})=>{for(const s of e?N(e):A.mount)A.mount.delete(s),A.array.delete(s),y(v,s)&&(t.keepValue||(le(v,s),le(b,s)),!t.keepError&&le(g.errors,s),!t.keepDirty&&le(g.dirtyFields,s),!t.keepTouched&&le(g.touchedFields,s),!r.shouldUnregister&&!t.keepDefaultValue&&le(p,s));x.watch.next({}),x.state.next({...g,...t.keepDirty?{isDirty:R()}:{}}),!t.keepIsValid&&E()},he=(e,t={})=>{let s=y(v,e);const i=J(t.disabled);return $(v,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),A.mount.add(e),s?i&&$(b,e,t.disabled?void 0:y(b,e,_e(s._f))):C(e,!0,t.value),{...i?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:Ve(t.min),max:Ve(t.max),minLength:Ve(t.minLength),maxLength:Ve(t.maxLength),pattern:Ve(t.pattern)}:{},name:e,onChange:se,onBlur:se,ref:i=>{if(i){he(e,t),s=y(v,e);const r=f(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,n=(e=>Z(e)||a(e))(r),o=s._f.refs||[];if(n?o.find((e=>e===r)):r===s._f.ref)return;$(v,e,{_f:{...s._f,...n?{refs:[...o.filter(me),r,...Array.isArray(y(p,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),C(e,!1,void 0,r)}else s=y(v,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(A.array,e)||!V.action)&&A.unMount.add(e)}}},ge=()=>r.shouldFocusError&&H(v,(e=>e&&y(g.errors,e)),A.mount),ve=(r,a={})=>{const i=r||p,n=q(i),o=r&&!L(r)?n:p;if(a.keepDefaultValues||(p=i),!a.keepValues){if(a.keepDirtyValues||s)for(const e of A.mount)y(g.dirtyFields,e)?$(o,e,y(b,e)):re(e,y(o,e));else{if(M&&f(r))for(const e of A.mount){const t=y(v,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(X(e)){const t=e.closest("form");if(t){t.reset();break}}}}v={}}b=e.shouldUnregister?a.keepDefaultValues?q(p):{}:n,x.array.next({values:o}),x.watch.next({values:o})}A={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!V.mount&&t(),V.mount=!F.isValid||!!a.keepIsValid,V.watch=!!e.shouldUnregister,x.state.next({submitCount:a.keepSubmitCount?g.submitCount:0,isDirty:a.keepDirty||a.keepDirtyValues?g.isDirty:!(!a.keepDefaultValues||fe(r,p)),isSubmitted:!!a.keepIsSubmitted&&g.isSubmitted,dirtyFields:a.keepDirty||a.keepDirtyValues?g.dirtyFields:a.keepDefaultValues&&r?pe(p,r):{},touchedFields:a.keepTouched?g.touchedFields:{},errors:a.keepErrors?g.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Fe=(e,t)=>ve(Q(e)?e(b):e,t);return Q(r.defaultValues)&&r.defaultValues().then((e=>{Fe(e,r.resetOptions),x.state.next({isLoading:!1})})),{control:{register:he,unregister:oe,getFieldState:ne,_executeSchema:P,_focusError:ge,_getWatch:Y,_getDirty:R,_updateValid:E,_removeUnmounted:()=>{for(const e of A.unMount){const t=y(v,e);t&&(t._f.refs?t._f.refs.every((e=>!me(e))):!me(t._f.ref))&&oe(e)}A.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,i=!0)=>{if(s&&r){if(V.action=!0,i&&Array.isArray(y(v,e))){const t=r(y(v,e),s.argA,s.argB);a&&$(v,e,t)}if(i&&Array.isArray(y(g.errors,e))){const t=r(y(g.errors,e),s.argA,s.argB);a&&$(g.errors,e,t),((e,t)=>{!d(y(e,t)).length&&le(e,t)})(g.errors,e)}if(F.touchedFields&&i&&Array.isArray(y(g.touchedFields,e))){const t=r(y(g.touchedFields,e),s.argA,s.argB);a&&$(g.touchedFields,e,t)}F.dirtyFields&&(g.dirtyFields=pe(p,b)),x.state.next({name:e,isDirty:R(e,t),dirtyFields:g.dirtyFields,errors:g.errors,isValid:g.isValid})}else $(b,e,t)},_getFieldArray:t=>d(y(V.mount?b:p,t,e.shouldUnregister?y(p,t,[]):[])),_reset:ve,_updateFormState:e=>{g={...g,...e}},_subjects:x,_proxyFormState:F,get _fields(){return v},get _formValues(){return b},get _stateFlags(){return V},set _stateFlags(e){V=e},get _defaultValues(){return p},get _names(){return A},set _names(e){A=e},get _formState(){return g},set _formState(e){g=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:ae,register:he,handleSubmit:(e,t)=>async s=>{s&&(s.preventDefault&&s.preventDefault(),s.persist&&s.persist());let a=q(b);if(x.state.next({isSubmitting:!0}),r.resolver){const{errors:e,values:t}=await P();g.errors=e,a=t}else await I(v);le(g.errors,"root"),L(g.errors)?(x.state.next({errors:{}}),await e(a,s)):(t&&await t({...g.errors},s),ge()),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:L(g.errors),submitCount:g.submitCount+1,errors:g.errors})},watch:(e,t)=>Q(e)?x.watch.subscribe({next:r=>e(Y(void 0,t),r)}):Y(e,t,!0),setValue:re,getValues:ie,reset:Fe,resetField:(e,t={})=>{y(v,e)&&(f(t.defaultValue)?re(e,y(p,e)):(re(e,t.defaultValue),$(p,e,t.defaultValue)),t.keepTouched||le(g.touchedFields,e),t.keepDirty||(le(g.dirtyFields,e),g.isDirty=t.defaultValue?R(e,y(p,e)):R()),t.keepError||(le(g.errors,e),F.isValid&&E()),x.state.next({...g}))},clearErrors:e=>{e&&N(e).forEach((e=>le(g.errors,e))),x.state.next({errors:e?g.errors:{}})},unregister:oe,setError:(e,t,r)=>{const s=(y(v,e,{_f:{}})._f||{}).ref;$(g.errors,e,{...t,ref:s}),x.state.next({name:e,errors:g.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},setFocus:(e,t={})=>{const r=y(v,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ne}}function xe(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Fe(e,(()=>a((e=>({...e}))))),formState:r});const i=t.current.control;return i._options=e,j({subject:i._subjects.state,next:e=>{T(e,i._proxyFormState,i._updateFormState,!0)&&a({...i._formState})}}),s.useEffect((()=>{i._stateFlags.mount||(i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()})),s.useEffect((()=>{e.values&&!fe(e.values,i._defaultValues)&&i._reset(e.values,i._options.resetOptions)}),[e.values,i]),s.useEffect((()=>{r.submitCount&&i._focusError()}),[i,r.submitCount]),t.current.formState=C(r,i),t.current}}}]);