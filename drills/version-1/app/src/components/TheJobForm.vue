<template>
  <div id='TheJobForm'>
    <h3>Add a Job</h3>
    <form class="job-form" @submit.prevent="submitForm">
      <label for="title">Title</label>
      <input type="text" name="title" v-model="job.title">
      <label for="pay">Compensation</label>
      <input type="text" name="pay" v-model="job.pay">
      <label for="description">Description</label>
      <textarea name="description" rows="8" cols="40" v-model="job.description"></textarea>
      <input type="submit" name="submit" value="Submit" />
    </form>
  </aside>
  </div>
</template>
<script>
export default {
  name: 'TheJobForm',
  props: {
    addListing: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      job: {
        title: '',
        pay: '',
        description: '',
        interested: []
      }
    }
  },
  methods: {
    submitForm () {
      this.addListing(this.job)
      this.job = {
        title: '',
        pay: '',
        description: '',
        interested: []
      }
    }
  }
}
</script>
<style scoped>

#TheJobForm {
  grid-column: 4/5;
}

form {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}

</style>
