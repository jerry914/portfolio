<template lang="pug">
#IntroPage
    router-link(to='/')
        .introBw
    .introContainer
        router-link(to='/')
            .exitBtn X
        h1 {{title}}
        .tagContainer
            h3.tag(v-for="tag in tags")  {{tag}} | 
        img(src='https://github.com/jerry914/mywebsite/blob/master/img/%231.gif?raw=true')
        a#myhref(:href="link") 作品連結
</template>

<script>
export default {
    data() {
        return {
            title: 'title',
            tags: ['#processing','#cc'],
            link: 'https://www.youtube.com/watch?v=cxGfMhwO3LM'
        }
    },
    methods: {
        backHome: function(){
            this.$router.path=({path: ''});
        }
    }
}
</script>
<style lang="sass" scoped>
@import "@/style/commom.sass"
.introBw
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: #222
    opacity: 0.6
    z-index: 1
.introContainer
    position: absolute
    top: 100px
    left: calc( 10% - 50px )
    padding: 50px
    width: 80%
    background-color: white
    z-index: 2
.exitBtn
    position: absolute
    clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)
    width: 100px
    height: 60px
    top: 0
    right: 0
    background-color: $c-secondary
    color: $c-text
    font-size: 40px
    line-height: 60px
    transition: 0.7s
    cursor: pointer
    &:hover
        color: $c-primary
        width: 150px
        clip-path: polygon(0% 0%, 100% 0, 100% 100%, 20% 100%)
.tagContainer
    margin: 20px
.tag
    display: inline
#myhref
    text-decoration: none
    color: $c-secondary
    display: block
    margin: 20px

</style>