<template>
    <div>
        <van-nav-bar title="标题" left-text="返回" left-arrow>
            <template #right>
                <router-link to="/search">
                     <van-icon name="search" size="18" />
                </router-link>
               
            </template>
        </van-nav-bar>
        <!-- 下拉菜单 -->
        <van-dropdown-menu active-color="#ff5f16">
            <van-dropdown-item title="北京" ref="item">
                <xiala01></xiala01>
            </van-dropdown-item>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <!-- 列表 -->
        <router-link :to="{ name: 'xq' }">
            <list></list>

        </router-link>

    </div>
</template>

<script>

import xiala01 from './Yyuan/xiala01.vue';
import list from './Yyuan/List.vue'
export default {
    components: {

        xiala01,
        list
    },
    data() {
        return {

            value1: 0,
            value2: 'a',
            option1: [
                { text: 'App订票', value: 0 },
                { text: '前台兑换', value: 1 },

            ],
            option2: [
                { text: '最近去过', value: 'a' },
                { text: '离我最近', value: 'b' },

            ],

        };

    },
    methods: {
        onConfirm() {
            this.$refs.item.toggle();
        },

    },

};
</script>

<style lang="scss" scoped>

</style>