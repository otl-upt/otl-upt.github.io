function V(t){return t.arrayBuffer?t.arrayBuffer():new Promise((e,r)=>{const n=new FileReader;n.addEventListener("loadend",()=>{e(n.result)}),n.addEventListener("error",r),n.readAsArrayBuffer(t)})}async function se(t){const e=await V(t);return new Uint8Array(e)}function ee(t){return typeof Blob<"u"&&t instanceof Blob}function D(t){return typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer}const fe=typeof process<"u"&&process.versions&&typeof process.versions.node<"u"&&typeof process.versions.electron>"u";function ce(t){return t.byteOffset===0&&t.byteLength===t.buffer.byteLength}class j{constructor(e){this.typedArray=e instanceof ArrayBuffer||D(e)?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}async getLength(){return this.typedArray.byteLength}async read(e,r){return new Uint8Array(this.typedArray.buffer,this.typedArray.byteOffset+e,r)}}class Y{constructor(e){this.blob=e}async getLength(){return this.blob.size}async read(e,r){const n=this.blob.slice(e,e+r),o=await V(n);return new Uint8Array(o)}async sliceAsBlob(e,r,n=""){return this.blob.slice(e,e+r,n)}}function le(t,e){var r=Uint8Array;if(t[0]==3&&t[1]==0)return e||new r(0);var n=ue,o=te,i=de,s=re,c=e==null;c&&(e=new r(t.length>>>2<<3));for(var l=0,w=0,h=0,u=0,g=0,f=0,A=0,m=0,d=0,L,B;l==0;){if(l=n(t,d,1),w=n(t,d+1,2),d+=3,w==0){d&7&&(d+=8-(d&7));var y=(d>>>3)+4,b=t[y-4]|t[y-3]<<8;c&&(e=H(e,m+b)),e.set(new r(t.buffer,t.byteOffset+y,b),m),d=y+b<<3,m+=b;continue}if(c&&(e=H(e,m+(1<<17))),w==1&&(L=a.flmap,B=a.fdmap,f=512-1,A=32-1),w==2){h=o(t,d,5)+257,u=o(t,d+5,5)+1,g=o(t,d+10,4)+4,d+=14;for(var p=0;p<38;p+=2)a.itree[p]=0,a.itree[p+1]=0;for(var z=1,p=0;p<g;p++){var T=o(t,d+p*3,3);a.itree[(a.ordr[p]<<1)+1]=T,T>z&&(z=T)}d+=3*g,_(a.itree,z),F(a.itree,z,a.imap),L=a.lmap,B=a.dmap,d=i(a.imap,(1<<z)-1,h+u,t,d,a.ttree);var C=Q(a.ttree,0,h,a.ltree);f=(1<<C)-1;var N=Q(a.ttree,h,u,a.dtree);A=(1<<N)-1,_(a.ltree,C),F(a.ltree,C,L),_(a.dtree,N),F(a.dtree,N,B)}for(;;){var G=L[s(t,d)&f];d+=G&15;var S=G>>>4;if(!(S>>>8))e[m++]=S;else{if(S==256)break;var M=m+S-254;if(S>264){var $=a.ldef[S-257];M=m+($>>>3)+o(t,d,$&7),d+=$&7}var Z=B[s(t,d)&A];d+=Z&15;var ae=Z>>>4,I=a.ddef[ae],R=(I>>>4)+n(t,d,I&15);for(d+=I&15,c&&(e=H(e,m+(1<<17)));m<M;)e[m]=e[m++-R],e[m]=e[m++-R],e[m]=e[m++-R],e[m]=e[m++-R];m=M}}}return e.length==m?e:e.slice(0,m)}function H(t,e){var r=t.length;if(e<=r)return t;var n=new Uint8Array(Math.max(r<<1,e));return n.set(t,0),n}function de(t,e,r,n,o,i){for(var s=te,c=re,l=0;l<r;){var w=t[c(n,o)&e];o+=w&15;var h=w>>>4;if(h<=15)i[l]=h,l++;else{var u=0,g=0;h==16?(g=3+s(n,o,2),o+=2,u=i[l-1]):h==17?(g=3+s(n,o,3),o+=3):h==18&&(g=11+s(n,o,7),o+=7);for(var f=l+g;l<f;)i[l]=u,l++}}return o}function Q(t,e,r,n){for(var o=0,i=0,s=n.length>>>1;i<r;){var c=t[i+e];n[i<<1]=0,n[(i<<1)+1]=c,c>o&&(o=c),i++}for(;i<s;)n[i<<1]=0,n[(i<<1)+1]=0,i++;return o}function _(t,e){for(var r=t.length,n,o,i,s,c,l=a.bl_count,s=0;s<=e;s++)l[s]=0;for(s=1;s<r;s+=2)l[t[s]]++;var w=a.next_code;for(n=0,l[0]=0,o=1;o<=e;o++)n=n+l[o-1]<<1,w[o]=n;for(i=0;i<r;i+=2)c=t[i+1],c!=0&&(t[i]=w[c],w[c]++)}function F(t,e,r){for(var n=t.length,o=a.rev15,i=0;i<n;i+=2)if(t[i+1]!=0)for(var s=i>>1,c=t[i+1],l=s<<4|c,w=e-c,h=t[i]<<w,u=h+(1<<w);h!=u;){var g=o[h]>>>15-e;r[g]=l,h++}}function J(t,e){for(var r=a.rev15,n=15-e,o=0;o<t.length;o+=2){var i=t[o]<<e-t[o+1];t[o]=r[i]>>>n}}function te(t,e,r){return(t[e>>>3]|t[(e>>>3)+1]<<8)>>>(e&7)&(1<<r)-1}function ue(t,e,r){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16)>>>(e&7)&(1<<r)-1}function re(t,e){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16)>>>(e&7)}const a=function(){var t=Uint16Array,e=Uint32Array;return{next_code:new t(16),bl_count:new t(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new t(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new e(32),flmap:new t(512),fltree:[],fdmap:new t(32),fdtree:[],lmap:new t(32768),ltree:[],ttree:[],dmap:new t(32768),dtree:[],imap:new t(512),itree:[],rev15:new t(32768),lhst:new e(286),dhst:new e(30),ihst:new e(19),lits:new e(15e3),strt:new t(65536),prev:new t(32768)}}();(function(){for(var t=32768,e=0;e<t;e++){var r=e;r=(r&2863311530)>>>1|(r&1431655765)<<1,r=(r&3435973836)>>>2|(r&858993459)<<2,r=(r&4042322160)>>>4|(r&252645135)<<4,r=(r&4278255360)>>>8|(r&16711935)<<8,a.rev15[e]=(r>>>16|r<<16)>>>17}function n(o,i,s){for(;i--!=0;)o.push(0,s)}for(var e=0;e<32;e++)a.ldef[e]=a.of0[e]<<3|a.exb[e],a.ddef[e]=a.df0[e]<<4|a.dxb[e];n(a.fltree,144,8),n(a.fltree,255-143,9),n(a.fltree,279-255,7),n(a.fltree,287-279,8),_(a.fltree,9),F(a.fltree,9,a.flmap),J(a.fltree,9),n(a.fdtree,32,5),_(a.fdtree,5),F(a.fdtree,5,a.fdmap),J(a.fdtree,5),n(a.itree,19,0),n(a.ltree,286,0),n(a.dtree,30,0),n(a.ttree,320,0)})();const K={table:function(){for(var t=new Uint32Array(256),e=0;e<256;e++){for(var r=e,n=0;n<8;n++)r&1?r=3988292384^r>>>1:r=r>>>1;t[e]=r}return t}(),update:function(t,e,r,n){for(var o=0;o<n;o++)t=K.table[(t^e[r+o])&255]^t>>>8;return t},crc:function(t,e,r){return K.update(4294967295,t,e,r)^4294967295}};function he(t,e){return le(t,e)}const X={numWorkers:1,workerURL:"",useWorkers:!1};let me=0;const k=[];function W(t){return new Promise((e,r)=>{const n=new Worker(t);n.onmessage=o=>{o.data==="start"?(n.onerror=void 0,n.onmessage=void 0,e(n)):r(new Error(`unexpected message: ${o.data}`))},n.onerror=r})}function we(t,e){return t.require?t.require(e):{}}(function(){if(fe){const{Worker:t}=we(module,"worker_threads");return{async createWorker(e){return new t(e)},addEventListener(e,r){e.on("message",n=>{r({target:e,data:n})})},async terminate(e){await e.terminate()}}}else return{async createWorker(t){try{return await W(t)}catch{console.warn("could not load worker:",t)}let e;try{const r=await fetch(t,{mode:"cors"});if(!r.ok)throw new Error(`could not load: ${t}`);e=await r.text(),t=URL.createObjectURL(new Blob([e],{type:"application/javascript"}));const n=await W(t);return X.workerURL=t,n}catch{console.warn("could not load worker via fetch:",t)}if(e!==void 0)try{t=`data:application/javascript;base64,${btoa(e)}`;const r=await W(t);return X.workerURL=t,r}catch{console.warn("could not load worker via dataURI")}throw console.warn("workers will not be used"),new Error("can not start workers")},addEventListener(t,e){t.addEventListener("message",e)},async terminate(t){t.terminate()}}})();function pe(t,e,r,n){const o=new Uint8Array(e);he(t,o),n(r?new Blob([o],{type:r}):o.buffer)}async function ye(){if(k.length!==0)for(;k.length;){const{src:t,uncompressedSize:e,type:r,resolve:n}=k.shift();let o=t;ee(t)&&(o=await se(t)),pe(o,e,r,n)}}function ne(t,e,r){return new Promise((n,o)=>{k.push({src:t,uncompressedSize:e,type:r,resolve:n,reject:o,id:me++}),ye()})}function ve(t,e){const r=t&31,n=(t>>5&15)-1,o=(t>>9&127)+1980,i=0,s=(e&31)*2,c=e>>5&63,l=e>>11&31;return new Date(o,n,r,l,c,s,i)}class ge{constructor(e,r){this._reader=e,this._rawEntry=r,this.name=r.name,this.nameBytes=r.nameBytes,this.size=r.uncompressedSize,this.compressedSize=r.compressedSize,this.comment=r.comment,this.commentBytes=r.commentBytes,this.compressionMethod=r.compressionMethod,this.lastModDate=ve(r.lastModFileDate,r.lastModFileTime),this.isDirectory=r.uncompressedSize===0&&r.name.endsWith("/"),this.encrypted=!!(r.generalPurposeBitFlag&1),this.externalFileAttributes=r.externalFileAttributes,this.versionMadeBy=r.versionMadeBy}async blob(e="application/octet-stream"){return await Fe(this._reader,this._rawEntry,e)}async arrayBuffer(){return await _e(this._reader,this._rawEntry)}async text(){const e=await this.arrayBuffer();return U(new Uint8Array(e))}async json(){const e=await this.text();return JSON.parse(e)}}const P=22,xe=65535,be=101010256,Ae=101075792;async function O(t,e,r){return await t.read(e,r)}async function q(t,e,r,n){return t.sliceAsBlob?await t.sliceAsBlob(e,r,n):await t.read(e,r)}const ze={unsigned(){return 0}};function v(t,e){return t[e]+t[e+1]*256}function x(t,e){return t[e]+t[e+1]*256+t[e+2]*65536+t[e+3]*16777216}function E(t,e){return x(t,e)+x(t,e+4)*4294967296}const Le=new TextDecoder;function U(t,e){return D(t.buffer)&&(t=new Uint8Array(t)),Le.decode(t)}async function Be(t,e){const r=Math.min(P+xe,e),n=e-r,o=await O(t,n,r);for(let i=r-P;i>=0;--i){if(x(o,i)!==be)continue;const s=new Uint8Array(o.buffer,o.byteOffset+i,o.byteLength-i),c=v(s,4);if(c!==0)throw new Error(`multi-volume zip files are not supported. This is volume: ${c}`);const l=v(s,10),w=x(s,12),h=x(s,16),u=v(s,20),g=s.length-P;if(u!==g)throw new Error(`invalid comment length. expected: ${g}, actual: ${u}`);const f=new Uint8Array(s.buffer,s.byteOffset+22,u),A=U(f);return l===65535||h===4294967295?await Se(t,n+i,A,f):await oe(t,h,w,l,A,f)}throw new Error("could not find end of central directory. maybe not zip file")}const Ee=117853008;async function Se(t,e,r,n){const o=e-20,i=await O(t,o,20);if(x(i,0)!==Ee)throw new Error("invalid zip64 end of central directory locator signature");const s=E(i,8),c=await O(t,s,56);if(x(c,0)!==Ae)throw new Error("invalid zip64 end of central directory record signature");const l=E(c,32),w=E(c,40),h=E(c,48);return oe(t,h,w,l,r,n)}const Oe=33639248;async function oe(t,e,r,n,o,i){let s=0;const c=await O(t,e,r),l=[];for(let h=0;h<n;++h){const u=c.subarray(s,s+46),g=x(u,0);if(g!==Oe)throw new Error(`invalid central directory file header signature: 0x${g.toString(16)}`);const f={versionMadeBy:v(u,4),versionNeededToExtract:v(u,6),generalPurposeBitFlag:v(u,8),compressionMethod:v(u,10),lastModFileTime:v(u,12),lastModFileDate:v(u,14),crc32:x(u,16),compressedSize:x(u,20),uncompressedSize:x(u,24),fileNameLength:v(u,28),extraFieldLength:v(u,30),fileCommentLength:v(u,32),internalFileAttributes:v(u,36),externalFileAttributes:x(u,38),relativeOffsetOfLocalHeader:x(u,42)};if(f.generalPurposeBitFlag&64)throw new Error("strong encryption is not supported");s+=46;const A=c.subarray(s,s+f.fileNameLength+f.extraFieldLength+f.fileCommentLength);f.nameBytes=A.slice(0,f.fileNameLength),f.name=U(f.nameBytes);const m=f.fileNameLength+f.extraFieldLength,d=A.slice(f.fileNameLength,m);f.extraFields=[];let L=0;for(;L<d.length-3;){const y=v(d,L+0),b=v(d,L+2),p=L+4,z=p+b;if(z>d.length)throw new Error("extra field length exceeds extra field buffer size");f.extraFields.push({id:y,data:d.slice(p,z)}),L=z}if(f.commentBytes=A.slice(m,m+f.fileCommentLength),f.comment=U(f.commentBytes),s+=A.length,f.uncompressedSize===4294967295||f.compressedSize===4294967295||f.relativeOffsetOfLocalHeader===4294967295){const y=f.extraFields.find(z=>z.id===1);if(!y)throw new Error("expected zip64 extended information extra field");const b=y.data;let p=0;if(f.uncompressedSize===4294967295){if(p+8>b.length)throw new Error("zip64 extended information extra field does not include uncompressed size");f.uncompressedSize=E(b,p),p+=8}if(f.compressedSize===4294967295){if(p+8>b.length)throw new Error("zip64 extended information extra field does not include compressed size");f.compressedSize=E(b,p),p+=8}if(f.relativeOffsetOfLocalHeader===4294967295){if(p+8>b.length)throw new Error("zip64 extended information extra field does not include relative header offset");f.relativeOffsetOfLocalHeader=E(b,p),p+=8}}const B=f.extraFields.find(y=>y.id===28789&&y.data.length>=6&&y.data[0]===1&&x(y.data,1),ze.unsigned(f.nameBytes));if(B&&(f.fileName=U(B.data.slice(5))),f.compressionMethod===0){let y=f.uncompressedSize;if(f.generalPurposeBitFlag&1&&(y+=12),f.compressedSize!==y)throw new Error(`compressed size mismatch for stored file: ${f.compressedSize} != ${y}`)}l.push(f)}return{zip:{comment:o,commentBytes:i},entries:l.map(h=>new ge(t,h))}}async function ie(t,e){if(e.generalPurposeBitFlag&1)throw new Error("encrypted entries not supported");const r=await O(t,e.relativeOffsetOfLocalHeader,30),n=await t.getLength(),o=x(r,0);if(o!==67324752)throw new Error(`invalid local file header signature: 0x${o.toString(16)}`);const i=v(r,26),s=v(r,28),c=e.relativeOffsetOfLocalHeader+r.length+i+s;let l;if(e.compressionMethod===0)l=!1;else if(e.compressionMethod===8)l=!0;else throw new Error(`unsupported compression method: ${e.compressionMethod}`);const w=c,h=w+e.compressedSize;if(e.compressedSize!==0&&h>n)throw new Error(`file data overflows file bounds: ${w} +  ${e.compressedSize}  > ${n}`);return{decompress:l,fileDataStart:w}}async function _e(t,e){const{decompress:r,fileDataStart:n}=await ie(t,e);if(!r){const s=await O(t,n,e.compressedSize);return ce(s)?s.buffer:s.slice().buffer}const o=await q(t,n,e.compressedSize);return await ne(o,e.uncompressedSize)}async function Fe(t,e,r){const{decompress:n,fileDataStart:o}=await ie(t,e);if(!n){const c=await q(t,o,e.compressedSize,r);return ee(c)?c:new Blob([D(c.buffer)?new Uint8Array(c):c],{type:r})}const i=await q(t,o,e.compressedSize);return await ne(i,e.uncompressedSize,r)}async function Ue(t){let e;if(typeof Blob<"u"&&t instanceof Blob)e=new Y(t);else if(t instanceof ArrayBuffer||t&&t.buffer&&t.buffer instanceof ArrayBuffer)e=new j(t);else if(D(t)||D(t.buffer))e=new j(t);else if(typeof t=="string"){const n=await fetch(t);if(!n.ok)throw new Error(`failed http request ${t}, status: ${n.status}: ${n.statusText}`);const o=await n.blob();e=new Y(o)}else if(typeof t.getLength=="function"&&typeof t.read=="function")e=t;else throw new Error("unsupported source type");const r=await e.getLength();if(r>Number.MAX_SAFE_INTEGER)throw new Error(`file too large. size: ${r}. Only file sizes up 4503599627370496 bytes are supported`);return await Be(e,r)}export{Ue as u};
