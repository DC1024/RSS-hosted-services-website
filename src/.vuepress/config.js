module.exports = {
  lang: 'zh-CN',
  title: '托管服务',
  description: 'Free try and cheap',
  head: [['link', { rel: 'icon', href: 'https://notion-avatar.vercel.app/api/svg/eyJmYWNlIjoxLCJub3NlIjozLCJtb3V0aCI6OSwiZXllcyI6NywiZXllYnJvd3MiOjAsImdsYXNzZXMiOjEwLCJoYWlyIjo2LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjB9' }]],

  themeConfig: {
    logo: 'https://notion-avatar.vercel.app/api/svg/eyJmYWNlIjoxLCJub3NlIjozLCJtb3V0aCI6OSwiZXllcyI6NywiZXllYnJvd3MiOjAsImdsYXNzZXMiOjEwLCJoYWlyIjo2LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjB9',
    // sidebar: [
    // 全页面显示同一个侧栏
    // 字符串 - 页面文件路径
    //   '/rss/guide/',
    //   '/rss/guide/getuse.md',
    //  '/rss/guide/deployment.md',
    // ],
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/rss/': [
        {
          text: 'RSS',
          children: ['/rss/guide/README.md', '/rss/guide/getuse.md','/rss/guide/deployment.md'],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
      '/maintain/': [
        {
          text: '维护明细',
          children: ['/maintain/README.md'],
        },
      ],
    },
    
    navbar: [
      // 单个导航栏
    {
        text: 'DCCHEN',
        link: 'http://blog.dcchen.top/',
    },
    {
        text: 'Github',
        link: 'https://github.com/DC1024/RSS-hosted-services-website',
    },
       // 单个导航组
      {
        text: '语言 / Language',
        children: ['../', '/en/', '/klingon/'],
    },
    {
        text: '基于',
        children: 
            [
                    {
                        text: 'VuePress',
                        link: 'https://v2.vuepress.vuejs.org/zh/',
                    },
                    {
                        text: 'TinyTinyRSS',
                        link: 'https://tt-rss.org/',
                    },
                    {
                        text: 'ArchiSteamFarm',
                        link: 'https://github.com/JustArchiNET/ArchiSteamFarm/',
                    },
            ],
    },
    ],
  },
}
