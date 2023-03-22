<template>
    <div style="background-color: #f4f4f4;">
        <div>
            <!-- 顶部返回按钮 -->
            <router-link :to="{ name: 'zixun' }">
                <div class="circle "><i class="iconfont icon-xiangzuojiantou"></i></div>
            </router-link>
            <!-- 顶部固定txt -->
            <!-- <van-sticky :offset-top="10" scroll>
  <van-button type="info" style="z-index: 1; position: fixed;width: 100% !important;">悬崖之上</van-button>
</van-sticky>-->
            <div class="topscoll-no" id="tpsc" v-v-scroll> 悬崖之上 </div>
            <van-dialog style="border-radius: 0px;" v-model="show" show-cancel-button confirm-button-text="同意"
                cancel-button-text="拒绝" message="该影片目前没有排期，到首页看其他</br>电影吧">
                <!-- <div v-for="item in filmList"> -->
                <!-- </div> -->
            </van-dialog>
            <!-- 顶部图片 -->
            <div class="topimg">
                <img :src="filmList.poster" alt="">
            </div>
            <!-- 文本外大盒子 -->
            <div class="txtbox">
                <!-- 电影名外框 -->
                <div class="dymbox">
                    <!-- 电影名 2d 3d -->
                    <div class="dym">{{ filmList.name }} <span>{{ filmList.videoId }}</span> </div>
                    <!-- 评分 -->
                    <div class="pf">{{ filmList.grade }}<span class="pfspan">分</span></div>
                </div>
                <!-- 类型外框 -->
                <div class="margintop lx">{{ filmList.category }}</div>
                <!-- 上映时间外框 -->
                <div class="margintop">2022-04-11 上映</div>
                <!-- 电影时长 -->
                <div class="margintop ">{{ filmList.nation }}<span class="dysc-span">|</span>{{ filmList.runtime }}分钟
                </div>
                <!-- 电影简介 -->
                <div class="jj" v-if="isshow">{{ filmList.synopsis }}</div>
                <div class="jjzk" v-else>{{ filmList.synopsis }}</div>
                <!-- 展开 -->
                <div @click="isshow = !isshow" class="zk iconfont icon-xiajiantou"></div>
            </div>
            <!-- 演职人员大盒子 -->
            <div class="person">
                <div class="yzrytxt">
                    <span> 演职人员</span>
                </div>
                <div class="rw">
                    <ul style="display: flex;justify-content: flex-start; text-align: center;">
                        <li v-for="item in bbb" style="margin-right: 10px;">
                            <div style="display: flex;flex-direction: column;"><span
                                    style="display: block; width: 85px;height: 85px; overflow: hidden; position: relative;"><img
                                        class="yzryzp" :src="item.avatarAddress" alt=""></span><span
                                    style="padding-top: 10px; font-size: 12px; color: #191a1b;width: 85px; height: 18px;text-overflow: ellipsis;white-space: nowrap;">{{
                                        item.name
                                    }}</span><span style="font-size: 10px; color: #797d82;">{{
    item.role
}}</span></div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 剧照大盒子 -->
            <div class="juzhao">
                <!-- txt -->
                <div style="padding: 15px;height: 62px;box-sizing: border-box;">
                    <span> 剧照</span>
                    <span style="float: right;"> 全部(5) ></span>
                </div>
                <!-- 剧照照片 -->
                <div class="jzzp">
                    <ul class="jzzp-ul">
                        <li v-for="item in juzhaoIMG">
                            <img :src="item" alt="" class="jzzp-img">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import ZiXun from './ZiXun.vue';

import '@/static/iconfont.css'
import router from '../router';
export default {
    directives: {
        "v-scroll": {
            inserted(el, binds) {
                window.onscroll = function () {
                    var t = document.documentElement.scrollTop || document.body.scrollTop;
                    if (t > 100) {
                        el.className = "topscolls";
                    } else {
                        tpsc.className = 'topscoll-no'
                    }
                }
            }
        }
    },
    data() {
        return {
            isshow: true,
            show: true,
            filmList: [],
            juzhaoList: [],
            photosList: [],
            rwList: [],
            bbb: [],
            juzhaoIMG: [],
            isTrue: true
        };
    },
    mounted() {
        // window.addEventListener('scroll', function () {
        //     console.log(1111111111111111111111111, document.documentElement.scrollTop);
        //     let t = document.documentElement.scrollTop;   // 目前监听的是整个body的滚动条距离
        //     let tpsc = document.querySelector('#tpsc')
        //     console.log('ttttttttttttttttttttttt', t);
        //     if (t >= 100) {
        //         // tpsc.className = 'topscoll'
        //         this.isTrue = true
        //         console.log(1111111111111111111, this.isTrue);
        //     } else {
        //         // tpsc.className = 'topscoll-no'
        //         this.isTrue = false
        //         console.log(2222222222222222222222, this.isTrue);
        //     }
        // })
    },
    methods: {

    },
    created() {
        this.$http
            .get("https://m.maizuo.com/gateway?filmId=5439&k=7981100", {
                headers: {
                    "X-Client-Info": " {\"a\":\"3000\",\"ch\":\"1002\",\"v\":\"5.2.1\",\"e\":\"167601477585096187035649\",\"bc\":\"110100\"}",
                    "X-Host": "mall.film-ticket.film.info"
                },
            })
            .then((res) => {
                console.log(res);
                console.log(res.data.data.film);
                this.filmList = res.data.data.film;
                console.log('*******', this.filmList);

                // 找一个对象里没用的数据  然后把filmlist下filmtype下的name赋值给这个没用的数据  然后打印这个数据
                for (let key in this.filmList) {
                    this.filmList.videoId = this.filmList.filmType.name
                }
                let rwList = res.data.data.film.actors;
                this.rwList = rwList

                this.rwList.forEach((value, index) => {
                    console.log(111, value, index);



                    this.bbb.push(value)
                    console.log('bbb---五个人的信息', this.bbb);


                    this.juzhaoIMG = [...res.data.data.film.photos]
                    console.log('剧照', this.juzhaoIMG);

                    // this.photosList=[...res.data.data.film]
                    // console.log(this.res);

                })
                // 获取底部剧照


            });

    },
    components: { router }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    /* 设置滚动条宽度 */
    // width: 1px;
    height: 1px;
    /* 设置滚动条背景色 */
    color: #fff;
}

.topimg {
    width: 100%;
    height: 210px;
    position: relative;
    overflow: hidden;
}

.topimg img {
    width: 100%;
    position: absolute;
    top: -180px;
}

// 圆
.circle {
    position: fixed;
    top: 5px;
    left: 5px;
    z-index: 99;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 15px;
    background-color: rgba(210, 216, 223, .5);
    // background-color: aqua;
}

// 文本大盒子
.txtbox {
    // width: 100%;
    // height: 190px;
    // background-color: lightslategray;
    padding: 15px;
    background-color: #fff;
}

// 电影名外框样式
.dymbox {
    display: flex;
    line-height: 20px;

}

// 电影名 2d 3d 
.dym {
    width: 256px;
    color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    margin-right: 7px;
}

// 评分
.pf {
    width: 75px;
    text-align: right;
    font-style: italic;
    color: #ffb232;
    font-size: 18px;
}

// 评分的 分 字
.pfspan {
    font-size: 12px;
}

// 未展开的简介
.jj {
    margin-top: 12px;
    font-size: 13px;
    color: #797d82;
    height: 36px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    transition: height .5s ease;
}

// 展开的简介
.jjzk {
    margin-top: 12px;
    font-size: 13px;
    height: 84px;
    color: #797d82;
    transition: height .5s ease;
}

// 展开按钮
.zk {
    width: 100%;
    text-align: center;

}

// 距离上部的外边距
.margintop {
    font-size: 13px;
    color: #797d82;
    margin: 4px 0 0;
}

// 电影时长字间距
.dysc-span {
    margin: 0 3px;
}

// 类型字间距
.lx {
    letter-spacing: 1px;
}

// 演职人员
.person {
    margin-top: 10px;
    background-color: #fff;
    height: 192px;

}

.yzrytxt {
    // width: 100%;
    padding: 15px;
}

// 任务照片
.rw {
    height: 140px;
    padding-left: 15px;
    display: flex;
    justify-content: flex-start;
    // overflow-y: hidden;
    overflow-y: scroll;
    margin-right: 1px;
}

.rw ul {
    // padding-left: 15px;
}

// 演职人员照片
.yzryzp {
    width: 85px;
    // height: 117px;
    position: absolute;
    top: -15px;
    left: 0px;

}

// 剧照大盒子
.juzhao {

    height: 177px;
    background-color: #fff;
    margin: 10px 0px;
    // padding: 15px;
    background-color: #fff;
}

// 剧照照片
.jzzp {
    height: 115px;
    background-color: #fff;
}

// 剧照ul
.jzzp-ul {
    // width: 390px;
    padding-left: 15px;
    display: flex;
    justify-content: flex-start;
    overflow-y: hidden;
}

.jzzp-ul li {
    position: relative;
    margin-right: 10px;
}

// 剧照照片
.jzzp-img {
    // position: absolute;
    // top: 0px;
    // left: 0px;
    width: 150px;
    height: 99px;
}

// 顶部固定
.topscolls {
    position: fixed;
    width: 100%;
    height: 44px;
    background-color: #fff;
    text-align: center;
    line-height: 44px;
    z-index: 10;
    top: 0;
}

// 不滚动
.topscoll-no {

    display: none;

}
</style>