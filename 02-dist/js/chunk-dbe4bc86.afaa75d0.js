(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbe4bc86"],{"158c":function(t,e,n){},"332a":function(t,e,n){"use strict";n("6121")},"49ed":function(t,e,n){},6121:function(t,e,n){},c307:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"songSquare"},[n("div",{staticClass:"header"},[n("div",{staticClass:"headerTop"},[n("i",{staticClass:"iconfont icon-arrowLeft",on:{click:function(e){return t.$router.back()}}}),n("h2",[t._v("歌单广场")])]),n("div",{staticClass:"headerBtm"},[n("div",{staticClass:"headerScroll"},[n("ul",t._l(t.reHotCategorylist,(function(e,i){return n("li",{key:i,class:{active:t.navIndex===i},on:{click:function(n){return t.handleClick(i,e)}}},[t._v(" "+t._s(e)+" ")])})),0)]),n("i",{staticClass:"iconfont icon-caidan3"})])]),0==t.navIndex?n("Recommend"):t._e(),0!==t.navIndex?n("Other"):t._e()],1)},c=[],o=(n("4160"),n("b0c0"),n("159b"),n("5530")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommendScroll"},[n("div",{staticClass:"recommend"},[n("div",{staticClass:"banner"},[n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.bannerList,(function(e,i){return n("div",{key:i,staticClass:"swiper-slide",on:{click:function(n){return t.goSongListDetail(e)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.coverImgUrl,expression:"item.coverImgUrl"}]}),n("span",[t._v(t._s(e.name))])])})),0)])]),n("div",{staticClass:"content"},[n("ul",t._l(t.contentList,(function(e,i){return n("li",{key:i,on:{click:function(n){return t.goSongListDetail(e)}}},[n("img",{attrs:{src:e.coverImgUrl}}),n("span",[t._v(t._s(e.name))])])})),0)])])])},r=[],a=(n("fb6a"),n("1fba")),l=n("b619"),u=n("2f62"),d=n("2ef0"),f=n.n(d),h={computed:Object(o["a"])(Object(o["a"])({},Object(u["b"])({songList:function(t){return t.RecSongList}})),{},{bannerList:function(){var t=f.a.slice(this.songList,0,3);return t},contentList:function(){return f.a.drop(this.songList,3)}}),methods:{goSongListDetail:function(t){this.$router.push("/songListDetail"),this.$store.dispatch("getPlayListDetailAction",t.id)}},mounted:function(){this.$nextTick((function(){new a["a"](".recommendScroll",{scrollY:!0,click:!0}),new l["a"](".swiper-container",{loop:!0,effect:"coverflow",centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}})}))},watch:{bannerList:function(){this.$nextTick((function(){new l["a"](".swiper-container",{loop:!0,effect:"coverflow",centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}})}))}}},g=h,m=(n("ceb8"),n("2877")),v=Object(m["a"])(g,s,r,!1,null,"52641bd0",null),p=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"other"},[n("div",{staticClass:"content"},[n("ul",t._l(t.contentList,(function(e,i){return n("li",{key:i,on:{click:function(n){return t.goSongListDetail(e)}}},[n("img",{attrs:{src:e.coverImgUrl}}),n("span",[t._v(t._s(e.name))])])})),0)])])},w=[],C={data:function(){return{tag:""}},computed:Object(o["a"])(Object(o["a"])({getTag:function(){return this.$store.state.tag}},Object(u["b"])({otherSongList:function(t){return t.otherSongList}})),{},{contentList:function(){return this.otherSongList[this.getTag]}}),methods:{goSongListDetail:function(t){this.$router.push("/songListDetail"),this.$store.dispatch("getPlayListDetailAction",t.id)}},watch:{getTag:{deep:!0,handler:function(t){console.log(t),this.tag=t}},contentList:function(){this.$nextTick((function(){new a["a"](".content",{scrollY:!0,click:!0})}))}},mounted:function(){}},L=C,k=(n("fe7c"),Object(m["a"])(L,b,w,!1,null,"5b4dee25",null)),_=k.exports,S=n("3ce9"),$={components:{Recommend:p,Other:_},data:function(){return{comName:"Recommend",navIndex:0}},computed:Object(o["a"])(Object(o["a"])({},Object(u["b"])({hotCategorylist:function(t){return t.hotCategorylist}})),{},{reHotCategorylist:function(){var t=["推荐"];return this.hotCategorylist.forEach((function(e){t.push(e.name)})),console.log(t),t}}),watch:{reHotCategorylist:function(){var t=this;this.$nextTick((function(){console.log(1),t.hotCategorylist.forEach((function(e){t.$store.dispatch("getOtherSongListAction",e.name)}))}))}},mounted:function(){var t=this;this.$nextTick((function(){new a["a"](".headerScroll",{scrollX:!0,click:!0}),t.hotCategorylist.forEach((function(e){t.$store.dispatch("getOtherSongListAction",e.name)}))}))},methods:{handleClick:function(t,e){this.navIndex=t,this.$store.commit(S["C"],e)}}},y=$,O=(n("332a"),Object(m["a"])(y,i,c,!1,null,"348b1c08",null));e["default"]=O.exports},ceb8:function(t,e,n){"use strict";n("49ed")},fe7c:function(t,e,n){"use strict";n("158c")}}]);