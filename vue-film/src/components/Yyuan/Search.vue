<template>
    <div>
        <van-search v-model="value" placeholder="请输入搜索关键词" :show-action="true" @search="onSearch" @cancel="onCancel" />


        <van-list v-if="newCinemas.length" v-for="item in newCinemas" :key="item.id">
            <van-cell-group>
                <van-cell>
                    <template #title>
                        <div class="address">
                            {{ item.name }}
                        </div>

                    </template>
                    <template #label>
                        <div class="address">
                            {{ item.address }}
                        </div>


                    </template>

                    <template #default>
                        <div style="color:#ff5f16">
                            {{ item.lowPrice / 100 }}<span> 起</span>
                        </div>
                        <div class="km" style="color:#797d82;font-size: 12px;">
                          <span> 暂无购票</span>
                        </div>



                    </template>
                </van-cell>
            </van-cell-group>
        </van-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            newCinemas: []
        }
    },
    methods: {
        onCancel() {
            this.value = '',
                this.$router.push({ name: 'yingyuan' });
        },
        onSearch() {

        }
    },
    computed: {
        cityId() {
            return this.$store.state.cityId;
        },
        cinemas() {
            return this.$store.state.cinemas;
        }

    },
    watch: {
        value(newVal, oldVal) { 
            if (newVal == '') {
                this.newCinemas = []
            } else {
                this.newCinemas = this.cinemas.filter((item) => {
                    return item.name.includes(newVal)
                })
            }
        }
    },
    created(){
       
      !this.cinemas.length && this.$store.dispatch('updateCinemas')
    }
}
</script>

<style lang="scss" scoped>
.address {
    max-width: 200px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>