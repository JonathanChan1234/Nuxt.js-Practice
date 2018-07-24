<template>
 <div class="main">

<h1>Sign In Page</h1>
 <p>Account:</p>    
 <input v-model="account" v-on:keyup.enter="validate(getData())">
 <br/>
<p>Password:</p>    
 <input type="password" v-model="password" v-on:keyup.enter="validate(getData())">

 <p>{{msg}}</p>
 </div>

</template>

<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["msg"])
  },

  methods: {
    ...mapMutations(["validate", "sayHello"]),

    getData: function() {
      var data = {
        account: this.account,
        password: this.password,
        msg: this.msg
      };
      return data;
    }
  },

  store
};
</script>
