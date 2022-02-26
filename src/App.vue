<template lang="pug">
#app
  #nav
    router-link(v-for='(menu,i) in menuList' :key='i' :to='menu.url') {{menu.name}}
  transition(name="page" mode="out-in")
    router-view

</template>

<script>

export default {
  name: "App",
  components: {
    
  },
  data() {
    return{
      menuList: [
        {name:'Portfolio',url:'/'},
        // {name:'Python Note',url:'./python'},
        // {name:'About',url:'./about'},
        // {name:'Web',url:'./web'},
        // {name:'Education',url:'./edu'},
        // {name:'IOT',url:'./iot'},
        // {name:'Motion Graphy',url:'./mg'}
      ]
    }
  }
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC|Ubuntu+Mono&display=swap')
@import "@/style/commom.sass"
#app
  font-family: 'Ubuntu Mono', monospace,'Noto Sans TC', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $c-text


#nav 
  padding: 0px
  a
    font-weight: bold
    font-size: 1.2em
    color: $c-text
    margin: 10px
    line-height: 100px
    text-decoration: none
    &.router-link-exact-active
      color: $c-secondary


</style>
