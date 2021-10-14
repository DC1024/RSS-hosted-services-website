module.exports = {
  lang: 'zh-CN',
  title: 'RSS托管服务',
  description: 'Free try and cheap',
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
      // 导航栏
    {
        text: 'Open Source',
        link: 'https://github.com/DC1024/RSS-hosted-services-website',
    },
    {
        text: 'DCCHEN',
        link: 'http://blog.dcchen.top/',
    },
    ],
  },
}
