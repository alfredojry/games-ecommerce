(this["webpackJsonpgames-ecommerce"]=this["webpackJsonpgames-ecommerce"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":312,"name":"Super Mario Odyssey","price":197.88,"score":100,"image":"super-mario-odyssey.png"},{"id":201,"name":"Call Of Duty Infinite Warfare","price":49.99,"score":80,"image":"call-of-duty-infinite-warfare.png"},{"id":102,"name":"The Witcher III Wild Hunt","price":119.5,"score":250,"image":"the-witcher-iii-wild-hunt.png"},{"id":99,"name":"Call Of Duty WWII","price":249.99,"score":205,"image":"call-of-duty-wwii.png"},{"id":12,"name":"Mortal Kombat XL","price":69.99,"score":150,"image":"mortal-kombat-xl.png"},{"id":74,"name":"Shards of Darkness","price":71.94,"score":400,"image":"shards-of-darkness.png"},{"id":31,"name":"Terra M\xe9dia: Sombras de Mordor","price":79.99,"score":50,"image":"terra-media-sombras-de-mordor.png"},{"id":420,"name":"FIFA 18","price":195.39,"score":325,"image":"fifa-18.png"},{"id":501,"name":"Horizon Zero Dawn","price":115.8,"score":290,"image":"horizon-zero-dawn.png"}]')},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),i=n.n(a),o=(n(14),n(5)),s=n(2),d=n(8),u=(n(15),n(0));var m=function(e){var t=e.item,n=e.handleAddToCart,c=e.handleRemoveFromCart,r=t.id,a=t.image,i=t.name,o=t.price,s=t.amount,d="/games-ecommerce../assets/"+a;return Object(u.jsxs)("div",{className:"CartItem",children:[Object(u.jsx)("h3",{children:i}),Object(u.jsxs)("div",{className:"information",children:[Object(u.jsxs)("p",{children:["Pre\xe7o: R$ ",o.toFixed(2).replace(".",",")]}),Object(u.jsxs)("p",{children:["Total: ","R$ "+(o*s).toFixed(2).replace(".",",")]})]}),Object(u.jsxs)("div",{className:"buttons-cart-item",children:[Object(u.jsx)("button",{onClick:function(){return c(r)},children:"-"}),Object(u.jsxs)("p",{children:["Quantidade: ",s]}),Object(u.jsx)("button",{onClick:function(){return n(t)},children:"+"})]}),Object(u.jsx)("img",{src:d,alt:i})]})};n(17);var j=function(e){var t=e.cartItems,n=e.handleAddToCart,c=e.handleRemoveFromCart,r=function(e){return e.reduce((function(e,t){return e+t.amount*t.price}),0)},a=function(e){return r(e)<250?10*e.reduce((function(e,t){return e+t.amount}),0):0};return Object(u.jsxs)("div",{className:"Cart",children:[Object(u.jsx)("h2",{children:"Seu carrinho"}),t.length?null:Object(u.jsx)("p",{children:"Carrinho vazio."}),t.map((function(e){return Object(u.jsx)(m,{item:e,handleAddToCart:n,handleRemoveFromCart:c},e.id)})),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{children:["Subtotal: R$ ",r(t).toFixed(2).replace(".",",")]}),Object(u.jsxs)("h3",{children:["Frete (gr\xe1tis para compras acima de R$ 250,00): R$ ",a(t).toFixed(2).replace(".",",")]}),Object(u.jsxs)("h2",{children:["Total: R$ ",(r(t)+a(t)).toFixed(2).replace(".",",")]})]})]})};n(18);var l=function(e){var t=e.handleCartOpen;return Object(u.jsx)("div",{className:"ButtonCart",onClick:t,children:Object(u.jsx)("img",{src:"/games-ecommerce../assets/cart-icon.svg",alt:"cart-icon"})})};n(19);var h=function(e){return Object(u.jsx)("div",{className:"Container",children:e.children})};n(20);var b=function(e){var t=e.product,n=e.handleAddToCart,c=t.image,r=t.name,a=t.price,i=t.score,o="/games-ecommerce../assets/"+c;return Object(u.jsxs)("div",{className:"ProductItem",children:[Object(u.jsx)("img",{src:o,alt:r}),Object(u.jsxs)("div",{className:"informations",children:[Object(u.jsx)("h3",{children:r}),Object(u.jsx)("p",{children:"R$ "+a.toFixed(2).replace(".",",")}),Object(u.jsxs)("p",{children:["Score: ",i]})]}),Object(u.jsx)("button",{onClick:function(){n(t)},children:"Acrescentar"})]})},O=(n(21),n(7));var p=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(d.a)(a,2),m=i[0],p=i[1],f=function(e){p((function(t){return t.find((function(t){return t.id===e.id}))?t.map((function(t){return t.id===e.id?Object(s.a)(Object(s.a)({},t),{},{amount:t.amount+1}):t})):[].concat(Object(o.a)(t),[Object(s.a)(Object(s.a)({},e),{},{amount:1})])}))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Sua loja online..."}),Object(u.jsx)(l,{handleCartOpen:function(){r(!n)}}),n&&Object(u.jsx)(j,{cartItems:m,handleAddToCart:f,handleRemoveFromCart:function(e){p((function(t){return t.reduce((function(t,n){return n.id===e?1===n.amount?t:[].concat(Object(o.a)(t),[Object(s.a)(Object(s.a)({},n),{},{amount:n.amount-1})]):[].concat(Object(o.a)(t),[n])}),[])}))}}),Object(u.jsxs)(h,{children:[!O.length&&Object(u.jsx)("divEmpty",{}),O.map((function(e){return Object(u.jsx)(b,{product:e,handleAddToCart:f},e.id)}))]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),f()}],[[22,1,2]]]);
//# sourceMappingURL=main.dc78dd28.chunk.js.map