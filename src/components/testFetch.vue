<template>
  <div>
    <div>
      <input v-on:click="getNameAndPassword" type="submit" />
    </div>
    {{ data }}
    <div>{{ email }}</div>
    <div>{{ count }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      email: "",
      count: 0,
    };
  },
  methods: {
    async getNameAndPassword() {
      const res = await fetch("https://localhost:5001/api/User");
      const data = await res.json();
      this.email = data[0]["email"];
      this.count = data.length;
      this.data = data;
    },
  },
};
</script>
