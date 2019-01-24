import Home from '../views/home/index/index.vue'

export const routerMap =  [
  {
    meta:{
      title:'首页'
    },
    path: '/',
    name: 'index',
    component: Home
  },
  {
    meta:{
      title: '管理人员',
    },
    path: '/peopleManage',
    name: 'peopleManage',
    component: Home,
    children: [
      {
        meta:{
          title: '人员管理',
        },
        path: 'peopleManagePage',
        name: 'peopleManagePage',
        component: () => import('../views/peopleManage/peopleManagePage/peopleManagePage')
      },
      {
        meta:{
          title: '客服管理',
        },
        path: 'customerServicePage',
        name: 'customerServicePage',
        component: () => import('../views/peopleManage/customerServicePage/customerServicePage')
      }
    ]
  },
  {
    title: '商品管理',
    path: '/goodsManage',
    name: 'goodsManage',
    component:  Home,
    children: [
      {
        title: '新增商品',
        path: 'addGoodsPage',
        name: 'addGoodsPage',
        component: () => import('../views/goodsManage/addGoodsPage/addGoodsPage')
      },
      {
        title: '登录',
        path: '/login',
        name: 'login',
        component: () => import('../views/user/login.vue')
      }
    ]
  },
];
export const routes = [
  {
    title: '登录',
    path: '/login',
    name: 'login',
    component: () => import('../views/user/login.vue')
  },
  {
    path: '*',
    component: () => import('../views/error_404.vue')
  }
]
