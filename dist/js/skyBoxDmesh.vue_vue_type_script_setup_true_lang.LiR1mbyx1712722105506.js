import{a1 as o,ak as c,aD as i,bc as m,cj as l,aI as r,cp as u}from"./vendor.ydO6dH7Z1712722105506.js";const f=o({__name:"skyBoxDmesh",props:{texture:{}},async setup(p){let a,t;const s=p,{scene:n}=c(),{map:e}=([a,t]=i(()=>m({map:s.texture})),a=await a,t(),a);return e.wrapS=e.wrapT=l,e.generateMipmaps=!1,e.magFilter=r,e.minFilter=r,e.mapping=u,n.value.environment=e,n.value.background=e,(_,g)=>null}});export{f as _};
