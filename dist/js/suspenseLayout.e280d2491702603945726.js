import{Z as l,o as t,v as c,C as s,J as r,ac as d,a as o,bY as f,G as h,r as g,c as w,aD as v,D as x}from"./vendor.b47b6e401702603945726.js";const b=l({__name:"showSrcBtn",setup(i){let e=(window.location.href.split("#")[1]||"").split("/"),_="https://gitee.com/ice-gl/icegl-three-vue-tres/blob/master/src",a="".concat(_,"/").concat(e[1],"/").concat(e[2],"/pages/").concat(e.slice(3).join("/"),".vue");console.log("源码地址",a);const m=()=>{window.open(a)};return($,n)=>(t(),c(r(d),{type:"info",class:"absolute",size:"small",style:{right:"10px",bottom:"10px"},onClick:n[0]||(n[0]=B=>m())},{icon:s(()=>[o(r(f))]),default:s(()=>[h("源码地址 ")]),_:1}))}}),k=l({__name:"suspenseLayout",setup(i){return(p,u)=>{const e=g("router-view");return t(),w(x,null,[(t(),c(v,null,{default:s(()=>[o(e)]),_:1})),o(b)],64)}}});export{k as default};
