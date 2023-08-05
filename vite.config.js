import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import {
  createStyleImportPlugin,
  ElementPlusResolve
} from 'vite-plugin-style-import'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({resolvers: [ElementPlusResolver()]}),
    Components({resolvers: [ElementPlusResolver()]}),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/theme-chalk/${name}.css`
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {'@': resolve(__dirname, './src')}
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8008',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
