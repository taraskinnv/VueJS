<template>
  <div>
    <div>
      <input v-on:click="getNameAndPassword" type="submit" />
    </div>
    <!--
      
    -->

    <poll v-for="poll of polls" v-bind:poll="poll" />
  </div>
</template>

<script>
import poll from "@/components/poll";
export default {
  data() {
    return {
      polls: {}
    };
  },
  methods: {
    async getNameAndPassword() {
      const res = await fetch("https://localhost:5001/api/Poll");
      const data = await res.json();
      this.polls = data;
      console.log(this.polls);
    }
  },
  components: {
    poll
  }
};
</script>
