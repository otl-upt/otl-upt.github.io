import{S as O,i as U,s as I,e as _,a as N,b as d,c as k,d as g,f as V,n as T,g as S,r as se,t as P,h as A,j as ae,u as ne,k as re,l as ie,m as oe,o as ce,p as j,q as ue,v as L,w as fe,x as C,y as R,z}from"./vendor.svelte-652fda4d.js";import{l as D,a as de}from"./vendor.svelte-spa-router-477516da.js";import{u as he}from"./vendor.unzipit-73f5740a.js";import{l as le}from"./vendor.lz-string-35001fa0.js";import{P as ge,I as me}from"./vendor.@azure-8209df3e.js";function _e(s){let e,a,t,l,n,r,o,u,v;return{c(){e=_("nav"),a=_("div"),t=_("a"),t.innerHTML='<img src="upt-navy_0.png" height="32px" alt="logo" class="rounded border border-light"/>',l=N(),n=_("div"),r=_("div"),o=_("a"),o.textContent="Billing",d(t,"class","navbar-brand"),d(t,"href","/"),d(o,"class","nav-link"),d(o,"href","/"),d(r,"class","navbar-nav ms-auto"),d(n,"class","collapse navbar-collapse"),d(n,"id","navbarsExample02"),d(a,"class","container-fluid"),d(e,"class","navbar navbar-expand navbar-light fixed-top bg-light")},m(w,M){k(w,e,M),g(e,a),g(a,t),g(a,l),g(a,n),g(n,r),g(r,o),u||(v=[V(D.call(null,t)),V(D.call(null,o)),V(de.call(null,o,"/"))],u=!0)},p:T,i:T,o:T,d(w){w&&S(e),u=!1,se(v)}}}class Xe extends O{constructor(e){super(),U(this,e,null,_e,I,{})}}function ve(s){let e,a,t,l,n;return{c(){e=_("div"),a=_("div"),a.innerHTML='<div class="bounce1 svelte-pi9n6g"></div> <div class="bounce2 svelte-pi9n6g"></div> <div class="bounce3 svelte-pi9n6g"></div>',t=N(),l=_("div"),n=P(s[0]),d(a,"class","spinner svelte-pi9n6g"),d(l,"class","text-center display-6 my-4"),d(e,"class","absolute-center svelte-pi9n6g")},m(r,o){k(r,e,o),g(e,a),g(e,t),g(e,l),g(l,n)},p(r,[o]){o&1&&A(n,r[0])},i:T,o:T,d(r){r&&S(e)}}}function be(s,e,a){let{message:t="Processing..."}=e;return s.$$set=l=>{"message"in l&&a(0,t=l.message)},[t]}class Ze extends O{constructor(e){super(),U(this,e,be,ve,I,{message:0})}}function q(s,e,a){const t=s.slice();return t[5]=e[a],t}function pe(s){let e,a;return{c(){e=_("span"),a=P(s[1])},m(t,l){k(t,e,l),g(e,a)},p(t,l){l&2&&A(a,t[1])},d(t){t&&S(e)}}}function we(s){let e,a=j(s[1]),t=[];for(let l=0;l<a.length;l+=1)t[l]=H(q(s,a,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=ue()},m(l,n){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(l,n);k(l,e,n)},p(l,n){if(n&2){a=j(l[1]);let r;for(r=0;r<a.length;r+=1){const o=q(l,a,r);t[r]?t[r].p(o,n):(t[r]=H(o),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=a.length}},d(l){l&&S(e),L(t,l)}}}function H(s){let e,a=s[5]+"",t;return{c(){e=_("span"),t=P(a)},m(l,n){k(l,e,n),g(e,t)},p(l,n){n&2&&a!==(a=l[5]+"")&&A(t,a)},d(l){l&&S(e)}}}function ye(s){let e,a,t,l,n,r,o,u,v=new Date(s[2]).toLocaleString()+"",w,M,b;function F(i,m){return m&2&&(l=null),l==null&&(l=!!Array.isArray(i[1])),l?we:pe}let p=F(s,-1),y=p(s);const c=s[4].default,f=ae(c,s,s[3],null);return{c(){e=_("div"),a=_("div"),t=_("div"),y.c(),n=N(),f&&f.c(),r=N(),o=_("div"),u=P("Last Updated: "),w=P(v),d(t,"class","card-header bg-light text-dark d-flex justify-content-between"),d(o,"class","card-footer text-center text-muted text-small justify-content-between"),d(a,"class","card"),d(e,"class",M="col-lg-"+s[0]+" g-2 g-lg-4")},m(i,m){k(i,e,m),g(e,a),g(a,t),y.m(t,null),g(a,n),f&&f.m(a,null),g(a,r),g(a,o),g(o,u),g(o,w),b=!0},p(i,[m]){p===(p=F(i,m))&&y?y.p(i,m):(y.d(1),y=p(i),y&&(y.c(),y.m(t,null))),f&&f.p&&(!b||m&8)&&ne(f,c,i,i[3],b?ie(c,i[3],m,null):re(i[3]),null),(!b||m&4)&&v!==(v=new Date(i[2]).toLocaleString()+"")&&A(w,v),(!b||m&1&&M!==(M="col-lg-"+i[0]+" g-2 g-lg-4"))&&d(e,"class",M)},i(i){b||(oe(f,i),b=!0)},o(i){ce(f,i),b=!1},d(i){i&&S(e),y.d(),f&&f.d(i)}}}function Me(s,e,a){let{$$slots:t={},$$scope:l}=e,{size:n,title:r,tds:o}=e;return s.$$set=u=>{"size"in u&&a(0,n=u.size),"title"in u&&a(1,r=u.title),"tds"in u&&a(2,o=u.tds),"$$scope"in u&&a(3,l=u.$$scope)},[n,r,o,l,t]}class xe extends O{constructor(e){super(),U(this,e,Me,ye,I,{size:0,title:1,tds:2})}}function ke(s){let e;return{c(){e=_("div"),e.innerHTML='<div class="alert alert-warning w-75 mx-auto" role="alert"><h5 class="alert-heading">KPI data is unavailable at this time.</h5> <p>Data required to display this card was not available, please try again later. This may ocurr during normal use if data for the KPI is being updated. If this error persists, please notify the service desk.</p> <hr/> <p class="mb-0">Please provide a screenshot if reporting this error to the service desk.</p></div>',d(e,"class","d-flex justify-content-center p-4 m-4")},m(a,t){k(a,e,t)},p:T,i:T,o:T,d(a){a&&S(e)}}}function Se(s,e,a){let{error:t}=e;return console.log(t),s.$$set=l=>{"error"in l&&a(0,t=l.error)},[t]}class $e extends O{constructor(e){super(),U(this,e,Se,ke,I,{error:0})}}function Te(s){let e,a,t,l;return{c(){e=_("div"),a=_("div"),t=_("span"),l=P(s[0]),d(t,"class","visually-hidden"),d(a,"class","spinner-border"),d(a,"role","status"),d(e,"class","d-flex justify-content-center p-4 m-4")},m(n,r){k(n,e,r),g(e,a),g(a,t),g(t,l)},p(n,[r]){r&1&&A(l,n[0])},i:T,o:T,d(n){n&&S(e)}}}function Fe(s,e,a){let{msg:t="Loading..."}=e;return s.$$set=l=>{"msg"in l&&a(0,t=l.msg)},[t]}class et extends O{constructor(e){super(),U(this,e,Fe,Te,I,{msg:0})}}function Pe(s){let e,a,t,l;return{c(){e=_("button"),a=P(s[1]),d(e,"class","btn btn-sm btn-primary")},m(n,r){k(n,e,r),g(e,a),t||(l=fe(e,"click",s[2]),t=!0)},p(n,[r]){r&2&&A(a,n[1])},i:T,o:T,d(n){n&&S(e),t=!1,l()}}}function Ce(s,e,a){let{text:t="Details"}=e,{show:l=!1}=e;const n=()=>{a(0,l=!l)};return s.$$set=r=>{"text"in r&&a(1,t=r.text),"show"in r&&a(0,l=r.show)},[l,t,n]}class tt extends O{constructor(e){super(),U(this,e,Ce,Pe,I,{text:1,show:0})}}const lt=(s,e,a)=>Array.from(s.map(t=>({key:t[e],val:parseFloat(t[a])})).reduce((t,{key:l,val:n})=>t.set(l,(t.get(l)||0)+n),new Map),([t,l])=>({key:t,val:l})).sort((t,l)=>l.val-t.val),st=(s,e,a)=>Array.from(s.map(t=>({key:t[e],val:parseFloat(t[a])})).reduce((t,{key:l})=>t.set(l,(t.get(l)||0)+1),new Map),([t,l])=>({key:t,val:l})).sort((t,l)=>l.val-t.val),at=(s,e,...a)=>s.map(t=>t[e]).filter((t,l,n)=>n.indexOf(t)==l).map(t=>({[e]:t})).map(t=>(a.forEach(l=>t[l]=s.filter(n=>n[e]===t[e]).map(n=>n[l]).reduce((n,r)=>Number(n)+Number(r))),t)),J=s=>{const e=new Date(s);return Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())},nt=(s,e)=>Math.floor((J(e)-J(s))/(1e3*60*60*24)),je=(s,e,a=".",t=",")=>{s=(s+"").replace(",","").replace(" ","");var l=isFinite(+s)?+s:0,n=isFinite(+e)?Math.abs(e):0,r="",o=function(u,v){var w=Math.pow(10,v);return""+Math.round(u*w)/w};return r=(n?o(l,n):""+Math.round(l)).split("."),r[0].length>3&&(r[0]=r[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,t)),(r[1]||"").length<n&&(r[1]=r[1]||"",r[1]+=new Array(n-r[1].length+1).join("0")),r.join(a)},rt=(s,e)=>{var a,t;return e!==void 0&&((t=(a=s==null?void 0:s.EbeV1)==null?void 0:a.MissingPaperworkV1)==null?void 0:t.some(l=>l.ord_hdrnumber.toString()===e.toString().replace(/\D/g,"")))},it=(s,e)=>{var a,t;return e!==void 0&&((t=(a=s==null?void 0:s.EbeV1)==null?void 0:a.MissingPaperworkV1)==null?void 0:t.filter(l=>l.hasOne).some(l=>l.ord_hdrnumber.toString()===e.toString().replace(/\D/g,"")))},ot=(s,e)=>{var a,t;return e!==void 0&&((t=(a=s==null?void 0:s.EbeV1)==null?void 0:a.MissingPaperworkV1)==null?void 0:t.filter(l=>l.hasMultiplePages).some(l=>l.ord_hdrnumber.toString()===e.toString().replace(/\D/g,"")))};function K(s,e,a){const t=s.slice();return t[13]=e[a],t[15]=a,t}function G(s,e,a){const t=s.slice();return t[16]=e[a],t}function Y(s,e,a){const t=s.slice();return t[13]=e[a],t[15]=a,t}function Q(s,e,a){const t=s.slice();return t[20]=e[a],t[15]=a,t}function W(s){let e,a;return{c(){e=_("caption"),a=P(s[2]),d(e,"class","text-center")},m(t,l){k(t,e,l),g(e,a)},p(t,l){l&4&&A(a,t[2])},d(t){t&&S(e)}}}function X(s){let e,a=s[20]+"",t;return{c(){e=_("th"),t=P(a),d(e,"class","svelte-1srlyga"),C(e,"text-start",s[15]===0)},m(l,n){k(l,e,n),g(e,t)},p(l,n){n&1&&a!==(a=l[20]+"")&&A(t,a)},d(l){l&&S(e)}}}function Z(s){var r,o;let e,a=(s[6]?s[9](((r=s[13])==null?void 0:r.cellvalue)||s[13]):((o=s[13])==null?void 0:o.cellvalue)||s[13])+"",t,l,n;return{c(){var u;e=_("td"),t=P(a),d(e,"class",l=R(`${(u=s[13])!=null&&u.cellclass?s[13].cellclass+" no-override":""}`)+" svelte-1srlyga"),d(e,"myval",n=s[0][s[15]]),C(e,"text-start",s[15]===0)},m(u,v){k(u,e,v),g(e,t)},p(u,v){var w,M,b;v&72&&a!==(a=(u[6]?u[9](((w=u[13])==null?void 0:w.cellvalue)||u[13]):((M=u[13])==null?void 0:M.cellvalue)||u[13])+"")&&A(t,a),v&8&&l!==(l=R(`${(b=u[13])!=null&&b.cellclass?u[13].cellclass+" no-override":""}`)+" svelte-1srlyga")&&d(e,"class",l),v&1&&n!==(n=u[0][u[15]])&&d(e,"myval",n),v&8&&C(e,"text-start",u[15]===0)},d(u){u&&S(e)}}}function x(s){let e,a,t=j(Object.values(s[7](s[16]))),l=[];for(let n=0;n<t.length;n+=1)l[n]=Z(Y(s,t,n));return{c(){e=_("tr");for(let n=0;n<l.length;n+=1)l[n].c();d(e,"class",a="text-end "+s[16].rowclass+" svelte-1srlyga")},m(n,r){k(n,e,r);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null)},p(n,r){if(r&713){t=j(Object.values(n[7](n[16])));let o;for(o=0;o<t.length;o+=1){const u=Y(n,t,o);l[o]?l[o].p(u,r):(l[o]=Z(u),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}r&8&&a!==(a="text-end "+n[16].rowclass+" svelte-1srlyga")&&d(e,"class",a)},d(n){n&&S(e),L(l,n)}}}function $(s){let e,a=j(s[8]()),t=[];for(let l=0;l<a.length;l+=1)t[l]=ee(K(s,a,l));return{c(){e=_("tr");for(let l=0;l<t.length;l+=1)t[l].c();d(e,"class","text-end table-dark svelte-1srlyga")},m(l,n){k(l,e,n);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(l,n){if(n&1281){a=j(l[8]());let r;for(r=0;r<a.length;r+=1){const o=K(l,a,r);t[r]?t[r].p(o,n):(t[r]=ee(o),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=a.length}},d(l){l&&S(e),L(t,l)}}}function ee(s){let e,a=s[10](s[13],s[15])+"",t,l;return{c(){e=_("td"),t=P(a),d(e,"myval",l=s[0][s[15]]),d(e,"class","svelte-1srlyga"),C(e,"text-start",s[15]===0)},m(n,r){k(n,e,r),g(e,t)},p(n,r){r&1&&l!==(l=n[0][n[15]])&&d(e,"myval",l)},d(n){n&&S(e)}}}function Ae(s){let e,a,t,l,n,r,o,u,v,w,M,b=s[2]!=""&&W(s),F=j(s[0]),p=[];for(let i=0;i<F.length;i+=1)p[i]=X(Q(s,F,i));let y=j(s[3]),c=[];for(let i=0;i<y.length;i+=1)c[i]=x(G(s,y,i));let f=s[5]&&$(s);return{c(){e=_("div"),e.textContent=`If you are viewing this on a tablet you can rotate your device to view a table
  instead.`,a=N(),t=_("div"),l=_("table"),b&&b.c(),n=N(),r=_("thead"),o=_("tr");for(let i=0;i<p.length;i+=1)p[i].c();u=N(),v=_("tbody");for(let i=0;i<c.length;i+=1)c[i].c();w=N(),f&&f.c(),d(e,"class","table-alert alert alert-info"),C(e,"twist",s[1]),d(o,"class","table-light text-end svelte-1srlyga"),d(r,"class","svelte-1srlyga"),d(v,"class","svelte-1srlyga"),d(l,"class",M=R(s[4])+" svelte-1srlyga"),C(l,"caption-top",!0),d(t,"class","table-responsive m-0 mt-2 m-lg-4"),C(t,"twist",s[1])},m(i,m){k(i,e,m),k(i,a,m),k(i,t,m),g(t,l),b&&b.m(l,null),g(l,n),g(l,r),g(r,o);for(let h=0;h<p.length;h+=1)p[h]&&p[h].m(o,null);g(l,u),g(l,v);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(v,null);g(v,w),f&&f.m(v,null)},p(i,[m]){if(m&2&&C(e,"twist",i[1]),i[2]!=""?b?b.p(i,m):(b=W(i),b.c(),b.m(l,n)):b&&(b.d(1),b=null),m&1){F=j(i[0]);let h;for(h=0;h<F.length;h+=1){const E=Q(i,F,h);p[h]?p[h].p(E,m):(p[h]=X(E),p[h].c(),p[h].m(o,null))}for(;h<p.length;h+=1)p[h].d(1);p.length=F.length}if(m&713){y=j(i[3]);let h;for(h=0;h<y.length;h+=1){const E=G(i,y,h);c[h]?c[h].p(E,m):(c[h]=x(E),c[h].c(),c[h].m(v,w))}for(;h<c.length;h+=1)c[h].d(1);c.length=y.length}i[5]?f?f.p(i,m):(f=$(i),f.c(),f.m(v,null)):f&&(f.d(1),f=null),m&16&&M!==(M=R(i[4])+" svelte-1srlyga")&&d(l,"class",M),m&16&&C(l,"caption-top",!0),m&2&&C(t,"twist",i[1])},i:T,o:T,d(i){i&&(S(e),S(a),S(t)),b&&b.d(),L(p,i),L(c,i),f&&f.d()}}}function Ne(s,e,a){let{twist:t=!0}=e,{caption:l=""}=e;const n=c=>{if(c){const{rowclass:f,...i}=c;return i}else return[]};let{rows:r}=e,{headers:o}=e;o=o||Object.keys(n(r[0]));let{tableclass:u="table table-hover table-borderless table-sm align-middle"}=e,{showTotals:v=!1}=e;const w=()=>o.map((c,f)=>f===0?"Total":new Intl.NumberFormat("en-US",{style:"decimal"}).format(r.map(i=>{var m;return((m=i[c])==null?void 0:m.cellvalue)||i[c]}).map(i=>`${i}`.split("(")[0]).map(i=>isNaN(i)?0:Number(i)).reduce((i,m)=>i+m)));let{showVariance:M=!1}=e;const b=(c,f)=>`${c}${f===0?"":" ("+new Intl.NumberFormat("en-US",{style:"decimal",signDisplay:"exceptZero"}).format(r.map(i=>Object.values(i)).map(i=>i[f].cellvalue).map(i=>`${i}`.split("(")[1]).map(i=>`${i}`.replace(")","")).map(i=>isNaN(i)?0:Number(i)).reduce((i,m)=>i+m))+")"}`;let{fmtMoney:F=!1}=e;const p=c=>{if(isNaN(c))return c;{let f="$",i=Math.abs(c);return i>=1e6?f+=(i/1e3/1e3).toFixed(2)+"M":i>=1e3?f+=+(i/1e3).toFixed(2)+"K":f+=+je(i),c<0&&(f=`(${f})`),c===0&&(f="-"),f}},y=(c,f)=>F?p(c):M?b(c,f):c;return s.$$set=c=>{"twist"in c&&a(1,t=c.twist),"caption"in c&&a(2,l=c.caption),"rows"in c&&a(3,r=c.rows),"headers"in c&&a(0,o=c.headers),"tableclass"in c&&a(4,u=c.tableclass),"showTotals"in c&&a(5,v=c.showTotals),"showVariance"in c&&a(11,M=c.showVariance),"fmtMoney"in c&&a(6,F=c.fmtMoney)},[o,t,l,r,u,v,F,n,w,p,y,M]}class ct extends O{constructor(e){super(),U(this,e,Ne,Ae,I,{twist:1,caption:2,rows:3,headers:0,tableclass:4,showTotals:5,showVariance:11,fmtMoney:6})}}const Oe="https://graph.microsoft.com/v1.0/drives/b!Up4Du06g6UmFLFC2pNFM4H1p3oaPI9BFm2cBaJXJLUAPtpaJva0iQbeS1uYffokM/root/children?$select=name,lastModifiedDateTime,content.downloadUrl";async function Ue(s,e){const a=new Headers,t=`Bearer ${e}`;a.append("Authorization",t);const l={method:"GET",headers:a};try{return(await(await fetch(s,l)).json()).value}catch(n){return console.error(n)}}const Ie=z(null),Be=async(s,e)=>{window.dbg&&console.log("updating cache for",s),localStorage.setItem(s,le.compress(JSON.stringify(e)))},Ee=async s=>(window.dbg&&console.log("using cache for",s),JSON.parse(le.decompress(localStorage.getItem(s)))),Le=async s=>{const{entries:e}=await he(s["@microsoft.graph.downloadUrl"]);let t=await e[0].json();return s.json=t,Be(s.name,s),window.dbg&&console.log("using fresh data for",s.name),t},ut=async s=>{let e=await Ue(Oe,s);const a=Object.keys(localStorage).filter(n=>n.endsWith(".zip")),t=e.map(n=>n.name);a.filter(n=>!t.includes(n)).forEach(n=>{window.dbg&&console.log("removing old cache entry",n),localStorage.removeItem(n)});let l=await Promise.all(e.map(n=>Re(n).catch(async r=>{console.log(r);try{return Le(n)}catch(o){return console.log(o)}})));Ie.set(Object.assign(...l)),window.dbg&&(window.json=Object.assign(...l))},Re=async s=>{try{let e=await Ee(s.name),a=e.json;return s.lastModifiedDateTime===e.lastModifiedDateTime?Promise.resolve(a):(window.dbg&&console.log("cache outdated for",s.name),Promise.reject("cache outdated"))}catch{return window.dbg&&console.log("cache missing for",s.name),Promise.reject("missing cache")}},ft=(s,e,a="data")=>{ze(Ve(s,e),a+".csv","text/csv")},Ve=(s,e)=>{const a=l=>`"${l.join('","')}"`;let t=[];return t.push(e||Object.keys(s[0])),s.forEach(l=>t.push(a(Object.values(l)))),t.join(`
`)},ze=(s,e,a)=>{var t=new Blob([s],{type:a});if(navigator.msSaveBlob)navigator.msSaveBlob(t,e);else{var l=document.createElement("a");if(l.download!==void 0){var n=URL.createObjectURL(t);l.setAttribute("href",n),l.setAttribute("download",e),l.style.display="none",document.body.appendChild(l),l.click(),document.body.removeChild(l)}}},De={auth:{clientId:"a125bb61-40db-41e4-aa30-3c67cac512e6",authority:"https://login.microsoftonline.com/2b89d8ed-9ec4-4e5e-b552-71c1089bc548",redirectUri:location.origin},cache:{cacheLocation:"localStorage",storeAuthStateInCookie:!1}},qe={scopes:["User.Read"]},te={scopes:["User.Read","Files.Read.All"]},He=z(null),Je=z(null),B=new ge(De);await B.initialize();const dt=async()=>B.handleRedirectPromise().then(()=>B.getAllAccounts()[0]??B.loginRedirect(qe)).then(s=>(s&&Je.set(s.username),s)).then(s=>s&&B.acquireTokenSilent({...te,account:s}).then(e=>He.set(e.accessToken)).catch(e=>e instanceof me?B.acquireTokenRedirect({...te,account:s}):Promise.reject(e)));export{xe as C,Xe as N,Ze as S,tt as T,ft as a,ct as b,ot as c,Ie as d,nt as e,st as f,lt as g,it as h,rt as i,$e as j,et as k,dt as l,He as m,je as n,ut as o,at as s};
