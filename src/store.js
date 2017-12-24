import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuMusicInitialized: false,
    socket: {
      connected: false,
      connecting: true
    },
    uid: -1
  },
  getters: {
    menuMusicInitialized (state) {
      return state.menuMusicInitialized
    },
    isConnecting (state) {
      return state.socket.connecting
    },
    isConnected (state) {
      return state.socket.connected
    },
    uid (state) {
      return state.uid
    }
  },
  mutations: {
    menuMusicInitialized (state) {
      state.menuMusicInitialized = true
    },
    connected (state, uid) {
      state.socket.connecting = false
      state.socket.connected = true
      state.uid = uid
      console.log(state.uid)
    },
    connectionFailed (state) {
      state.socket.connecting = false
      state.socket.connected = false
    }
  }
})
