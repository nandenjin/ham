<template>
  <main>
    <the-recruit-section-eyecatch class="is-first-section" />
    <the-recruit-section-overview />
    <the-recruit-section-about />
    <the-recruit-section-how-to />
  </main>
</template>

<script>
  import TheRecruitSectionEyecatch from '~/components/TheRecruitSectionEyecatch'
  import TheRecruitSectionOverview from '~/components/TheRecruitSectionOverview'
  import TheRecruitSectionAbout from '~/components/TheRecruitSectionAbout'
  import TheRecruitSectionHowTo from '~/components/TheRecruitSectionHowTo'

  export default {
    components: {
      TheRecruitSectionEyecatch,
      TheRecruitSectionOverview,
      TheRecruitSectionAbout,
      TheRecruitSectionHowTo
    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/style/media.sass'
  @import '~/assets/style/section.sass'
</style>
