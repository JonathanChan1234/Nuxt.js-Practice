<template>
    <div>
    <h1>The Counter Game</h1>
    <h2>Guess a number between 0 - 100</h2>
    <input type="number"  v-model="number" v-on:keyup.enter="setCorrectness(getData())">
    <p>Your guess is {{number}}</p>
    <p v-bind:class="answerObject">The answer is {{answer}}</p>
    <div contenteditable="true">sfasfs</div>
    <br>
    
    <!-- <p>It is {{submit}} the answer</p> -->
    <router-link to="/">Back to Home</router-link>
    <p>{{text}}</p>
    </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      number: 0,
      answer: 0,
      text: ""
    };
  },

  mounted: function() {
    this.answer = Math.floor(Math.random() * 101);
  },

  computed: {
    answerObject: function() {
      if (this.answer == this.number) {
        return {
          corrected: true,
          incorrected: false
        };
      } else {
        return {
          corrected: false,
          incorrected: true
        };
      }
    }
  },

  methods: {
    // ...mapMutations(["setCorrectness"]),
    setCorrectness(data) {
      var number = data.number;
      var answer = data.answer;
      if (number > answer) {
        // state.isCorrect = false;
        alert("Guess Wrong, try again");
      } else if (number < answer) {
        // state.isCorrect = false;
        alert("Guess Wrong, try again");
      } else if (number == answer) {
        // state.isCorrect = true;
        this.$emit('changeColor');
        alert("congratulation");
        // router.push("/hi");
      }
    },

    getData: function() {
      var data = { number: this.number, answer: this.answer };
      return data;
    }
  },

  //   computed: {
  //     submit: function() {
  //       if (this.number > this.answer) {
  //         return "larger than";
  //       } else if (this.number < this.answer) {
  //         return "smaller than";
  //       } else {
  //         alert("congratulation");
  //         this.$router.push("/hi");
  //         return "equal to";
  //       }
  //     }
  //   },

  //   methods: {
  //     submitAnswer: function() {
  //       if (this.number > this.answer) {
  //         return "larger than";
  //       } else if (this.number < this.answer) {
  //         return "smaller than";
  //       } else {
  //         alert("congratulation");
  //         this.$router.push("/hi");
  //         return "equal to";
  //       }
  //     }
  //   },

  store
};
</script>

<style scoped>
.corrected {
  color: red;
}
.incorrected {
  color: green;
}
</style>


