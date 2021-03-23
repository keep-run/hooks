import { defineConfig } from 'umi'
export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index.jsx' },
    { path: '/useBoolean', component: '@/pages/useBoolean/index.jsx' },
    { path: '/useInterval', component: '@/pages/useInterval/index.jsx' },
    { path: '/useLocalStorage', component: '@/pages/useLocalStorage/index.jsx' },
    { path: '/virtual/list', component: '@/pages/virtualList/index.jsx' },
  ],
})
