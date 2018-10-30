export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Components',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Run Dashboard',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Rules Dashboard',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },


      ],
    },
  ],
};
