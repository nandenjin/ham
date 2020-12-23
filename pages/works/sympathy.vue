<template>
  <the-work-detail>
    <template v-slot:title>
      <h1 class="title">
        Instant Sympathy
      </h1>
    </template>

    <template v-slot:thumbnail>
      <img class="thumbnail" :src="work.img" alt="">
    </template>

    <template v-slot:description>
      <div class="work-finished-guide">
        本企画での展示は終了しました。この作品に関する最新の情報は<a href="https://www.nandenjin.com/works/sympathy?utm_source=ham2019&amp;utm_medium=works&amp;utm_campaign=sympathy" target="_blank">こちらのサイト</a>でご覧いただけます。
      </div>
    </template>

    <template v-slot:info>
      <ul>
        <li>
          展示場所：平砂学生宿舎9号棟 2Fラウンジ
        </li>
      </ul>
      <p class="info--aside">
        デザインと音楽：岡本太久斗
      </p>
      <p class="info--aside">
        同一の設備で「デザイン・パターン」と交互に展示します。
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
        work: works.find(w => w.slug === 'sympathy')
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
