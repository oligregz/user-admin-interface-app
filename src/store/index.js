import { createApp } from 'vue';
import { createStore } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';

const app = createApp({});
const store = createStore({
  state,
  mutations,
  actions: actions,
  namespaced: true,
});

app.use(store);

export default store;
