<template>
    <div class="icons">
        <swiper :options="swiperOption" v-if="showIcons">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" 
                     v-for="item of page" 
                     :key="item.id"
                >
                    <div class="icons-img">
                        <img class="icon-img" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return{
            swiperOption: {
                loop: true
            }
        }
    },
    computed: {
        pages () {
            const pages =[]
            this.list.forEach((item, index) =>{
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        },
        showIcons () {
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icon
        position: relative
        overflow: hidden
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
        .icons-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 22px
            box-sizing: border-box
            padding: 5px
            .icon-img
                display:block
                height: 100%
                margin: 0 auto
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: 22px
            line-height: 22px
            text-align: center
            color: $pColor
            ellipsis()
</style>