import{a1 as h,ak as C,aD as S,aE as k,b2 as p,b3 as _,aq as y,o as l,c as b,Y as s,L as r,a as t,G as g,a2 as B,ad as x,a6 as P,r as j,E as u,ac as T,x as L,ag as N,aa as z,ab as E}from"./vendor.ydO6dH7Z1712722105506.js";import{_ as $}from"./reflectorMesh.vue_vue_type_script_setup_true_lang.os10eDeY1712722105506.js";/* empty css                                                                                 */import{_ as A}from"./randomLoading.vue_vue_type_script_setup_true_lang.3jFrVTC71712722105506.js";import{_ as D}from"./cloudPoints.vue_vue_type_script_setup_true_lang.d2MYqEKC1712722105506.js";import"./Reflector.eMVL72-V1712722105506.js";import"./starLoading.kHyMb1Sp1712722105506.js";import"./bubbleLoading.OxfRW30d1712722105506.js";const O=["object"],F=h({__name:"planeClipping",async setup(v){let o,e;const{renderer:i}=C();i.value.localClippingEnabled=!0;const{nodes:a}=([o,e]=S(()=>k("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/industry4/plane/scene.gltf",{draco:!0,decoderPath:"./draco/"})),o=await o,e(),o);console.log(a),a.Sketchfab_model.getObjectByName("Floor").removeFromParent();const c=a.Sketchfab_model.getObjectByName("Cube006_Avion_0");c.castShadow=!0;const n=[new p(new _(1,0,0),0),new p(new _(0,0,-1),0)];c.material.clipIntersection=!0,c.material.clippingPlanes=n;const d=a.Sketchfab_model.getObjectByName("Cube006_M_Moteur_0");d.material.clipIntersection=!0,d.material.clippingPlanes=n;const w=a.Sketchfab_model.getObjectByName("CS_Black_0"),f=new y({title:"裁剪参数",expanded:!0});return f.addBinding(n[0],"constant",{label:"x",min:-200,max:200,step:1}),f.addBinding(n[1],"constant",{label:"y",min:-200,max:250,step:1}),(V,q)=>(l(),b(g,null,[s("primitive",{object:r(a).Sketchfab_model},null,8,O),t(D,{isRemoveSrc:"",model:r(w),color:"#fff"},null,8,["model"])],64))}}),M=s("TresPerspectiveCamera",{position:[500,330,500],fov:50,near:.1,far:1e4},null,-1),R=s("TresAmbientLight",{color:"#ffffff",intensity:"1"},null,-1),U=h({__name:"planeClipping",setup(v){const o=B({mirrorSize:900,gridSize:880,mirrorColor:"#efefef",divisions:10,colorCenterLine:"#444444",colorGrid:"#888888"}),e=x();return P(()=>{e.value&&(e.value.shadow.mapSize.set(1e3,1e3),e.value.shadow.camera.near=.1,e.value.shadow.camera.far=5e3,e.value.shadow.camera.top=200,e.value.shadow.camera.right=200,e.value.shadow.camera.left=-200,e.value.shadow.camera.bottom=-200,e.value.shadow.radius=10)}),(i,a)=>{const m=j("TresCanvas");return l(),b(g,null,[t(r(A)),t(m,{clearColor:"#333",shadows:"","window-size":""},{default:u(()=>[M,t(r(T)),R,s("TresDirectionalLight",{ref_key:"TDirectionalLight",ref:e,color:"#ffffff",position:[300,300,350],intensity:6,"cast-shadow":""},null,512),(l(),L(N,null,{default:u(()=>[t(F)]),_:1})),t($,z(E(o)),null,16)]),_:1})],64)}}});export{U as default};
