import Index from "@/components/Index";
import Header from "@/components/Header";
import Notification from "@/components/content/Notification";
import LafInfoList from "@/components/content/LafInfoList";
import Login from "@/components/content/Login";
import Register from "@/components/content/Register";
import UserInfo from "@/components/content/UserInfo";
import ReleaseLafInfo from "@/components/content/ReleaseLafInfo";
import UserManagement from "@/components/content/UserManagement";

export default [
    {
        path: '/',
        component: Index,
        children: [
            {
                path: '/',
                components: {
                    header: Header,
                    content: Notification
                },
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/releaseLafInfo',
                components: {
                    header: Header,
                    content: ReleaseLafInfo
                },
                meta: {
                    title: '发布新信息'
                }
            },
            {
                path: '/lafInfoList',
                components: {
                    header: Header,
                    content: LafInfoList
                }
            },
            {
                path: '/login',
                components: {
                    header: Header,
                    content: Login
                },
                meta: {
                    title: '用户登录'
                }
            },
            {
                path: '/register',
                components: {
                    header: Header,
                    content: Register
                },
                meta: {
                    title: '用户注册'
                }
            },
            {
                path: '/userInfo',
                components: {
                    header: Header,
                    content: UserInfo
                },
                meta: {
                    title: '用户信息'
                }
            },
            {
                path: '/userList',
                components: {
                    header: Header,
                    content: UserManagement
                },
                meta: {
                    title: '用户管理'
                }
            }
        ]
    }
]