<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
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
          href="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          @click="handleLogout"
        >
          LOGOUT
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const userName = ref(localStorage.getItem("userAdm"));
const parsedUserName = JSON.parse(userName.value);
const firstLetter = parsedUserName.name.charAt(0).toUpperCase();

const handleLogout = () => {
  localStorage.removeItem("userAdm");
  localStorage.removeItem("edit-employee");
}
</script>
