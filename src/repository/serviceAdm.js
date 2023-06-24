import uuidGenerator from '../utils/uuidGenerator';

const saveUserAdm = (payload) => {

  localStorage.clear();

  const adm = JSON.stringify(
    {
      id: uuidGenerator(),
      name: payload.name,
      password: payload.password,
    }
  );

  localStorage.setItem('userAdm', adm)

  const admValues = JSON.parse(localStorage.getItem('userAdm'));

  console.log(admValues);

  return admValues;
}

export default saveUserAdm;