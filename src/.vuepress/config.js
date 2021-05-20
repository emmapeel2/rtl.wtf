const { description } = require('../../package')

module.exports = {
  theme: process.env.SITE_DIR === 'ltr' ? '' : 'default-rtl',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'RTL:WTF',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'}]
  ],

  // globalLayout: '/.viepress/theme/layouts/GlobalLayout.vue',
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'RTL Explained',
        link: '/explained/',
      },
      {
        text: 'Contact',
        link: '/contact/'
      },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    sidebar: {
      '/explained/': [
        {
          title: 'RTL Explained',
          collapsable: false,
          children: [
            '',
            'bidiintro',
            'rtlhistory'
          ]
        }
      ],
      // fallback
      '/': [
        // '',        /* / */
        // 'contact', /* /contact.html */
        // 'about'    /* /about.html */
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': 'images'
      }
    }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'social-share'
  ]
}
