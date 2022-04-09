import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'D3js学习记录',
  mode: 'site',
  base: '/d3-learning-record/',
  publicPath:
    process.env.NODE_ENV === 'production' ? '/d3-learning-record/' : '/',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/1467602180/d3-learning-record',
    },
  ],
  // more config: https://d.umijs.org/config
});
