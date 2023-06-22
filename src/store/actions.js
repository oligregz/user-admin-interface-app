import * as types from './mutation-types';
import saveUserAdm from '../repository/index';

export const ActionSetUserAdm = ({ commit }, payload) => {
  commit(types.SET_USER_ADM, payload);
  saveUserAdm(payload);
};

export default {
  ActionSetUserAdm
};