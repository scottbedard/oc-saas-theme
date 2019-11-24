/**
 * Set initial store data
 *
 * @return void
 */
export default function initialize(store, data) {
    // user
    if (data.user) {
        store.commit('user/setUser', data.user);
    }
}
