"use strict";(self["webpackChunkvue_film"]=self["webpackChunkvue_film"]||[]).push([[612],{4612:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var a=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"影院","left-text":"返回","left-arrow":""},scopedSlots:t._u([{key:"right",fn:function(){return[e("router-link",{attrs:{to:"/search"}},[e("van-icon",{attrs:{name:"search",size:"18"}})],1)]},proxy:!0}])}),e("van-dropdown-menu",{attrs:{"active-color":"#ff5f16"}},[e("van-dropdown-item",{ref:"item",attrs:{title:"北京"}},[e("xiala01")],1),e("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),e("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),e("router-link",{attrs:{to:{name:"xq"}}},[e("list")],1)],1)},r=[],s=function(){var t=this,e=t._self._c;return e("div",[e("van-grid",{attrs:{gutter:10}},t._l(t.cinemas,(function(t){return e("van-grid-item",{attrs:{text:t.districtName}})})),1)],1)},i=[],o={computed:{cityId(){return this.$store.state.cityId},cinemas(){return this.$store.state.cinemas}},created(){this.$store.dispatch("updateCinemas")}},l=o,u=n(1001),c=(0,u.Z)(l,s,i,!1,null,"cda17b2a",null),d=c.exports,v=function(){var t=this,e=t._self._c;return e("div",t._l(t.cinemas,(function(n){return e("van-list",{key:n.id},[e("van-cell-group",[e("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"address"},[t._v(" "+t._s(n.name)+" ")])]},proxy:!0},{key:"label",fn:function(){return[e("div",{staticClass:"address"},[t._v(" "+t._s(n.address)+" ")])]},proxy:!0},{key:"default",fn:function(){return[e("div",{staticStyle:{color:"#ff5f16"}},[t._v(" "+t._s(n.lowPrice/100)),e("span",[t._v(" 起")])]),e("div",{staticClass:"km",staticStyle:{color:"#797d82","font-size":"12px"}},[e("span",[t._v(" 暂无购票")])])]},proxy:!0}],null,!0)})],1)],1)})),1)},f=[],p={components:{},data(){return{}},methods:{},computed:{cityId(){return this.$store.state.cityId},cinemas(){return this.$store.state.cinemas}},created(){this.$store.dispatch("updateCinemas")}},m=p,h=(0,u.Z)(m,v,f,!1,null,"69008905",null),_=h.exports,x={components:{xiala01:d,list:_},data(){return{value1:0,value2:"a",option1:[{text:"App订票",value:0},{text:"前台兑换",value:1}],option2:[{text:"最近去过",value:"a"},{text:"离我最近",value:"b"}]}},methods:{onConfirm(){this.$refs.item.toggle()},turn(){this.$router.go(-1)}}},y=x,k=(0,u.Z)(y,a,r,!1,null,"47a46ce8",null),b=k.exports}}]);
//# sourceMappingURL=612.21c22583.js.map