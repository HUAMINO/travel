<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe685;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe600;</span>
            输入城市/景点/游玩主题</div>
        <div class="header-right">
            城市
            <span class="iconfont">&#xe601;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: .86rem
        color: #fff
        background-color: $bgColor
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-right
            float: right
            width: 1.24rem
            text-align: center
        .header-input
            flex: 1
            background: #fff
            margin-top: .12rem
            height: .64rem
            line-height: .64rem
            border-radius: .1rem
            margin-left: .2rem
            padding-left: .2rem
            color: grey
</style>
