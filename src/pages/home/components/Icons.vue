<template>
    <div class="icons">
        <swiper>
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
    data () {
        return{
            loop: true,
            iconList: [{
                id: '0001',
                imgUrl:  'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',             
                desc: '景点门票'
            },
            {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc: '一日游'
            },
            {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                desc: '深圳必游'
            },
            {
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                desc: '海洋馆'
            },
            {
                id: '0005',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/b0026eb6f96fd2daecba0d7982c7e4c8.png',
                desc: '五月特惠'
            },
            {
                id: '0006',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cba147cf6cfcea7109d0bff6aac6f626.png',
                desc: '深圳动物园'
            },
            {
                id: '0007',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/a6/6d97515091789602.png',
                desc: '世界之窗'
            },
            {
                id: '0008',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
                desc: '深圳欢乐谷'
            },
            {
                id: '0009',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
                desc: '东部华侨城'
            }
            ]
        }
    },
    computed: {
        pages () {
            const pages =[]
            this.iconList.forEach((item, index) =>{
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
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