<template>
  <div class="main" id="employee">
    <NavBar />
    <h2 id="title">Employes</h2>
    {{ getEmployes }}
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import getEmployes from "../../repository/serviceGetEmployes";

export default {
  components: {
    NavBar,
  },
  methods: {
    ...console.log(getEmployes())
  }
};
</script>

<style>

</style>