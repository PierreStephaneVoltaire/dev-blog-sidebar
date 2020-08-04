import Sidebar from '../components/Sidebar.vue'
import Groupbar from '../components/groupbar.vue'

const routes: Array<any> = [
  {
    path: '/',
    component: Sidebar
  },
  {
    path: '/post',
    component: Groupbar

  }
]

export default routes
