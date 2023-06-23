<template>
  <div class="main" id="login">
    <h2 id="title">LOGIN</h2>
    <form 
      class="w-full max-w-sm"
      id="login-form"
      @submit.prevent="submit()"
      >
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Nome
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Digite seu nome"
              v-model="form.name"
              required
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Senha
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="******************"
              v-model="form.password"
              required
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3"></div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import admValues from "../../repository/serviceAdm";

export default {
  data: () => ({
    form: {
      id: '',
      name: '',
      password: '',
    }
  }),
  created() {
    const userAdm = {
      id: 2,
      name: 'fulana',
      password: 'asdf1234'
    };
    localStorage.setItem('userAdm', JSON.stringify(userAdm));
  },
  methods: {
    ...mapActions('LOGIN', ['ActionSetUserAdm']),
    submit() {
      const userAdm = JSON.parse(localStorage.getItem('userAdm'));
      if (userAdm && userAdm.name === this.form.name && userAdm.password === this.form.password) {
        this.ActionSetUserAdm(admValues(this.form));
        this.$router.push('/adm');
      } else {
        this.$router.push('/register');
      }
    }
  }
}
</script>

<style></style>
