<template>
  <div id='SkillsLists'>
    <li v-for="skill in skills" :key="skill">{{skill}}</li>
  </div>
</template>
<script>
export default {
  name: 'SkillsLists',
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
</style>
