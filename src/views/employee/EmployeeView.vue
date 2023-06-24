<template>
  <div class="main" id="employee">
    <NavBar />
    <ul>
      <div
        v-for="(employee, index) in employes"
        :key="employee.id"
        class="employee-section"
        @click="saveEmployeeData(employee)"
      >
        <li class="employee">
          <p>{{ `Id: ${employee.id}` }}</p>
          <p>{{ `Nome Completo: ${employee.nome} ${employee.sobrenome}` }}</p>
          <p>{{ `Cargo: ${employee.cargo}` }}</p>
          <p>{{ `Data de início: ${employee.dataInicio}` }}</p>
          <p>{{ `Contratante: ${employee.criador.nome}` }}</p>
          <p>{{ `Id do contratante: ${employee.criador.id}` }}</p>
        </li>
        <button type="button" @click="removeEmployeeSection(index)">
          Remover funcionário
        </button>
      </div>
    </ul>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import getEmployes from "../../repository/serviceGetEmployes";

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
      const employesData = getEmployes();
      for (let i = 0; i < employesData.length; i++) {
        this.employes.push(employesData[i]);
      }
    },
    removeEmployeeSection(index) {
      this.employes.splice(index, 1);
      localStorage.setItem("employes", JSON.stringify(this.employes));
    },
    saveEmployeeData(selectedEmployee) {
      localStorage.removeItem('edit-employe');
      localStorage.setItem('edit-employe', JSON.stringify(selectedEmployee));
      let employee = localStorage.getItem('edit-employe');
      if (employee) {
        this.$router.push('/employee')
      }
    },
  },
};
</script>

<style></style>
