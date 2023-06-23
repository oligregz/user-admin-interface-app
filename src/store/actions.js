import * as types from './mutation-types';
import saveUserAdm from '../repository/serviceAdm';
import registerUserAdm from '../repository/serviceRegisterAdm';

export const ActionSetUserAdm = ({ commit }, payload) => {
  commit(types.SET_USER_ADM, payload);
  saveUserAdm(payload);
};

export const ActionSetRegisterUserAdm = ({ commit }, payload) => {
  commit(types.SET_REGISTER_USER_ADM, payload);
  registerUserAdm(payload);
};

export default {
  ActionSetUserAdm,
  ActionSetRegisterUserAdm,
};