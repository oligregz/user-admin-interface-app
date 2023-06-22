import * as types from './mutation-types';
import saveUserAdm from '../repository/serviceAdm';

export const ActionSetUserAdm = ({ commit }, payload) => {
  commit(types.SET_USER_ADM, payload);
  saveUserAdm(payload);
};

export default {
  ActionSetUserAdm
};