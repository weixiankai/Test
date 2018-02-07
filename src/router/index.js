import Vue from 'vue'
import Router from 'vue-router'

import FormA from '../components/formA'
import FormB from '../components/formB'
import TableA from '../components/tableA'
import TableB from '../components/tableB'
import OtherA from '../components/otherA'
import OtherB from '../components/otherB'
import ErrorA from '../components/errorA'
import ErrorB from '../components/errorB'
import Home from '../components/home'

Vue.use(Router)

export default new Router({
  routes: [
   	{path: '/home', name: 'Home',component: Home},
    {path: '/formA', name: 'FormA',component: FormA},
    {path: '/formB', name: 'FormB',component: FormB},
    {path: '/tableA', name: 'TableA',component: TableA},
    {path: '/tableB', name: 'TableB',component: TableB},
    {path: '/otherA', name: 'OtherA',component: OtherA},
    {path: '/otherB', name: 'OtherB',component: OtherB},
    {path: '/errorA', name: 'ErrorA',component: ErrorA},
    {path: '/errorB', name: 'ErrorB',component: ErrorB}
  ]
})
