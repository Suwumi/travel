<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li
                class="item border-bottom"
                v-for="item of recommendList"
                :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'HomeRecommend',
    data () {
        return{
            recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/1e/1e51b5ea32ee8033a3.water.jpg_200x200_7750aa0b.jpg',
                title: '深圳欢乐谷',
                desc: '深圳欢乐，谷深圳欢乐谷深圳欢乐谷'
            },
            {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg',
                title: '东部华侨城大峡谷',
                desc: '东部华侨城，大峡谷东部华侨城大峡谷'
            },
            {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/f2/f2e0213052717f7ca3.water.jpg_200x200_816c1b48.jpg',
                title: '世界之窗',
                desc: '世界之窗世界，之窗世界之窗世界之窗'
            },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top: 25px
        line-height: 40px
        background: #eee
        text-indent: 10px
    .item
        overflow: hidden
        display: flex
        height: 95px
        .item-img
            width: 85px
            height: 85px
            padding: 5px
        .item-info
            flex: 1
            padding: 5px
            min-width: 0
            .item-title
                line-height: 27px
                font-size: 16px
                ellipsis()
            .item-desc
                line-height: 20px
                color: #ccc
                ellipsis()
            .item-button
                line-height: 22px
                margin-top: 8px
                background: #ff9300
                padding: 0 10px
                border-radius: 3px
                color: #fff
                border: none
</style>