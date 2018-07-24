import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router/index';
import createPersistedState from "vuex-persistedstate";
import api from '@/api/index'

Vue.use(Vuex);




const state = {
    isCorrect: false,
    isSignIn: false,
    msg: ""
}

const mutations = {
    setCorrectness: function (state, data) {
        var number = data.number;
        var answer = data.answer;
        console.log("Number:" + number + " " + "Answer:" + answer);
        if (number > answer) {
            state.isCorrect = false;
            alert("Guess Wrong, try again");
        } else if (number < answer) {
            state.isCorrect = false;
            alert("Guess Wrong, try again");
        } else if (number == answer) {
            alert("congratulation");
            state.isCorrect = true;
            console.log(state.isCorrect);
            router.push("/hi");
        }
    },

    validate: function (state, data) {
        var account = (data.account).toString();
        var password = (data.password).toString();
        var msg = (data.msg).toString();
        if (account === ("") || password === ("")) {
            alert("You must enter both your account and password");
        }
        else {
            if (account === ("jc1234") && password === ("0000")) {
                state.isSignIn = true;
                console.log(state.isSignIn);
                router.push("/");
            }

            else {
                state.msg = "Wrong password";
            }
        }
    },

    sayHello(state, name) {
        console.log("Hello World " + name)

    },

    signIn(state) {
        if (!state.isSignIn) {
            router.push("/sign");
        }

        else {
            router.push("/");
        }

    },

    signOut(state) {
        state.isSignIn = false;
        router.push("/");
    },




}

const getters = {
    isCorrect: function (state) {
        return state.isCorrect;
    },

    isSignInText: function (state) {
        if (state.isSignIn) {
            return "Hello Jonathan";
        }

        else {
            return "You have not signed in";
        }

    }
}

const actions = {
    //using async, await
    async fetchData() {
        let info = await api.getData()
        console.log("bear: " + info.data.bear.status)
        return info.data.bear.status
    },
    //using promise
    fetchDataPromise() {
        api.getData()
            .then((res) => {
                console.log(res)
                console.log(Object.keys(res.data))
                Object.keys(res.data.bear).forEach(item => {
                    console.log(item)
                })
            })
            .catch((e) => {
                console.log("Error: " + e)
            })
    }

}

const plugins = [createPersistedState()]


const modules = {
    state, mutations, getters, actions, plugins
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    plugins
});