<template>
  <the-work-detail>
    <template v-slot:title>
      <h1 class="title">
        カリヨン
      </h1>
      <h2 class="title-en">
        Carillon
      </h2>
    </template>

    <template v-slot:thumbnail>
      <img class="thumbnail" :src="work.img" alt="">
    </template>

    <template v-slot:description>
      <div class="work-finished-guide">
        本企画での展示は終了しました。この作品に関する最新の情報は<a href="https://www.nandenjin.com/works/carillon?utm_source=ham2019&amp;utm_medium=works&amp;utm_campaign=carillon" target="_blank">こちらのサイト</a>でご覧いただけます。
      </div>
    </template>

    <template v-slot:info>
      <ul>
        <li>
          展示場所：平砂学生宿舎9号棟 東翼側外壁
        </li>
        <li>
          稼働時間：5/20〜6/1 19時〜22時の毎正時
        </li>
      </ul>
      <p class="info--aside">
        本作品は、音楽をお手持ちのスマートフォンでお聴きいただけます。
        作品前でスピーカーなどを使用して鑑賞される際には、近隣の宿舎・住宅の迷惑とならないよう、くれぐれもご注意ください。
      </p>
      <a href="https://live.ham.nandenjin.com/carillon" class="button">鑑賞する・現在の様子をみる</a>
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
        work: works.find(w => w.slug === 'carillon')
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
