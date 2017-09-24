import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'

import newUser from './views/auditing/newUser.vue'
import newUserSecond from './views/auditing/newUserSecond.vue'
import schedule from './views/auditing/schedule.vue'
import Table from './views/overdue/Table.vue'

import overDueUser from './views/overdue/overDueUser.vue'
import totalData from './views/overdue/totalData.vue'

import employeeMain from './views/employee/employeeMain.vue'

import financingMain from './views/financing/financingMain.vue'

import Form from './views/auditing/Form.vue'
import Page4 from './views/dun/Page4.vue'
import Page5 from './views/dun/Page5.vue'
import Page6 from './views/risk/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '审核板块',
        redirect: '/newUser',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/newUser', component: newUser, name: '新增客户数据分析（一）'},
            { path: '/newUser-2', component: newUserSecond, name: '新增客户数据分析（二）'},
            { path: '/schedule', component: schedule, name: '客户审批进度统计' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '催收板块',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/overdue', component: totalData, name: '客户逾期数据分析' },
            { path: '/overdue-actual', component: overDueUser, name: '逾期客户数据实时监控' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '风控板块',
        iconCls: 'fa fa-address-card',
        hidden: true,
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '财务板块',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/financing', component: financingMain, name: '财务报表' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '内部人员管理',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/employee', component: employeeMain, name: '在线人员管理' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;