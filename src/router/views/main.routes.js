// import Home from "@/views/home";
import menu from "@/views/menu";
import ItemView from '@/views/item/itemView'


export default [
  {
    path: '/',
    component: menu,
    children: [{
      path: '/item',
      component: ItemView,
    }]

  },
  // {
  //   path: '/vuejs_about',
  //   component: VuejsAbout
  // },

]
