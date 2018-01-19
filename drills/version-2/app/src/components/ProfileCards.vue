<template>
  <li id='ProfileCards' class='profile-card'>
    <header class="profile-header" @click="skillsToggle = !skillsToggle">
      <img :src='profile.image' />
      <h2>{{profile.name}}</h2>
    </header>
    <section class='skills-container' :class="{ hidden : skillsToggle }">
      <h4>Skills</h4>
      <ul class='skills-list'>
        <SkillsLists :skills='profile.skills'></SkillsLists>
      </ul>
    </section>
  </li>
</template>

<script>
import SkillsLists from './SkillsLists'

export default {
  name: 'ProfileCards',
  components: {
    SkillsLists
  },
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      skillsToggle: true
    }
  }
}
</script>
<style scoped>

  #ProfileCards {
    border-radius: 6px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    padding: 10px;
    /* margin: 0 auto 10px auto; */
  }

  .profile-header {
    display: flex;
    flex-flow: row nowrap;
  }

  .profile-header img {
    width: 100px;
    height: 100px;
    border: 1px solid darkgrey;
    margin: 0 10px 0 10px;
  }

  .skills-list {
    list-style: none;
  }

  .hidden {
    display: none;
  }
</style>
