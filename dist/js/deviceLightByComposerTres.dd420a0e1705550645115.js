import{Z as k,ai as V,aj as E,aR as F,b3 as C,a4 as G,a3 as j,al as I,o as g,c as J,V as l,J as d,D as O,$ as _,a0 as X,a1 as Z,a2 as q,am as H,v as w,C as M,a6 as K,a7 as Q,a as x,a8 as y,a9 as S,aa as U,ah as W}from"./vendor.ec0ad4121705550645115.js";import{r as Y,u as ee}from"./device.b5b2f29a1705550645115.js";import"./BufferGeometryUtils.9b73b9d41705550645115.js";import"./EffectComposer.aeb9255a1705550645115.js";import"./UnrealBloomPass.dd0f6c921705550645115.js";const te=["object"],ae=["object"],se=k({__name:"ByComposerTres",props:{threshold:{default:0},strength:{default:.972},radius:{default:.21}},async setup(v){let r,n;const t=v,{nodes:a}=([r,n]=V(()=>E("./plugins/industry4/model/modelDraco.glb",{draco:!0,decoderPath:"./draco/"})),r=await r,n(),r),i=Y(a.Sketchfab_model),{camera:u,renderer:P,scene:h,sizes:b}=F();let p=null,m=null,s=null;const T=new C({color:"black"});G(()=>{if(u.value){const{finalComposer:e,effectComposer:o,bloomPass:D}=ee(h.value,u.value,P.value,b.width.value,b.height.value);p=e,m=o,s=D,s.threshold=t.threshold,s.strength=t.strength,s.radius=t.radius}t.threshold&&(s.threshold=t.threshold),t.strength&&(s.strength=t.strength),t.radius&&(s.radius=t.radius)});const c={},L=e=>{e.isMesh&&(c[e.uuid]=e.material,e.material=T)},N=e=>{c[e.uuid]&&(e.material=c[e.uuid],delete c[e.uuid])},{onLoop:R,onAfterLoop:$}=j();let B=.03,f=a.Sketchfab_model.getObjectByName("canister_turbine_011_Nickel-Light-PBR_0"),z=f.material.clone(),A=new C({color:new I("red"),transparent:!0,opacity:1});return R(({elapsed:e})=>{a.hull_turbine&&(a.hull_turbine.rotation.x+=B,a.blades_turbine_003.rotation.x+=B),Math.floor(e)%2?f.material=z:f.material=A}),$(({elapsed:e})=>{m&&(h.value.traverse(o=>{L(o)}),m.render(e)),p&&(h.value.traverse(o=>{N(o)}),p.render(e))}),(e,o)=>(g(),J(O,null,[l("primitive",{object:d(a).Sketchfab_model},null,8,te),l("primitive",{object:d(i)},null,8,ae)],64))}}),re=l("TresPerspectiveCamera",{position:[5,5,5],fov:45,near:1,far:1e3},null,-1),oe=l("TresAmbientLight",{color:"#ffffff",intensity:"40"},null,-1),le=l("TresDirectionalLight",{position:[0,2,-4],intensity:1},null,-1),he=k({__name:"deviceLightByComposerTres",setup(v){const r=_({clearColor:"#000",shadows:!0,alpha:!1,shadowMapType:X,outputColorSpace:Z,toneMapping:q}),n=_({autoRotate:!0}),t=_({threshold:0,strength:.972,radius:.21}),a=new H({title:"参数"});return a.addBinding(t,"threshold",{label:"阈值",min:0,max:1,step:.1}),a.addBinding(t,"strength",{label:"强度",min:0,max:3,step:.2}),a.addBinding(t,"radius",{label:"半径",min:0,max:1,step:.1}),a.addBlade({view:"text",label:"post-processing",parse:i=>String(i),value:"未完成：等待Tresjs库更新"}),(i,u)=>(g(),w(d(Q),K(r,{"window-size":""}),{default:M(()=>[re,x(d(U),y(S(n)),null,16),oe,le,(g(),w(W,null,{default:M(()=>[x(se,y(S(t)),null,16)]),_:1}))]),_:1},16))}});export{he as default};
