!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:g(f,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(e,t){var n,r,o;if(t.singleton){var i=h++;n=m||(m=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,"body {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.logo {\r\n  font-weight: bold;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.container-div {\r\n  position: relative;\r\n}\r\n\r\n.giphy-img {\r\n  position: absolute;\r\n  height: 90vh;\r\n  width: 100vw;\r\n  overflow-y: hidden;\r\n  z-index: -20;\r\n}\r\n\r\n.sub-container p {\r\n  margin-left: 5px;\r\n}\r\n\r\n.weather-container {\r\n  display: flex;\r\n  width: 100vw;\r\n  height: auto;\r\n}\r\n.sub-container {\r\n  color: white;\r\n  font-size: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: auto;\r\n  background-color: black;\r\n  padding: 2em;\r\n  margin-top: 2em;\r\n  opacity: 0.6;\r\n}\r\n",""]),t.default=o},function(e,t,n){"use strict";n.r(t);n(1);const r=localStorage.getItem("searched")?JSON.parse(localStorage.getItem("searched")):[];localStorage.setItem("searched",JSON.stringify(r)),JSON.parse(localStorage.getItem("searched"));const o=localStorage.getItem("unit")?JSON.parse(localStorage.getItem("unit")):[];localStorage.setItem("unit",JSON.stringify(o)),JSON.parse(localStorage.getItem("unit"));const i=()=>{r.length<1&&o.length<1&&(o.push("celsius"),r.push("Nairobi"),localStorage.setItem("unit",JSON.stringify(o)),localStorage.setItem("searched",JSON.stringify(r)))};i();document.getElementById("formsearch").onsubmit=function(){let e=document.getElementById("textsearch").value;if(r.push(e),document.getElementById("inlineRadio1").checked){let e=document.getElementById("inlineRadio1").value;o.push(e),localStorage.setItem("unit",JSON.stringify(o))}else if(document.getElementById("inlineRadio2").checked){let e=document.getElementById("inlineRadio2").value;o.push(e),localStorage.setItem("unit",JSON.stringify(o))}localStorage.setItem("searched",JSON.stringify(r)),window.location.reload};(()=>{const e=document.querySelector("img");!async function(){const t=await fetch("https://api.giphy.com/v1/gifs/translate?api_key=ucKwEuUMMg7PY1Qdv2AGIokrGfc0zbGH&s=driving",{mode:"cors"}),n=await t.json();e.src=n.data.images.original.url}()})();!async function(){const e=JSON.parse(localStorage.getItem(localStorage.key(localStorage.length-2))),t=JSON.parse(localStorage.getItem(localStorage.key(localStorage.length-1))),n=t[t.length-1];var r=e[e.length-1];let o,i;"celsius"==n?(o="units=metric",i="°C"):"fahrenheit"==n&&(o="units=imperial",i="F");const a=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${r}&${o}&appid=a575049b71ed2b88749a1f238d71e50b`,{mode:"cors"});var c=await a.json();const s=c.weather[0],l=document.getElementById("weather-container"),u=document.createElement("div");u.setAttribute("class","sub-container"),u.innerHTML=`   \n      <div class='d-flex'><h3 class='mr-2'>City: </h3><h3>${c.name}</h3></div>\n      <div class='d-flex'><h4 class='mr-2'>Description: </h4><h4>${s.description}</h4></div>\n      <div class='d-flex'><h5>Average temperature: </h5><p>${c.main.temp}${i}</p></div>\n      <div class='d-flex'><h5>Feels like: </h5><p>${c.main.feels_like}${i}</p></div>\n      <div class='d-flex'><h5>Minimum-temp: </h5><p>${c.main.temp_min}${i}</p></div>\n      <div class='d-flex'><h5>Maximum-temp: </h5><p>${c.main.temp_max}${i}</p></div>\n      <div class='d-flex'><h5>Pressure: </h5><p>${c.main.pressure} mbar</p></div>`,l.append(u)}()}]);