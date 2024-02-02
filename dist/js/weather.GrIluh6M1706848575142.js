var b=Object.defineProperty;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(s,a,e)=>a in s?b(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,c=(s,a)=>{for(var e in a||(a={}))C.call(a,e)&&_(s,e,a[e]);if(m)for(var e of m(a))B.call(a,e)&&_(s,e,a[e]);return s};import{$ as v,a0 as p,aj as z,b9 as g,k as h,a5 as x,w as k,o as u,v as R,K as S,bQ as Y,bR as w,at as $,c as X,a as d,D as y,E as Z,a9 as E,aa as F,ai as P}from"./vendor.FyjOyGIG1706848575142.js";import{_ as M}from"./pagesShow.vue_vue_type_script_setup_true_lang.QkxAUghq1706848575142.js";import{_ as j}from"./loading.vue_vue_type_script_setup_true_lang.k4Uku26o1706848575142.js";import"./vanilla-307d3a93.esm.TaEyJAm01706848575142.js";import"./_commonjsHelpers.5-cIlDoe1706848575142.js";import"./LineSegments2.PFIor-LT1706848575142.js";const A=v({__name:"precipitation",props:{speed:{default:12},randomness:{default:0},count:{default:6e3},size:{default:7},areaX:{default:1500},areaY:{default:1e3},areaZ:{default:1500},type:{default:"snow"},color:{default:"#fff"}},async setup(s){let a,e;const t=s,i={snow:"./plugins/digitalCity/image/snow.png",rain:"./plugins/digitalCity/image/rain.png",cilcle:"./plugins/digitalCity/image/cilcle.png"},n=p({});i[t.type]&&(n.value=([a,e]=z(()=>g({map:i[t.type]})),a=await a,e(),a));const o=h();return x(async()=>{}),k(()=>t.type,async(r,l)=>{var f;r!=l&&((f=n.value)!=null&&f.map&&n.value.map.dispose(),n.value=await g({map:i[r]?i[r]:i.cilcle}))}),(r,l)=>(u(),R(S(Y),{ref_key:"precipitationRef",ref:o,position:[0,t.areaY/2,0],speed:t.speed,color:t.color,alphaTest:.5,area:[t.areaX,t.areaY,t.areaZ],count:t.count,depthWrite:!0,randomness:t.randomness,size:t.size,opacity:1,map:n.value.map,alphaMap:n.value.map},null,8,["position","speed","color","area","count","randomness","size","map","alphaMap"]))}}),W=v({__name:"weather",setup(s){const a=h();x(()=>{a.value&&a.value.$refs.perspectiveCameraRef.position.set(750,500,800)});const e=p({speed:12,size:10,count:6e3,color:"#fff",type:"snow"}),t=p({areaX:1500,areaY:1e3,areaZ:1500}),i=p(c(c({},w(e)),w(t))),o=new $({title:"天气",expanded:!0}).addFolder({title:"下落物"});return o.addBinding(e,"speed",{label:"速度",min:0,max:30,step:1}),o.addBinding(e,"color",{label:"颜色"}),o.addBinding(e,"size",{label:"大小",min:0,max:26,step:1}),o.addBinding(e,"count",{label:"数量",min:1e3,max:1e4,step:100}),o.addBinding(e,"type",{view:"list",label:"类型",options:[{text:"雪",value:"snow"},{text:"雨",value:"rain"},{text:"点",value:"point"}]}),(r,l)=>(u(),X(Z,null,[d(j),d(M,{ref_key:"pagesShowRef",ref:a,autoRotate:!1},{ability:y(()=>[(u(),R(P,null,{default:y(()=>[d(A,E(F(i)),null,16)]),_:1}))]),_:1},512)],64))}});export{W as default};
