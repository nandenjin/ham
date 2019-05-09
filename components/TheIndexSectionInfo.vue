<template>
  <section class="section section--info">
    <div class="section__content">
      <h2 class="section__title">
        Info
      </h2>
      <div class="section--info__info">
        <p>
          <span style="font-size: 1.2em">2019.05.20(Mon.) - 06.02(Sun.) </span>
        </p>
        <p>
          構内開放時間：10:00 - 18:00<br>
          会期中無休
        </p>
        <p style="font-size: .9em; margin-top: 2em">
          TXつくば駅より徒歩30分。または関東鉄道バスつくばセンター６番乗り場から「筑波大学循環右回り」「筑波大学循環左回り」「筑波大学中央方面行き」に乗車。「平砂学生宿舎前」または「天久保２丁目」にて下車。
        </p>
        <p style="font-size: .9em; margin-top: 2em">
          「住人たち」「カリヨン」は、建物外より夜間に鑑賞する作品です。
        </p>
        <ul style="font-size: .9em">
          <li>
            「住人たち」稼働時間……日没より日の出まで
          </li>
          <li>
            「カリヨン」稼働時間……19〜22時の毎正時より3分間ほど
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>

  @import '~assets/style/media'
  @import '~assets/style/section'

  .section--info
    .section--info__info
      max-width: 800px
      margin: 20px auto
      padding: 30px 40px
      background-color: #222
      line-height: 2em

      +rmq
        padding: 20px 30px
        font-size: 14px

</style>
