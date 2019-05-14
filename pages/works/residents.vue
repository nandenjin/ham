<template>
  <the-work-detail>
    <template v-slot:title>
      <h1 class="title">
        住人たち
      </h1>
      <h2 class="title-en">
        Residents
      </h2>
    </template>

    <template v-slot:info>
      <ul>
        <li>
          展示場所：平砂学生宿舎9号棟 東翼側外壁
        </li>
        <li>
          稼働時間：5/20〜6/1 日没ごろ〜夜明けごろ
        </li>
      </ul>
      <p class="info--aside">
        同一場所で展示する「カリヨン」稼働の前後は休止いたします。
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
