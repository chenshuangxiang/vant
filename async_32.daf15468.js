(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{156:function(e,n,t){var a=t(226);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(18)(a,i);a.locals&&(e.exports=a.locals)},226:function(e,n,t){(e.exports=t(19)(!1)).push([e.i,"\n.demo-lazyload {\n  padding: 0 15px;\n}\n.demo-lazyload img, .demo-lazyload div[lazy] {\n    padding: 15px;\n    width: 100%;\n    height: 250px;\n    margin: 10px 0 0;\n    background-color: white;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    background-size: 315px 250px;\n    background-position: 15px;\n    background-repeat: no-repeat;\n    box-sizing: border-box;\n}\n.demo-lazyload .van-doc-demo-block__title, .demo-lazyload .van-doc-demo-section__title {\n    padding-left: 0;\n}\n",""])},227:function(e,n,t){"use strict";var a=t(156);t.n(a).a},404:function(e,n,t){"use strict";t.r(n);var a={i18n:{"zh-CN":{title2:"背景图懒加载",title3:"懒加载模块"},"en-US":{title2:"Lazyload Background Image",title3:"Lazyload Component"}},data:function(){return{imageList:["https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg","https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg","https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg"],backgroundImageList:["https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg","https://img.yzcdn.cn/public_files/2017/09/05/138c32d4384b5e4a78dc4e1ba58e6a80.jpg"],componentImageList:["https://img.yzcdn.cn/public_files/2017/09/05/100a7845756a70af2df513bdd1307d0e.jpg","https://img.yzcdn.cn/public_files/2017/09/05/8a4f5be8289cb3a7434fc19a3de780a2.jpg"]}},methods:{handleComponentShow:function(){console.log("component show")}}},i=(t(227),t(0)),o=Object(i.a)(a,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("demo-section",[t("demo-block",{attrs:{title:e.$t("basicUsage")}},e._l(e.imageList,function(e){return t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"img"}]})})),t("demo-block",{attrs:{title:e.$t("title2")}},e._l(e.backgroundImageList,function(e){return t("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e,expression:"img",arg:"background-image"}]})})),t("demo-block",{attrs:{title:e.$t("title3")}},[t("lazy-component",e._l(e.componentImageList,function(e){return t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"img"}]})}))],1)],1)},[],!1,null,null,null);n.default=o.exports}}]);