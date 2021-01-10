import { defineConfig } from 'umi'
export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/useBoolean', component: '@/pages/useBoolean/index' },
    { path: '/useInterval', component: '@/pages/useInterval/index' },
    { path: '/useLocalStorage', component: '@/pages/useLocalStorage/index' },
  ],
})
