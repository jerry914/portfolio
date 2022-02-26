import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Python from "../views/Python/Python.vue";
import Iot from "../views/Iot.vue";
import Web from "../views/Web.vue";
import Edu from "../views/Edu.vue";
import MG from "../views/MG.vue";
import ListView from "../views/Python/ListView.vue";
import Article from "../views/Python/Article.vue";
import introPage from "../views/Pages/introPage.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children:[
      {
        path: '/:name',
        component: introPage
      },
    ]
  },
  {
    path: "/article",
    name: "Article",
    component: Article
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/python",
    name: "Python",
    component: Python,
    children: [
      {path: ':cate',component: ListView},
      {path: 'post/:postid',component: Article}
    ]
  },
  {
    path: "/iot",
    name: "Iot",
    component: Iot
  },
  {
    path: "/web",
    name: "Web",
    component: Web
  },
  {
    path: "/edu",
    name: "Edu",
    component: Edu
  },
  {
    path: "/mg",
    name: "MG",
    component: MG
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
