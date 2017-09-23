import { auth } from '../firebase';

const actions = {
  AUTH_CHECK({ commit }) {
    auth.onAuthStateChanged((user) => {
      commit('SET_USER', user);
    });
  },

  LOGOUT() {
    auth.signOut();
  },
};

export default actions;
