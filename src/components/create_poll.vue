<template>
  <div>
    <label for="poll">Poll</label>
    <input id="poll" type="text" v-model="question" />
    <addAnswer v-on:add-answer="add_answer" />
    <answer
      v-for="(answer, i) of answers"
      :key="answer.id"
      v-bind:answer="answer"
      v-bind:index="i"
      v-on:removeAnswer="removeAnswer"
    ></answer>

    <button v-on:click="send">add poll</button>
  </div>
</template>


<script>
import answer from "@/components/answer";
import addAnswer from "@/components/addAnswer";
export default {
  data() {
    return {
      question: "",
      answers: []
    };
  },
  methods: {
    removeAnswer(id) {
      console.log(id);
      this.answers = this.answers.filter(a => a.id !== id);
    },
    add_answer(answerNew) {
      this.answers.push(answerNew);
    },
    send() {
      let obj = {
        question: this.question,
        answers: this.answers
      };
      let json = JSON.stringify(obj);

      console.log(json);
      fetch("https://localhost:5001/api/Poll", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: json
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  },
  components: {
    answer,
    addAnswer
  }
};
</script>
