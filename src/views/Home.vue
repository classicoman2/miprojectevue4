<template>
  <div class="home">
    <h1>Vista HOME</h1>
    <Menu />
    <h2>Grupo: {{ $store.getters.getNomClasse }}</h2>
    <ul>
      <ol v-for="item in $store.state.alumnat" :key="item.id">{{ item.name }}</ol>
    </ul>
    <div class="formulari">
      <h2>Afegir alumne:</h2>
      <label>Nom:</label>
      <input v-model="nom" />
      <button v-on:click="afegirAlumne">Afegir</button>
    </div>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Menu from '../components/Menu.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Menu
  },
  data() {
    return {
      nom: ""
    }
  },
  methods: {
    afegirAlumne() {
      this.$store.commit('afegirAlumne', this.nom)
    }
  }
}
</script>


<style scoped>
.home {
  background-color: lightsteelblue;
}
.formulari {
  border: 1px solid blue;
}
</style>