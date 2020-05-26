<template>
  <div>
    <div>{{p.question}}</div>
    <div>{{p.answers[0].answer}}</div>
    <div>{{p.answers[1].answer}}</div>
    <div>{{p.answers[2].answer}}</div>
  </div>
</template>

<script>
export default {
  props: ["p"]
};
</script>