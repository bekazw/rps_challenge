import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        curLogin : "none",
        curPass  : "",
        curID : -1
    },
    getters : {
    
    }
});


