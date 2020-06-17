import request from "@/utils/request"

export function addLafInfo(title, type, lostTime, lostPosition, summary) {
    const  data = {
        title,
        type,
        lostTime: new Date(lostTime),
        lostPosition,
        summary
    };
    return request({
        url: '/laf/add',
        method: 'post',
        data: JSON.stringify(data)
    });
}

export function findAllLafInfo() {
    return request({
        url: '/laf/list',
        type: 'get'
    });
}