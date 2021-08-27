import { toLogin, validate } from '@/api/user';
import * as Types from '@/store/action-types';
import permissionList from '@/router/permission'
import router from '@/router'

function filterRouter(permissionList, authList) {
    return []
}

const actions = {
    [Types.SET_LOGIN]({ commit, dispatch }, payload) {
        let userInfo = await toLogin(payload)
        // commit(Types.SET_LOGIN, userInfo);
        dispatch(Types.SET_LOGIN, { userInfo, hasPermission: true })
    },
    [Types.SET_USER]({ commit }, { userInfo, hasPermission }) {
        commit(Types.SET_USER, userInfo)
        commit(Types.SET_PERMISSION, hasPermission)
    },
    async [Types.VALIDATE]({ commit, dispatch }, payload) {
        if (!localStorage.getItem('token')) {
            return false
        }
        try {
            let userInfo = await validate(token)
            dispatch(Types.SET_USER, userInfo);
            dispatch(Types.SET_PERMISSION, true);
            return true
        } catch {
            dispatch(Types.SET_USER, {});
            dispatch(Types.SET_PERMISSION, false);
            return false
        }
    },
    async [Types.ADD_ROUTE]({ commit, dispatch, state }, payload) {
        let authList = state.authList
        let routes = filterRouter(permissionList, authList)
        let route = router.options.routes.find(item => item.path == '/profile')
        // 添加子路由
        route.children = routes
        // 再次添加路由
        router.addRoutes([route])

        commit(Types.SET_MENU_PERMISSION, true)
    }
};
export default actions;
