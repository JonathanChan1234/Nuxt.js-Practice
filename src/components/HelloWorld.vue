<template>
  <div class="hello">
    <h1 v-bind:class="{ correct: isCorrect }">{{ msg }}</h1>
    <h3>{{isSignInText}}</h3>
    <ul>
      <div>Directory
      <router-link to="/">Home</router-link>
      <router-link to="/count">Counter Game</router-link>
      <button v-on:click="signIn()"> Sign In</button>
      <button v-on:click="signOut()">Sign Out</button>
      </div>
    </ul>
    <p>Theme</p>
    <p>{{getTheme}}</p>
      <ul>
      <li v-for="item in items">{{item.title}}</li>
      </ul>

      <count @changeColor='setColor'></count>
      <br>
      <counter :start="0" :end="3000" :duration="10" :options="{useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : '.',
            prefix : '',
            suffix : ''}"></counter>
  </div>
</template>

<script>
import store from "@/vuex/store"
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
import count from '@/components/Count'
import counter from '@/components/counter'

export default {
  name: "HelloWorld",
  components:{
    count,
    counter
  },
  data() {
    return {
      msg: "Welcome to my blog",
      themeNo: 1,
      isCorrect: false,
      items: [
        {title: "counter"},
        {title: "Sign In"},
        {title: "Home"}]
      
    };
  },
  computed: {
    ...mapState(["isSignIn"]),
    ...mapGetters(["isSignInText"]),

    getTheme: function() {
      switch (this.themeNo) {
        case 1:
          return "Welcome to the Home Page";
          break;

        case 2:
          return "Check out the latest counter game";
          break;

        case 3:
          return "Sign in to learn more feature";
          break;

        default:
          return "have fun and enjoy";
          break;
      }
    }
  },

  methods: {
    ...mapMutations(["signIn", "signOut"]),
    hover1: function() {
      this.themeNo = 1;
      console.log(this.themeNo);
    },

    hover2: function() {
      this.themeNo = 2;
      console.log(this.themeNo);
    },

    hover3: function() {
      this.themeNo = 3;
      console.log(this.themeNo);
    },
    setColor: function(){
      this.isCorrect = true;
      console.log('isCorrect: ' + this.isCorrect);
    }
  },
  store
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.correct{
  color: yellow;
  font-weight: bold  
}
</style>
