module.exports = {
  routes: [
    {
      key: 'dashboard',
      path: '/',
      title: 'Dashboard',
      children: false,
      icon: 'el-icon-menu'
    },
    {
      key: 'pages',
      title: 'Pages',
      icon: 'el-icon-document',
      children: [
        {
          key: 'login',
          path: '/login',
          title: 'Login'
        },
        {
          key: 'register',
          path: '/register',
          title: 'Register'
        }
      ]
    },
    {
      key: 'settings',
      path: '/settings',
      title: 'Settings',
      children: false,
      icon: 'el-icon-setting'
    }
  ]
}
