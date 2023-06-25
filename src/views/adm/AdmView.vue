<template>
  <div class="main" id="adm">
    <NavBar />
    <nav>
      <div class="box-navigatin">
        <a href="/employees" type="button" class="employee-button"
          >FUNCIONÁRIOS</a
        >
        <a href="/administration" type="button" class="management-button"
          >GESTÃO</a
        >
        <a href="/" type="button" class="return-button">
          voltar
        </a>
      </div>
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
};
</script>

<style></style>
