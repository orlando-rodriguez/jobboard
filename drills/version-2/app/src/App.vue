<template>
  <div id="app">
    <TheHeader></TheHeader>
    <main>
      <section id='profile-container'>
        <h2>Profiles</h2>
        <ul id='profiles'>
          <ProfileCards v-for="profile in profiles" :key="profile.name" :profile="profile"></ProfileCards>
        </ul>
      </section>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import ProfileCards from './components/ProfileCards'
import SkillsLists from './components/SkillsLists'

export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter,
    ProfileCards,
    SkillsLists
  },
  data () {
    return {
      profiles: [],
      apiURL: '../static/dinosaurs.json'
    }
  },
  mounted () {
    fetch(this.apiURL)
      .then(response => response.json())
      .then(response => {
        this.profiles = response
      })
  }
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 30px 0 30px;
  padding: 0;
  font-family: sans-serif;
  color: #1B997A;
  display: grid;
  grid-template-rows: 15% 75% 10%;
}
</style>
