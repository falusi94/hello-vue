(function(e){function t(t){for(var a,i,o=t[0],s=t[1],l=t[2],f=0,d=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/hello-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"094e":function(e,t,n){},"19ad":function(e,t,n){"use strict";var a=n("bc27"),r=n.n(a);r.a},"22f0":function(e,t,n){"use strict";var a=n("c28f"),r=n.n(a);r.a},2913:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"base-link",on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)},r=[],c={name:"BaseLink"},i=c,o=(n("ceb2"),n("2877")),s=Object(o["a"])(i,a,r,!1,null,"f8a8da70",null);t["default"]=s.exports},4402:function(e,t,n){"use strict";var a=n("8707"),r=n.n(a);r.a},"460d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("1276"),n("159b"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MainLayout")],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("TheHeader"),n("CenterContainer",[n("BeerList")],1),n("TheFooter")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-placeholder"}),n("div",{staticClass:"header-content"},[n("TheHeaderButton",{attrs:{title:"Home"},on:{click:e.goHome}})],1)])},l=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseButton",{staticClass:"header-button",attrs:{title:e.title},on:{click:function(t){return e.$emit("click")}}})},f=[],d={name:"TheHeaderButton",props:{title:String}},p=d,v=(n("22f0"),n("2877")),b=Object(v["a"])(p,u,f,!1,null,"0c416aec",null),m=b.exports,h={name:"TheHeader",components:{TheHeaderButton:m},methods:{goHome:function(){window.location="/"}}},_=h,O=(n("8e1c"),Object(v["a"])(_,s,l,!1,null,"9cb96924",null)),C=O.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center-container"},[e._t("default")],2)},k=[],y={name:"CenterContainer"},B=y,j=(n("19ad"),Object(v["a"])(B,g,k,!1,null,"7b65efff",null)),x=j.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"beer-list"},e._l(e.beers,(function(e){return n("li",{key:e.id},[n("BeerListItem",{attrs:{beer:e}})],1)})),0)},w=[],E=n("bc3a"),L=n.n(E),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"beer"},[n("div",{staticClass:"beer-image"},[n("img",{attrs:{src:e.beer.image_url}})]),n("div",{staticClass:"beer-description"},[n("BaseLink",{staticClass:"name",on:{click:function(t){e.modalOpened=!0}}},[e._v(" "+e._s(e.beer.name)+" ")]),n("div",{staticClass:"tagline"},[e._v(" "+e._s(e.beer.tagline)+" ")])],1),n("BaseModal",{attrs:{title:e.beer.name,modalOpened:e.modalOpened},on:{handleClose:function(t){e.modalOpened=!1}}},[e._v(" "+e._s(e.beer.description)+" ")])],1)},M=[],H={name:"BeerListItem",props:{beer:Object},data:function(){return{modalOpened:!1}}},P=H,S=(n("92d8"),Object(v["a"])(P,T,M,!1,null,"01d26234",null)),F=S.exports,I={name:"BeerList",components:{BeerListItem:F},data:function(){return{beers:null}},created:function(){var e=this;L.a.get("https://api.punkapi.com/v2/beers").then((function(t){e.beers=t.data}))}},D=I,J=(n("c452"),Object(v["a"])(D,$,w,!1,null,null,null)),N=J.exports,U=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-section"},[e._v(" Made with ♥ and "),n("a",{attrs:{target:"_blank",href:"https://vuejs.org"}},[e._v("Vue")]),e._v(" by "),n("a",{attrs:{target:"_blank",href:"https://github.com/falusi94"}},[e._v("@falusi94")])]),n("div",{staticClass:"footer-section"},[e._v(" Data is from the "),n("a",{attrs:{target:"_blank",href:"https://punkapi.com"}},[e._v("Punk API")])])])}],V={name:"TheFooter"},q=V,z=(n("4402"),Object(v["a"])(q,U,A,!1,null,"603b007c",null)),G=z.exports,K={name:"MainLayout",components:{TheHeader:C,CenterContainer:x,BeerList:N,TheFooter:G}},Q=K,R=Object(v["a"])(Q,i,o,!1,null,null,null),W=R.exports,X={name:"app",components:{MainLayout:W}},Y=X,Z=(n("5c0b"),Object(v["a"])(Y,r,c,!1,null,null,null)),ee=Z.exports;a["a"].config.productionTip=!1;var te=n("ef13");te.keys().forEach((function(e){var t=te(e),n=e.split("/").pop().replace(/\.\w+$/,"");a["a"].component(n,t.default||t)})),new a["a"]({render:function(e){return e(ee)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},6624:function(e,t,n){"use strict";var a=n("b1cd"),r=n.n(a);r.a},6628:function(e,t,n){},"82ea":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"base-button",on:{click:function(t){return e.$emit("click")}}},[e._v(" "+e._s(e.title)+" ")])},r=[],c={name:"BaseButton",props:{title:String}},i=c,o=(n("eb1a"),n("2877")),s=Object(o["a"])(i,a,r,!1,null,"3a9aa520",null);t["default"]=s.exports},8707:function(e,t,n){},"8e1c":function(e,t,n){"use strict";var a=n("094e"),r=n.n(a);r.a},"92d8":function(e,t,n){"use strict";var a=n("d90a"),r=n.n(a);r.a},"9c0c":function(e,t,n){},b1cd:function(e,t,n){},bc27:function(e,t,n){},c1ec:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.modalOpened?n("div",{staticClass:"modal"},[n("div",{staticClass:"modal-inner"},[n("div",{staticClass:"modal-header"},[n("div",{staticClass:"modal-title"},[e._v(" "+e._s(e.title)+" ")]),n("div",{staticClass:"modal-close-button"},[n("BaseButton",{attrs:{title:"x"},on:{click:function(t){return e.$emit("handleClose")}}})],1)]),n("div",{staticClass:"modal-content"},[e._t("default")],2)])]):e._e()},r=[],c={name:"BaseModal",props:{title:String,modalOpened:Boolean,handleClose:Function}},i=c,o=(n("6624"),n("2877")),s=Object(o["a"])(i,a,r,!1,null,"49b4f345",null);t["default"]=s.exports},c28f:function(e,t,n){},c452:function(e,t,n){"use strict";var a=n("6628"),r=n.n(a);r.a},ceb2:function(e,t,n){"use strict";var a=n("460d"),r=n.n(a);r.a},d90a:function(e,t,n){},ddf0:function(e,t,n){},eb1a:function(e,t,n){"use strict";var a=n("ddf0"),r=n.n(a);r.a},ef13:function(e,t,n){var a={"./BaseButton.vue":"82ea","./BaseLink.vue":"2913","./BaseModal.vue":"c1ec"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="ef13"}});
//# sourceMappingURL=app.cd5aac26.js.map