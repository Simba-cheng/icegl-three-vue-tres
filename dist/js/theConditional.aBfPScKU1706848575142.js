import{$ as f,a0 as M,a1 as T,a2 as b,a3 as m,k as a,a6 as x,at as g,aw as y,ax as B,w as v,ay as w,o as t,v as V,D as k,a7 as C,K as i,a8 as G,W as e,c as r,X as n,a as P,ab as L}from"./vendor.FyjOyGIG1706848575142.js";const N=e("TresPerspectiveCamera",{position:[11,11,11],fov:45,near:.1,far:1e3,"look-at":[-8,3,-3]},null,-1),R=e("TresDirectionalLight",{position:[0,8,4],intensity:.2,"cast-shadow":""},null,-1),S=["material"],D=e("TresBoxGeometry",{args:[1,1,1]},null,-1),E=[D],I={key:0,position:[4,0,0]},$=e("TresBoxGeometry",{args:[1,1,1]},null,-1),z=e("TresMeshToonMaterial",{color:"#efefef"},null,-1),A=[$,z],K={key:1,position:[4,1,0]},U=e("TresBoxGeometry",{args:[1,1,1]},null,-1),W=e("TresMeshToonMaterial",{color:"#efefef"},null,-1),X=[U,W],j={key:2,position:[0,-4,-5]},q=e("TresGroup",null,[e("TresMesh",{position:[0,0,0]},[e("TresBoxGeometry",{args:[1,1,1]}),e("TresMeshBasicMaterial",{color:"#efef11"})]),e("TresMesh",{position:[0,2,0]},[e("TresBoxGeometry",{args:[1,1,1]}),e("TresMeshBasicMaterial",{color:"#ef11ef"})])],-1),F=[q],H=e("TresAmbientLight",{intensity:.5},null,-1),Q=f({__name:"theConditional",setup(J){const p=M({clearColor:"#000000",shadows:!0,alpha:!1,shadowMapType:T,outputColorSpace:b,toneMapping:m,useLegacyLights:!1}),s=a({groupVisible:!0,boxPropMaterialVisible:!0}),_=a(null),l=a(!0);let o=null,c=null;x(()=>{o||(o=new g({title:"显隐参数",expanded:!0}),o.addBinding(l,"value",{label:"boxVisible"}),o.addBinding(s.value,"boxPropMaterialVisible"),o.addBinding(s.value,"groupVisible")),c=y().proxy}),B(()=>{o&&(o.dispose(),o=null)}),v(()=>l,(u,d)=>{d!==void 0&&(c.$refs.boxRef.visible=u.value)},{deep:!0});const h=new w({color:"#ff0000"});return(u,d)=>(t(),V(i(G),C(p,{"window-size":""}),{default:k(()=>[N,R,e("TresMesh",{ref_key:"boxRef",ref:_,position:[0,0,0],material:i(h)},E,8,S),s.value.boxPropMaterialVisible?(t(),r("TresMesh",I,A)):n("",!0),s.value.boxPropMaterialVisible?(t(),r("TresMesh",K,X)):n("",!0),s.value.groupVisible?(t(),r("TresGroup",j,F)):n("",!0),P(i(L)),H]),_:1},16))}});export{Q as default};
