<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="answer" />
    <button type="submit">create answer</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      answer: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("onSubmit", this.answer);
      if (this.answer.trim()) {
        let newAnswer = {
          id: Date.now(),
          answerAnswer: this.answer
        };
        this.$emit("add-answer", newAnswer);
        this.answer = "";
      }
    }
  }
};
</script>

