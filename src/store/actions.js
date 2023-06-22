import * as types from './mutation-types';

export const ActionSetUserAdm = ({ commit }, payload) => {
  commit(types.SET_USER_ADM, payload);
  console.log(payload);
  // irei importar o repository com a função que seta
  // os dados do form do login no localStorage
  // saveUserAdm(payload)
};

export default {
  ActionSetUserAdm
};