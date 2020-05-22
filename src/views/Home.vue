<template>
  <div>
    <h2>Home page</h2>
    <p>TEXT</p>
    <router-link to="/createPoll">Create poll</router-link>
    <pollFetch></pollFetch>
  </div>
</template>

<script>
import pollFetch from "@/components/pollFetch";
export default {
  components: {
    pollFetch
  }
};
</script>