<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li
                class="item border-bottom"
                v-for="item of list"
                :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'HomeWeekend',
    props: {
        list : Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        line-height: 40px
        background: #eee
        text-indent: 10px
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
        .item-img
            width: 100%
    .item-info
        flex: 1
        padding: 5px
        .item-title
            line-height: 27px
            font-size: 16px
            ellipsis()
        .item-desc
            line-height: 20px
            color: #ccc
            ellipsis()
</style>