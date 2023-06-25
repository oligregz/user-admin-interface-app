import uuidGenerator from '../utils/uuidGenerator';

const registerUserAdm = (payload) => {
  localStorage.removeItem('userAdm');

  const adm = JSON.stringify(
    {
      id: uuidGenerator(),
      name: payload.name,
      email: payload.email,
      password: payload.password,
    }
  );

  localStorage.setItem('userAdm', adm)
  const admValues = JSON.parse(localStorage.getItem('userAdm'));
  return admValues;
}

export default registerUserAdm;
