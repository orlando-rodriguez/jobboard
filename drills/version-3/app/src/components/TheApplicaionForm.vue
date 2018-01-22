<template>
  <div id='TheApplicationForm'>
    <form>
      <label>Apply Here: </label>
      <textarea id="application-text" rows="8" cols="100" v-model="applicationText"></textarea><br />
      <input id="submit" type="submit" value="Submit" @click.prevent.reset="submitApplication" />
    </form>
    <p id="message">{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: 'TheApplicationForm',
  props: {
    getText: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      applicationText: '',
      message: ''
    }
  },
  watch: {
    applicationText (newText) {
      this.getText(newText)
    }
  },
  methods: {
    submitApplication(){
      this.message = 'Your application was submitted!'
    }
  }
}
</script>
<style scoped>
</style>
