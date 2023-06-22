<template>
  <div class="main" id="adm">
    <NavBar />
    <nav>
      <div class="box-navigatin">
        <a href="/employees" type="button" class="btn btn-primary btn-lg">FUNCIONÁRIOS</a>
        <a href="/administration" type="button" class="btn btn-secondary btn-lg">GESTÃO</a>
      </div>
    </nav>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style></style>
