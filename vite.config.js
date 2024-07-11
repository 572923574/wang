import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// import scss from 'vite-plugin-scss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // scss({
    //   // 可以在这里配置SCSS的加载器选项
    // }),
  ],
})
