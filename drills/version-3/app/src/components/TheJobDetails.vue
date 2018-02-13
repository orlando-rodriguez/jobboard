<template>
  <div id='TheJobDetails'>
    <section id="job-details">
      <h2>Job Details</h2>
      <h4>{{jobData.title}}</h4>
      <p>
        {{jobData.description}}
      </p>
    </section>
  </div>
</template>
<script>
export default {
  name: 'TheJobDetails',
  props: ['jobData']
}
</script>
<style scoped>
</style>
