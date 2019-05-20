<template>
  <the-work-detail>
    <template v-slot:title>
      <h1 class="title">
        デザイン・パターン
      </h1>
      <h2 class="title-en">
        Design Pattern
      </h2>
    </template>

    <template v-slot:thumbnail>
      <img class="thumbnail" :src="work.img" alt="">
    </template>

    <template v-slot:info>
      <ul>
        <li>
          展示場所：平砂学生宿舎9号棟 2Fラウンジ
        </li>
      </ul>
      <p class="info--aside">
        同一の設備で「Instant Sympathy」と交互に展示します。
      </p>
    </template>
  </the-work-detail>
</template>

<script>

  import TheWorkDetail from '~/components/TheWorkDetail'
  import works from '~/assets/works'

  export default {
    components: {
      TheWorkDetail
    },
    data() {
      return {
        work: works.find(w => w.slug === 'pattern')
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
