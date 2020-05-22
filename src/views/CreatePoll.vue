<template>
  <div>
    <h1>List</h1>
    <router-link to="/">Home</router-link>

    <create_poll />

    <!-- <pollFetch></pollFetch>
      
    -->
  </div>
</template>

<script>
import create_poll from "@/components/create_poll";
export default {
  name: "App",
  data() {
    return { a1: 5 };
  },

  components: {
    create_poll
  }
};
</script>