import { defineConfig } from 'vitepress'

import { spoiler } from "@mdit/plugin-spoiler";
import heimu from './markdown-it-plugins/heimu.mjs'
import grayItalic from './markdown-it-plugins/gray-italic.mjs'

import aboutSidebar from './sidebar/about.mts'
import minecraftSidebar from './sidebar/minecraft.mts'
import touhouSidebar from './sidebar/touhou.mts'
import softwareSidebar from './sidebar/software.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "巫师之碗",
  description: "碗里巫云(WizardsBowl)的个人博客",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/logo.png' }]
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo.svg',

    nav: [
      { text: '首页', link: '/' },

      {
        text: '关于',
        activeMatch: '^/about/',
        items: [
          { text: '网站简介', link: '/about/' }
        ]
      },

      {
        text: 'MC',
        activeMatch: '^/minecraft/',
        items: [
          { text: '板块简介', link: '/minecraft/' },
          { text: '工具软件', link: '/minecraft/software/mspm-old' }
        ]
      },

      {
        text: '东方',
        activeMatch: '^/touhou/',
        items: [
          { text: '板块简介', link: '/touhou/' },
          { text: '官作运行问题', link: '/touhou/problem/eosd-problem' }
        ]
      },

      {
        text: '软件',
        activeMatch: '^/software/',
        items: [
          { text: '板块简介', link: '/software/' },
          { text: '实用工具', link: '/software/utility/alpha-pixel-image' },
          { text: 'FUN', link: '/software/fun/boids-test' }
        ]
      }
    ],

    sidebar: {
      '/about/': aboutSidebar,
      '/minecraft/': minecraftSidebar,
      '/touhou/': touhouSidebar,
      '/software/': softwareSidebar
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WizardsBowl/WizardsBowlBolg' }
    ],

    footer: {
      message: 'Released under the <a href="https://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0 License</a>.',
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
      text: '最后编辑于'
    },

    notFound: {
      title: '少女神隐中',
      quote: '你要找的页面走丢了',
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
  sitemap: {
    hostname: 'https://www.wizardsbowl.com'
  },
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    },
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
      md.use(spoiler, {
        tag: 'span',
        attrs: [["class", "heimu"], ['title', '你知道的太多了'], ["tabindex", "-1"]]
      });
    }
  }
})
