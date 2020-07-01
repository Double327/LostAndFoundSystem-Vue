import {login} from "@/api/login";
import {register} from "@/api/user";
import {setToken} from "@/utils/auth";

const user = {
    state: {
        token: '',
        name: '',
        avatar: '',
        roles: [],
        permissions: []
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        },
        SET_PERMISSIONS: (state, permissions) => {
            state.permissions = permissions;
        }
    },
    actions: {
        Login({commit}, userInfo) {
            const username = userInfo.username;
            const password = userInfo.password;
            const code = userInfo.code;
            const uuid = userInfo.uuid;
            return new Promise((resolve, reject) => {
                login(username, password, code, uuid).then(res => {
                    setToken(res.token);
                    commit('SET_TOKEN', res.token);
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        },
        Register({commit}, userInfo) {
            console.log(userInfo)
            const username = userInfo.username;
            const password = userInfo.password;
            const email = userInfo.email;
            const uuid = userInfo.uuid;
            const code = userInfo.code;
            return new Promise((resolve, reject) => {
                register(username, password, email, uuid, code).then(res => {
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            });
        }
    }
}


export default user;