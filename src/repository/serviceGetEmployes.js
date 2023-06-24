import uuidGenerator from '../utils/uuidGenerator';

const getEmployes = () => {
  
  const userAdm = JSON.parse(localStorage.getItem('userAdm'));
  
  const employee1 = {
    id: uuidGenerator(),
    nome: "Jonas",
    sobrenome: "Bilharino Santos",
    cargo: "desenvolvedor frontend",
    dataInicio: new Date().toISOString(),
    ativo: true,
    criador: {
      id: userAdm.id,
      nome: userAdm.name
    }
  }

  const employee2 = {
    id: uuidGenerator(),
    nome: "Laura",
    sobrenome: "Bittencourt Freitz",
    cargo: "desenvolvedor frontend",
    dataInicio: new Date().toISOString(),
    ativo: true,
    criador: {
      id: userAdm.id,
      nome: userAdm.name
    }
  }
  const employesArr = [employee1, employee2];
  localStorage.setItem('employes', JSON.stringify(employesArr));
  const employes = JSON.parse(localStorage.getItem('employes'))
  return employes;
}

export default getEmployes;