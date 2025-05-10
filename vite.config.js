import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mockjs from 'mockjs';
import url from 'node:url';
// 编写一个vite插件 用于mock数据
const viteMockServer = () => {
  return {
    name: 'vite-mock-server',
    configureServer: (server) => {
      server.middlewares.use('/api/list', (req, res) => {
        // 处理请求
        console.log('请求路径：', req.url);
        // url.parse(req.originalUrl, true);  ture 返回的对象 不加true 返回字符串
        const parseUrl = url.parse(req.originalUrl, true).query;
        const data = mockjs.mock({
          'list|300': [
            {
              'id|+1': 1,
              name: parseUrl.keyWord,
              address: '@county(true)',
            },
          ],
        });
        //返回头 信息
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
      });
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteMockServer()],
  server: {
    port: 5388,
  },
  css: {
    // css module 配置
    modules: {
      // localsConvention 取值 为 camelCaseOnly 或 camelCase
      // camelCaseOnly 只允许驼峰命名
      // camelCase 允许驼峰命名和中划线命名
      // 例如：.my-class => myClass
      localsConvention: 'dashes',
      // 生成的类名格式
      // [name] 代表文件名
      // [local] 代表类名
      // [hash:base64:5] 代表哈希值，长度为5
      generateScopedName: '[name]__[local]--[hash:base64:8]',
    },
  },
});
