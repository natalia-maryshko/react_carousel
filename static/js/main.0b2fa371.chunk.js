(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(5),a=n.n(i),s=n(2),c=n(4),r=n(6),m=n(7),l=n(10),o=n(8),u=n(1),p=n.n(u),j=(n(15),n(9)),b=(n(16),n(0)),h=function(e){var t=e.images,n=e.itemWidth,i=e.frameSize,a=e.step,s=e.animationDuration,c=e.infinite,r=Object(u.useState)(1),m=Object(j.a)(r,2),l=m[0],o=m[1],p=Math.min(t.length-i,t.length-a)+1,h=function(e){if(c)switch(!0){case l===p&&l+e>p:o(1);break;case 1===l&&l+e<1:case l+e>p:o(p);break;case l+e<1:o(1);break;default:o(l+e)}else switch(!0){case l+e>p:o(p);break;case l+e<1:o(1);break;default:o(l+e)}};return Object(b.jsxs)("div",{className:"Carousel",children:[Object(b.jsx)("div",{className:"Carousel__container",style:{width:"".concat(n*i,"px")},children:Object(b.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(-".concat((l-1)*n,"px)"),transitionDuration:"".concat(s,"ms")},children:t.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)("img",{src:e,alt:"emoji".concat(t),className:"Carousel__img",style:{width:"".concat(n,"px"),height:"".concat(n,"px")}})},e)}))})}),Object(b.jsxs)("div",{className:"Carousel__buttons",children:[Object(b.jsx)("button",{type:"button",disabled:1===l&&!c,onClick:function(){return h(-a)},children:"Prev"}),Object(b.jsx)("button",{type:"button",disabled:l===p&&!c,onClick:function(){return h(a)},"data-cy":"next",children:"Next"})]})]})},d=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.images,i=t.itemWidth,a=t.frameSize,r=t.step,m=t.animationDuration,l=t.infinite,o=function(t,n){e.setState(Object(c.a)(Object(c.a)({},t),{},Object(s.a)({},n.target.name,+n.target.value)))};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with ",n.length," images"]}),Object(b.jsx)(h,{images:n,itemWidth:i,frameSize:a,step:r,animationDuration:m,infinite:l}),Object(b.jsx)("form",{action:"",className:"App__form",children:Object(b.jsxs)("fieldset",{className:"App__fieldset",children:[Object(b.jsx)("legend",{children:"Settings:"}),Object(b.jsxs)("label",{htmlFor:"itemWidth",className:"App__form-item",children:["Image size",Object(b.jsx)("input",{type:"number",name:"itemWidth",id:"itemWidth",value:i,min:50,max:250,step:5,onChange:function(t){return o(e.state,t)}})]}),Object(b.jsxs)("label",{htmlFor:"frameSize",className:"App__form-item",children:["Frame size",Object(b.jsx)("input",{type:"number",name:"frameSize",id:"frameSize",value:a,min:1,max:10,onChange:function(t){return o(e.state,t)}})]}),Object(b.jsxs)("label",{htmlFor:"step",className:"App__form-item",children:["Step",Object(b.jsx)("input",{type:"number",name:"step",id:"step",value:r,min:1,max:7,onChange:function(t){return o(e.state,t)}})]}),Object(b.jsxs)("label",{htmlFor:"animationDuration",className:"App__form-item",children:["Animation duration",Object(b.jsx)("input",{type:"number",name:"animationDuration",id:"animationDuration",value:m,min:700,max:3e3,step:10,onChange:function(t){return o(e.state,t)}})]}),Object(b.jsxs)("label",{htmlFor:"infinite",className:"App__form-item",children:["Infinite",Object(b.jsx)("input",{type:"checkbox",name:"infinite",id:"infinite",onChange:function(){return e.setState({infinite:!l})}})]})]})})]})}}]),n}(p.a.Component),f=d;a.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0b2fa371.chunk.js.map