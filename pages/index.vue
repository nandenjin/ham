<template>
  <main>
    <the-index-section-eyecatch class="is-first-section" />
    <the-index-section-about />
    <the-index-section-works />
    <the-index-section-info />
  </main>
</template>

<script>

  import TheIndexSectionEyecatch from '../components/TheIndexSectionEyecatch'
  import TheIndexSectionAbout from '../components/TheIndexSectionAbout'
  import TheIndexSectionWorks from '../components/TheIndexSectionWorks'
  import TheIndexSectionInfo from '../components/TheIndexSectionInfo'

  export default {
    components: {
      TheIndexSectionEyecatch,
      TheIndexSectionAbout,
      TheIndexSectionWorks,
      TheIndexSectionInfo
    }
  }

</script>

<style>
</style>
