import{a1 as p,l as f,a9 as u,a2 as d,aq as _,r as h,o as m,x as C,E as g,a8 as r,a4 as v,cq as w,a as i,L as S,ac as x,Y as a}from"./vendor.ydO6dH7Z1712722105506.js";import{_ as y}from"./heatmapJS.vue_vue_type_script_setup_true_lang.qRBVgdSw1712722105506.js";import"./heatmap.-7bM2fR91712722105506.js";import"./_commonjsHelpers.5-cIlDoe1712722105506.js";const R=a("TresPerspectiveCamera",{position:[21,34,55],fov:60,near:1,far:1e3},null,-1),T=a("TresAmbientLight",{color:"#cccccc",intensity:.4},null,-1),B=a("TresPointLight",{color:"#ffffff",intensity:.8},null,-1),L=a("TresGridHelper",{args:[50,25],position:[0,0,0]},null,-1),I=p({__name:"heatmapExample",setup(P){const l={clearColor:"#030311",shadows:!0,alpha:!1,outputColorSpace:v,shadowMapType:w,useLegacyLights:!0,antialias:!0},t=f();let e=!0;u().onLoop(({elapsed:s})=>{!e&&parseInt(s)%2==1&&(e=!0,t.value&&t.value.setData()),e&&parseInt(s)%2==0&&(e=!1)});const o=d({show2dCanvas:!0,heightRatio:6}),n=new _({title:"参数",expanded:!0});return n.addBinding(o,"show2dCanvas",{label:"显示二维图"}),n.addBinding(o,"heightRatio",{label:"高度",min:1,max:10,step:1}),(s,b)=>{const c=h("TresCanvas");return m(),C(c,r(l,{"window-size":""}),{default:g(()=>[R,i(S(x),{autoRotate:!0,autoRotateSpeed:2}),T,B,L,i(y,r({ref_key:"heatmapJSRef",ref:t},o),null,16)]),_:1},16)}}});export{I as default};
