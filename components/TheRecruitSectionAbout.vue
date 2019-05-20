<template>
  <section class="section section--about">
    <div class="section__content">
      <h2 class="section__title">
        「住人たち」について
      </h2>
      <div class="info">
        <p>9号棟居室の電灯を個人の自宅のそれと連動させ、廃宿舎の往時の姿を再現する作品。</p>
        <p>各居室の電灯は、その居室に仮想的に住む学生の自宅に設置された「カギ」から送られる情報により、その家の電灯の点灯・消灯に連動している。夜になると宿舎に明かりがともり、鑑賞者は平砂学生宿舎9号棟に「住んで」いる人々の生活の様子を観察することができる。</p>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>

  @import '~assets/style/section.sass'
  @import '~assets/style/media.sass'

  .section--about
    .info
      max-width: 1000px
      margin: 60px auto
      text-align: left
      font-size: 14px
      line-height: 2em

      .title
        margin: 30px auto
        font-weight: normal

      p
        margin: .5em auto

</style>
