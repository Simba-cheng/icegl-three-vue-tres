var se=Object.defineProperty,oe=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var j=(m,l,d)=>l in m?se(m,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):m[l]=d,R=(m,l)=>{for(var d in l||(l={}))ie.call(l,d)&&j(m,d,l[d]);if(J)for(var d of J(l))re.call(l,d)&&j(m,d,l[d]);return m},H=(m,l)=>oe(m,ne(l));import{a1 as K,u as te,s as ue,o as t,c as r,a as f,E as c,I as A,t as y,L as e,d_ as ce,Y as g,x as M,d$ as de,e0 as fe,Z as x,e1 as pe,G as p,H as C,cL as N,e2 as G,e3 as he,ah as me,ai as ve,_ as z,cH as W,e4 as q,e5 as ge,e6 as be,cM as we,e7 as Ae,e8 as U,l as L,cJ as X,w as Y,e9 as _e,ea as ke,b as Z,J as Ce,K as ye,eb as xe,ec as D,ed as V,ee as Fe,ef as Me,eg as $}from"./vendor.LnRgd2r_1716546362088.js";import{a as Ie,b as Le}from"./utils.k8g47jOf1716546362088.js";const Ee=m=>(me("data-v-45832dd1"),m=m(),ve(),m),Se=["href"],Pe=["innerHTML"],Te={class:"flex flex-wrap flex-justify-start content-start mt-6 pl-6"},Qe=Ee(()=>g("div",{class:"w-full h-48 text-5 line-height-1.5em text-left mb-2 text-#5384ff",style:{"background-color":"rgb(55 56 61)",overflow:"hidden","border-radius":"10px"}},[g("div",{class:"p-2"},"官网已经更新的插件功能，请git 更新代码!")],-1)),Be=["onClick"],De={key:0,controls:"",class:"w-full max-h-70 h-14em"},Oe=["src"],Re={key:2,class:"w-full h-48 text-3 text-left mb-2",style:{"background-color":"rgb(55 56 61)",overflow:"hidden","border-radius":"10px"}},He=["innerHTML"],Ue=["onClick"],Ve=K({__name:"cardList",props:{onePlugin:{}},setup(m){const l=m,{menuSetup:d}=te("forPreview");let I="./";const b=ue(),F=(h,w,u)=>{if(w.url)return window.open(w.url,"_blank");let v="/plugins/".concat(h.name,"/").concat(w.name);if(h.pNode&&(v="/plugins/".concat(h.pNode,"/").concat(h.name,"/").concat(w.name)),u)v="https://opensource.icegl.cn/#"+v,window.open(v,"_blank");else{let S=b.resolve({path:v});window.open(S.href,"_blank")}},E=(h,w)=>d.value&&d.value[h.name]&&d.value[h.name][w]?d.value[h.name][w].taglist_text:"",T=(h,w)=>d.value&&d.value[h.name]&&d.value[h.name][w]?d.value[h.name][w].taglist:"";return(h,w)=>(t(),r(p,null,[f(e(ce),{titlePlacement:"left"},{default:c(()=>[A(y(l.onePlugin.title+" - "+l.onePlugin.name),1)]),_:1}),f(e(pe),{vertical:""},{default:c(()=>[g("a",{target:"_blank",href:l.onePlugin.website,style:{"text-decoration":"none",color:"black"}},[l.onePlugin.author?(t(),M(e(fe),{key:0,class:"text-right ml-[10px] w-95/100 mt-[-24px] block position-relative",style:{color:"#0f1222"},size:"small"},{default:c(()=>[f(e(de),{class:"position-relative top-[2px]"}),A(" 作者： "+y(l.onePlugin.author),1)]),_:1})):x("",!0)],8,Se),g("div",{class:"p-2 ml-13",style:{},innerHTML:l.onePlugin.intro},null,8,Pe)]),_:1}),g("div",Te,[(t(!0),r(p,null,C(h.onePlugin.preview,(u,v)=>(t(),r("div",{class:"w-80 mr-10 mb-10 overflow-hidden relative",key:v},[h.onePlugin.waitForGit||u.waitForGit?(t(),r(p,{key:0},[E(l.onePlugin,u.name)?(t(),r("div",{key:0,class:N(["tag-sheared",T(l.onePlugin,u.name)])},y(E(l.onePlugin,u.name)),3)):x("",!0),f(e(G),{header:u.title,shadow:"hover"},{default:c(()=>[Qe,g("div",{class:"cursor-pointer text-right",style:{"margin-top":"6px","margin-bottom":"-8px"},onClick:S=>F(l.onePlugin,u,!0)}," 点击查看演示 ",8,Be)]),_:2},1032,["header"])],64)):(t(),r(p,{key:1},[E(l.onePlugin,u.name)?(t(),r("div",{key:0,class:N(["tag-sheared",T(l.onePlugin,u.name)])},y(E(l.onePlugin,u.name)),3)):x("",!0),f(e(G),{header:u.title,shadow:"hover"},{default:c(()=>[u.type==="video"?(t(),r("video",De,[g("source",{src:e(I)+u.src,type:"video/mp4",autoplay:"true",loop:"true"},null,8,Oe)])):u.type==="img"?(t(),M(e(he),{key:1,class:"w-full max-h-70 h-14em",src:e(I)+u.src,lazy:""},null,8,["src"])):u.type==="text"?(t(),r("div",Re,[g("div",{class:"p-2",style:{color:"white"},innerHTML:u.src},null,8,He)])):x("",!0),g("div",{class:"cursor-pointer text-right",style:{"margin-top":"6px","margin-bottom":"-8px"},onClick:S=>F(l.onePlugin,u)}," 点击查看演示 ",8,Ue)]),_:2},1032,["header"])],64))]))),128))])],64))}}),ee=z(Ve,[["__scopeId","data-v-45832dd1"]]),Ne={class:"filterFixed"},Ke=we('<a target="_black" href="https://gitee.com/ice-gl/icegl-three-vue-tres" data-v-80e904a5><img src="https://gitee.com/ice-gl/icegl-three-vue-tres/badge/star.svg?theme=dark" alt="gitee-starts" data-v-80e904a5></a><a target="_black" href="https://space.bilibili.com/410503457" style="top:-1px;" data-v-80e904a5><img alt="bilibili" src="https://img.shields.io/badge/dynamic/json?url=https://api.bilibili.com/x/relation/stat?vmid=410503457&amp;query=data.follower&amp;color=282c34&amp;label=B%E7%AB%99&amp;labelColor=FE7398&amp;logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAD7ElEQVR4nO2dW9WrMBCFK6ESkFAJSKiESqgEHCABCZWAhEpAAhL2ecik5dDc%2FpXLBDLfWnlqy0xmJ5BMQnq5CIIgCIIgCIIgCIIgCEIBAHQAemYfrgCunD6wAKAHsEKxALgx+bCQD8%2FS9tmgVqeDr1lLigDgZvDhXso+K9TyTBQRwRJ8AHjntl0Flh5QRAQK%2FmKxPeayWx2OXpBNBKiHvi34b7T2MC4pAvW6twR%2FRwkRKPizBN8CgEcuESj4Lwm+BwBjahEk+H8EwJRKhOaCDzW8e1JLfkUUH1NgmR3XmHffHR1l+72BSs8d7w8U+JDAnZERQMcV+CtUi7dNqFqibB4J7vtrq7xKCuAasbTMXCL4T+5aVk6+2xHUrWdhruAR6HIJcOeu2UHI8zyAe2ytWfEdWz9PVvQ8YAmIQ5dDAB9LFsMVAv8oMO2zAGrC5WNIarRiAuKR9jYEd9pY08aa6uUzIHGRdkgKd8pY0yc1WjEBAqypDYoAG0QAZkQAZkQAZkQAZk4vANQenjsSzS3I%2FwcSbXU5jQBUkRtdf4Rar90v8kSv3+I3ffCCSpk8I%2Fw+lgDkdI%2Fv2rEp2CaiWm1AsDQLlDAD+dlFXLMeAaCSeLZdaSFE5VUQNot38cKuEeBgAsSuG0flVZBmEanbXfNQAsS0fgBYIn2fIu3%2FBBMHEyBmDXlFfA8IzeHb+Ems4WAChKykrVA9ZfsQTL57jXzRg4A5wC%2FA8N4ADiZAZwm2XjW75Qh2KOTfA0p4kygPw28OJcCVgn3nDnYo2EwEYRgGH0qAMyICMCMCMCMCMCMCMCMCMCMCfP3qwHDOQ4AAUekTk8FaBRihJnZdYbvtCGC7LvmkM63GjVDINPFrQgCq5ETXfmMzI90FXzPvfqt7x4rEu%2FZaEcCUxFvgz2zO+BUn6UkoaEEAsptiMSX5e8FoRYCN7cVgb4Vq7U%2FH50Pq4JNP7Qiw8UFnJwcK+tXy+Wj6PLEvPgHSHv5UgwA1IQIwwyFAyLJin9RoxYgAzAQIkPwNmf26busC+OIx5TDqo5nDT+F%2FSS%2F9CYzwb+No49zNy2evkYv0LywGGAXUvp6eSneycqOic0w20k7CNgKE7jJunSGLACTCxF27ylmQc98T5MQUH49swd+I0HPXslLKnT0N+wnkrTKi9JZL%2FL9i1SorMmdeQ4TQQ7OFMxIMzGD45w8nUL1im7efENZLJpgPSw0pfz0cdt4U3230Td%2FTvx2R6d2FrHhEWLkq5PELOMsRPHCPnAZGv1xJteL7jbJiaW3sB2nDvPC%2FosSYvjRQz4cJ6n7KO3rYQL7M+L6nVtfDVRAEQRAEQRAEQRAEIZ5%2FSAXmdfXaoQsAAAAASUVORK5CYII%3D&amp;cacheSeconds=3600" data-v-80e904a5></a><a href="https://github.com/hawk86104/icegl-three-vue-tres" target="_blank" data-v-80e904a5><img src="https://img.shields.io/github/stars/hawk86104/icegl-three-vue-tres" data-v-80e904a5></a><a href="https://github.com/hawk86104/icegl-three-vue-tres" target="_blank" data-v-80e904a5><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hawk86104/icegl-three-vue-tres" data-v-80e904a5></a><a href="https://github.com/hawk86104/icegl-three-vue-tres" target="_blank" data-v-80e904a5><img src="https://img.shields.io/github/license/hawk86104/icegl-three-vue-tres" data-v-80e904a5></a>',5),ze=K({__name:"filterComFixed",setup(m){const l=W("filterFixedInputValue"),d=W("menuSetupFilter");return(I,b)=>(t(),r("div",Ne,[f(e(ge),{modelValue:e(l),"onUpdate:modelValue":b[0]||(b[0]=F=>q(l)?l.value=F:null),class:"FInput-input",placeholder:"查找的功能，如：城市",clearable:""},{prepend:c(()=>[A(" 检索 ")]),suffix:c(()=>[f(e(Ae))]),_:1},8,["modelValue"]),f(e(be),{modelValue:e(d),"onUpdate:modelValue":b[1]||(b[1]=F=>q(d)?d.value=F:null)},{default:c(()=>[f(e(U),{value:"hot"},{default:c(()=>[A(" 热 ")]),_:1}),f(e(U),{value:"new"},{default:c(()=>[A(" 新 ")]),_:1}),f(e(U),{value:"recommend"},{default:c(()=>[A(" 荐 ")]),_:1})]),_:1},8,["modelValue"]),Ke]))}}),Je=z(ze,[["__scopeId","data-v-80e904a5"]]),je={class:"absolute menuSelf"},Ge={class:"flex h-full w-full"},We={style:{"background-color":"#0f1222"}},qe={class:"flex absolute",style:{left:"1px","flex-direction":"column",top:"2px"}},Xe={class:"left-m-text"},Ye=K({__name:"preview",setup(m){const l=window.layoutConfig.menus,d=n=>{if(console.log(n),n.value>=10){const i=Math.floor(n.value/10),s=n.value%10;window.location.assign(l[i].children[s].path)}else window.location.assign(l[n.value].path)},I=L([]),b=L({});b.value=Ie(),Le(b);const F=n=>{var i;(i=I.value[n.value])==null||i.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},E=()=>{var n;(n=document.querySelector(".right-page-list"))==null||n.scrollTo({top:0,behavior:"smooth"})},T=L(["1","2"]),h=L("");X("filterFixedInputValue",h);const w=(n,i)=>{if(!i)return S(O.value);const s={};for(const o in n)if(n.hasOwnProperty(o)){const a=n[o];if(typeof a=="object"){if(o==="basic"){const _=Object.values(w(a.child,i));_.length&&(s[o]={},Object.assign(s[o],a,{child:_}));continue}if(a.title&&a.title.toLocaleLowerCase().includes(i)||a.name&&a.name.toLocaleLowerCase().includes(i)){s[o]=a;continue}else{const _=a.preview.filter(P=>P.name&&P.name.toLocaleLowerCase().includes(i)||P.title&&P.title.toLocaleLowerCase().includes(i));_.length>0&&(s[o]=H(R({},a),{preview:_}))}}}return s};let u=L(b.value);Y(h,n=>{u.value=w(b.value,n.toLocaleLowerCase()),n||(T.value=["1","2"])});const{menuSetup:v}=te("forPreview");function S(n){if(n.length===0)return b.value;const i={};return n.forEach(s=>{var o;if(v.value){for(const a in v.value)if(v.value.hasOwnProperty(a)){for(const k in v.value[a])if(v.value[a].hasOwnProperty(k)&&v.value[a][k].taglist===s&&(o=b.value[a])!=null&&o.preview){const _=b.value[a].preview.filter(P=>P.name===k);_&&(i[a]?i[a].preview=i[a].preview.concat(_):i[a]=H(R({},b.value[a]),{preview:_}))}}}}),i}const O=L([]);X("menuSetupFilter",O),Y(O,n=>{u.value=S(n)});const le=n=>{const i={recommend:{show:!1,text:"荐"},new:{show:!1,text:"新"},hot:{show:!1,text:"热"}};if(v.value&&v.value[n]){const s=v.value[n];for(const o in s)i[s[o].taglist].show=!0}return i};function Q(){const n=navigator.userAgent,i=window.innerWidth,s=/Mobi|Android|iPhone/i.test(n),o=/iPad|Tablet|Nexus 7|Nexus 10|KFAPWI/i.test(n);return s?o?"Tablet":"Mobile":i<=480?"Mobile":i<=900?"Tablet":"PC"}const B=L(!1),ae=()=>{B.value=!0};return(n,i)=>(t(),r(p,null,[g("div",je,[g("div",{class:"btn-just",onClick:ae},[f(e(_e))])]),f(e(ke),{show:B.value,"onUpdate:show":i[0]||(i[0]=s=>B.value=s),placement:"top",title:"",onOk:i[1]||(i[1]=s=>B.value=!1)},{default:c(()=>[f(e(Z),{mode:"vertical",collapsed:!1,inverted:"",onSelect:d},{default:c(()=>[(t(!0),r(p,null,C(e(l),(s,o)=>(t(),r(p,{key:o},[s.children?(t(),M(e(V),{key:0,value:o},{label:c(()=>[A(y(s.title),1)]),default:c(()=>[(t(!0),r(p,null,C(s.children,(a,k)=>(t(),M(e(D),{value:o*10+k},{label:c(()=>[A(y(a.title),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["value"])):(t(),M(e(D),{key:1,value:o},{label:c(()=>[A(y(s.title),1)]),_:2},1032,["value"]))],64))),128))]),_:1})]),_:1},8,["show"]),g("div",Ge,[g("div",We,[f(e(Z),{mode:"vertical",expandTrigger:"click",defaultExpandAll:Q()==="PC",collapsed:Q()!=="PC",inverted:!0,onSelect:F},{default:c(()=>[f(e(V),{value:"1"},{icon:c(()=>[f(e(Fe))]),label:c(()=>[A("基础功能展示")]),default:c(()=>[(t(!0),r(p,null,C(e(u),(s,o)=>(t(),r(p,null,[o==="basic"?(t(!0),r(p,{key:0},C(s.child,(a,k)=>(t(),M(e(D),{value:a.name},{label:c(()=>[A(y(a.title),1)]),_:2},1032,["value"]))),256)):x("",!0)],64))),256))]),_:1}),f(e(V),{value:"2"},{icon:c(()=>[f(e(Me))]),label:c(()=>[A("插件中心")]),default:c(()=>[(t(!0),r(p,null,C(e(u),(s,o)=>(t(),r(p,null,[o!=="basic"?(t(),M(e(D),{key:0,value:o},{label:c(()=>[g("div",qe,[(t(!0),r(p,null,C(le(s.name),(a,k)=>(t(),r(p,null,[a.show?(t(),M(e($),{key:0,value:a.text,class:"tag-fbdge",type:"primary",size:"small"},null,8,["value"])):x("",!0)],64))),256))]),g("span",Xe,y(s.title),1),f(e($),{value:s.preview.length,class:"count-fbdge",type:"primary",size:"small"},null,8,["value"])]),_:2},1032,["value"])):x("",!0)],64))),256))]),_:1})]),_:1},8,["defaultExpandAll","collapsed"])]),g("div",{class:N(["overflow-scroll relative right-page-list",{"mt-10":Q()==="PC"}]),style:{height:"calc(100vh - 42px - 52px)",width:"100%"}},[Ce(f(Je,null,null,512),[[ye,Q()==="PC"]]),(t(!0),r(p,null,C(e(u),(s,o)=>(t(),r(p,{key:o},[o==="basic"?(t(!0),r(p,{key:0},C(s.child,(a,k)=>(t(),r("div",{style:{"background-color":"#f1f1f2"},key:k,ref_for:!0,ref:_=>I.value[a.name]=_},[f(ee,{onePlugin:a},null,8,["onePlugin"])]))),128)):x("",!0)],64))),128)),(t(!0),r(p,null,C(e(u),(s,o)=>(t(),r(p,{key:o},[o!=="basic"?(t(),r("div",{key:0,style:{"background-color":"#f1f1f2"},ref_for:!0,ref:a=>I.value[o]=a},[f(ee,{onePlugin:s},null,8,["onePlugin"])],512)):x("",!0)],64))),128)),f(e(xe),{class:"toTop",onClick:E})],2)])],64))}}),tt=z(Ye,[["__scopeId","data-v-04c17a5c"]]);export{tt as default};
