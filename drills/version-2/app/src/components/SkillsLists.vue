<template>
  <ul id='SkillsLists' class='skills-list'>
    <li v-for="skill in skills" :key="skill">{{skill}}</li>
  </ul>
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

  .skills-list {
    list-style: none;
  }
</style>
