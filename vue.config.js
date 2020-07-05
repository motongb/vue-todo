module.exports = {
    devServer: {
        port: 8080, //本地运行端口
        host: '0.0.0.0', //本地运行的ip
        proxy: {
            '/api': { //所有带有/api的请求都将被代理
                target: 'http://localhost:8000', //后台的ip端口
                pathRewrite: {'^/api': ''},
                changeOrigin: true
            },
        }
    },
};
