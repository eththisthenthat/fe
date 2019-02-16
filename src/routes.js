import Landing from './scenes/Landing'
import Task from './scenes/Task'
import Create from './scenes/Create'
let routes = [
  { path: '/tasks',     component: Task },
  { path: '/create',     component: Create },
  { path: '/',          component: Landing, exact: true }
]
export default routes