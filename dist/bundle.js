!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t){e.exports=function(e){return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${e}`).then(e=>e.json())}},function(e,t){e.exports=function(){let e={collection:{Action:{284054:"Black Panther",141052:"Justice League"},Comedy:{214756:"ted 2"}}};return localStorage.getItem("appStore")?e=JSON.parse(localStorage.getItem("appStore")):localStorage.setItem("appStore",JSON.stringify(e)),e}},,function(e,t,o){o(1);let n=o(0);document.onload=(console.log("in init"),void n("4a9f640e502709dc6bcd23286de1426e").then(e=>console.log(e)))}]);