!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector("div.grid"),t=document.querySelector(".showBtn"),n=[],r="show all",l=[],o="false",i=!1;fetch("http://www.splashbase.co/api/v1/images/search?query=water").then(e=>e.json()).then(e=>{s(e.images)});const s=e=>{n=e,"show all"===r?l=n:"unsplash"===r?l=n.filter(e=>"unsplash"===e.site):"littlevisuals"===r?l=n.filter(e=>"littlevisuals"===e.site):"travelcoffeebook"===r?l=n.filter(e=>"travelcoffeebook"===e.site):"jaymantri"===r&&(l=n.filter(e=>"jaymantri"===e.site)),u(l)},u=n=>{let r=[],l=0;e.innerHTML="";for(let i=0;i<n.length;i++){let s=n[i].url,u=document.createElement("img");r.push(u),u.setAttribute("src",s),u.setAttribute("class","hidden"),u.addEventListener("click",()=>{f(s)}),e.appendChild(u),u.onload=(()=>{++l===n.length&&"true"==(o="true")&&(null!==document.querySelector(".load")&&document.querySelector(".load").setAttribute("class","hidden"),t.classList.remove("hidden"),e.classList.remove("hidden"))})}a()},c=()=>{let e=document.querySelectorAll(".filterButtons button");for(let t=0;t<e.length;t++)e[t].classList.remove("active")},a=()=>{let e=document.querySelectorAll(" img");if(e.length>10)for(let t=0;t<10;t++)e[t].setAttribute("class","active");else for(let t=0;t<e.length;t++)e[t].setAttribute("class","active");d()},d=()=>{t.addEventListener("click",()=>{let e=document.querySelectorAll(" img");if(!1===i){for(let t=0;t<e.length;t++)e[t].setAttribute("class","active");t.innerText="SHOW LESS",i=!0}else if(1==i){for(let t=10;t<e.length;t++)e[t].setAttribute("class","hidden");t.innerText="SHOW MORE",i=!1}})},f=e=>{let t=document.querySelector("div.fullScreen");t.classList.remove("hidden");let n=document.querySelector("div.fullScreen > button");t.style.backgroundImage=`url(${e})`,n.addEventListener("click",()=>{t.classList.add("hidden")})};(()=>{let e=document.querySelectorAll(".filterButtons button");for(let l=0;l<e.length;l++)e[l].addEventListener("click",()=>{c(),e[l].classList.add("active"),r=e[l].dataset.category,s(n),d(),t.innerText="SHOW MORE",i=!1});d()})(),d()})},function(e,t){}]);