<template>

    <div>
        <div class="flex">
            <van-nav-bar title="当前城市- " left-text="返回" />
 <div class="flex2">
            <form action="/">
                <van-search show-action placeholder="请输入搜索关键词" />
            </form>
        </div>
        
        </div>
        <div class="fr"></div>



        <van-index-bar :index-list="pinArr" @change="indexChange" style="margin-top: 100px;">
            <div v-for="item in indexArr" :key="item.key">
                <van-index-anchor :index="item.key"></van-index-anchor>
                <van-cell :title="sell.name" v-for="sell in item.list" :key="sell.cityId" @click="changeCity(sell)" />

            </div>



        </van-index-bar>
    </div>
</template>

<script>
export default {

    data() {
        return {
            indexList: [],
            cityList: [],
            pinArr: [],
            indexArr: []
        };
    },
    // 第二部
    watch: {
        cityList(newVal) {
            //监听到citylist的变化，如果变化了说明数据请求成功
            var arr = [];
            for (let index = 0; index < this.pinArr.length; index++) {
                var obj = {
                    key: this.pinArr[index],
                    list: []
                }
                newVal.forEach(element => {
                    let str = element.pinyin.slice(0, 1).toLocaleUpperCase()
                    if (str == this.pinArr[index]) {
                        obj.list.push(element)
                    }
                });
                arr.push(obj)
            }
            this.indexArr = arr
            console.log(obj);
        },
        // 第三步，根据新数组，生成索引
        indexArr(newval) {
            newval.forEach(item => {
                if (item.list.length) {
                    this.indexList.push(item.key)
                }

            })
        }
    },
    methods: {
        changeCity(city) {
            // 修改store
            this.$store.commit("changeCity", city.cityId)
            this.$toast(city.name);
        },
        indexChange(index) {
            console.log(index);
            this.$toast(index);
        }
    },
    created() {
        let that = this
        this.$toast.loading({
            message: '加载中...',
            forbidClick: true,
            duration: 0
        });
        //第一步打开页面加载数据
        this.$http
            .get("https://m.maizuo.com/gateway?k=7490465", {
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16753253105169126284722177"}',
                    'X-Host': 'mall.film-ticket.city.list'
                }
            }
            ).then((res) => {
                that.cityList = res.data.data.cities;
                console.log(that.cityList);
                that.$toast.clear()
            }).catch(() => {
                that.$toast.clear()
            })
        for (let index = 65; index <= 90; index++) {
            // 对应的A-z
            this.pinArr.push(String.fromCharCode(index))
            // console.log(this.pinArr);
        }

    }
}
</script>

<style lang="scss" scoped>
.flex {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 300;

}

.flex2 {
    z-index: 2000;
    height: 49px;
    width: 100%;
    background-color: #f4f4f4;
    position: fixed;
    top: 44px;
}

</style>