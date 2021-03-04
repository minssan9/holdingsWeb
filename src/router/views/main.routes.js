import Home from "@/views/home";
import ItemView from '@/views/item/itemView'


export default[
  {
    path: '/',
    component: Home
  },
  // {
  //   path: '/vuejs_about',
  //   component: VuejsAbout
  // },
  {
    path: '/item',
    component: ItemView,
  }
]
