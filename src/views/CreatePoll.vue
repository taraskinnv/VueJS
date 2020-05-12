<template>
  <div>
    <h1>List</h1>
    <!--
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