<template>
  <div class="main" id="employee">
    <NavBar />
    <div class="edit-employee-section">
      <form>
        <label for="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          v-model="employee.nome"
          :disabled="!editing"
        />

        <label for="sobrenome">Sobrenome:</label>
        <input
          id="sobrenome"
          type="text"
          v-model="employee.sobrenome"
          :disabled="!editing"
        />

        <label for="cargo">Cargo:</label>
        <input
          id="cargo"
          type="text"
          v-model="employee.cargo"
          :disabled="!editing"
        />

        <label for="dataInicio">Data de Início:</label>
        <input
          id="dataInicio"
          type="text"
          v-model="employee.dataInicio"
          :disabled="!editing"
        />

        <label for="nomeCriador">Nome do Criador:</label>
        <input
          id="nomeCriador"
          type="text"
          v-model="employee.criador.nome"
          :disabled="!editing"
        />

        <label for="ativo">Ativo:</label>
        <select id="ativo" v-model="employee.ativo" :disabled="!editing">
          <option value="true">true</option>
          <option value="false">false</option>
        </select>

        <button v-if="!editing" type="button" @click="startEditing">
          Clique para ter a permissão de edição do funcionário
        </button>
        <button
          v-if="editing"
          type="button"
          @click="saveEmployee"
          :disabled="!isFormValid"
        >
          Salvar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      employee: {},
      editing: false,
    };
  },
  created() {
    this.fetchEmployeeData();
  },
  computed: {
    isFormValid() {
      return (
        this.employee.nome &&
        this.employee.sobrenome &&
        this.employee.cargo &&
        this.employee.dataInicio &&
        this.employee.criador.nome &&
        this.employee.ativo
      );
    },
  },
  methods: {
    fetchEmployeeData() {
      const employeeData = JSON.parse(localStorage.getItem("edit-employe"));
      this.employee = employeeData;
    },
    startEditing() {
      this.editing = true;
    },
    saveEmployee() {
      localStorage.removeItem("edit-employe");
      localStorage.setItem("edit-employe", JSON.stringify(this.employee));
      this.editing = false;
    },
  },
};
</script>

<style scoped>
.edit-employee-section {
  margin-top: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 5px;
}

input {
  margin-bottom: 10px;
  color: black;
}

option {
  color: black;
}

button {
  margin-top: 10px;
}
</style>
