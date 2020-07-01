import request from '@/utils/request'
/*import qs from 'qs';*/

export function login(username, password, code, uuid) {
    const data = {
        username,
        password,
        code,
        uuid
    };
    return request({
        url: '/login',
        method: 'post',
        params: data
    });
}


// 获取验证码
export function getCodeImg() {
    return request({
        url: '/captchaImage',
        method: 'get'
    });
}