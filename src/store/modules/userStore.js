import db from "../../firebase";
import admin from "firebase/auth";
import router from "../../router";
import firebase from "firebase/app";

const moduleUsers = {
  state: {
    user: "",
    users: "",
    userInfo: "",
    userBio: ""
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setUserBio(state, payload) {
      state.userBio = payload;
    }
  },
  actions: {
    getUsers({ commit }) {
      const users = [];
      db.collection("usersdata")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let user = {};
            user.id = doc.data().loginId;
            user.fullname = `${doc.data().firstname} ${doc.data().lastname}`;
            users.push(user);
          });
        });
      commit("setUsers", users);
    },
    getUserInfo({ commit }, id) {
      let userdata = {};
      let userInfo = db.collection("usersdata");
      let query = userInfo.where("loginId", "==", id);
      query.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let user = doc.data();
          userdata = user;
        });
        commit("setUserInfo", userdata);
      });
    },
    getUserBio({ commit }, id) {
      let userdata = {};
      let userBio = db.collection("usersbio");
      let query = userBio.where("loginId", "==", id);
      query.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let user = doc.data();
          userdata = user;
        });
        commit("setUserBio", userdata);
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
            if (process.env.VUE_APP_ADMINS_ACCOUNTS.includes(res.user.email)) {
              commit("setUser", {
                email: res.user.email,
                uid: res.user.uid,
                admin: true
              });
              router.push({ name: "admin", params: { id: res.user.uid } });
            } else {
              commit("setUser", {
                email: res.user.email,
                uid: res.user.uid,
                admin: false
              });
              router.push({ name: "dashboard", params: { id: res.user.uid } });
            }
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
    },
    user(state) {
      return state.user;
    },
    userInfo(state) {
      return state.userInfo;
    },
    userBio(state) {
      return state.userBio;
    },
    users(state) {
      return state.users;
    }
  }
};

export default moduleUsers;
