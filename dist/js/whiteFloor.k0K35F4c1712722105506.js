import{a1 as h,a2 as m,aq as _,ad as g,a6 as w,r as v,o as n,x as r,E as i,aa as c,ab as d,cl as b,a as t,L as l,ac as C,J as T,cy as x,Y as a,a$ as B,ag as p}from"./vendor.ydO6dH7Z1712722105506.js";import{_ as y}from"./skyBoxAmesh.vue_vue_type_script_setup_true_lang.7rHT8wQY1712722105506.js";import{_ as S}from"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.IrHtk4v51712722105506.js";const k=a("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1),M=a("TresAmbientLight",{intensity:10},null,-1),D=a("TresMesh",{position:[0,2,-4],"cast-shadow":""},[a("TresBoxGeometry",{args:[1,1,1]}),a("TresMeshNormalMaterial")],-1),j=h({__name:"whiteFloor",setup(L){const u={clearColor:"#201919",windowSize:!0,shadows:!0,toneMapping:b,toneMappingExposure:.8},o=m({size:[20,20],color:"#cbcb96",shadowColor:"#b8b59e",receiveShadow:!0,edge:.35}),s=new _({title:"地板参数",expanded:!0});s.addBinding(o,"edge",{label:"边缘模糊",min:.2,max:.36,step:.01}),s.addBinding(o,"color",{label:"地板颜色"}),s.addBinding(o,"shadowColor",{label:"阴影颜色"}),s.addBinding(o,"receiveShadow",{label:"显示阴影"});const e=g();return w(()=>{e.value&&(e.value.shadow.mapSize.set(1024,1024),e.value.shadow.camera.near=.1,e.value.shadow.camera.far=5e3,e.value.shadow.radius=10)}),(z,E)=>{const f=v("TresCanvas");return n(),r(f,c(d(u)),{default:i(()=>[k,t(l(C),{enableDamping:""}),M,T(a("TresDirectionalLight",{ref_key:"TDirectionalLight",ref:e,position:[0,10,10],intensity:1,color:"#ffffff","cast-shadow":""},null,512),[[l(x)]]),t(l(B),{args:[1,1,1],color:"orange",position:[3,2,1],"cast-shadow":""}),D,(n(),r(p,null,{default:i(()=>[t(S,c(d(o)),null,16)]),_:1})),(n(),r(p,null,{default:i(()=>[t(y,{texture:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/workshop_blur.jpg"})]),_:1}))]),_:1},16)}}});export{j as default};
