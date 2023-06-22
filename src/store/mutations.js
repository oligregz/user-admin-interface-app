import * as types from './mutation-types';

export default {
  [types.SET_USER_ADM] (state, payload) {
    state.userAdm = payload
  },
  [types.SET_EMPLOYEE] (state, payload) {
    state.employee = payload
  }
}