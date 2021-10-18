module.exports = {
  lang: 'zh-CN',
  title: 'RSS托管服务',
  description: 'Free try and cheap',
  base: '/RSS-hosted-services-website/'
  head: [['link', { rel: 'icon', href: 'https://git.tt-rss.org/repo-avatars/3-9e1f83d2fac71ea097eeaf1776137cde' }]],

  themeConfig: {
    logo: 'https://git.tt-rss.org/repo-avatars/3-9e1f83d2fac71ea097eeaf1776137cde',
    sidebar: [
      // 侧栏
      {
        text: '什么是RSS',
        link: '/guide/',
      },
      // 字符串 - 页面文件路径
      '/guide/getuse.md',
      '/guide/deployment.md',
    ],
    navbar: [
      // 单个导航栏
    {
        text: 'VuePress',
        link: 'https://v2.vuepress.vuejs.org/zh/',
    },
    {
        text: 'Github',
        link: 'https://github.com/DC1024/RSS-hosted-services-website',
    },
    {
        text: 'DCCHEN',
        link: 'http://blog.dcchen.top/',
    },
       // 单个导航组
    {
        text: '语言 / Language',
        children: ['../', '/en/'],
    },
    ],
  },
}
