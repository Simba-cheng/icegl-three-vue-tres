import{_ as i}from"./pagesShow.vue_vue_type_script_setup_true_lang.QkxAUghq1706848575142.js";import{$ as l,as as d,w as t,o as s,c,X as p,bN as u,am as f,a0 as g,at as m,v as _,D as v,a as x,a9 as h,aa as y}from"./vendor.FyjOyGIG1706848575142.js";import"./vanilla-307d3a93.esm.TaEyJAm01706848575142.js";import"./_commonjsHelpers.5-cIlDoe1706848575142.js";import"./LineSegments2.PFIor-LT1706848575142.js";const F=["color","near","far"],w=l({__name:"index",props:{type:{default:"Fog"},color:{default:"#000"},density:{default:.01},near:{default:100},far:{default:4e3}},setup(r){const e=r,{scene:a}=d();return t(()=>e.type,(o,n)=>{o==="FogExp2"&&(a.value.fog=new u(e.color,.001))}),t(()=>e.color,(o,n)=>{a.value.fog.color=new f(e.color)}),t(()=>e.density,(o,n)=>{a.value.fog.density=e.density}),(o,n)=>e.type==="Fog"?(s(),c("TresFog",{key:0,color:e.color,near:e.near,far:e.far},null,8,F)):p("",!0)}}),N=l({__name:"fog",setup(r){const e=g({type:"Fog",color:"#000",density:.001,near:100,far:4e3}),a=new m;return a.addBlade({view:"list",label:"类型",options:[{text:"普通雾",value:"Fog"},{text:"雾Exp2",value:"FogExp2"}],value:"Fog"}).on("change",o=>{e.type=o.value,a.children[2].hidden=o.value==="Fog",a.children[3].hidden=o.value==="FogExp2",a.children[4].hidden=o.value==="FogExp2"}),a.addBinding(e,"color",{label:"颜色"}),a.addBinding(e,"density",{label:"密度",min:25e-5,max:.001,step:1e-4}),a.children[2].hidden=!0,a.addBinding(e,"near",{label:"最小距离",min:100,max:1e3,step:10}),a.addBinding(e,"far",{label:"最大距离",min:1e3,max:1e4,step:100}),(o,n)=>(s(),_(i,{ref:"pagesShowRef"},{ability:v(()=>[x(w,h(y(e)),null,16)]),_:1},512))}});export{N as default};
