<template>
    <div>
        <div class="listbox">
            <ul>
                <li v-for="item in list"><img class="listimg" :src="item" alt=""></li>
            </ul>
           
    </div>
        <!-- <TabBar></TabBar> -->
    </div>
</template>

<script>
import TabBar from '@/view/TabBarView.vue'
    export default {
        components:{
            TabBar
        },
        data(){
            return {
                list:['https://static.maizuo.com/v5/upload/3bc89e2ba260150a97fc96746c9b3000.jpg',
        'https://static.maizuo.com/v5/upload/0dbf59759aed7ee03091d33448bdb01b.jpg',
        'https://static.maizuo.com/v5/upload/d9d92408fb06b073e28414d7692407c9.jpg',
        'https://static.maizuo.com/v5/upload/5729d8af9ff8ca2a4069497b15aa6f23.jpg',
        'https://static.maizuo.com/v5/upload/da36c8f4736befb08236d2f0aaebf04f.jpg',
        'https://static.maizuo.com/v5/upload/b08d99f2619ebc073fecb65a309b10a5.jpg',
        'https://static.maizuo.com/v5/upload/c794bf14470c639435c8a504cdca1056.jpg',
        'https://static.maizuo.com/v5/upload/0a523a8524d399dfbd1ce69d42802a02.jpg',
        'https://static.maizuo.com/v5/upload/149e334c6d638e7593168ba197dc510d.jpg',
        'https://static.maizuo.com/v5/upload/37830902b3526a7c999e80b9d2ce76b3.jpg']
            }
        }
    }
</script>

<style lang="scss" scoped>
// 大框离底部的高度
// .listbox{
//     margin-bottom: 70px;
// }
// img样式
.listimg{
    max-width: 100%;
}
</style>