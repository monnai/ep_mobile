module.exports = {
  // 不同环境配置
  env: {
    // 开发环境
    dev: {
      apihost: 'http://localhost:8080'
    },
    // 测试环境
    test: {
      apihost: 'http://localhost:8081'
    },
    // 生产环境
    prod: {
      apihost: 'http://localhost:9090'
    },
    // 公用资源配置
    common: {
      // 接口超时时间
      timeout: 5000,
      theme: 'red'
    }
  },
  globals: {
    $config: true
  }
}
// 其他配置文档：https://www.npmjs.com/package/vue-cli-plugin-app-config
