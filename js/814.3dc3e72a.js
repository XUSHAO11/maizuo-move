"use strict";(self["webpackChunkvue_film"]=self["webpackChunkvue_film"]||[]).push([[814],{6814:function(s,t,i){i.r(t),i.d(t,{default:function(){return r}});var a=function(){var s=this,t=s._self._c;return t("div",{staticClass:"detail"},[t("div",{staticClass:"topimg"},[t("img",{attrs:{src:s.list.poster,alt:""}})]),t("div",{staticClass:"txtbox"},[t("div",{staticClass:"dymbox"},[t("div",{staticClass:"dym"},[s._v(s._s(s.list.name)+" "),t("span",{staticClass:"twod"},[s._v(s._s(s.list.filmType.name))])]),t("div",{staticClass:"pf"},[s._v(s._s(s.list.grade)),t("span",{staticClass:"pfspan"},[s._v("分")])])]),t("div",{staticClass:"margintop lx"},[s._v(" "+s._s(s.list.category))]),t("div",{staticClass:"margintop"},[s._v("2022-04-11 上映")]),t("div",{staticClass:"margintop"},[s._v(s._s(s.list.nation)),t("span",{staticClass:"dysc-span"},[s._v("|")]),s._v(s._s(s.list.runtime)+"分钟 ")]),t("div",{staticClass:"jj"},[s._v(s._s(s.list.synopsis))]),t("span",{staticClass:"iconfont icon-xiajiantou"})]),s._m(0)])},l=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"person"},[t("div",{staticClass:"yzrytxt"},[t("span",[s._v(" 演职人员")])]),t("div",{staticClass:"rw"},[t("ul",[t("li")])])])}],n={data(){return{list:""}},created(){console.log(this.$route.params),this.axios.get("https://m.maizuo.com/gateway?filmId=6118&k=731617",{headers:{"X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"16760145295918928790355969","bc":"210300"}',"X-Host":"mall.film-ticket.film.info"}}).then((s=>{this.list=s.data.data.film,console.log(this.lists)})).catch((s=>{console.log(s)}))}},c=n,e=i(1001),o=(0,e.Z)(c,a,l,!1,null,"45935f52",null),r=o.exports}}]);
//# sourceMappingURL=814.3dc3e72a.js.map