(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(6),i=c.n(r),s=(c(12),c(4)),p=c.n(s),u=c(7),o=c(2),j=(c(14),c(5)),l=c.n(j),b=c(0),h=function(e){var t=e.title,c=e.calories,a=e.image,n=e.ingredients;return Object(b.jsxs)("div",{className:l.a.recipe,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("ol",{children:n.map((function(e){return Object(b.jsx)("li",{children:e.text})}))}),Object(b.jsx)("p",{children:c}),Object(b.jsx)("img",{className:l.a.image,src:a,alt:""})]})},m=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),s=i[0],j=i[1],l=Object(a.useState)("chicken"),m=Object(o.a)(l,2),d=m[0],f=m[1];Object(a.useEffect)((function(){O()}),[d]);var O=function(){var e=Object(u.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("97e81a4f","&app_key=").concat("99a2eac2c3890d8a034b2e161709312a"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(s),j("")},className:"search-form",children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){j(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:" search "})]}),Object(b.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(b.jsx)(h,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))},5:function(e,t,c){e.exports={recipe:"recipe_recipe__f9_UG",image:"recipe_image__1-iyN"}}},[[16,1,2]]]);
//# sourceMappingURL=main.983209cc.chunk.js.map