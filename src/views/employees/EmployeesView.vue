<template>
  <div class="main" id="employees">
    <NavBar />
    <div class="content">
      <ul>
        <div
          v-for="(employee, index) in employes"
          :key="employee.id"
          class="employee-section"
        >
          <li @click="saveEmployeeData(employee)" class="employee">
            <div class="input-wrapper">
              <label for="employeeId">ID do funcionário:</label>
              <input
                type="text"
                :value="`${employee.id}`"
                id="employeeId"
                readonly
              />
            </div>
            <div class="input-wrapper">
              <label for="employeeName">Nome Completo:</label>
              <input
                type="text"
                :value="`${employee.nome} ${employee.sobrenome}`"
                id="employeeName"
                readonly
              />
            </div>
            <div class="input-wrapper">
              <label for="employeePosition">Cargo:</label>
              <input
                type="text"
                :value="employee.cargo"
                id="employeePosition"
                readonly
              />
            </div>
            <div class="input-wrapper">
              <label for="employeeStartDate">Data de início:</label>
              <input
                type="text"
                :value="employee.dataInicio"
                id="employeeStartDate"
                readonly
              />
            </div>
            <div class="input-wrapper">
              <label for="employeeCreator">Contratante:</label>
              <input
                type="text"
                :value="employee.criador.nome"
                id="employeeCreator"
                readonly
              />
            </div>
            <div class="input-wrapper">
              <label for="employeeCreatorId">Id do contratante:</label>
              <input
                type="text"
                :value="employee.criador.id"
                id="employeeCreatorId"
                readonly
              />
            </div>
          </li>
          <button
            id="remove-employee"
            type="button"
            @click="removeEmployeeSection(index)"
          >
            Remover funcionário
          </button>
        </div>
      </ul>
    </div>
    <nav>
      <a href="/adm" type="button" class="return-button"> voltar </a>
    </nav>
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
      employes: [],
    };
  },
  created() {
    this.fetchEmployes();
  },
  methods: {
    fetchEmployes() {
      const employesData = JSON.parse(localStorage.getItem("employes")) || [];
      this.employes = employesData;
    },
    removeEmployeeSection(index) {
      this.employes.splice(index, 1);
      localStorage.setItem("employes", JSON.stringify(this.employes));
    },
    saveEmployeeData(selectedEmployee) {
      localStorage.removeItem("edit-employe");
      localStorage.setItem("edit-employe", JSON.stringify(selectedEmployee));
      let employee = localStorage.getItem("edit-employe");
      if (employee) {
        this.$router.push("/employee");
      }
    },
  },
};
</script>

<style></style>
