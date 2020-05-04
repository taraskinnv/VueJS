<template>
  <div>
    <span>{{index+1}}</span>
    <span>{{answer.answer}}</span>
    <button v-on:click="$emit('removeAnswer',answer.id)">&times;</button>
  </div>
</template>

<script>
export default {
  props: {
    answer: String,
    index: Number
  }
};
</script>