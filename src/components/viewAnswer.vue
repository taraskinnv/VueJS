<template>
  <div>
    <input type="checkbox" name="answer" id />
    <span>{{answer.answer}}</span>
  </div>
</template>


<script>
export default {
  props: ["answer"]
};
</script>