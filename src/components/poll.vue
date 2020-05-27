<template>
  <div>
    <div>{{poll.question}}</div>
    <!--
          
    -->
    <viewAnswer v-for="answer of poll.answers" v-bind:answer="answer" />
    <button v-on:click="post">post</button>
  </div>
</template>

<script>
import viewAnswer from "@/components/viewAnswer";
export default {
  props: ["poll"],
  components: {
    viewAnswer
  }
};
</script>