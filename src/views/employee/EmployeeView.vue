<template>
  <div class="main" id="employee">
    <NavBar />
    <div class="edit-employee-section">
      <form>
        <label for="dataInicio">Id:</label>
        <input
          id="dataInicio"
          type="text"
          v-model="employee.id"
          :disabled="!editing"
          readonly
        />

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

        <button
          class="auth"
          v-if="!editing"
          type="button"
          @click="startEditing"
        >
          Clique para ter a permissão de edição do funcionário
        </button>

        <button
          v-if="editing"
          type="button"
          @click="saveEmployee"
          :disabled="!isFormValid"
          class="save"
        >
          Salvar
        </button>
      </form>
      <nav>
        <a href="/adm" type="button" class="return-button"> voltar </a>
      </nav>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import "./style.css";

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
      const confirmation = confirm(
        "Deseja mesmo alterar os dados desse funcionário?"
      );
      if (confirmation) {
        const updatedEmployee = JSON.parse(
          localStorage.getItem("edit-employe")
        );
        updatedEmployee.nome = this.employee.nome;
        updatedEmployee.sobrenome = this.employee.sobrenome;
        updatedEmployee.cargo = this.employee.cargo;
        updatedEmployee.dataInicio = this.employee.dataInicio;
        updatedEmployee.criador.nome = this.employee.criador.nome;
        updatedEmployee.ativo = this.employee.ativo;

        const employesData = JSON.parse(localStorage.getItem("employes")) || [];
        const index = employesData.findIndex(
          (emp) => emp.id === updatedEmployee.id
        );
        if (index !== -1) {
          employesData[index] = updatedEmployee;
          localStorage.setItem("employes", JSON.stringify(employesData));
          alert("Dados do funcionário atualizados");
        }

        this.editing = false;
      }
    },
  },
};
</script>

<style></style>
