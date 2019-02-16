import Landing from './scenes/Landing'
import Task from './scenes/Task'
let routes = [
  { path: '/tasks',     component: Task },
  { path: '/',          component: Landing, exact: true }
]
export default routes