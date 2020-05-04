<template>
  <div id="app">
    <h1>List</h1>
    <!--
    <sqrt v-bind:a="a1"></sqrt>
    <testFetch></testFetch>
    -->
    <create_poll />
  </div>
</template>

<script>
import testFetch from "@/components/testFetch";
import create_poll from "@/components/create_poll";
export default {
  name: "App",
  data() {
    return { a1: 5 };
  },

  components: {
    testFetch,
    create_poll
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
