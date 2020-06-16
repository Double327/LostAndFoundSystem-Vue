module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    outputDir: 'dist',
    productionSourceMap: false,
    devServer: {
        host: '0.0.0.0',
        port: 80,
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            [process.env.VUE_APP_BASE_API]: {
                target: `http://localhost:8888`,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        },
        disableHostCheck: true
    },
}