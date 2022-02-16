import { createStore } from 'vuex';

export default createStore({
  state: {
    nomClasse: 'primer-A',
    alumnat: [
      { id: 101, name: 'Mary' },
      { id: 102, name: 'Louis' },
      { id: 103, name: 'Jonhny' },
    ],
    valueId: 103,
  },
  mutations: {
    afegirAlumne: (state, name) => {
      state.valueId++;
      state.alumnat.push({ id: state.valueId, name: name });
    },
  },
  getters: {
    getNomClasse: (state) => {
      return state.nomClasse.toUpperCase();
    },
  },
  // actions: {
  // },
  // modules: {
  // }
});
