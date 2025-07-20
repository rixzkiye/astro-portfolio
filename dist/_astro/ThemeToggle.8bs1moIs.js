import{r as s}from"./index.BVOCwoKb.js";var l={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function v(){if(h)return u;h=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,n,o){var d=null;if(o!==void 0&&(d=""+o),n.key!==void 0&&(d=""+n.key),"key"in n){o={};for(var i in n)i!=="key"&&(o[i]=n[i])}else o=n;return n=o.ref,{$$typeof:e,type:a,key:d,ref:n!==void 0?n:null,props:o}}return u.Fragment=t,u.jsx=r,u.jsxs=r,u}var m;function C(){return m||(m=1,l.exports=v()),l.exports}var c=C();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,a)=>a?a.toUpperCase():r.toLowerCase()),p=e=>{const t=b(e);return t.charAt(0).toUpperCase()+t.slice(1)},k=(...e)=>e.filter((t,r,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===r).join(" ").trim(),y=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:d,...i},x)=>s.createElement("svg",{ref:x,...E,width:t,height:t,stroke:e,strokeWidth:a?Number(r)*24/Number(t):r,className:k("lucide",n),...!o&&!y(i)&&{"aria-hidden":"true"},...i},[...d.map(([g,w])=>s.createElement(g,w)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(e,t)=>{const r=s.forwardRef(({className:a,...n},o)=>s.createElement(T,{ref:o,iconNode:t,className:k(`lucide-${R(p(e))}`,`lucide-${e}`,a),...n}));return r.displayName=p(e),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],_=f("moon",j);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],M=f("sun",A);function L(){if(typeof window>"u")return"light";const e=localStorage.getItem("theme");return e||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}function $(e){typeof window>"u"||(localStorage.setItem("theme",e),document.documentElement.classList.toggle("dark",e==="dark"))}function S(){const[e,t]=s.useState("light");s.useEffect(()=>{t(L())},[]);const r=()=>{const a=e==="light"?"dark":"light";$(a),t(a)};return c.jsx("button",{onClick:r,className:"p-2 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-light-border dark:hover:bg-dark-border transition-all duration-200","aria-label":"Toggle theme",children:e==="light"?c.jsx(_,{className:"w-5 h-5 text-light-text dark:text-dark-text"}):c.jsx(M,{className:"w-5 h-5 text-light-text dark:text-dark-text"})})}export{S as default};
