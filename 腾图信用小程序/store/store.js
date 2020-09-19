import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		navbarName:""
	},
	mutations:{
		updateNavbarName(state,navbarName){
		      state.navbarName=navbarName;
		}
	},
	actions:{
		
	}
})

export default store