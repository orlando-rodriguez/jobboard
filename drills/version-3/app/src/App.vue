<template>
  <div id='app'>
    <TheHeader></TheHeader>
    <main>
      <TheJobDetails></TheJobDetails>
      <TheApplicaionForm :getText="getText"></TheApplicaionForm>
      <button id="preview-toggle" @click="togglePreview = !togglePreview">Show Preview</button>
      <ThePreview :text="applicationText" :class='{hidden : togglePreview}'></ThePreview>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import TheJobDetails from './components/TheJobDetails'
import TheApplicaionForm from './components/TheApplicaionForm.vue'
import ThePreview from './components/ThePreview'

export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter,
    TheJobDetails,
    TheApplicaionForm,
    ThePreview
  },
  data () {
    return {
      togglePreview: true,
      applicationText: ''
    }
  },
  methods: {
    getText(text) {
      this.applicationText = text;
    }
  }
}
</script>

<style>
htlm {
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
main {
  grid-row: 2/3;
  width: 70%;
  margin: 0 auto;
  padding: 10px;
}
small {
  color: black;
  font-size: .5rem;
  margin-left: 10px;
}
a {
  color: #C261CC;
  text-decoration: none;
}
.hidden {
  display: none;
}
</style>
