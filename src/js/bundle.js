!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=58)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(30))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(4),i=n(18),o=n(14);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(32),i=n(5);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(0),i=n(3);t.exports=function(t,e){try{i(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(0),i=n(10),o=r["__core-js_shared__"]||i("__core-js_shared__",{});t.exports=o},function(t,e,n){"use strict";var r,i,o=n(49),s=n(50),c=RegExp.prototype.exec,a=String.prototype.replace,l=c,u=(r=/a/,i=/b*/g,c.call(r,"a"),c.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),f=s.UNSUPPORTED_Y||s.BROKEN_CARET,d=void 0!==/()??/.exec("")[1];(u||d||f)&&(l=function(t){var e,n,r,i,s=this,l=f&&s.sticky,h=o.call(s),p=s.source,v=0,y=t;return l&&(-1===(h=h.replace("y","")).indexOf("g")&&(h+="g"),y=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(p="(?: "+p+")",y=" "+y,v++),n=new RegExp("^(?:"+p+")",h)),d&&(n=new RegExp("^"+p+"$(?!\\s)",h)),u&&(e=s.lastIndex),r=c.call(l?n:s,y),l?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=s.lastIndex,s.lastIndex+=r[0].length):s.lastIndex=0:u&&r&&(s.lastIndex=s.global?r.index+r[0].length:e),d&&r&&r.length>1&&a.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=l},function(t,e,n){var r=n(4),i=n(31),o=n(14),s=n(9),c=n(16),a=n(2),l=n(17),u=Object.getOwnPropertyDescriptor;e.f=r?u:function(t,e){if(t=s(t),e=c(e,!0),l)try{return u(t,e)}catch(t){}if(a(t,e))return o(!i.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(4),i=n(1),o=n(33);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(4),i=n(17),o=n(7),s=n(16),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(o(t),e=s(e,!0),o(n),i)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),i=n(3),o=n(2),s=n(10),c=n(20),a=n(34),l=a.get,u=a.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var a,l=!!c&&!!c.unsafe,d=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||i(n,"name",e),(a=u(n)).source||(a.source=f.join("string"==typeof e?e:""))),t!==r?(l?!h&&t[e]&&(d=!0):delete t[e],d?t[e]=n:i(t,e,n)):d?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||c(this)}))},function(t,e,n){var r=n(11),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(37),i=n(11);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(8),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var r=n(27),i=n(7),o=n(24),s=n(8),c=n(5),a=n(53),l=n(55),u=n(57),f=Math.max,d=Math.min;r("replace",2,(function(t,e,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=r.REPLACE_KEEPS_$0,v=h?"$":"$0";return[function(n,r){var i=c(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!h&&p||"string"==typeof r&&-1===r.indexOf(v)){var c=n(e,t,this,r);if(c.done)return c.value}var y=i(t),g=String(this),m="function"==typeof r;m||(r=String(r));var x=y.global;if(x){var b=y.unicode;y.lastIndex=0}for(var S=[];;){var _=u(y,g);if(null===_)break;if(S.push(_),!x)break;""===String(_[0])&&(y.lastIndex=a(g,o(y.lastIndex),b))}for(var w,E="",I=0,O=0;O<S.length;O++){_=S[O];for(var T=String(_[0]),P=f(d(s(_.index),g.length),0),A=[],k=1;k<_.length;k++)A.push(void 0===(w=_[k])?w:String(w));var C=_.groups;if(m){var q=[T].concat(A,P,g);void 0!==C&&q.push(C);var j=String(r.apply(void 0,q))}else j=l(T,g,P,A,C,r);P>=I&&(E+=g.slice(I,P)+j,I=P+T.length)}return E+g.slice(I)}]}))},function(t,e,n){"use strict";n(28);var r=n(19),i=n(1),o=n(51),s=n(12),c=n(3),a=o("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u="$0"==="a".replace(/./,"$0"),f=o("replace"),d=!!/./[f]&&""===/./[f]("a","$0"),h=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var p=o(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),y=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[a]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!v||!y||"replace"===t&&(!l||!u||d)||"split"===t&&!h){var g=/./[p],m=n(p,""[t],(function(t,e,n,r,i){return e.exec===s?v&&!i?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=m[0],b=m[1];r(String.prototype,t,x),r(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}f&&c(RegExp.prototype[p],"sham",!0)}},function(t,e,n){"use strict";var r=n(29),i=n(12);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},function(t,e,n){var r=n(0),i=n(13).f,o=n(3),s=n(19),c=n(10),a=n(38),l=n(48);t.exports=function(t,e){var n,u,f,d,h,p=t.target,v=t.global,y=t.stat;if(n=v?r:y?r[p]||c(p,{}):(r[p]||{}).prototype)for(u in e){if(d=e[u],f=t.noTargetGet?(h=i(n,u))&&h.value:n[u],!l(v?u:p+(y?".":"#")+u,t.forced)&&void 0!==f){if(typeof d==typeof f)continue;a(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(n,u,d,t)}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(1),i=n(15),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(0),i=n(6),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},function(t,e,n){var r,i,o,s=n(35),c=n(0),a=n(6),l=n(3),u=n(2),f=n(11),d=n(36),h=n(23),p=c.WeakMap;if(s){var v=f.state||(f.state=new p),y=v.get,g=v.has,m=v.set;r=function(t,e){return e.facade=t,m.call(v,t,e),e},i=function(t){return y.call(v,t)||{}},o=function(t){return g.call(v,t)}}else{var x=d("state");h[x]=!0,r=function(t,e){return e.facade=t,l(t,x,e),e},i=function(t){return u(t,x)?t[x]:{}},o=function(t){return u(t,x)}}t.exports={set:r,get:i,has:o,enforce:function(t){return o(t)?i(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),i=n(20),o=r.WeakMap;t.exports="function"==typeof o&&/native code/.test(i(o))},function(t,e,n){var r=n(21),i=n(22),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(2),i=n(39),o=n(13),s=n(18);t.exports=function(t,e){for(var n=i(e),c=s.f,a=o.f,l=0;l<n.length;l++){var u=n[l];r(t,u)||c(t,u,a(e,u))}}},function(t,e,n){var r=n(40),i=n(42),o=n(47),s=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=o.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(41),i=n(0),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][e]||i[t]&&i[t][e]}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(43),i=n(46).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(2),i=n(9),o=n(44).indexOf,s=n(23);t.exports=function(t,e){var n,c=i(t),a=0,l=[];for(n in c)!r(s,n)&&r(c,n)&&l.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~o(l,n)||l.push(n));return l}},function(t,e,n){var r=n(9),i=n(24),o=n(45),s=function(t){return function(e,n,s){var c,a=r(e),l=i(a.length),u=o(s,l);if(t&&n!=n){for(;l>u;)if((c=a[u++])!=c)return!0}else for(;l>u;u++)if((t||u in a)&&a[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,n){var r=n(8),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),i=/#|\.prototype\./,o=function(t,e){var n=c[s(t)];return n==l||n!=a&&("function"==typeof e?r(e):!!e)},s=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=o.data={},a=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},function(t,e,n){"use strict";var r=n(7);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(1);function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){var r=n(0),i=n(21),o=n(2),s=n(22),c=n(25),a=n(52),l=i("wks"),u=r.Symbol,f=a?u:u&&u.withoutSetter||s;t.exports=function(t){return o(l,t)||(c&&o(u,t)?l[t]=u[t]:l[t]=f("Symbol."+t)),l[t]}},function(t,e,n){var r=n(25);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){"use strict";var r=n(54).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(8),i=n(5),o=function(t){return function(e,n){var o,s,c=String(i(e)),a=r(n),l=c.length;return a<0||a>=l?t?"":void 0:(o=c.charCodeAt(a))<55296||o>56319||a+1===l||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):o:t?c.slice(a,a+2):s-56320+(o-55296<<10)+65536}};t.exports={codeAt:o(!1),charAt:o(!0)}},function(t,e,n){var r=n(56),i=Math.floor,o="".replace,s=/\$([$&'`]|\d\d?|<[^>]*>)/g,c=/\$([$&'`]|\d\d?)/g;t.exports=function(t,e,n,a,l,u){var f=n+t.length,d=a.length,h=c;return void 0!==l&&(l=r(l),h=s),o.call(u,h,(function(r,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":s=l[o.slice(1,-1)];break;default:var c=+o;if(0===c)return r;if(c>d){var u=i(c/10);return 0===u?r:u<=d?void 0===a[u-1]?o.charAt(1):a[u-1]+o.charAt(1):r}s=a[c-1]}return void 0===s?"":s}))}},function(t,e,n){var r=n(5);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(15),i=n(12);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e,n){"use strict";n.r(e);class r{constructor({container:t=null,btnForward:e=null,btnBackward:n=null,next:r=null,prev:i=null,activeClass:o="",animate:s=!1,autoplay:c=!1}={}){this.container=document.querySelector(t);try{this.slides=this.container.children}catch(t){}this.btnForward=document.querySelectorAll(e),this.btnBackward=document.querySelectorAll(n),this.next=document.querySelector(r),this.prev=document.querySelector(i),this.activeClass=o,this.animate=s,this.autoplay=c,this.slideIndex=1}}class i extends r{constructor(t,e){super(t,e)}showSlides(t){for(let t of this.slides)t.style.display="none";t>this.slides.length?this.slideIndex=1:t<1&&(this.slideIndex=this.slides.length),this.slides[this.slideIndex-1].style.display="block"}changeSlider(t,e){t.forEach(n=>{n.addEventListener("click",()=>{if(this.showSlides(this.slideIndex+=e),3===this.slideIndex)try{this.hanson=document.querySelector(".hanson"),this.hanson.style.opacity="0",setTimeout(()=>{this.hanson.style.opacity="1"},3e3)}catch(t){}}),t==this.btnForward&&n.parentNode.previousElementSibling.addEventListener("click",t=>{t.preventDefault(),this.slideIndex=1,this.showSlides(this.slideIndex)})})}render(){this.container&&(this.showSlides(this.slideIndex),this.changeSlider(this.btnForward,1),this.changeSlider(this.btnBackward,-1))}}class o extends r{constructor(t,e,n,r,i,o){super(t,e,n,r,i,o)}decorizeSlides(){for(let t of this.slides)this.animate&&(t.querySelector(".card__title").style.opacity="0.4",t.querySelector(".card__controls-arrow").style.opacity="0"),t.classList.remove(this.activeClass);this.animate&&(this.slides[0].querySelector(".card__title").style.opacity="1",this.slides[0].querySelector(".card__controls-arrow").style.opacity="1"),this.slides[0].classList.add(this.activeClass)}bindTriggers(){this.next.addEventListener("click",()=>{this.scrollSlides("forward")}),this.prev.addEventListener("click",()=>{this.scrollSlides("backward")})}scrollSlides(t){const e=this.slides[1],n=this.slides[this.slides.length-1];"forward"===t&&(this.container.append(this.slides[0]),"BUTTON"===e.tagName?this.scrollSlides("forward"):this.decorizeSlides()),"backward"===t&&(this.container.prepend(n),"BUTTON"===n.tagName?this.scrollSlides("backward"):this.decorizeSlides())}init(){try{this.container.style.cssText="\n    display: flex;\n    flex-wrap: wrap;\n    overflow: hidden;\n    align-items:\n    flex-start;",this.bindTriggers(),this.decorizeSlides(),this.autoplay&&setInterval(()=>{this.scrollSlides("forward")},5e3)}catch(t){}}}class s{constructor(t,e){this.btns=document.querySelectorAll(t),this.overlay=document.querySelector(e),this.close=this.overlay.querySelector(".close"),this.onPlayerStateChange=this.onPlayerStateChange.bind(this)}bindTriggers(){this.btns.forEach((t,e)=>{try{const n=t.closest(".module__video-item").nextElementSibling;e%2==0&&n.setAttribute("data-disabled","true")}catch(t){}t.addEventListener("click",()=>{t.closest(".module__video-item")&&"true"===t.closest(".module__video-item").getAttribute("data-disabled")||(this.activeBtn=t,document.querySelector("iframe#frame")?(this.overlay.style.display="flex",this.path!==t.getAttribute("data-url")&&(this.path=t.getAttribute("data-url"),this.player.loadVideoById({videoId:this.path}))):(this.path=t.getAttribute("data-url"),this.createPlayer(this.path)))})})}bindCloseBtn(){this.close.addEventListener("click",()=>{this.overlay.style.display="none",this.player.stopVideo()})}createPlayer(t){this.player=new YT.Player("frame",{height:"100%",width:"100%",videoId:""+t,events:{onStateChange:this.onPlayerStateChange}}),this.overlay.style.display="flex"}onPlayerStateChange(t){try{const e=this.activeBtn.closest(".module__video-item").nextElementSibling,n=this.activeBtn.querySelector("svg").cloneNode(!0);0===t.data&&e.querySelector(".play__circle").classList.contains("closed")&&(e.querySelector(".play__circle").classList.remove("closed"),e.querySelector("svg").remove(),e.querySelector(".play__circle").appendChild(n),e.querySelector(".play__text").textContent="play video",e.querySelector(".play__text").classList.remove("attention"),e.style.opacity=1,e.style.filter="none",e.setAttribute("data-disabled","false"))}catch(t){}}init(){if(this.btns.length>0){const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";const e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),this.bindTriggers(),this.bindCloseBtn()}}}class c{constructor(t,e,n){try{this.oldOfficer=document.querySelector(t),this.newOfficer=document.querySelector(e),this.oldItems=this.oldOfficer.querySelectorAll(n),this.newItems=this.newOfficer.querySelectorAll(n),this.oldCounter=0,this.newCounter=0}catch(t){}}hideItems(t){t.forEach((t,e,n)=>{e!==n.length-1&&(t.style.display="none")})}bindTriggers(t,e,n){t.querySelector(".plus").addEventListener("click",t=>{e[n].style.display="flex",n!==e.length-2?n++:e[n+1].remove()})}init(){try{this.hideItems(this.oldItems),this.hideItems(this.newItems),this.bindTriggers(this.oldOfficer,this.oldItems,this.oldCounter),this.bindTriggers(this.newOfficer,this.newItems,this.newCounter)}catch(t){}}}n(26);class a{constructor(t){this.forms=document.querySelectorAll(t),this.inputs=document.querySelectorAll("input"),this.message={loading:"Загрузка...",success:"Спасибо! Скоро мы с Вами свяжемся",failure:"Что-то пошло не так..."},this.path="assets/question.php"}cleatInputs(){this.inputs.forEach(t=>{t.value=""})}mask(){function t(t){let e=0;const n="+1 (___)___-___".replace(/\D/g,"");let r=this.value.replace(/\D/g,"");r.length<=n.length&&(r=n),this.value="+1 (___)___-___".replace(/./g,(function(t){return/[_\d]/.test(t)&&e<r.length?r.charAt(e++):e>=r.length?"":t})),"blur"==t.type&&(2==this.value.length?this.value="":((t,e)=>{if(e.focus(),e.setSelectionRange)e.setSelectionRange(t,t);else if(e.createTextRange){let n=e.createTextRange();n.collapse(!0),n.moveStart("charecter",t),n.moveEnd("charecter",t),n.select()}})(this.value.length,this))}document.querySelectorAll('[name="phone"]').forEach(e=>{e.addEventListener("input",t),e.addEventListener("focus",t)})}checkMailInputs(){document.querySelectorAll('[type="email"]').forEach(t=>{t.addEventListener("keypress",t=>{t.key.match(/[^a-z 0-9 @ \.]/gi)&&t.preventDefault()})})}async postData(t,e){const n=await fetch(t,{method:"POST",body:e});return await n.text()}init(){this.mask(),this.checkMailInputs();const{loading:t,success:e,failure:n}=this.message;this.forms.forEach(r=>{r.addEventListener("submit",i=>{i.preventDefault();const o=document.createElement("div");o.style.cssText="\n        margin-top: 15px;\n        font-size: 15px;\n        color: grey;\n        ",r.parentNode.append(o),o.textContent=t;const s=new FormData(r);this.postData(this.path,s).then(t=>{o.textContent=e,console.log(t)}).catch(()=>{o.textContent=n}).finally(()=>{this.cleatInputs(),setTimeout(()=>{o.remove(),this.cleatInputs()},5e3)})})})}}class l{constructor(t){this.btns=document.querySelectorAll(t)}init(){this.btns.forEach(t=>{t.addEventListener("click",()=>{const e=t.closest(".module__info-show").nextElementSibling;e.classList.toggle("msg"),e.style.marginTop="20px"})})}}class u{constructor(t){this.btns=document.querySelectorAll(t),this.path="assets/img/mainbg.jpg"}downloadItem(t){const e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download","nice_picture"),e.style.display="none",document.body.append(e),e.click(),document.body.removeChild(e)}init(){this.btns.forEach(t=>{t.addEventListener("click",t=>{t.stopPropagation(),this.downloadItem(this.path)})})}}window.addEventListener("DOMContentLoaded",()=>{new i({btnForward:".next",container:".page"}).render();new i({container:".moduleapp",btnForward:".next",btnBackward:".prevmodule"}).render();new o({container:".showup__content-slider",next:".showup__next",prev:".showup__prev",activeClass:"card-active",animate:!0}).init();new o({container:".modules__content-slider",next:".modules__info-btns .slick-next",prev:".modules__info-btns .slick-prev",activeClass:"card-active",animate:!0,autoplay:!0}).init();new o({container:".feed__slider",next:".feed__slider .slick-next",prev:".feed__slider .slick-prev",activeClass:"feed__item-active"}).init(),new s(".showup .play",".overlay").init(),new s(".module__video-item .play",".overlay").init(),new c(".officerold",".officernew",".officer__card-item").init(),new a(".form").init(),new l(".plus__content").init(),new u(".download").init()})}]);