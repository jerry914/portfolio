<template lang="pug">
#IntroPage
    router-link(to='/')
        .introBw
    .introContainer
        router-link(to='/')
            .exitBtn X
        h1 {{pageDatas[idx].title}}
        .tagContainer
            h3.tag(v-for="tag in pageDatas[idx].tags")  {{tag}} | 
        .youtube(v-if="pageDatas[idx].video" v-html="pageDatas[idx].video")
        a#myhref(v-if="pageDatas[idx].link" :href="pageDatas[idx].link" target="blank") 作品連結
        img.images(v-for="img in pageDatas[idx].images" :src="img")
        p {{pageDatas[idx].text}}
        .htmlContainer(v-if="pageDatas[idx].body" v-html="pageDatas[idx].body")
</template>

<script>
export default {
    data() {
        return {
            idx: 0,
            pageDatas: [
                {
                    name: 'error',
                    title: 'Hi! 我是何捷睿 Jerry'
                },
                {   
                    name: 'myFriend',
                    title: '我的知心好友',
                    tags: ['#Arduino','#3D Print',"#woodworker"],
                    images: ['https://drive.google.com/uc?export=view&id=1cHglteZrI0JieJ-n7Bfj2fB6suyemkII'],
                    link: 'https://sites.google.com/gapp.nthu.edu.tw/designhumanfactors2018-1/%E4%BD%95%E6%8D%B7%E7%9D%BF?authuser=0',
                    text: '製作日期：2018冬',
                    body: '<h3>作品概要</h3><div>我常沉浸在自己的世界，不擅長跟現實世界中的人相處，卻又渴望有知心好友出現。終日幻想是沒有用的，所以我決定自己動手，豐衣足食，自己創造屬於我的知心好友。我總是想，人真是個複雜的生物，永遠不知道誰是拿著真心對待你；人們有時也會隨心所欲地活著，我總是摸不透也抓不住別人的心。<br>所以我的知心好友露出他的真心、動作緩慢有邏輯，給我安全感、讓我能輕易掌握，一個人的夜裡有他的陪伴，或許能得到一種藉慰吧？</div><br><div>這盞燈具中的紅色LED燈泡仿心臟跳動時的頻率而變化，心臟外型使用3D列印，結構中有三顆步進馬達扯動著風箏線，控制他能平穩且緩慢的漂移在半空中。</div>'
                },
                {   
                    name: 'marble',
                    title: '印象清華-躍動彈珠',
                    tags: ['#會動','#marble','#凸輪軸',"#woodworker"],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/uF_Hw3-noXs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    images: ['https://drive.google.com/uc?export=view&id=1ccDk2twyFoaDZxqSL_brrUTWVDy-w73N','https://drive.google.com/uc?export=view&id=1pJuu6KhOwv-nioM6LK_PxDXRN15QQWsd','https://drive.google.com/uc?export=view&id=1nuxZIny4eEZ0SInx0dYNbgwh07VUc_Un','https://drive.google.com/uc?export=view&id=1a7A-kPphw3uIofdz2eYBXRBV_jo2qIS1'],
                    link: 'https://techart.nthu.edu.tw/THE2019/cross-media-2019/%e8%ba%8d%e5%8b%95%e5%bd%88%e7%8f%a0/',
                    text: '製作日期：2019夏'
                },
                {   
                    name: 'lightArt',
                    title: '印象清華-花語清華',
                    tags: ['#LED','#Arduino'],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6dERp8GAffI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    images: ['https://drive.google.com/uc?export=view&id=1uBHA-vTjDiw44ngD0f5_OYfgRDXsHoNd','https://drive.google.com/uc?export=view&id=1W_BoW9rPKLhw-KZn6e6Yhw2iOoBg-S5D'],
                    link: 'https://techart.nthu.edu.tw/THE2019/cross-media-2019/%e8%8a%b1%e8%aa%9e%e6%b8%85%e8%8f%af/',
                    text: '製作日期：2019夏',
                    body: '<div>負責燈光製作，第一次嘗試控制大量LED，得到超多慘痛教訓，參展真是太有趣了。</div>'
                },
                {
                    name: 'magicClock',
                    title: '小明的魔法時鐘',
                    tags: ['#Processing','#face detection'],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/obnwbJ0qgsA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    text: '製作日期：2018冬',
                    body: '<h3>作品動機</h3><div>有一天，老師帶學生們去一座神奇的博物館戶外教學，老師介紹這裡有屬於每個人的獨一無二的時鐘，時針的轉速會隨著一個人的智商越高而越慢。每個人都快樂地找到屬於自己的時鐘，只有小明一直找不到，他苦惱地問老師：「老師老師，我怎麼都找不到我的時鐘？」老師想了很久，突然大喊一聲：「啊！你的時鐘被我拿來當電風扇了……」我們想讓小明的時鐘實現，經歷了激烈的爭辯，決定讓簡單又不失難度的記憶遊戲成為決定智商的依據，並影響時鐘轉速。遊戲時玩家須記住花園鰻出現的位置，答題時照順序點擊即可，答對可得一分並進入下一關，答錯會被擷取頭像，然後看到自己出現在虛擬時鐘上。</div>'
                },
                {
                    name: 'creator',
                    title: '程式織花系列',
                    tags: ["#Processing",'#3D'],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/fxMRFplesrg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    text: '製作日期：2020春',
                    images: ['https://drive.google.com/uc?export=view&id=14h6bpPbycZU8fCrhMS9HqxzXPURiDbjp','https://drive.google.com/uc?export=view&id=1khdeAYyQcRJyMrZvYr0UtGdzBBOUopDw','https://drive.google.com/uc?export=view&id=1CSerdNAbRu5JlmnGje1ytBpQcjvWC9SI','https://drive.google.com/uc?export=view&id=1jO7uNJdPmofU4z2ut65ZNg82a520CtnL','https://drive.google.com/uc?export=view&id=1d3ekYSq0-cNzA07oKLhBp_aIeQZwwU9q'],
                    link: 'https://www.youtube.com/watch?v=kgjCyCfx-hc&list=PL16mWWvmOPO3Lmdiy2BOBM8Ey37Xx4v3e',
                    body: '<div>這系列一共有五部作品，分別代表各種盛開的花朵。我相信，不管是再多貧脊的地方，都能綻放出美麗的花朵。</div>'
                },
                {
                    name: 'chesweeper',
                    title: '週期表踩地雷',
                    tags: ["#P5.js"],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cxGfMhwO3LM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    text: '製作日期：2018夏',
                    link: 'https://jerry914.github.io/Chesweeper/',
                    body: '<div>背週期表太無聊？試試週期表踩地雷！</div>'
                },
                {
                    name: 'chicken',
                    title: 'Chicken Attack',
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-OftYFll5qQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    text: '製作日期：2019夏',
                    images: ['https://drive.google.com/uc?export=view&id=1iuGmli0davOC1kt9QIKnmYKN7yczT2W5'],
                    tags: ['#Unity'],
                    body: '<div>被17年的洗腦神曲深深支配，只好來一場 Chicken Attack。</div>'
                },
                {
                    name: 'mg',
                    title: 'Arduino！',
                    tags: ['After Effects','Expression'],
                    images: ['https://drive.google.com/uc?export=view&id=1aZVbtZZ3KovhsDQboloh3c3I3oR0d37W'],
                    text: '製作日期：2020春',
                    body: '<div>Arduino簡直是精神時光屋，有好多值得玩樂的事物。</div><div>第一次玩Expression，太喜歡這個玩法了。</div>'
                }
            ]
        }
    },
    created(){
        this.findIdx(this.$route.params.name);
        window.scrollTo(0,0);
    },
    methods: {
        backHome: function(){
            this.$router.path=({path: ''});
        },
        findIdx(name){
            for(var i=0;i<this.pageDatas.length;i++){
                if(name==this.pageDatas[i].name){
                    this.idx=i;
                    break;
                }
            }

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
.youtube
    display: block
    margin: auto
    margin-bottom: 20px
    width: 640px
    height: 360px
@media only screen and (min-width: 640px)
    .youtube
        width: 640px
        height: 360px
@media only screen and (max-width: 640px)
    .youtube
        position: relative
        left: 0
        width: 100%
        height: 60vw
    .images
        width: 100%
        height: auto
.htmlContainer
    text-align: left
    width: 80%
    margin: auto
</style>