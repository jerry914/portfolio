<template lang="pug">
.home
  router-view
  h2.title 何捷睿 | CHIEH-JUI HO
  .iconLinkContainer
    a.iconLink(href="https://github.com/jerry914" target="blank")
      img(src="https://raw.githubusercontent.com/jerry914/mywebsite/master/img/github.svg" style="margin-top:45px;margin-right:20px;")
    a.iconLink(href="https://www.youtube.com/channel/UCX1sbFMLyGrIF681s9TJ81A" target="blank")
      img(src="https://raw.githubusercontent.com/jerry914/mywebsite/master/img/youtube.png" style="margin-top:50px;")
  .cardContainer
    #Card(v-for="(card,i) in cards" :style="{'background-image': 'url(' + card.src + ')'}")
      h2.CardTitle {{card.title}}
      .mask(v-if="card.new_url"  @click="changePath(card.new_url)")
      router-link(v-if="card.url" :to='card.url')
        .mask(v-bind:class="card.url ? 'pcursor':'pdef'")
      .maskText(v-if="card.url || card.new_url" style="opacity:1;") {{card.text}}
      
    SlideShow(:jump-bar="jumpBar")

    .footContainer 
      p jerryjp3914@gmail.com
      p CHIEH-JUI HO , 2021
  //- SlideShow(:jump-bar="jumpBar")
</template>

<script>
import SlideShow from '@/components/SlideShow.vue'
export default {
  components: {
    SlideShow,
  },
  data() {
    return {
      cards: [
        {src: 'https://raw.githubusercontent.com/jerry914/mywebsite/master/img/ubicomp.png',title: '',text: 'Mimsvai：人機互動工作坊網站',url:'',new_url:'https://mimsvai.github.io/'},
        {src: 'https://raw.githubusercontent.com/jerry914/mywebsite/master/img/junyi.png',title: '',text: '小學生的神奇口袋',url: '',new_url:'https://www.junyiacademy.org/article/13e71653374f4531b3028b8c3a8bc242'},
        {src: 'https://raw.githubusercontent.com/jerry914/mywebsite/master/img/edu-1.PNG',title: '',text: 'Arduino 教學影片',url: '',new_url:'https://www.junyiacademy.org/article/54b28c9d3311425da528af0cedd3e5ad'},
        {src: 'https://raw.githubusercontent.com/jerry914/mywebsite/master/img/edu-3.jpg',title: '',text: 'Raspberry Foundation - Translate Volunteer',url:''},
        {src: 'https://raw.githubusercontent.com/jerry914/mywebsite/master/img/web-1.png',title: '',text: '美感教育平台子計畫網站建置，負責前端網頁設計。',url:''},
        {src: 'https://github.com/jerry914/mywebsite/blob/master/img/%231.gif?raw=true',title: '',text: '程式織花系列',url: '/creator'},
        {src: 'https://github.com/jerry914/mywebsite/blob/master/img/%234.gif?raw=true',title: '',text: ''},
        {src: 'https://drive.google.com/uc?export=view&id=1iuGmli0davOC1kt9QIKnmYKN7yczT2W5',title: '',text: 'Chicken Attack',url: "/chicken"},
        {src: 'https://drive.google.com/uc?export=view&id=1aZVbtZZ3KovhsDQboloh3c3I3oR0d37W',title: '',text: 'Ardiuino！',url: '/mg'},
        {src: 'https://drive.google.com/uc?export=view&id=1WO1DtTjk5aWbfWmYAAfS05k3On-puVKN',title: '',text: '我的知心好友',url:'/myFriend'},
        {src: 'https://drive.google.com/uc?export=view&id=1a7A-kPphw3uIofdz2eYBXRBV_jo2qIS1',title: '',text: '印象清華-躍動彈珠',url:'/marble'},
        {src: 'https://drive.google.com/uc?export=view&id=1W_BoW9rPKLhw-KZn6e6Yhw2iOoBg-S5D',title: '',text: '印象清華-花語清華',url: '/lightArt'},
        {src: 'https://github.com/jerry914/mywebsite/blob/master/img/%232.png?raw=true',title: '',text: 'Little Min\'s Magic Clock',url: '/magicClock'},
        {src: 'https://raw.githubusercontent.com/jerry914/mywebsite/master/img/web-4.jpg',title: '',text: '週期表踩地雷',url: "/chesweeper"},
      ],
      jumpBar: [
        {title:'Entry',link:'https://youtu.be/tYBtRFNiCSU?t=0',media:{info:{src:'https://raw.githubusercontent.com/jerry914/mywebsite/master/img/av (1).jpg'}}},
        {title:'Eager',link:'https://youtu.be/tYBtRFNiCSU?t=100',media:{info:{src:'https://raw.githubusercontent.com/jerry914/mywebsite/master/img/av (2).jpg'}}},
        {title:'Explosion',link:'https://youtu.be/tYBtRFNiCSU?t=125',media:{info:{src:'https://raw.githubusercontent.com/jerry914/mywebsite/master/img/av (3).jpg'}}},
        {title:'Error',link:'https://youtu.be/tYBtRFNiCSU?t=140',media:{info:{src:'https://raw.githubusercontent.com/jerry914/mywebsite/master/img/av (4).jpg'}}},
        // {title:'Title4',sub_title:'Subtitle4',media:{info:{src:'https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.0-9/82647294_627388644469593_5713713998822637568_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_oc=AQnT0_WsMovu5Htr8WWsTTPuykKUgtfIBPdkSTBEwxvl7hS9yP4HH2j3AciklSpc1tb-hOL6JsgRJA35dZRgQGzM&_nc_ht=scontent.fkhh1-1.fna&oh=59662ff828c4754458937c71c10f5c5b&oe=5EB4AB36'}}}
      ]
    }
  },
  methods: {
    changePath(url){
      window.open(url);
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/style/commom.sass"

  
.title
  margin: 30px
  margin-top: 0
  height: 5vh
  line-height: 5vh


.iconLink
  img
    width: 25px
    height: auto
    -webkit-filter: grayscale(1)
    filter: grayscale(1)
    transition-duration: 0.4s
    &:hover
      -webkit-filter: grayscale(0)
      filter: grayscale(0)
      // width: 51px
@media only screen and (min-width: 960px)
  .iconLinkContainer
    position: absolute
    top: 0px
    right: 30px
    display: flex
    flex-wrap: wrap
  .title
    text-align: left
  
@media only screen and (max-width: 960px)
  .iconLinkContainer
    top: 0px
    right: 30px
    display: flex
    flex-wrap: wrap
    justify-content: center
  .title
    margin: auto

.footContainer
  position: relative
  background-color: #1E4059
  width: 100vw
  height: 100px
  text-align: center
  color: white
  padding-top: 10px

.cardContainer
  position: absolute
  // left: -20px
  right: 0px
  display: flex
  flex-wrap: wrap
  justify-content: center

#Card
  text-decoration: none
  background-color: $c-text
  background-size: cover
  background-position: center

  &:hover
    .mask
      opacity: 0.6
      top: 0
      cursor: pointer
    .maskText
      background-color: #F3AA29aa
      padding: 10px
      position: relative
      bottom: 120px
      left: 10px
      text-align: left
      width: 70%
      text-decoration: none !important
.maskText
  color: #fff
  font-size: 24px
  font-weight: 100
.mask
  position: relative
  height: 100%
  width: 100%
  opacity: 0
  background-color: $c-text
  transition-duration: 0.6s

.pcursor
  cursor: pointer
@media only screen and (min-width: 1081px)
  #Card
    width: calc( 100vw / 4 )
    height: calc( 100vw / 4 )

@media only screen and (min-width: 960px) and (max-width: 1080px)
  #Card
    width: calc( 100vw / 2 )
    height: calc( 100vw / 2 )

@media only screen and (max-width: 960px)
  #Card
    width: calc( 100vw / 1 )
    height: 300px

.CardTitle
  position: relative
  top: calc( 50% - 20px )
  color: #eef
  font-size: 40px
  margin: 0
  word-wrap: break-word
  padding-left: 25px
  padding-right: 25px
  height: 0

</style>