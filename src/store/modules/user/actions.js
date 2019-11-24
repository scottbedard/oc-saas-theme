import { logout } from '@/app/repositories/user';

//
// actions
//
export default {
    logout({ commit }) {
        return logout().then(() => {
            // success
            commit('setUser', null);
        });
    },
};
