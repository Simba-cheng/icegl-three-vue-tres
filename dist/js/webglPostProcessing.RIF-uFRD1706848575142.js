import{c as x,o as C,l as w,t as N,s as I,i as v}from"./mat4.QgLY7Rov1706848575142.js";import{$ as X,at as Y,a0 as G,a6 as V,o as O,c as k,W,K as j}from"./vendor.FyjOyGIG1706848575142.js";const H="\nprecision mediump float;\n\nvarying vec2 texCoords;\n\nuniform sampler2D textureSampler;\nuniform float mixParam;\nvoid main()\n{\n    // float luminance=dot(texture2D(textureSampler,texCoords).rgb,vec3(.3451,.2118,.302));\n    vec4 color=mix(texture2D(textureSampler,texCoords),vec4(.1098,.6784,.1843,1.),mixParam);\n    gl_FragColor=color;\n}",q="\n\nattribute vec3 aPosition;\nattribute vec2 aTexCoords;\n\nvarying vec2 texCoords;\n\nvoid main()\n{\n    texCoords=aTexCoords;\n    gl_Position=vec4(aPosition,1.);\n}",Q="\n\nattribute vec3 aPosition;\nattribute vec2 aTexCoords;\n\nuniform mat4 uProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\n\nvarying vec2 texCoords;\n\nvoid main()\n{\n    texCoords=aTexCoords;\n    gl_Position=uProjection*uView*uModel*vec4(aPosition,1.);\n}",K="\nprecision mediump float;\n\nvarying vec2 texCoords;\n\nuniform sampler2D textureSampler;\n\nvoid main()\n{\n    gl_FragColor=texture2D(textureSampler,texCoords);\n}",$={id:"canvaswebgl"},z=["src"],te=X({__name:"webglPostProcessing",setup(J){let h="/icegl-three-vue-tres/",i,e,l,T,R,c,m,d,A,g,b,F,_;const E={r:1,g:.71,b:.76},s=new Y({title:"参数"}),o=G({hidden:!0,offset_right_top:{x:.5,y:.5},offset_right_bottom:{x:.5,y:.5},offset_left_top:{x:.5,y:.5},offset_left_bottom:{x:.5,y:.5},overlay:{r:1,g:0,b:.33}});s.addBlade({view:"slider",label:"颜色",min:0,max:1,value:.5}).on("change",t=>{f(),e.uniform1f(F,t.value)});let r=new Float32Array([.5,.5,0,1,1,.5,-.5,0,1,0,-.5,-.5,0,0,0,-.5,.5,0,0,1]);s.addBinding(o,"hidden",{label:"是否后处理"}),s.addBinding(o,"offset_right_top",{picker:"inline",x:{min:0,max:1},y:{min:0,max:1}}).on("change",t=>{r[0]=o.offset_right_top.x,r[1]=o.offset_right_top.y,f()}),s.addBinding(o,"offset_right_bottom",{picker:"inline",x:{min:-1,max:1},y:{min:-1,max:1}}).on("change",t=>{r[5]=o.offset_right_bottom.x,r[6]=o.offset_right_bottom.y,f()}),s.addBinding(o,"offset_left_bottom",{picker:"inline",x:{min:-1,max:1},y:{min:-1,max:1}}).on("change",t=>{r[10]=o.offset_left_bottom.x,r[11]=o.offset_left_bottom.y,f()}),s.addBinding(o,"offset_left_top",{picker:"inline",x:{min:-1,max:1},y:{min:-1,max:1}}).on("change",t=>{r[15]=o.offset_left_top.x,r[16]=o.offset_left_top.y,f()}),V(()=>{S()});const S=function(){i=document.querySelector("#canvaswebgl"),i.width=window.innerWidth,i.height=window.innerHeight,e=i.getContext("webgl"),e&&(y(),f(),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),B())};function B(){e.bindFramebuffer(e.FRAMEBUFFER,m),e.clearColor(E.r,E.g,E.b,1),e.clear(e.COLOR_BUFFER_BIT),D(),e.bindFramebuffer(e.FRAMEBUFFER,null),o.hidden&&(e.clear(e.COLOR_BUFFER_BIT),e.clearColor(0,0,1,1),e.bindBuffer(e.ARRAY_BUFFER,R),e.useProgram(c),e.bindTexture(e.TEXTURE_2D,d)),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_BYTE,0),requestAnimationFrame(B)}function D(){e.useProgram(l),e.bindBuffer(e.ARRAY_BUFFER,T);const t=x();C(t,0,i.width,i.height,0,.1,100),e.uniformMatrix4fv(A,!1,t);const n=x();w(n,[0,0,1],[0,0,0],[0,1,0]),e.uniformMatrix4fv(g,!1,n),P(_,600,600),P(_,400,400)}function P(t,n,u){let a=x();N(a,a,[n,u,0]),I(a,a,[250,250,0]),e.uniformMatrix4fv(b,!1,a),e.bindTexture(e.TEXTURE_2D,t),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_BYTE,0)}function y(){const t=new Float32Array([.5,.5,0,1,1,.5,-.5,0,1,0,-.5,-.5,0,0,0,-.5,.5,0,0,1]),n=new Uint8Array([0,1,2,0,2,3]);T=U(t,n),l=v(e,Q,K),A=e.getUniformLocation(l,"uProjection"),g=e.getUniformLocation(l,"uView"),b=e.getUniformLocation(l,"uModel"),_=p(document.getElementById("logo-texture"))}function f(){const t=new Uint8Array([0,1,2,0,2,3]);R=U(r,t),c=v(e,q,H),F=e.getUniformLocation(c,"mixParam"),e.getUniformLocation(c,"color"),L()}function L(){d=p(i),m=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,m),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,d,0),e.bindFramebuffer(e.FRAMEBUFFER,null)}function p(t){const n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),t instanceof HTMLImageElement?e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t):e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t.width,t.height,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),n}function U(t,n){const u=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const a=3*Float32Array.BYTES_PER_ELEMENT+2*Float32Array.BYTES_PER_ELEMENT;e.vertexAttribPointer(0,3,e.FLOAT,!1,a,0),e.enableVertexAttribArray(0),e.vertexAttribPointer(1,2,e.FLOAT,!1,a,3*Float32Array.BYTES_PER_ELEMENT),e.enableVertexAttribArray(1);const M=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,M),e.bufferData(e.ELEMENT_ARRAY_BUFFER,n,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),u}return(t,n)=>(O(),k("canvas",$,[W("img",{id:"logo-texture",src:j(h)+"/plugins/postProcessing/image/logo.png",style:{display:"none"}},null,8,z)]))}});export{te as default};
