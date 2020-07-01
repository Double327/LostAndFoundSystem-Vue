import request from "@/utils/request"

export function addLafInfo(title, type, lostTime, lostPosition, summary) {
    const  data = {
        title,
        type,
        lostTime: lostTime,
        lostPosition,
        summary
    };
    return request({
        url: '/laf/add',
        method: 'post',
        params: data
    });
}

export function findLafInfoList(query) {
    return request({
        url: '/laf/list',
        type: 'get',
        params: query
    });
}