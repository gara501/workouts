import db from "../../firebase";
import router from "../../router";

const modulePrograms = {
  state: {
    program: { id: "", data: "" },
    programsfs: [],
    programsByUser: []
  },
  mutations: {
    setPrograms(state, programs) {
      state.programsfs = programs;
    },
    setProgram(state, program) {
      state.program = program;
    },
    setProgramsByUser(state, programs) {
      state.programsByUser = programs;
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
          phases: program.phases,
          owner: program.owner,
          active: program.active,
          free: program.free,
          date: program.date
        })
        .then(() => {
          router.push({ name: "addetails" });
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
    getProgramsUser({ commit }, id) {
      const programs = [];
      let usersPrograms = db.collection("programs");
      let query = usersPrograms.where("owner", "==", id);
      query.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let program = doc.data();
          program.id = doc.id;
          programs.push(program);
        });
        commit("setProgramsByUser", programs);
      });
    }
  },
  getters: {
    programs(state) {
      return state.programsfs;
    },
    programsByUser(state) {
      return state.programsByUser;
    },
    program(state) {
      return state.program;
    }
  }
};

export default modulePrograms;
