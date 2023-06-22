const saveUserAdm = (payload) => {

  const adm = JSON.stringify(
    {
      email: payload.email,
      password: payload.password,
    }
  );

  localStorage.setItem('userAdm', adm)

  const admValues = JSON.parse(localStorage.getItem('userAdm'));

  console.log(admValues);

  return admValues;
}

export default saveUserAdm;