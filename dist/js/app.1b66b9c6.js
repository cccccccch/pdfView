(function(){var e={5151:function(e,t,n){"use strict";var r=n(2019),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About（iframe预览）")])],1),t("router-view")],1)},u=[],a=n(2738),i={},s=(0,a.A)(i,o,u,!1,null,null,null),c=s.exports,f=n(6640),l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("div",[e._v("这下面是我用来预览pdf文件的")]),t("pdf",{attrs:{pdfUrl:e.pdfUrl}})],1)},d=[],p=function(){var e=this,t=e._self._c;return t("iframe",{attrs:{src:"/pdf/web/viewer.html?file="+e.pdfUrl+"&page=2&top=0&zoom=1.5"}})},m=[],v={name:"Pdf",props:{pdfUrl:{type:String,default:""}}},h=v,b=(0,a.A)(h,p,m,!1,null,"0741f5b4",null),g=b.exports,y={name:"HomeView",components:{pdf:g},data(){return{pdfUrl:"http://localhost:8080/xxxx.pdf"}},created(){}},k=y,w=(0,a.A)(k,l,d,!1,null,null,null),O=w.exports;r["default"].use(f.Ay);const _=f.Ay.prototype.push;f.Ay.prototype.push=function(e){return _.call(this,e).catch((e=>e))};const j=[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,3050))}],A=new f.Ay({mode:"history",base:"http://47.106.228.28:1337",routes:j});var x=A,E=n(7321);const T={token:e=>e.user.token,name:e=>e.user.username};var U=T;r["default"].use(E.Ay);const S=n(4870),C=S.keys().reduce(((e,t)=>{const n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=S(t);return e[n]=r.default,e}),{}),L=new E.Ay.Store({modules:C,getters:U});var P=L,R=n(2719),N=n.n(R);const F=["/login"];console.log(F),x.beforeEach(((e,t,n)=>{n()})),x.afterEach((()=>{})),r["default"].use(N()),r["default"].config.productionTip=!1,new r["default"]({router:x,store:P,render:e=>e(c)}).$mount("#app")},987:function(e,t,n){"use strict";n.r(t);const r={routes:[],addRoutes:[]},o={SET_ROUTES:(e,t)=>{console.log(111)}},u={generateRoutes({commit:e},t){console.log(222)}};t["default"]={namespaced:!0,state:r,mutations:o,actions:u}},6965:function(e,t,n){"use strict";n.r(t);const r={hasRoutes:!1,routerList:""},o={setRouterList(e,t){e.routerList=t},setHasRoutes(e,t){e.hasRoutes=t}};t["default"]={namespaced:!0,state:r,mutations:o}},4735:function(e,t,n){"use strict";n.r(t);const r={token:"",username:"张三",avatar:"",desc:""},o={setName(e,t){e.username=t,console.log(t)},saveUserInfo(e,t){e.token=t.token,e.username=t.username,e.avatar=t.avatar,e.desc=t.desc},removeUserInfo(e){e.token="",e.username="",e.avatar="",e.desc=""}},u={FedLogOut(){console.log("退出")}};t["default"]={namespaced:!0,state:r,mutations:o,actions:u}},4870:function(e,t,n){var r={"./permission.js":987,"./routerList.js":6965,"./user.js":4735};function o(e){var t=u(e);return n(t)}function u(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=u,e.exports=o,o.id=4870}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.loaded=!0,u.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,u){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],u=e[f][2];for(var i=!0,s=0;s<r.length;s++)(!1&u||a>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(i=!1,u<a&&(a=u));if(i){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[r,o,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.9ee97471.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue2demo:";n.l=function(r,o,u,a){if(e[r])e[r].push(o);else{var i,s;if(void 0!==u)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+u){i=l;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+u),i.src=r),e[r]=[o];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=u);var a=n.p+n.u(t),i=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,o[1](i)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,a=r[0],i=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var f=s(n)}for(t&&t(r);c<a.length;c++)u=a[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(f)},r=self["webpackChunkvue2demo"]=self["webpackChunkvue2demo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(5151)}));r=n.O(r)})();
//# sourceMappingURL=app.1b66b9c6.js.map