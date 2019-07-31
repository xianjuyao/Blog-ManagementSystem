import Vue from 'vue'
import Router from 'vue-router'
import  CreateArticle from "./views/CreateArticle"
import  ListArticle from "./views/ListArticle"
import  UpdateArticle from "./views/UpdateArticle"
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:"/articles/index"
    },
    {
      path: '/articles/create',
      name: 'create-article',
      component:CreateArticle
    },
    {
      path: '/articles/index',
      name: 'list-article',
      component:ListArticle
    }
    ,{
      path: '/articles/update/:id',
      name: 'update-article',
      component:UpdateArticle
    }
  ]
})
