(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],f=0,d=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/hello-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"094e":function(e,t,n){},"19ad":function(e,t,n){"use strict";var a=n("bc27"),r=n.n(a);r.a},"1e6e":function(e,t,n){"use strict";var a=n("7a26"),r=n.n(a);r.a},"25af":function(e,t,n){},4402:function(e,t,n){"use strict";var a=n("8707"),r=n.n(a);r.a},"460d":function(e,t,n){},5075:function(e,t,n){"use strict";var a=n("25af"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MainLayout")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("TheHeader"),n("CenterContainer",[n("BeerList")],1),n("TheFooter")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-placeholder"}),n("div",{staticClass:"header-content"},[n("TheHeaderButton",{attrs:{title:"Home"},on:{click:e.goHome}})],1)])},l=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseButton",{staticClass:"header-button",attrs:{title:e.title},on:{click:function(t){return e.$emit("click")}}})},f=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"base-button",on:{click:function(t){return e.$emit("click")}}},[e._v(" "+e._s(e.title)+" ")])},p=[],v={name:"BaseButton",props:["title"]},m=v,b=(n("1e6e"),n("2877")),h=Object(b["a"])(m,d,p,!1,null,"43f73cf7",null),_=h.exports,C={name:"TheHeaderButton",components:{BaseButton:_},props:["title"]},O=C,g=(n("e9b1"),Object(b["a"])(O,u,f,!1,null,"01a44ca9",null)),B=g.exports,k={name:"TheHeader",components:{TheHeaderButton:B},methods:{goHome:function(){window.location="/"}}},y=k,j=(n("8e1c"),Object(b["a"])(y,c,l,!1,null,"9cb96924",null)),x=j.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center-container"},[e._t("default")],2)},w=[],E={name:"CenterContainer"},L=E,T=(n("19ad"),Object(b["a"])(L,$,w,!1,null,"7b65efff",null)),M=T.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"beer-list"},e._l(e.beers,(function(e){return n("li",{key:e.id},[n("BeerListItem",{attrs:{beer:e}})],1)})),0)},P=[],S=n("bc3a"),I=n.n(S),F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"beer"},[n("div",{staticClass:"beer-image"},[n("img",{attrs:{src:e.beer.image_url}})]),n("div",{staticClass:"beer-description"},[n("BaseLink",{staticClass:"name",on:{click:function(t){e.modalOpened=!0}}},[e._v(" "+e._s(e.beer.name)+" ")]),n("div",{staticClass:"tagline"},[e._v(" "+e._s(e.beer.tagline)+" ")])],1),n("BaseModal",{attrs:{title:e.beer.name,modalOpened:e.modalOpened},on:{handleClose:function(t){e.modalOpened=!1}}},[e._v(" "+e._s(e.beer.description)+" ")])],1)},J=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.modalOpened?n("div",{staticClass:"modal"},[n("div",{staticClass:"modal-inner"},[n("div",{staticClass:"modal-header"},[n("div",{staticClass:"modal-title"},[e._v(" "+e._s(e.title)+" ")]),n("div",{staticClass:"modal-close-button"},[n("BaseButton",{attrs:{title:"x"},on:{click:function(t){return e.$emit("handleClose")}}})],1)]),n("div",{staticClass:"modal-content"},[e._t("default")],2)])]):e._e()},D=[],V={name:"BaseModal",components:{BaseButton:_},props:["title","modalOpened","handleClose"]},q=V,z=(n("fe09"),Object(b["a"])(q,A,D,!1,null,"2c072884",null)),G=z.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"base-link",on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)},N=[],Q={name:"BaseLink"},R=Q,U=(n("ceb2"),Object(b["a"])(R,K,N,!1,null,"f8a8da70",null)),W=U.exports,X={name:"BeerListItem",props:["beer"],data:function(){return{modalOpened:!1}},components:{BaseModal:G,BaseLink:W}},Y=X,Z=(n("5075"),Object(b["a"])(Y,F,J,!1,null,"04266a40",null)),ee=Z.exports,te={name:"BeerList",components:{BeerListItem:ee},data:function(){return{beers:null}},created:function(){var e=this;I.a.get("https://api.punkapi.com/v2/beers").then((function(t){e.beers=t.data}))}},ne=te,ae=(n("c452"),Object(b["a"])(ne,H,P,!1,null,null,null)),re=ae.exports,se=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ie=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-section"},[e._v(" Made with ♥ and "),n("a",{attrs:{target:"_blank",href:"https://vuejs.org"}},[e._v("Vue")]),e._v(" by "),n("a",{attrs:{target:"_blank",href:"https://github.com/falusi94"}},[e._v("@falusi94")])]),n("div",{staticClass:"footer-section"},[e._v(" Data is from the "),n("a",{attrs:{target:"_blank",href:"https://punkapi.com"}},[e._v("Punk API")])])])}],oe={name:"TheFooter"},ce=oe,le=(n("4402"),Object(b["a"])(ce,se,ie,!1,null,"603b007c",null)),ue=le.exports,fe={name:"MainLayout",components:{TheHeader:x,CenterContainer:M,BeerList:re,TheFooter:ue}},de=fe,pe=Object(b["a"])(de,i,o,!1,null,null,null),ve=pe.exports,me={name:"app",components:{MainLayout:ve}},be=me,he=(n("5c0b"),Object(b["a"])(be,r,s,!1,null,null,null)),_e=he.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(_e)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"640e":function(e,t,n){},6628:function(e,t,n){},"7a26":function(e,t,n){},8707:function(e,t,n){},"8e1c":function(e,t,n){"use strict";var a=n("094e"),r=n.n(a);r.a},"9c0c":function(e,t,n){},bc27:function(e,t,n){},c452:function(e,t,n){"use strict";var a=n("6628"),r=n.n(a);r.a},c657:function(e,t,n){},ceb2:function(e,t,n){"use strict";var a=n("460d"),r=n.n(a);r.a},e9b1:function(e,t,n){"use strict";var a=n("c657"),r=n.n(a);r.a},fe09:function(e,t,n){"use strict";var a=n("640e"),r=n.n(a);r.a}});
//# sourceMappingURL=app.89d2a5ba.js.map