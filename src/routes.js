import Root from './page/Root.vue'
import Add from './page/Add.vue'
import Items from './page/Items.vue'
import EditorView from './components/EditorView'

export default {
  mode: 'history',
  routes: [
    {
      path: '/', component: Root, name: 'root'
    },
    {
      path: '/add', component: Add, name: 'add'
    },
    {
      path: '/items',
      component: Items,
      name: 'items',
      children: [
        {
          path: ':id', component: EditorView, name: 'edit'
        }
      ]
    }
  ]
}
