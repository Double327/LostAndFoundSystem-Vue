import axios from 'axios'
import {MessageBox, Notification} from 'element-ui'
import store from '@/store'
import router from '@/router'
import {getToken} from "@/utils/auth";

// 默认请求方式
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_API,
    // 超时
    timeout: 120000
});
// request拦截器
service.interceptors.request.use(
    config => {
        // 在请求头上添加token信息
        config.headers['Authorization'] = '' + getToken();
        return config
    },
    error => {
        console.log(error);
        Promise.reject(error)
    }
);

// 响应拦截器
service.interceptors.response.use(response => {
        const code = response.data.code;
        if (code < 200 || code > 300) {
            return Promise.reject('error')
        } else {
            return response.data
        }
    }, error => {
        let code = 0;
        try {
            code = error.response.data.code
        } catch (e) {
            if (error.toString().indexOf('Error:  timeout') !== -1) {
                Notification.error({
                    title: '网络请求超时',
                    duration: 2500
                });
                return Promise.reject(error)
            }
            if (error.toString().indexOf('Error: Network Error') !== -1) {
                Notification.error({
                    title: '网络请求错误',
                    duration: 2500
                });
                return Promise.reject(error)
            }
        }
        if (code === 401) {
            MessageBox.confirm(
                '登录状态已过期，您可以继续留在该页面，或者重新登录',
                '系统提示',
                {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }
            ).then(() => {
                store.dispatch('LogOut').then(() => {
                    location.reload() // 为了重新实例化vue-router对象 避免bug
                })
            })
        } else if (code === 403) {
            router.push({path: '/401'})
        } else {
            const errorMsg = error.response.data.msg;
            if (errorMsg !== undefined) {
                Notification.error({
                    title: errorMsg,
                    duration: 30000
                })
            }
        }
        return Promise.reject(error)
    }
);

export default service
