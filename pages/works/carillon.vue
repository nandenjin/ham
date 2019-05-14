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
    </template>
  </the-work-detail>
</template>

<script>

  import TheWorkDetail from '~/components/TheWorkDetail'

  export default {
    components: {
      TheWorkDetail
    }
  }
</script>

<style lang="sass" scoped>

</style>
