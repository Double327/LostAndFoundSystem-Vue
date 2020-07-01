import request from "@/utils/request";

export function listUser(page) {
    return request({
        url: '/user/list/' + page,
        method: 'get',
    })
}

export function register(username, password, email, uuid, code) {
    const data = {
        username,
        password,
        email,
        uuid,
        code
    }
    return request({
        url: '/user/add',
        method: 'post',
        params: data
    });
}