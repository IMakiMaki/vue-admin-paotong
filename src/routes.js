import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'

import newUser from './views/auditing/newUser.vue'
import newUserSecond from './views/auditing/newUserSecond.vue'
import schedule from './views/auditing/schedule.vue'
import Table from './views/auditing/Table.vue'

import totalData from './views/overdue/totalData.vue'

import Form from './views/auditing/Form.vue'
import user from './views/auditing/user.vue'
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
            { path: '/page5', component: Page5, name: '数据分层明细' },
            { path: '/page5', component: Page5, name: '逾期客户数据监控' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '风控板块',
        iconCls: 'fa fa-address-card',
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
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '内部人员管理',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;