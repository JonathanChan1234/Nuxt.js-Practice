<template>
    <div>
    <h1>Hello, welcome to my website</h1>
    <h2>Here is some introduction</h2>


    <button v-on:click="setStatus()">See Bill's secret</button>
    <button v-on:click="getDataPromise()">Hide your secret (Promise)</button>
    <br>
    <p>{{msg}}</p>
    <p v-if="seen">{{msg2}}</p>
    <router-link to="/">Back to Home</router-link>
    </div>
</template>

<script>
import api from "@/api/index";
import store from "@/vuex/store";
export default {
  data() {
    return {
      msg: "I like Bill and TT",
      seen: true
    };
  },

  computed: {
    msg2: function() {
      return this.setStatus();
    }
  },

  methods: {
    hideName: function() {
      console.log("Secret Hidden");
      this.seen = !this.seen;
    },
    setStatus: function() {
      this.$store.dispatch("fetchData").then(res => {
        console.log(res);
        this.msg = res;
      });
    },
    getDataPromise: function() {
      console.log(this.$store.dispatch("fetchDataPromise"));
    }
  },
  store
};
</script>
