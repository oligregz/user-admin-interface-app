<template>
  <div class="main" id="administration">
    <NavBar />
    <div class="form-section">
      <form @submit.prevent="saveEmployee">
        <label v-for="(value, key) in employee" :key="key">
          {{ key }}:
          <input
            v-if="
              key !== 'ativo' &&
              key !== 'criador' &&
              key !== 'id' &&
              key !== 'dataInicio'
            "
            type="text"
            v-model="employee[key]"
          />
          <select v-else-if="key === 'ativo'" v-model="employee[key]">
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
          <input
            v-else-if="key === 'dataInicio'"
            type="text"
            :value="employee[key]"
            readonly
          />
          <input
            v-else-if="key === 'id'"
            type="text"
            v-model="employee[key]"
            readonly
          />
          <input v-else type="text" :value="userAdm.name" disabled />
        </label>
        <button type="submit">Salvar</button>
      </form>
      <nav>
        <a href="/adm" type="button" class="return-button">
          voltar
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import myuuid from "../../utils/uuidGenerator";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      employee: {
        ativo: "false",
        cargo: "",
        criador: {
          nome: "",
          id: "",
        },
        id: "",
        nome: "",
        sobrenome: "",
        dataInicio: "",
      },
    };
  },
  created() {
    this.fetchUserAdm();
    this.generateId();
    this.setCurrentDate();
  },
  methods: {
    fetchUserAdm() {
      this.userAdm = JSON.parse(localStorage.getItem("userAdm")) || {};
    },
    generateId() {
      this.employee.id = myuuid();
    },
    setCurrentDate() {
      const currentDate = new Date().toISOString().split("T")[0];
      this.employee.dataInicio = currentDate;
    },
    saveEmployee() {
      this.employee.criador = { id: this.userAdm.id, nome: this.userAdm.name };

      const employesData = JSON.parse(localStorage.getItem("employes")) || [];
      employesData.push(this.employee);
      localStorage.setItem("employes", JSON.stringify(employesData));
      
      this.employee = {
        ativo: "false",
        cargo: "",
        criador: {
          nome: "",
          id: "",
        },
        id: "",
        nome: "",
        sobrenome: "",
        dataInicio: "",
      };
      this.generateId();
      this.setCurrentDate();
      alert("Funcionário salvo com sucesso!");
    },
  },
};
</script>

<style scoped>
.form-section {
  margin-top: 20px;
}

form {
  display: flex;
  flex-direction: column;
}
input {
  color: black;
}
select,
option {
  color: black;
}
</style>
