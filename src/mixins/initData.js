export default {
    data() {
        return {
            total: 0,
            list: [],
            queryParams: {
                pageNum: 1,
                pageSize: 6,
                orderByColumn: "create_time",
                isAsc: 'desc'
            }
        }
    },
    methods: {
        async init() {

        }
    }
}