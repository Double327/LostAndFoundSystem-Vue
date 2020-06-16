import request from "@/utils/request";

export function listUser(page) {
    return request({
        url: '/user/list/' + page,
        method: 'get',
    })
}