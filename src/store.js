import Vue from "vue";
import Vuex from "vuex";
import db from "./firebase";
import router from './router';
import firebase from 'firebase/app';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    program: { id: "", data: "" },
    programsfs: [],
    user: "",
    error: {
      code: "",
      message: ""
    }
  },
  mutations: {
    setPrograms(state, programs) {
      state.programsfs = programs;
    },
    setProgram(state, program) {
      state.program = program;
    },
    deleteProgram(state, id) {
      state.programsfs = state.programsfs.filter(doc => {
        return doc.id != id;
      });
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    getData({ commit }) {
      const programs = [];
      db.collection("programs")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let program = doc.data();
            program.id = doc.id;
            programs.push(program);
          });
        });
      commit("setPrograms", programs);
    },
    getProgram({ commit }, id) {
      db.collection("programs")
        .doc(id)
        .get()
        .then(doc => {
          let program_fs = doc.data();
          program_fs.id = doc.id;
          commit("setProgram", program_fs);
        });
    },
    editProgram({ commit }, program) {
      db.collection("programs")
        .doc(program.id)
        .update({
          name: program.name,
          level: program.level,
          active: program.active
        })
        .then(() => {
          router.push({ name: "home" });
        });
    },
    addProgram({ commit }, program) {
      db.collection("programs")
        .add({
          name: program.name,
          level: program.level,
          active: program.active,
          date: program.date
        })
        .then(doc => {
          router.push({ name: "home" });
        });
    },
    deleteProgram({ commit }, id) {
      db.collection("programs")
        .doc(id)
        .delete()
        .then(() => {
          commit("deleteProgram", id);
        });
    },
    createUser({ commit }, payload) {
      firebase.auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(res => {
          commit("setUser", { email: res.user.email, uid: res.user.uid });
        })
        .catch(err => {
          commit("setError", { code: err.code, message: err.message });
        });
    },
    loginUser({ commit }, payload) {
      firebase.auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(async () => {
          try {
            const res = await firebase
              .auth()
              .signInWithEmailAndPassword(payload.email, payload.pass);
            commit("setUser", { email: res.user.email, uid: res.user.uid });
            router.push({ name: "home" });
          } catch (err) {
            commit("setError", { code: err.code, message: err.message });
          }
        })
        .catch(err => {
          commit("setError", { code: err.code, message: err.message });
        });
    },
    logoutUser({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
      router.push({ name: "login" });
    },
    isLogedIn({ commit }, payload) {
      if (payload) {
        commit("setUser", { email: payload.email, uid: payload.uid });
      } else {
        commit("setUser", null);
      }
    }
  },
  getters: {
    userExists(state) {
      if (
        state.user === null ||
        state.user === "" ||
        state.user === undefined
      ) {
        return false;
      } else {
        return true;
      }
    }
  }
});
