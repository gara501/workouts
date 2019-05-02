import Vue from "vue";
import Vuex from "vuex";
import db from "./firebase";
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    program: { id: "", data: "" },
    programsfs: []
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
          commit('deleteProgram', id);
        });
    }
  }
});
