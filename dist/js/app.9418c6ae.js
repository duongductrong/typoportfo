(function(e){function t(t){for(var r,c,o=t[0],s=t[1],l=t[2],u=0,b=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(b.length)b.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},a={app:0},i=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"77af01cd"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"be66c7e9"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var b=document.getElementsByTagName("style");for(o=0;o<b.length;o++){l=b[o],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete c[e],d.parentNode.removeChild(d),n(i)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(e);var b=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",b.name="ChunkLoadError",b.type=r,b.request=c,n[1](b)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"286d":function(e,t,n){},"30e9":function(e,t,n){},3106:function(e,t,n){"use strict";n("f1f7")},"3cce":function(e,t,n){"use strict";n("5559")},"501e":function(e,t,n){},5559:function(e,t,n){},"55da":function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["C"])("data-v-447876a2");Object(r["s"])("data-v-447876a2");var a={ref:"refTreeItem",class:"tree-item"},i={class:"h6 mb-1rem date"},o={class:"h4 mb-1rem title"},s={key:1,class:"h4 mb-1rem title"},l={class:"h6 paragraph"};Object(r["q"])();var u=c((function(e,t,n,c,u,b){var d,h,f;return Object(r["p"])(),Object(r["d"])("div",a,[Object(r["g"])("h6",i,Object(r["y"])(null!==(d=n.date)&&void 0!==d?d:""),1),null!==n.href?(Object(r["p"])(),Object(r["d"])("a",{key:0,class:"item-link",href:n.href,target:"_blank"},[Object(r["g"])("h1",o,Object(r["y"])(null!==(h=n.title)&&void 0!==h?h:""),1)],8,["href"])):(Object(r["p"])(),Object(r["d"])("h1",s,Object(r["y"])(null!==(f=n.title)&&void 0!==f?f:""),1)),Object(r["g"])("p",l,[Object(r["v"])(e.$slots,"default")])],512)})),b={name:"TimelineItem",props:{date:String,title:String,href:{type:String,default:null}},methods:{focus:function(){return this.$refs.refTreeItem}}};n("8b0a");b.render=u,b.__scopeId="data-v-447876a2";t["a"]=b},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,i){var o=Object(r["w"])("router-view"),s=Object(r["w"])("layer-loader"),l=Object(r["w"])("switch-theme");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(o),Object(r["g"])(s),Object(r["g"])(l)],64)}var a=n("5502"),i=Object(r["C"])("data-v-5d96dc4c"),o=i((function(e,t,n,c,a,i){return Object(r["p"])(),Object(r["d"])("div",{class:["layer-loader",{active:c.preloader}]},null,2)})),s={setup:function(){var e=Object(a["b"])();return{preloader:Object(r["b"])((function(){return e.state.preloaderModule.preloader}))}},name:"LayerLoader"};n("3cce");s.render=o,s.__scopeId="data-v-5d96dc4c";var l=s,u=Object(r["C"])("data-v-a7aa305a");Object(r["s"])("data-v-a7aa305a");var b={class:"box"};Object(r["q"])();var d=u((function(e,t,n,c,a,i){return Object(r["p"])(),Object(r["d"])("div",b,[Object(r["g"])("input",{id:"switch-theme",type:"checkbox",class:"checkbox",checked:c.themeLight,onChange:t[1]||(t[1]=function(e){return c.changeTheme()})},null,40,["checked"]),Object(r["g"])("label",{for:"switch-theme",class:["switcher",{"bg-light":!c.themeLight}]},null,2)])})),h=n("ade3"),f="change_theme",m="set_theme",p={state:function(){return{themeLight:!1}},mutations:Object(h["a"])({},f,(function(e,t){e.themeLight=t,e.themeLight?document.body.classList.add("theme-light"):document.body.classList.remove("theme-light")})),actions:Object(h["a"])({},m,(function(e,t){var n=e.commit;n(f,t)})),getters:{}},v={setup:function(){var e=Object(a["b"])();return{themeLight:Object(r["b"])((function(){return e.state.themeModule.themeLight})),changeTheme:function(){return e.dispatch(m,!e.state.themeModule.themeLight)}}},name:"SwitchTheme"};n("e0f7");v.render=d,v.__scopeId="data-v-a7aa305a";var g=v,j={setup:function(){var e=Object(a["b"])();return{themeLight:Object(r["b"])((function(){return e.state.themeModule.themeLight}))}},components:{LayerLoader:l,SwitchTheme:g},mounted:function(){this.themeLight?document.body.classList.add("theme-light"):document.body.classList.remove("theme-light")}};n("9cdc");j.render=c;var O,y=j,w="open_preloader",T="close_preloader",L="set_preloader",k={state:function(){return{preloader:!1}},mutations:(O={},Object(h["a"])(O,w,(function(e){e.preloader=!0})),Object(h["a"])(O,T,(function(e){e.preloader=!1})),O),actions:Object(h["a"])({},L,(function(e,t){var n=e.commit;n(!0===t?w:T)})),getters:{}},x=Object(a["a"])({modules:{preloaderModule:k,themeModule:p}}),_=x,S=(n("d3b7"),n("6c02")),C={class:"section-first"},D={class:"left"},E=Object(r["e"])('<div class="amn mb-1rem"><h1 class="amn-text first-line">A Frontend developer,</h1></div><div class="amn mb-1rem"><h2 class="amn-text first-line">To make a website</h2></div><div class="amn mb-1rem"><h3 class="amn-text first-line"> Is <span class="amber">creative</span>, <span class="amber">unique</span></h3></div><div class="amn mb-2rem"><h3 class="amn-text first-line"> And <span class="amber">beautiful</span></h3></div>',4),$={class:"amn"},M=Object(r["f"])("Available for freelance work ↪"),P=Object(r["g"])("div",{class:"right"},[Object(r["g"])("div",{class:"avatar-box"},[Object(r["g"])("img",{class:"avatar",src:"https://avatars1.githubusercontent.com/u/39333905?s=1920&u=668a70d02d61891484e2298b91b7fc117fb601a9&v=4",alt:""}),Object(r["g"])("div",{class:"online-point"})])],-1),I={class:"section-second"},A={ref:"works",id:"timeline-works",class:"h3 mb-5rem"},B=Object(r["f"])(" Bước đầu trong còn đường lập trình, được thực tập tại CÔNG TY CPTM DỊCH VỤ KHẢ KIM với vị trí làm Frontend Developer. Ở đây mình được trải nghiệm một môi trường làm việc thực sự, tiếp cận những kiến thức thực tế về lập trình frontend. "),N=Object(r["g"])("br",null,null,-1),Y=Object(r["g"])("br",null,null,-1),q=Object(r["f"])(" Được trải nghiệm và sử dụng Vue Framework của JavaScript để xây dựng dự án CMS Quản trị hệ thống crawling data ecommere "),F=Object(r["f"])(" Tại thời điểm đặt chân vào Công ty Anflash cho đến bây giờ, mình tiếp cận được khá nhiều trải nghiệm mới từ lập trình, chuyên môn cho đến thái độ làm việc. Được đảm nhiệm công việc lập trình cả về mảng Frontend Developement và Backend Developement"),H=Object(r["g"])("br",null,null,-1),W=Object(r["g"])("br",null,null,-1),K=Object(r["f"])(" Mặc dù công ty chỉ mới startup được 2 năm nhưng môi trường rất thân thiện, hòa đồng, không phân biệt thành viên. Thời gian làm việc thoải mái nhưng cũng đòi hỏi chất lượng sản phẩm đầu ra khi làm việc"),V=Object(r["f"])(" Với mong muốn trong năm tới, có thể đặt một bước tiến lớn hơn trở thành một Middle level trong ngành lập trình website / Web Development trong bước tiến trở thành một Senior Developer Web "),J={class:"section-thirty"},Q={ref:"expertise",id:"expertise",class:"h3 mb-1rem"},R={class:"h6 mb-5rem",style:{"animation-delay":"0.2s"},ref:"expertiseDescription"},U=Object(r["f"])(" Nắm được một số kỹ năng chuyên môn để có thể làm việc với ngành nghề lập trình, "),G=Object(r["g"])("br",null,null,-1),z=Object(r["f"])("hoàn thành tốt công việc được giao trong thời hạn. "),X={class:"list-expertise row"},Z={ref:"language",class:"col-12 col-md-6 col-lg-4"},ee=Object(r["g"])("h1",{class:"h3 mb-1rem"},"Language",-1),te=Object(r["g"])("p",{class:"expertise-item h5"},"JavaScript",-1),ne=Object(r["g"])("br",null,null,-1),re=Object(r["g"])("p",{class:"expertise-item h5"},"Typescript",-1),ce=Object(r["g"])("br",null,null,-1),ae=Object(r["g"])("p",{class:"expertise-item h5"},"Php",-1),ie=Object(r["g"])("br",null,null,-1),oe={ref:"framework",class:"col-12 col-md-6 col-lg-4"},se=Object(r["e"])('<h1 class="h3 mb-1rem">Framework / Supported</h1><p class="expertise-item h5">React</p><br><p class="expertise-item h5">Vue</p><br><p class="expertise-item h5">Alpinejs</p><br><p class="expertise-item h5">State management (Redux/Vuex)</p><br><p class="expertise-item h5">Laravel</p><br>',11),le={ref:"database",class:"col-12 col-md-6 col-lg-4"},ue=Object(r["g"])("h1",{class:"h3 mb-1rem"},"Database",-1),be=Object(r["g"])("p",{class:"expertise-item h5"},"SQL",-1),de=Object(r["g"])("br",null,null,-1),he=Object(r["g"])("p",{class:"expertise-item h5"},"No SQL",-1),fe=Object(r["g"])("br",null,null,-1);function me(e,t,n,c,a,i){var o=Object(r["w"])("router-link"),s=Object(r["w"])("timeline-item"),l=Object(r["w"])("timeline-tree"),u=Object(r["w"])("layout");return Object(r["p"])(),Object(r["d"])(u,null,{default:Object(r["B"])((function(){return[Object(r["g"])("section",C,[Object(r["g"])("div",D,[E,Object(r["g"])("h4",$,[Object(r["g"])(o,{class:"amn-text",to:"/about"},{default:Object(r["B"])((function(){return[M]})),_:1})])]),P]),Object(r["g"])("section",I,[Object(r["g"])("h1",A," Timeline Works ✈ ",512),Object(r["g"])(l,{ref:"timelineOne",time:"2020"},{default:Object(r["B"])((function(){return[Object(r["g"])(s,{date:"05/2020 - 07/2020",title:"Frontend Developer - Công ty CPTM Dịch vụ  Khả Kim"},{default:Object(r["B"])((function(){return[B,N,Y,q]})),_:1}),Object(r["g"])(s,{date:"07/2020 - Present",title:"Web Developer (FE-BE) - Công ty TNHH Công Nghệ Anflash"},{default:Object(r["B"])((function(){return[F,H,W,K]})),_:1})]})),_:1},512),Object(r["g"])(l,{ref:"timelineTwo",time:"2021"},{default:Object(r["B"])((function(){return[Object(r["g"])(s,{date:"The Planning",title:"Middle Level Web Developer"},{default:Object(r["B"])((function(){return[V]})),_:1})]})),_:1},512)]),Object(r["g"])("section",J,[Object(r["g"])("h1",Q,"Expertise ⌚",512),Object(r["g"])("p",R,[U,G,z],512),Object(r["g"])("div",X,[Object(r["g"])("div",Z,[ee,te,ne,re,ce,ae,ie],512),Object(r["g"])("div",oe,[se],512),Object(r["g"])("div",le,[ue,be,de,he,fe],512)])])]})),_:1})}n("4160"),n("159b");var pe=n("7791"),ve={id:"layout"};function ge(e,t,n,c,a,i){var o=Object(r["w"])("navbar"),s=Object(r["w"])("section-list");return Object(r["p"])(),Object(r["d"])("div",ve,[Object(r["g"])(o),Object(r["v"])(e.$slots,"default"),Object(r["g"])(s)])}var je=Object(r["C"])("data-v-090192b4");Object(r["s"])("data-v-090192b4");var Oe={class:"navbar"},ye=Object(r["g"])("span",{class:"say"},"I am",-1),we=Object(r["g"])("span",{class:"im"}," duongductrong06 💻 ",-1),Te={class:"info"},Le=Object(r["f"])("Self〴");Object(r["q"])();var ke=je((function(e,t,n,c,a,i){var o=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",Oe,[Object(r["g"])(o,{href:"javascript:void(0)",to:"/",class:"brand"},{default:je((function(){return[ye,we]})),_:1}),Object(r["g"])("div",Te,[Object(r["g"])(o,{class:"alink",href:"javascript:void(0)",to:"/about"},{default:je((function(){return[Le]})),_:1})])])})),xe={name:"Navbar"};n("de4d");xe.render=ke,xe.__scopeId="data-v-090192b4";var _e=xe,Se=Object(r["C"])("data-v-44d9afba");Object(r["s"])("data-v-44d9afba");var Ce={class:"section-list"};Object(r["q"])();var De=Se((function(e,t,n,c,a,i){return Object(r["p"])(),Object(r["d"])("div",Ce,[Object(r["g"])("a",{href:"javascript:void(0)",onClick:t[1]||(t[1]=function(e){return i.scrollToTop(null)}),class:"active"},"〴 Myself"),Object(r["g"])("a",{href:"javascript:void(0)",onClick:t[2]||(t[2]=function(e){return i.scrollToTop("#timeline-works")})},"Work"),Object(r["g"])("a",{href:"javascript:void(0)",onClick:t[3]||(t[3]=function(e){return i.scrollToTop("#expertise")})},"Expertise")])})),Ee={name:"SectionList",methods:{scrollToTop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=0;e&&(t=document.querySelector(e).offsetTop-100),window.scrollTo({top:t,behavior:"smooth"})}}};n("3106");Ee.render=De,Ee.__scopeId="data-v-44d9afba";var $e=Ee,Me={name:"Layout",components:{Navbar:_e,SectionList:$e}};n("ccc7");Me.render=ge;var Pe=Me,Ie=n("b366"),Ae=n("55da"),Be={name:"Home",components:{Layout:Pe,TimelineTree:Ie["a"],TimelineItem:Ae["a"]},mounted:function(){var e=[this.$refs.expertise,this.$refs.language,this.$refs.framework,this.$refs.database,this.$refs.expertiseDescription,this.$refs.timelineOne.focus(),this.$refs.timelineTwo.focus()];document.addEventListener("scroll",Object(pe["a"])((function(){e.forEach((function(e){e.offsetTop<window.scrollY+window.innerHeight?e.classList.add("amn-opacity-transformY100"):e.classList.contains("amn-opacity-transformY100")&&e.classList.remove("amn-opacity-transformY100")}))}),20))},beforeUnmount:function(){var e=[this.$refs.expertise,this.$refs.language,this.$refs.framework,this.$refs.database,this.$refs.expertiseDescription,this.$refs.timelineOne.focus(),this.$refs.timelineTwo.focus()];document.removeEventListener("scroll",Object(pe["a"])((function(){e.forEach((function(e){e.offsetTop<window.scrollY+window.innerHeight?e.classList.add("amn-opacity-transformY100"):e.classList.contains("amn-opacity-transformY100")&&e.classList.remove("amn-opacity-transformY100")}))}),20))}};n("e69a");Be.render=me;var Ne=Be,Ye=[{path:"/",name:"Home",component:Ne},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],qe=Object(S["a"])({history:Object(S["b"])("/"),routes:Ye});qe.beforeEach((function(e,t,n){_.dispatch(L,!0),setTimeout((function(){return _.dispatch(L,!1),window.scrollTo({top:0,behavior:"smooth"}),n()}),1e3)})),qe.afterEach((function(){document.title="⚔️ Dương Đức Trọng - Portfolio Simple"}));var Fe=qe;Object(r["c"])(y).use(Fe).use(_).mount("#app")},7791:function(e,t,n){"use strict";function r(e,t){var n=0;return function(){var r=(new Date).getTime();if(!(r-n<t)){var c=arguments;n=r,e.apply(this,c)}}}n.d(t,"a",(function(){return r}))},"8b0a":function(e,t,n){"use strict";n("501e")},"8bc7":function(e,t,n){},"92f5":function(e,t,n){"use strict";n("aeeb")},"9cdc":function(e,t,n){"use strict";n("c701")},aeeb:function(e,t,n){},b366:function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["C"])("data-v-27e8b612");Object(r["s"])("data-v-27e8b612");var a={ref:"refTree",class:"timeline-tree"},i={class:"timeline"},o={class:"h3"},s={class:"tree"};Object(r["q"])();var l=c((function(e,t,n,c,l,u){return Object(r["p"])(),Object(r["d"])("div",a,[Object(r["g"])("div",i,[Object(r["g"])("h1",o,Object(r["y"])(n.time),1)]),Object(r["g"])("div",s,[Object(r["v"])(e.$slots,"default")])],512)})),u={name:"TimelineTree",props:{time:{type:String,default:(new Date).getFullYear()}},methods:{focus:function(){return this.$refs.refTree}}};n("92f5");u.render=l,u.__scopeId="data-v-27e8b612";t["a"]=u},c701:function(e,t,n){},ccc7:function(e,t,n){"use strict";n("ea0e")},de4d:function(e,t,n){"use strict";n("8bc7")},e0f7:function(e,t,n){"use strict";n("30e9")},e69a:function(e,t,n){"use strict";n("286d")},ea0e:function(e,t,n){},f1f7:function(e,t,n){}});
//# sourceMappingURL=app.9418c6ae.js.map