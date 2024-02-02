import{$ as C,aQ as M,bJ as y,am as x,a4 as U,a5 as S,o as B,c as k,W as g,K as h,a9 as P,aa as $,k as R,a0 as A,at as T,v as V,D as F,a as _,a7 as j}from"./vendor.FyjOyGIG1706848575142.js";import{_ as D}from"./pagesShow.vue_vue_type_script_setup_true_lang.QkxAUghq1706848575142.js";import"./vanilla-307d3a93.esm.TaEyJAm01706848575142.js";import"./_commonjsHelpers.5-cIlDoe1706848575142.js";import"./LineSegments2.PFIor-LT1706848575142.js";const E={renderOrder:2e3},G=["position","uv"],w=C({__name:"rippleMesh",props:{positionSrc:{default:[{x:0,y:0},{x:10,y:10}]},color:{default:"#ffff00"},opacity:{default:.8},height:{default:100},num:{default:8},speed:{default:.15}},setup(v){const o=v,t={side:M,transparent:!0,depthWrite:!1,depthTest:!0,vertexShader:"\nprecision lowp float;\nprecision lowp int;\n".concat(y.fog_pars_vertex,"\nvarying vec2 vUv;\nvoid main() {\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    ").concat(y.fog_vertex,"\n}\n"),fragmentShader:"\n  precision lowp float;\n  precision lowp int;\n  uniform float time;\n  uniform float opacity;\n  uniform vec3 color;\n  uniform float num;\n  uniform float speed;\n  varying vec2 vUv;\n  void main() {\n    vec4 fragColor = vec4(0.);\n    float sin = sin((vUv.y - time * speed) * 10. * num);\n    float high = 0.92;\n    float medium = 0.4;\n    if (sin > high) {\n      fragColor = vec4(mix(vec3(.8, 1., 1.), color, (1. - sin) / (1. - high)), 1.);\n    } else if(sin > medium) {\n      fragColor = vec4(color, mix(1., 0., 1.-(sin - medium) / (high - medium)));\n    } else {\n      fragColor = vec4(color, 0.);\n    }\n    vec3 fade = mix(color, vec3(0., 0., 0.), vUv.y);\n    fragColor = mix(fragColor, vec4(fade, 1.), 0.85);\n    gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - vUv.y));\n  }\n	",uniforms:{time:{type:"pv2",value:0},color:{type:"uvs",value:new x(o.color)},opacity:{type:"pv2",value:o.opacity},num:{type:"pv2",value:o.num},speed:{type:"pv2",value:o.speed}}};let n=null,u=null;function d(s=[],c){const e=[],i=[];for(let f=0,a=e.length,r=i.length;f<s.length-1;f++){let m=1,l=s[f],p=s[f+1];e[a++]=l.x,e[a++]=0,e[a++]=l.y,i[r++]=0,i[r++]=0,e[a++]=p.x,e[a++]=0,e[a++]=p.y,i[r++]=1,i[r++]=0,e[a++]=l.x,e[a++]=c,e[a++]=l.y,i[r++]=0,i[r++]=m,e[a++]=l.x,e[a++]=c,e[a++]=l.y,i[r++]=0,i[r++]=m,e[a++]=p.x,e[a++]=0,e[a++]=p.y,i[r++]=1,i[r++]=0,e[a++]=p.x,e[a++]=c,e[a++]=p.y,i[r++]=1,i[r++]=m}n=new Float32Array(e),u=new Float32Array(i)}d(o.positionSrc,o.height);const{onLoop:b}=U();return b(({delta:s})=>{t.uniforms.time.value+=s}),S(()=>{o.color&&(t.uniforms.color.value=new x(o.color)),o.opacity&&(t.uniforms.opacity.value=o.opacity),o.num&&(t.uniforms.num.value=o.num),o.speed&&(t.uniforms.speed.value=o.speed)}),(s,c)=>(B(),k("TresMesh",E,[g("TresBufferGeometry",{position:[h(n),3],uv:[h(u),2]},null,8,G),g("TresShaderMaterial",P($(t)),null,16)]))}}),L=C({__name:"fence",setup(v){const o=R();S(()=>{o.value&&o.value.$refs.perspectiveCameraRef.position.set(580,360,500)});const t=A({color:"#00ffdd",opacity:.8,num:8,speed:.2}),n=new T({title:"围墙效果",expanded:!0});return n.addBinding(t,"color",{label:"颜色"}),n.addBinding(t,"opacity",{label:"透明度",min:0,max:1,step:.1}),n.addBinding(t,"speed",{label:"滚动速度",min:0,max:1,step:.1}),n.addBinding(t,"num",{label:"条纹数",min:0,max:20,step:1}),(u,d)=>(B(),V(D,{ref_key:"pagesShowRef",ref:o},{ability:F(()=>[_(w,{position:[0,20,0],positionSrc:[{x:-7.3*40,y:4.27*40},{x:-7.4*40,y:10.05*40},{x:-4.9*40,y:10.03*40},{x:-4.9*40,y:4.46*40},{x:-7.3*40,y:4.27*40}],height:180}),_(w,j({position:[0,20,0],positionSrc:[{x:.27*40,y:-1.19*40},{x:.32*40,y:-5.5*40},{x:-7.59*40,y:-5.9*40},{x:-7.6*40,y:-1.3*40},{x:.27*40,y:-1.19*40}]},t),null,16)]),_:1},512))}});export{L as default};
