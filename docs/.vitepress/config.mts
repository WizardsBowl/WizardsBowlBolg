import { defineConfig } from 'vitepress'

import heimu from './custom-md/heimu.mjs'
import grayItalic from './custom-md/gray-italic.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "巫师之碗",
  description: "WizardsBowl的个人博客",
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/icon.svg' }]],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo.svg',

    nav: [
      { text: '首页', link: '/' },

      {
        text: '关于',
        activeMatch: '/about/',
        items: [
          { text: '网站简介', link: '/about/index' }
        ]
      },

      {
        text: 'MC',
        activeMatch: '/minecraft/',
        items: [
          { text: '板块简介', link: '/minecraft/index' },
          { text: '音效包工具(旧)', link: '/minecraft/software/mspm-old' }
        ]
      },

      {
        text: '东方',
        activeMatch: '/touhou/',
        items: [
          { text: '板块简介', link: '/touhou/index' },
          { text: '官作运行问题', link: '/touhou/problem/eosd-problem' }
        ]
      }
    ],

    sidebar: {
      '/about/': [
        {
          text: '关于本站',
          items: [
            { text: '巫师之碗简介', link: '/about/index' }
          ]
        }
      ],

      '/minecraft/': [
        {
          text: '关于MC板块',
          items: [
            { text: 'MC板块简介', link: '/minecraft/index' }
          ]
        },
        {
          text: '工具软件',
          items: [
            { text: '旧版MC音效包制作工具', link: '/minecraft/software/mspm-old' }
          ]
        }
      ],

      '/touhou/': [
        {
          text: '关于东方板块',
          items: [
            { text: '东方板块简介', link: '/touhou/index' }
          ]
        },
        {
          text: '官作运行问题',
          items: [
            { text: '红魔乡运行问题', link: '/touhou/problem/eosd-problem' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WizardsBowl/WizardsBowlBolg' }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/WizardsBowl/WizardsBowlBolg/blob/main/LICENSE" target="_blank">MIT License</a>.',
      copyright: 'Copyright © 2026-present <a href="https://github.com/WizardsBowl" target="_blank">WizardsBowl</a>. All rights reserved.'
    },

    search:{
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '重置搜索',
            footer: {
              selectText: '选择',
              navigateText: '导航',
              closeText: '关闭'
            }
          }
        }
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    config: (md) => {
      md.use(heimu);
      md.use(grayItalic);
    }
  }
})
