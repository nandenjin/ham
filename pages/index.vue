<template>
  <main>
    <the-index-section-eyecatch class="is-first-section" />
    <the-index-section-about id="concept" />
    <the-index-section-works id="works" />
    <the-index-section-info id="info" />
    <the-index-section-profile id="about-me" />
  </main>
</template>

<script>

  import TheIndexSectionEyecatch from '../components/TheIndexSectionEyecatch'
  import TheIndexSectionAbout from '../components/TheIndexSectionAbout'
  import TheIndexSectionWorks from '../components/TheIndexSectionWorks'
  import TheIndexSectionInfo from '../components/TheIndexSectionInfo'
  import TheIndexSectionProfile from '../components/TheIndexSectionProfile'

  export default {
    components: {
      TheIndexSectionEyecatch,
      TheIndexSectionAbout,
      TheIndexSectionWorks,
      TheIndexSectionInfo,
      TheIndexSectionProfile
    }
  }

</script>

<style>
</style>
