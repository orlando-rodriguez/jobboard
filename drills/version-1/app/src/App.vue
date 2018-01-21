<template>
  <div id='app'>
    <TheHeader></TheHeader>
    <main>
      <TheJobList id="job-list" :listings="listings"></TheJobList>
      <TheJobForm :addListing="addListing"></TheJobForm>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import TheJobList from './components/TheJobList'
import TheJobForm from './components/TheJobForm'

export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter,
    TheJobList,
    TheJobForm
  },
  data () {
    return {
      listings: [],
      apiURL: '../../static/listings.json'
    }
  },
  mounted () {
    fetch(this.apiURL)
      .then(response => response.json())
      .then(response => {
        this.listings = response
      })
  },
  methods: {
    addListing (listing) {
      this.listings.splice(0, 0, listing)
    }
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

main {
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 5% 42.5% 5% 42.5% 5%;
}

#job-list {
  grid-column: 2/3;
}
</style>
