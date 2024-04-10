import{cH as z,bf as B,at as S,cI as G,cZ as Y,aI as V}from"./vendor.ydO6dH7Z1712722105506.js";class O extends z{constructor(g){super(g),this.type=B}parse(g){const _=function(r,e){switch(r){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(e||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(e||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(e||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(e||""))}},u="\n",D=function(r,e,t){e=e||1024;let s=r.pos,i=-1,a=0,l="",o=String.fromCharCode.apply(null,new Uint16Array(r.subarray(s,s+128)));for(;0>(i=o.indexOf(u))&&a<e&&s<r.byteLength;)l+=o,a+=o.length,s+=128,o+=String.fromCharCode.apply(null,new Uint16Array(r.subarray(s,s+128)));return-1<i?(t!==!1&&(r.pos+=a+i+1),l+o.slice(0,i)):!1},N=function(r){const e=/^#\?(\S+)/,t=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,n=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,s=/^\s*FORMAT=(\S+)\s*$/,i=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,a={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let l,o;for((r.pos>=r.byteLength||!(l=D(r)))&&_(1,"no header found"),(o=l.match(e))||_(3,"bad initial token"),a.valid|=1,a.programtype=o[1],a.string+=l+"\n";l=D(r),l!==!1;){if(a.string+=l+"\n",l.charAt(0)==="#"){a.comments+=l+"\n";continue}if((o=l.match(t))&&(a.gamma=parseFloat(o[1])),(o=l.match(n))&&(a.exposure=parseFloat(o[1])),(o=l.match(s))&&(a.valid|=2,a.format=o[1]),(o=l.match(i))&&(a.valid|=4,a.height=parseInt(o[1],10),a.width=parseInt(o[2],10)),a.valid&2&&a.valid&4)break}return a.valid&2||_(3,"missing format specifier"),a.valid&4||_(3,"missing image size specifier"),a},v=function(r,e,t){const n=e;if(n<8||n>32767||r[0]!==2||r[1]!==2||r[2]&128)return new Uint8Array(r);n!==(r[2]<<8|r[3])&&_(3,"wrong scanline width");const s=new Uint8Array(4*e*t);s.length||_(4,"unable to allocate buffer space");let i=0,a=0;const l=4*n,o=new Uint8Array(4),E=new Uint8Array(l);let H=t;for(;H>0&&a<r.byteLength;){a+4>r.byteLength&&_(1),o[0]=r[a++],o[1]=r[a++],o[2]=r[a++],o[3]=r[a++],(o[0]!=2||o[1]!=2||(o[2]<<8|o[3])!=n)&&_(3,"bad rgbe scanline format");let R=0,c;for(;R<l&&a<r.byteLength;){c=r[a++];const h=c>128;if(h&&(c-=128),(c===0||R+c>l)&&_(3,"bad scanline data"),h){const m=r[a++];for(let U=0;U<c;U++)E[R++]=m}else E.set(r.subarray(a,a+c),R),R+=c,a+=c}const P=n;for(let h=0;h<P;h++){let m=0;s[i]=E[h+m],m+=n,s[i+1]=E[h+m],m+=n,s[i+2]=E[h+m],m+=n,s[i+3]=E[h+m],i+=4}H--}return s},x=function(r,e,t,n){const s=r[e+3],i=Math.pow(2,s-128)/255;t[n+0]=r[e+0]*i,t[n+1]=r[e+1]*i,t[n+2]=r[e+2]*i,t[n+3]=1},C=function(r,e,t,n){const s=r[e+3],i=Math.pow(2,s-128)/255;t[n+0]=G.toHalfFloat(Math.min(r[e+0]*i,65504)),t[n+1]=G.toHalfFloat(Math.min(r[e+1]*i,65504)),t[n+2]=G.toHalfFloat(Math.min(r[e+2]*i,65504)),t[n+3]=G.toHalfFloat(1)},w=new Uint8Array(g);w.pos=0;const d=N(w),f=d.width,k=d.height,y=v(w.subarray(w.pos),f,k);let I,L,p;switch(this.type){case S:p=y.length/4;const r=new Float32Array(p*4);for(let t=0;t<p;t++)x(y,t*4,r,t*4);I=r,L=S;break;case B:p=y.length/4;const e=new Uint16Array(p*4);for(let t=0;t<p;t++)C(y,t*4,e,t*4);I=e,L=B;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:f,height:k,data:I,header:d.string,gamma:d.gamma,exposure:d.exposure,type:L}}setDataType(g){return this.type=g,this}load(g,b,A,F){function M(_,T){switch(_.type){case S:case B:_.colorSpace=Y,_.minFilter=V,_.magFilter=V,_.generateMipmaps=!1,_.flipY=!0;break}b&&b(_,T)}return super.load(g,M,A,F)}}export{O as R};
