<template>
  <div class="layout-wrap">
    <the-side-bar class="sidebar" />
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
  import TheSideBar from '../components/TheSideBar'

  export default {
    components: {
      TheSideBar
    }
  }
</script>

<style lang="sass">

  .layout-wrap
    .sidebar
      position: fixed
      top: 0
      left: 0
      z-index: 100

</style>
