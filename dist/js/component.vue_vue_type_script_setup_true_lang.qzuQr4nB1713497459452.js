var ee=Object.defineProperty;var ae=(w,l,t)=>l in w?ee(w,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):w[l]=t;var $=(w,l,t)=>(ae(w,typeof l!="symbol"?l+"":l,t),t);import{cu as re,aF as te,aw as ne,cI as oe,bf as M,at as H,cJ as C,aI as O,ak as K,cb as se,l as U,v as z,cK as ie,w as A,cL as Y,L as D,cM as le,cp as W,a1 as ue,aQ as ce,aD as de,o as _e,c as me,a0 as pe,Z as he,a9 as ve,cN as Q,cO as X,cP as ge,cQ as j,aC as q,cR as fe}from"./vendor.KJlYgoAc1713497459452.js";class Ee extends re{constructor(){super();$(this,"virtualScene",null);this.virtualScene=new te}add(...t){return this.virtualScene.add(...t),this}destructor(){this.virtualScene.traverse(t=>{t instanceof ne&&(t.geometry.dispose(),t.material.dispose(),t.material.map&&t.material.map.dispose(),this.virtualScene.remove(t))}),this.virtualScene=null}}class J extends oe{constructor(l){super(l),this.type=M}parse(l){const h=function(e,n){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(n||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(n||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(n||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(n||""))}return-1},f="\n",u=function(e,n,d){n=n||1024;let c=e.pos,s=-1,a=0,_="",r=String.fromCharCode.apply(null,new Uint16Array(e.subarray(c,c+128)));for(;0>(s=r.indexOf(f))&&a<n&&c<e.byteLength;)_+=r,a+=r.length,c+=128,r+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(c,c+128)));return-1<s?(d!==!1&&(e.pos+=a+s+1),_+r.slice(0,s)):!1},b=function(e){const n=/^#\?(\S+)/,d=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,c=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,a={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let _,r;if(e.pos>=e.byteLength||!(_=u(e)))return h(1,"no header found");if(!(r=_.match(n)))return h(3,"bad initial token");for(a.valid|=1,a.programtype=r[1],a.string+=_+"\n";_=u(e),_!==!1;){if(a.string+=_+"\n",_.charAt(0)==="#"){a.comments+=_+"\n";continue}if((r=_.match(d))&&(a.gamma=parseFloat(r[1])),(r=_.match(i))&&(a.exposure=parseFloat(r[1])),(r=_.match(c))&&(a.valid|=2,a.format=r[1]),(r=_.match(s))&&(a.valid|=4,a.height=parseInt(r[1],10),a.width=parseInt(r[2],10)),a.valid&2&&a.valid&4)break}return a.valid&2?a.valid&4?a:h(3,"missing image size specifier"):h(3,"missing format specifier")},y=function(e,n,d){const i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);if(i!==(e[2]<<8|e[3]))return h(3,"wrong scanline width");const c=new Uint8Array(4*n*d);if(!c.length)return h(4,"unable to allocate buffer space");let s=0,a=0;const _=4*i,r=new Uint8Array(4),I=new Uint8Array(_);let P=d;for(;P>0&&a<e.byteLength;){if(a+4>e.byteLength)return h(1);if(r[0]=e[a++],r[1]=e[a++],r[2]=e[a++],r[3]=e[a++],r[0]!=2||r[1]!=2||(r[2]<<8|r[3])!=i)return h(3,"bad rgbe scanline format");let x=0,S;for(;x<_&&a<e.byteLength;){S=e[a++];const B=S>128;if(B&&(S-=128),S===0||x+S>_)return h(3,"bad scanline data");if(B){const G=e[a++];for(let V=0;V<S;V++)I[x++]=G}else I.set(e.subarray(a,a+S),x),x+=S,a+=S}const Z=i;for(let B=0;B<Z;B++){let G=0;c[s]=I[B+G],G+=i,c[s+1]=I[B+G],G+=i,c[s+2]=I[B+G],G+=i,c[s+3]=I[B+G],s+=4}P--}return c},v=function(e,n,d,i){const c=e[n+3],s=Math.pow(2,c-128)/255;d[i+0]=e[n+0]*s,d[i+1]=e[n+1]*s,d[i+2]=e[n+2]*s,d[i+3]=1},F=function(e,n,d,i){const c=e[n+3],s=Math.pow(2,c-128)/255;d[i+0]=C.toHalfFloat(Math.min(e[n+0]*s,65504)),d[i+1]=C.toHalfFloat(Math.min(e[n+1]*s,65504)),d[i+2]=C.toHalfFloat(Math.min(e[n+2]*s,65504)),d[i+3]=C.toHalfFloat(1)},p=new Uint8Array(l);p.pos=0;const g=b(p);if(g!==-1){const e=g.width,n=g.height,d=y(p.subarray(p.pos),e,n);if(d!==-1){let i,c,s;switch(this.type){case H:s=d.length/4;const a=new Float32Array(s*4);for(let r=0;r<s;r++)v(d,r*4,a,r*4);i=a,c=H;break;case M:s=d.length/4;const _=new Uint16Array(s*4);for(let r=0;r<s;r++)F(d,r*4,_,r*4);i=_,c=M;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:e,height:n,data:i,header:g.string,gamma:g.gamma,exposure:g.exposure,type:c}}}return null}setDataType(l){return this.type=l,this}load(l,t,T,m){function L(E,h){switch(E.type){case H:case M:"colorSpace"in E?E.colorSpace="srgb-linear":E.encoding=3e3,E.minFilter=O,E.magFilter=O,E.generateMipmaps=!1,E.flipY=!0;break}t&&t(E,h)}return super.load(l,L,T,m)}}const N={sunset:"venice/venice_sunset_1k.hdr",studio:"studio/poly_haven_studio_1k.hdr",city:"city/canary_wharf_1k.hdr",umbrellas:"outdoor/outdoor_umbrellas_1k.hdr",night:"outdoor/satara_night_1k.hdr",forest:"outood/mossy_forest_1k.hdr",snow:"outdoor/snowy_forest_path_01_1k.hdr",dawn:"kiara/kiara_1_dawn_1k.hdr",hangar:"indoor/small_hangar_01_1k.hdr",urban:"indoor/abandoned_games_room_02_1k.hdr",modern:"city/modern_buildings_2_1k.hdr",shangai:"city/shanghai_bund_1k.hdr"},Re="https://raw.githubusercontent.com/Tresjs/assets/main/textures/hdr/";async function ye(w,l){const{scene:t}=K(),{preset:T,blur:m,files:L=[],path:E="",background:h}=se(w),R=U(),k=z(()=>Array.isArray(L.value)),o=z(()=>k.value?ie:J),f=U(null);return A(()=>[L,E],async([u,b])=>{if(u.value.length>0&&!T.value){try{f.value=await Y(D(o),k.value?[D(u)]:D(u),y=>{b.value&&y.setPath(D(b))})}catch(y){throw new Error("Failed to load environment map: ".concat(y))}f.value&&(R.value=k.value?f.value[0]:f.value,R.value.mapping=k.value?le:W)}},{immediate:!0}),A(()=>R.value,u=>{t.value&&(t.value.environment=u)},{immediate:!0}),A(()=>[h.value,R.value],([u,b])=>{if(t.value){let y=l!=null&&l.value?l.value.texture:b,v=t.value.background;v!=null&&v.isColor||(v=void 0),t.value.background=u?y:v}},{immediate:!0}),A(()=>m==null?void 0:m.value,u=>{t.value&&(t.value.backgroundBlurriness=u)},{immediate:!0}),A(T,async u=>{if(u&&u in N){const b=Re,y=N[u];try{f.value=await Y(J,y,v=>{b&&v.setPath(b)})}catch(v){throw new Error("Failed to load environment map: ".concat(v))}f.value&&(R.value=f.value,R.value.mapping=W)}else if(u&&!(u in N))throw new Error("Preset must be one of: ".concat(Object.keys(N).join(", ")))},{immediate:!0}),{texture:R}}const ke=ue({__name:"component",props:{background:{type:[Boolean,String],default:!1},blur:{default:0},files:{default:[]},path:{default:""},preset:{default:void 0},resolution:{default:256},near:{default:1},far:{default:1e3},frames:{default:1/0},useDefaultScene:{type:Boolean,default:!1}},async setup(w,{expose:l}){let t,T;const m=w,L=U(null);l({texture:L});const{extend:E,renderer:h,scene:R}=K();let k=null,o=U(null),f=null;const u=U(null);ce(()=>{var p,g;(p=u.value)==null||p.destructor(),(g=o.value)==null||g.dispose()});const{onBeforeLoop:b}=ve();let y=1;b(()=>{f&&u.value&&o.value&&(m.frames===1/0||y<m.frames)&&(m.useDefaultScene?f.update(h.value,R.value):f.update(h.value,fe(u.value.virtualScene)),y++)});const v=([t,T]=de(()=>ye(m,o)),t=await t,T(),t).texture,F=p=>{p?(R.value.environment=p.texture,m.background&&(R.value.background=p.texture)):(R.value.environment=v.value,m.background&&(R.value.background=v.value))};return A(v,p=>{o.value&&F(o.value)},{immediate:!0,deep:!0}),E({EnvSence:Ee}),A(()=>ge().default,p=>{var g,e,n;if(p&&(!o.value||o.value.texture.type!==M)&&(k=p(),Array.isArray(k)&&k.length>0&&typeof((g=k[0])==null?void 0:g.type)!="symbol")){(e=o.value)==null||e.dispose(),o.value=new Q(m.resolution),o.value.texture.type=M,f=new X(m.near,m.far,o.value),F(o.value);return}(n=o.value)==null||n.dispose(),o.value=null,F(null)},{immediate:!0,deep:!0}),L.value=v,A(()=>m.useDefaultScene,p=>{var g;p&&(!o.value||o.value.texture.type!==j)&&((g=o.value)==null||g.dispose(),o.value=new Q(m.resolution),f=new X(m.near,m.far,o.value),o.value.texture.type=j,o.value.texture.generateMipmaps=!1,o.value.texture.minFilter=q,o.value.texture.magFilter=q,F(o.value))},{immediate:!0}),(p,g)=>D(o)?(_e(),me("TresEnvSence",{key:0,ref_key:"envSence",ref:u},[pe(p.$slots,"default")],512)):he("",!0)}});export{ke as _};
