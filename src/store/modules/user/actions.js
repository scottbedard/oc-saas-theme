import { login, logout } from '@/app/repositories/user';

//
// actions
//
export default {
    authenticate({ commit }, credentials) {
        return login(credentials).then((response) => {
            // success
            commit('setUser', response.data);
        });
    },
    logout({ commit }) {
        return logout().then(() => {
            // success
            commit('setUser', null);
        });
    },
};
