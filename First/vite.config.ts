import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 实现跨服务端访问
    proxy: {
      '/E-MUSEUM': {
        target: "http://1.15.222.76:8233/E-MUSEUM",
        ws: true,
        changeOrigin: true,
        rewrite: api => api.replace(/^\/E-MUSEUM/, ''),
      },
      '/juhe': {
        target: "http://apis.juhe.cn/",
        changeOrigin: true,
        //非https请求
        secure: false,
        rewrite: myApi => myApi.replace(/^\/juhe/, '')
      },
      'wsUrl': {
        target: "http://1.15.222.76:9229",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/~\/wsUrl/, ""),
      }
    }
  },
})