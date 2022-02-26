<template lang="pug">
.Pyhton
  .titleContainer
    h1.titleLight Python Note

  .cardContainer
    #Card(v-for="article in articleList")  
      .cardcontentContainer
        h2.CardTitle {{article.title}}
        h4.cardTag(v-for="tag in article.tags") |{{tag}}|
        p.cardText {{article.body.replace( /(<([^>]+)>)/ig, '')}}
        p.cardData(v-for="d in dateSplic(article.date)") {{d}}
  .bottomContainer

</template>

<script>
export default {
  data() {
    return {
      articleList: [
        {title: 'c8 c8 ',date: '2020_04_16',tags:['ddd','ccc'],body:'<div>c8c8skdjflwkdlvknc8c8cc8c8skdjflwkdlvknc8c8cc8c8skdjflwkdlvknc8c8cc8c8skdjflwkdlvknc8c8c</div>'}
      ]
    }
  },
  created(){
  },
  methods:{
    dateSplic(date){
      var data = date.split("_");
      for(var d=0;d< data.length;d++){
        if(d!=data.length-1)
          data[d]=data[d]+',';
      }
      return data;
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/style/commom.sass"
.Pyhton
  max-width: 1280px
  margin: auto
  border-radius: 13px
  border: 1px $c-secondary solid

.titleContainer
  background-color: $c-secondary
  padding: 20px
  margin-bottom: 10px
  border-radius: 13px 13px 0 0

.bottomContainer
  background-color: $c-secondary
  padding: 20px
  height: 50px
  margin-top: 10px
  border-radius: 0 0 13px 13px


.cardContainer
  display: flex
  flex-wrap: wrap
  justify-content: space-around

#Card
  width: 100%
  min-height: 250px
  border-radius: 3px
  margin: 10px
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3)
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3)
  color: $c-text
  text-decoration: none
.CardTitle
  text-align: left
  margin: 20px

.cardTag
  display: inline
  border-radius: 15px
  background-color: #fda
  padding: 10px
  margin: 10px
  color: #444
  word-wrap: break-word
  cursor: pointer

.cardText
  margin: 30px
  word-wrap: break-word
  line-height: 30px
  height: 90px
  overflow: hidden
  cursor: pointer
.cardData
  color: #777
  display: inline
  // float: right
</style>