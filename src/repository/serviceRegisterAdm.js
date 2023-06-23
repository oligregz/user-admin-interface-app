import uuidGenerator from '../utils/uuidGenerator';

const registerUserAdm = (payload) => {
  console.log("chegou");
  localStorage.clear();

  const adm = JSON.stringify(
    {
      id: uuidGenerator,
      name: payload.name,
      email: payload.email,
      password: payload.password,
    }
  );

  localStorage.setItem('userAdm', adm)

  const admValues = JSON.parse(localStorage.getItem('userAdm'));

  console.log(admValues);

  return admValues;
}

export default registerUserAdm;