<template>
    <div>
        <div class="banner" @click="BannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1902/80/80d7d3ef350b7fffa3.water.jpg_600x330_e7a26e24.jpg" />
            <div class="banner-info">
                <div class="banner-title">东部华侨城茶溪谷</div>
                <div class="banner-number">
                    <span class="iconfont banner-iconfont">&#xe6dd;</span>39
                </div>
            </div>
        </div>
        <common-gallary
            :imgs="imgs"
            v-show="showGallary"
            @close="GallaryClose"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallary: false,
            imgs: ['https://img1.qunarzz.com/p/tts5/1810/84/88bd71ec1ca69602.jpg_r_1280x840x90_5a5f3850.jpg',
                    'https://img1.qunarzz.com/p/tts9/1808/80/662cd67b5f36ce02.jpg_r_1280x840x90_9f719967.jpg']
        }
    },
    methods: {
        BannerClick () {
            this.showGallary = true
        },
        GallaryClose () {
            this.showGallary = false
        }
    },
    components: {
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute 
            left: 0
            right: 0
            bottom: 0
            line-height: 30px
            color: #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
            .banner-title
                flex: 1
                font-size: 16px
                padding: 0 10px
            .banner-number
                height: 16px
                line-height: 16px
                margin-top: 7px
                padding: 0 20px
                border-radius: 10px
                background: rgba(0, 0, 0, .8)
                font-size: 12px
                .banner-iconfont
                    font-size: 12px
</style>