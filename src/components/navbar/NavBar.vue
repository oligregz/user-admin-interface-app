<template>
  <nav id="navbar" class="flex items-center justify-between flex-wrap p-6">
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          id="first-letter"
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-center"
        >
          {{ firstLetter }}
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          LOGO
        </a>
        <a
          id="logout-link"
          href="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white logout-link"
          @click="handleLogout"
        >
          SAIR
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import "./style.css";

const userName = ref(localStorage.getItem("userAdm"));
const parsedUserName = JSON.parse(userName.value);
const firstLetter = parsedUserName.name.charAt(0).toUpperCase();

const handleLogout = () => {
  localStorage.removeItem("userAdm");
  localStorage.removeItem("edit-employee");
  localStorage.removeItem("employes");
};
</script>
