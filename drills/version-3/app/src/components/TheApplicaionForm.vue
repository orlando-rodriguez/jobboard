<template>
  <div id='TheApplicationForm'>
    <label>Apply Here: </label>
    <textarea id="application-text" rows="8" cols="100" v-model="applicationText"></textarea><br />
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
      applicationText: ''
    }
  },
  watch: {
    applicationText (newText) {
      this.getText(newText)
    }
  }
}
</script>
<style scoped>
</style>
