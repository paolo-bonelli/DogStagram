(this["webpackJsonpdog-stagram"]=this["webpackJsonpdog-stagram"]||[]).push([[0],{25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(17),o=n.n(s),a=(n(25),n(14)),r=n.n(a),l=n(18),d=n(9),j=n(5),u=n(0),h=function(e){var t=e.title;return Object(u.jsxs)("header",{className:"main-header",children:[Object(u.jsx)("h1",{className:"header-title",children:Object(u.jsx)("a",{href:"./",children:t})}),Object(u.jsx)(j.d,{className:"btn-icon",onClick:function(e){console.log("Saved items")}})]})};h.defaultProps={title:"DogStagram"};var b=h,f=n(11);var m=function(){return Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)(f.b,{to:"/",children:Object(u.jsx)(j.c,{className:"btn-icon",onClick:function(e){console.log("Inicio")}})}),Object(u.jsx)(f.b,{to:"/add",children:Object(u.jsx)(j.f,{className:"btn-icon",onClick:function(e){console.log("Agregar")}})}),Object(u.jsx)(j.g,{className:"btn-icon",onClick:function(e){console.log("Explorar")}})]})})},g=function(e){var t=e.dog,n=e.onLike,i=e.onDislike,c=e.onPin,s=e.onShare;return Object(u.jsxs)("article",{className:"dog-post",children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("figcaption",{children:t.breed}),Object(u.jsx)("img",{className:"dog-img",src:t.image,alt:t.breed})]}),Object(u.jsxs)("section",{className:"dog-actions",children:[Object(u.jsxs)("div",{className:"btn-group",children:[Object(u.jsx)(j.i,{className:"btn-icon ".concat(t.liked?"btn-icon-check":""),onClick:function(e){n(t.id)}}),Object(u.jsx)(j.h,{className:"btn-icon ".concat(t.disliked?"btn-icon-check":""),onClick:function(e){i(t.id)}}),Object(u.jsx)(j.e,{className:"btn-icon",onClick:function(e){s(t.id)}})]}),Object(u.jsx)(j.a,{className:"btn-icon ".concat(t.pinned?"btn-icon-check":""),onClick:function(e){c(t.id)}})]})]})};var O=function(e){var t=e.dogs,n=e.onLike,i=e.onDislike,c=e.onPin,s=e.onShare,o=t.map((function(e){return Object(u.jsx)(g,{dog:e,onLike:n,onDislike:i,onPin:c,onShare:s},e.id.toString())}));return Object(u.jsx)("section",{className:"dog-posts",children:o})};var x=function(e){return this.id=e,this.liked=!1,this.disliked=!1,this.pinned=!1,this.setBreed=function(e){return this.breed=e,this},this.setImg=function(e){return this.image=e,this},this.likeDog=function(){return this.liked=!0,this.disliked=!1,this},this.dislikeDog=function(){return this.liked=!1,this.disliked=!0,this},this.pinDog=function(){return this.pinned=!this.pinned,this},this},p=n(2);var v=function(e){var t=e.isSelected,n=e.fileRoute,i=e.fileName;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("label",{htmlFor:"dog-image",children:[Object(u.jsxs)("div",{className:"dog-image-placeholder ".concat(t?"hidden":""),children:[Object(u.jsx)(j.b,{className:"upload-icon"}),Object(u.jsx)("p",{children:"No ha elejido ning\xfan archivo"})]}),Object(u.jsxs)("figure",{children:[Object(u.jsx)("img",{src:n,alt:"No ha elegido ninguna imagen",className:"dog-image ".concat(t?"":"hidden")}),Object(u.jsx)("figcaption",{children:t?i:""})]})]})})};var k=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)({}),o=Object(d.a)(s,2),a=o[0],r=o[1],l=Object(i.useState)(""),j=Object(d.a)(l,2),h=j[0],b=j[1],f=Object(i.useState)(""),m=Object(d.a)(f,2),g=m[0],O=m[1];return Object(i.useEffect)((function(e){if(a instanceof File){O(a.name);var t=new FileReader;t.addEventListener("load",(function(){b(t.result)})),t.readAsDataURL(a)}else O(""),c(!1)}),[a]),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(e.target)},className:"add-form",encType:"multipart/form-data",method:"POST",children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"dog-breed",children:"Raza de perro:"}),Object(u.jsx)("input",{type:"text",name:"breed",id:"dog-breed",required:!0})]}),Object(u.jsxs)("div",{className:"form-control-upload",children:[Object(u.jsx)(v,{isSelected:n,fileName:g,fileRoute:h}),Object(u.jsx)("input",{onChange:function(e){r(e.target.files[0]),c(!0)},type:"file",name:"dog-image",id:"dog-image",accept:"image/png, image/jpeg",required:!0,hidden:!0})]}),Object(u.jsx)("input",{type:"submit",value:"Agregar",className:"form-control btn-submit"})]})};var N=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];Object(i.useEffect)((function(){var e=function(){var e=Object(l.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thedogapi.com/v1/images/search?limit=10&mime_types=jpg,png");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){c(e.map((function(e){return new x(e.id).setBreed(e.breeds.length>0?e.breeds[0].name:"No identificado").setImg(e.url)})))}))}),[]);var s=function(e){c(n.map((function(t){return t.id===e?t.likeDog():t})))},o=function(e){c(n.map((function(t){return t.id===e?t.dislikeDog():t})))},a=function(e){c(n.map((function(t){return t.id===e?t.pinDog():t})))},j=function(e){console.log("Share it ".concat(e))};return Object(u.jsx)(f.a,{children:Object(u.jsxs)("div",{className:"main-container",children:[Object(u.jsx)(b,{}),Object(u.jsx)(p.a,{path:"/",exact:!0,render:function(e){return Object(u.jsx)(O,{dogs:n,onLike:s,onDislike:o,onPin:a,onShare:j})}}),Object(u.jsx)(p.a,{path:"/add",component:k}),Object(u.jsxs)("footer",{children:[Object(u.jsxs)("div",{children:["Icons made by ",Object(u.jsx)("a",{href:"https://www.flaticon.com/authors/becris",title:"Becris",children:"Becris"})," from ",Object(u.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(u.jsxs)("div",{children:["Icons made by ",Object(u.jsx)("a",{href:"https://www.flaticon.com/authors/gregor-cresnar",title:"Gregor Cresnar",children:"Gregor Cresnar"})," from ",Object(u.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]}),Object(u.jsx)(m,{})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),w()}},[[33,1,2]]]);
//# sourceMappingURL=main.f01cc8ab.chunk.js.map