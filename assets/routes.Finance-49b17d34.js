import{S as G,i as M,s as S,C as h,D as w,m,o as g,E as b,F as j,G as F,q as N,c as v,H as U,g as B,z as Y,n as V,e as y,a as C,b as k,d as p,w as I,K as q,L as A,r as de,t as H,h as se,p as O,v as ie}from"./vendor.svelte-3e68128c.js";import{m as ge,l as $e,L as pe,C as J,d as z,a as Q,o as _e,b as X,c as ue,p as he,n as fe,e as we,k as be}from"./lib-0f2b3b81.js";const ke=async o=>{const e=o.FinanceV5.WeekdayRevenueV2[0],n=Object.keys(e).map(i=>ge[i.split("-")[1]-1]),r=Object.values(e).map(i=>isNaN(i)?0:i),l=pe,c={labels:n,datasets:[{label:"Avg",backgroundColor:l,borderColor:l,data:r}]},u=$e();return u.scales.y.min=25e4,{type:"bar",data:c,options:u}};function ye(o){let t,s;return t=new Q({props:{error:o[5]}}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p(e,n){const r={};n&2&&(r.error=e[5]),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function ve(o){let t,s;return t=new _e({props:{config:o[4]}}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p(e,n){const r={};n&2&&(r.config=e[4]),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Be(o){let t,s;return t=new X({}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p:V,i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Ce(o){let t,s,e,n={ctx:o,current:null,token:null,hasCatch:!0,pending:Be,then:ve,catch:ye,value:4,error:5,blocks:[,,,]};return F(s=o[3](o[1]),n),{c(){t=N(),n.block.c()},m(r,l){v(r,t,l),n.block.m(r,n.anchor=l),n.mount=()=>t.parentNode,n.anchor=t,e=!0},p(r,l){o=r,n.ctx=o,l&2&&s!==(s=o[3](o[1]))&&F(s,n)||U(n,o,l)},i(r){e||(m(n.block),e=!0)},o(r){for(let l=0;l<3;l+=1){const a=n.blocks[l];g(a)}e=!1},d(r){r&&B(t),n.block.d(r),n.token=null,n=null}}}function Te(o){let t,s;return t=new J({props:{size:De,title:Re,tds:o[0],$$slots:{default:[Ce]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p(e,[n]){const r={};n&1&&(r.tds=e[0]),n&66&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}const De=12,Re="Average Weekday Revenue by Month";function Ve(o,t,s){let e,n;j(o,z,a=>s(1,n=a));const r=Y(new Date);return j(o,r,a=>s(0,e=a)),[e,n,r,async a=>{const u=a.FinanceV5,i=await ke(a);return r.set(u.tds),i}]}class je extends G{constructor(t){super(),M(this,t,Ve,Te,S,{})}}function Ge(o){let t,s;return t=new Q({props:{error:o[5]}}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p(e,n){const r={};n&2&&(r.error=e[5]),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Me(o){let t,s;return t=new ue({props:{rows:o[4],showTotals:!0,fmtMoney:!0,twist:!1}}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p(e,n){const r={};n&2&&(r.rows=e[4]),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Se(o){let t,s;return t=new X({}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p:V,i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Le(o){let t,s,e,n={ctx:o,current:null,token:null,hasCatch:!0,pending:Se,then:Me,catch:Ge,value:4,error:5,blocks:[,,,]};return F(s=o[3](o[1]),n),{c(){t=N(),n.block.c()},m(r,l){v(r,t,l),n.block.m(r,n.anchor=l),n.mount=()=>t.parentNode,n.anchor=t,e=!0},p(r,l){o=r,n.ctx=o,l&2&&s!==(s=o[3](o[1]))&&F(s,n)||U(n,o,l)},i(r){e||(m(n.block),e=!0)},o(r){for(let l=0;l<3;l+=1){const a=n.blocks[l];g(a)}e=!1},d(r){r&&B(t),n.block.d(r),n.token=null,n=null}}}function Fe(o){let t,s;return t=new J({props:{size:Ne,title:We,tds:o[0],$$slots:{default:[Le]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p(e,[n]){const r={};n&1&&(r.tds=e[0]),n&66&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}const Ne=12,We="Safety Related Expenses - YTD";function ze(o,t,s){let e,n;j(o,z,a=>s(1,n=a));const r=Y(new Date);return j(o,r,a=>s(0,e=a)),[e,n,r,async a=>{const u=a.FinanceV5,i=u.SafetyExpensesV1;return r.set(u.tds),i.map(f=>({Terminal:f.Terminal,"Workers Comp":f.WorkersCompensation,Insurance:f.RiskInsurance,"Wreck & Repairs":f.WreckRepairs,"Losses & Damages":f.LossesAndDamages}))}]}class Ee extends G{constructor(t){super(),M(this,t,ze,Fe,S,{})}}function Ie(o){let t,s;return t=new ue({props:{rows:o[0],tableclass:"smaller-text m-0 mt-2 text-nowrap table table-bordered table-sm table-hover small w-90"}}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p:V,i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Oe(o,t,s){let e;j(o,z,d=>s(3,e=d));let{showBy:n}=t,{showByVal:r}=t;const u=e.FinanceV5.MissingGallonsV1.filter(d=>d[n]===r),i=n==="Terminal"?"BillTo":"Terminal",D=he(u,{[i]:"asc",LostRev:"desc"}).map(d=>({[i]:d[i],Number:d.Order,Ship:d.Ship,"Ship City":d["Ship City"],Dest:d.Dest,"Dest City":d["Dest City"],"Split Drops":d["Split Drops"],Date:new Date(d.Date).toLocaleDateString("en-US",{month:"short",day:"numeric"}),Gas:d.Gas,Dsl:d.Dsl,Total:d.Dsl+d.Gas,Driver:d.Driver,LostRev:`$${d.LostRev.toFixed(2)}`,rowclass:d.Gas>0&&d.Dsl>0?"bg-secondary text-white":""}));return o.$$set=d=>{"showBy"in d&&s(1,n=d.showBy),"showByVal"in d&&s(2,r=d.showByVal)},[D,n,r]}class qe extends G{constructor(t){super(),M(this,t,Oe,Ie,S,{showBy:1,showByVal:2})}}function re(o){let t,s;return t=new qe({props:{showBy:o[0],showByVal:o[2]}}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p(e,n){const r={};n&1&&(r.showBy=e[0]),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Ae(o){let t,s,e,n,r,l,a,c,u,i=o[1]&&re(o);return{c(){t=y("div"),s=y("div"),s.textContent=`${o[2]}`,e=C(),n=y("div"),n.textContent=`${o[3]}`,r=C(),i&&i.c(),l=N(),k(s,"class","col-6"),k(n,"class","col-6 text-end"),k(t,"class","row p-2 x svelte-1qqlkmb")},m(f,$){v(f,t,$),p(t,s),p(t,e),p(t,n),v(f,r,$),i&&i.m(f,$),v(f,l,$),a=!0,c||(u=I(t,"click",o[5]),c=!0)},p(f,[$]){f[1]?i?(i.p(f,$),$&2&&m(i,1)):(i=re(f),i.c(),m(i,1),i.m(l.parentNode,l)):i&&(q(),g(i,1,1,()=>{i=null}),A())},i(f){a||(m(i),a=!0)},o(f){g(i),a=!1},d(f){f&&(B(t),B(r),B(l)),i&&i.d(f),c=!1,u()}}}function Ke(o,t,s){let{row:e}=t,{showBy:n}=t;const r=e[0],l=`$${fe(e[1],2)}`;let a=!1;const c=()=>s(1,a=!a);return o.$$set=u=>{"row"in u&&s(4,e=u.row),"showBy"in u&&s(0,n=u.showBy)},[n,a,r,l,e,c]}class me extends G{constructor(t){super(),M(this,t,Ke,Ae,S,{row:4,showBy:0})}}function Pe(o){let t,s,e,n,r,l,a,c;return{c(){t=y("div"),s=y("button"),s.textContent="By Terminal",e=C(),n=y("button"),n.textContent="By BillTo",r=C(),l=y("button"),l.textContent="Download CSV",k(s,"type","button"),k(s,"class","btn btn-outline-primary"),k(n,"type","button"),k(n,"class","btn btn-outline-primary"),k(l,"type","button"),k(l,"class","btn btn-outline-primary"),k(t,"class","btn-group m-2"),k(t,"role","group")},m(u,i){v(u,t,i),p(t,s),p(t,e),p(t,n),p(t,r),p(t,l),a||(c=[I(s,"click",o[0]),I(n,"click",o[1]),I(l,"click",o[2])],a=!0)},p:V,i:V,o:V,d(u){u&&B(t),a=!1,de(c)}}}function He(o,t,s){let e;j(o,z,$=>s(5,e=$));let{onChange:n}=t,r="Terminal";const c=e.FinanceV5.MissingGallonsV1,u=()=>{s(4,r="Terminal")},i=()=>{s(4,r="BillTo")},f=()=>{we(c.map($=>({...$,Date:$.Date.slice(0,16).replace("T"," ")})),null,"Missing Gallons")};return o.$$set=$=>{"onChange"in $&&s(3,n=$.onChange)},o.$$.update=()=>{o.$$.dirty&24&&n(r)},[u,i,f,n,r]}class Ue extends G{constructor(t){super(),M(this,t,He,Pe,S,{onChange:3})}}const Ye=async o=>{const t=l=>be(r,l,"LostRev").map(a=>Object.values(a)),s=()=>fe(r.map(l=>l.LostRev).reduce((l,a)=>l+a),2),r=o.FinanceV5.MissingGallonsV1;return{rowsByTerminal:t("Terminal"),rowsByBillTo:t("BillTo"),rowsTotal:s()}};function oe(o,t,s){const e=o.slice();return e[7]=t[s],e}function le(o,t,s){const e=o.slice();return e[7]=t[s],e}function Je(o){let t,s;return t=new Q({props:{error:o[12]}}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p(e,n){const r={};n&4&&(r.error=e[12]),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function Qe(o){let t,s,e,n,r,l,a,c,u,i,f,$,D,d,Z,W,x,E=o[6].rowsTotal+"",K,L;t=new Ue({props:{onChange:o[5]}});const ee=[Ze,Xe],R=[];function te(_,T){return _[0]==="Terminal"?0:1}return i=te(o),f=R[i]=ee[i](o),{c(){h(t.$$.fragment),s=C(),e=y("div"),n=y("div"),r=y("div"),l=H(o[0]),a=C(),c=y("div"),c.textContent="Lost Revenue",u=C(),f.c(),$=C(),D=y("div"),d=y("div"),d.textContent="Total",Z=C(),W=y("div"),x=H("$"),K=H(E),k(r,"class","col-6"),k(c,"class","col-6 text-end"),k(n,"class","row bg-light p-2 fw-bold"),k(d,"class","col-6"),k(W,"class","col-6 text-end"),k(D,"class","row bg-dark text-light p-2"),k(e,"class","container mb-2")},m(_,T){w(t,_,T),v(_,s,T),v(_,e,T),p(e,n),p(n,r),p(r,l),p(n,a),p(n,c),p(e,u),R[i].m(e,null),p(e,$),p(e,D),p(D,d),p(D,Z),p(D,W),p(W,x),p(W,K),L=!0},p(_,T){const ne={};T&1&&(ne.onChange=_[5]),t.$set(ne),(!L||T&1)&&se(l,_[0]);let P=i;i=te(_),i===P?R[i].p(_,T):(q(),g(R[P],1,1,()=>{R[P]=null}),A(),f=R[i],f?f.p(_,T):(f=R[i]=ee[i](_),f.c()),m(f,1),f.m(e,$)),(!L||T&4)&&E!==(E=_[6].rowsTotal+"")&&se(K,E)},i(_){L||(m(t.$$.fragment,_),m(f),L=!0)},o(_){g(t.$$.fragment,_),g(f),L=!1},d(_){_&&(B(s),B(e)),b(t,_),R[i].d()}}}function Xe(o){let t,s,e=O(o[6].rowsByBillTo),n=[];for(let l=0;l<e.length;l+=1)n[l]=ae(oe(o,e,l));const r=l=>g(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();t=N()},m(l,a){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(l,a);v(l,t,a),s=!0},p(l,a){if(a&21){e=O(l[6].rowsByBillTo);let c;for(c=0;c<e.length;c+=1){const u=oe(l,e,c);n[c]?(n[c].p(u,a),m(n[c],1)):(n[c]=ae(u),n[c].c(),m(n[c],1),n[c].m(t.parentNode,t))}for(q(),c=e.length;c<n.length;c+=1)r(c);A()}},i(l){if(!s){for(let a=0;a<e.length;a+=1)m(n[a]);s=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)g(n[a]);s=!1},d(l){l&&B(t),ie(n,l)}}}function Ze(o){let t,s,e=O(o[6].rowsByTerminal),n=[];for(let l=0;l<e.length;l+=1)n[l]=ce(le(o,e,l));const r=l=>g(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();t=N()},m(l,a){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(l,a);v(l,t,a),s=!0},p(l,a){if(a&21){e=O(l[6].rowsByTerminal);let c;for(c=0;c<e.length;c+=1){const u=le(l,e,c);n[c]?(n[c].p(u,a),m(n[c],1)):(n[c]=ce(u),n[c].c(),m(n[c],1),n[c].m(t.parentNode,t))}for(q(),c=e.length;c<n.length;c+=1)r(c);A()}},i(l){if(!s){for(let a=0;a<e.length;a+=1)m(n[a]);s=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)g(n[a]);s=!1},d(l){l&&B(t),ie(n,l)}}}function ae(o){let t,s;return t=new me({props:{row:o[7],showBy:o[0]}}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p(e,n){const r={};n&4&&(r.row=e[7]),n&1&&(r.showBy=e[0]),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function ce(o){let t,s;return t=new me({props:{row:o[7],showBy:o[0]}}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p(e,n){const r={};n&4&&(r.row=e[7]),n&1&&(r.showBy=e[0]),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function xe(o){let t,s;return t=new X({}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p:V,i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}function et(o){let t,s,e,n={ctx:o,current:null,token:null,hasCatch:!0,pending:xe,then:Qe,catch:Je,value:6,error:12,blocks:[,,,]};return F(s=o[4](o[2]),n),{c(){t=N(),n.block.c()},m(r,l){v(r,t,l),n.block.m(r,n.anchor=l),n.mount=()=>t.parentNode,n.anchor=t,e=!0},p(r,l){o=r,n.ctx=o,l&4&&s!==(s=o[4](o[2]))&&F(s,n)||U(n,o,l)},i(r){e||(m(n.block),e=!0)},o(r){for(let l=0;l<3;l+=1){const a=n.blocks[l];g(a)}e=!1},d(r){r&&B(t),n.block.d(r),n.token=null,n=null}}}function tt(o){let t,s;return t=new J({props:{size:nt,title:st,tds:o[1],$$slots:{default:[et]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment)},m(e,n){w(t,e,n),s=!0},p(e,[n]){const r={};n&2&&(r.tds=e[1]),n&8197&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){b(t,e)}}}const nt=12,st="Minimum Gallon Previous Month";function rt(o,t,s){let e,n;j(o,z,u=>s(2,n=u));const r=Y(new Date);j(o,r,u=>s(1,e=u));let l="Terminal";return[l,e,n,r,async u=>{const f=u.FinanceV5,$=await Ye(u);return r.set(f.tds),$},u=>s(0,l=u)]}class ot extends G{constructor(t){super(),M(this,t,rt,tt,S,{})}}function lt(o){let t,s,e,n,r,l;return t=new je({}),e=new ot({}),r=new Ee({}),{c(){h(t.$$.fragment),s=C(),h(e.$$.fragment),n=C(),h(r.$$.fragment)},m(a,c){w(t,a,c),v(a,s,c),w(e,a,c),v(a,n,c),w(r,a,c),l=!0},p:V,i(a){l||(m(t.$$.fragment,a),m(e.$$.fragment,a),m(r.$$.fragment,a),l=!0)},o(a){g(t.$$.fragment,a),g(e.$$.fragment,a),g(r.$$.fragment,a),l=!1},d(a){a&&(B(s),B(n)),b(t,a),b(e,a),b(r,a)}}}class it extends G{constructor(t){super(),M(this,t,null,lt,S,{})}}export{it as F};