(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{162:function(o,n,t){var s=t(239);"string"==typeof s&&(s=[[o.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};t(18)(s,e);s.locals&&(o.exports=s.locals)},239:function(o,n,t){(o.exports=t(19)(!1)).push([o.i,"\n.demo-coupon-list .van-popup {\n    height: 100%;\n}\n",""])},240:function(o,n,t){"use strict";var s=t(162);t.n(s).a},397:function(o,n,t){"use strict";t.r(n);var s=t(3),e=t.n(s),i={i18n:{"zh-CN":{coupon:{name:"优惠券名称",reason:"优惠券不可用原因"},exchange:"兑换成功"},"en-US":{coupon:{name:"Coupon name",reason:"Coupon unavailable reason"},exchange:"Success"}},data:function(){return{showList:!1,chosenCoupon:-1,exchangedCoupons:[]}},computed:{coupons:function(){return[this.coupon,this.discountCoupon].concat(this.exchangedCoupons)},disabledCoupons:function(){return[this.disabledCoupon,this.disabledDiscountCoupon]},coupon:function(){return{id:1,available:1,discount:0,denominations:150,origin_condition:0,reason:"",value:150,name:this.$t("coupon.name"),start_at:1489104e3,end_at:1514592e3}},discountCoupon:function(){return e()({},this.coupon,{id:2,discount:88,denominations:0,origin_condition:50,value:12})},disabledCoupon:function(){return e()({},this.coupon,{id:3,available:0,reason:this.$t("coupon.reason")})},disabledDiscountCoupon:function(){return e()({},this.discountCoupon,{discount:10,id:4,available:0,reason:this.$t("coupon.reason")})}},methods:{onChange:function(o){this.showList=!1,this.chosenCoupon=o},onExchange:function(o){this.$toast(this.$t("exchange")),this.exchangedCoupons.push(e()({},this.coupon,{id:this.randomId()}))},randomId:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:999999;return Math.floor(Math.random()*o)+1}}},u=(t(240),t(0)),a=Object(u.a)(i,function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("demo-section",[t("demo-block",{attrs:{title:o.$t("basicUsage")}},[t("van-coupon-cell",{attrs:{coupons:o.coupons,"chosen-coupon":o.chosenCoupon},on:{click:function(n){o.showList=!0}}}),t("van-popup",{attrs:{position:"bottom","lazy-render":!1},model:{value:o.showList,callback:function(n){o.showList=n},expression:"showList"}},[t("van-coupon-list",{attrs:{coupons:o.coupons,"chosen-coupon":o.chosenCoupon,"disabled-coupons":o.disabledCoupons},on:{change:o.onChange,exchange:o.onExchange}})],1)],1)],1)},[],!1,null,null,null);n.default=a.exports}}]);