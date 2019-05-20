<template>
  <section class="section section--how-to">
    <div class="section__content">
      <h2 class="section__title">
        How To
      </h2>
      <div class="info">
        <div class="column">
          <h3>
            参加条件
          </h3>
          <ul>
            <li>筑波大学の学生・教職員である。</li>
            <li>自宅にPC、インターネット、およびWi-Fi環境がある。</li>
            <li>データ収集を行う装置「カギ」の授受を大学内で行える。</li>
          </ul>
        </div>
        <div class="column">
          <h3>
            参加の流れ
          </h3>
          <ol>
            <li><a href="https://twitter.com/nandenjin" target="_blank" rel="noopener">作者のTwitter</a> DMやLINE、<a href="https://docs.google.com/forms/d/e/1FAIpQLSeuFg6UPWXXoZxXudcR4cFACIKXA5ckRzWx5JbXVioWC83c2g/viewform" target="_blank" rel="noopener">参加フォーム</a>へご連絡ください。</li>
            <li>データ収集を行う装置「カギ」とUSB充電器をお渡しします。</li>
            <li>自宅で「カギ」にWi-Fiの設定をして、USB充電器を繋いでください。</li>
            <li>そのまま日常を過ごします。「カギ」はあなたの家の部屋と宿舎の居室を繋ぎ、電灯の状態を転送します。</li>
            <li>然るべき時間が来ると、「カギ」自身が企画の終了を告げます。「カギ」をご返却ください。</li>
          </ol>
        </div>
      </div>
      <div class="question">
        <p>ご不明点があれば、<a href="https://twitter.com/nandenjin" target="_blank" rel="noopener">作者Twitter</a>にお問い合わせください。</p>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>

  @import '~assets/style/section.sass'
  @import '~assets/style/media.sass'

  .section--how-to
    .info
      display: grid
      grid-template-columns: 1fr 1fr
      grid-gap: 60px
      max-width: 1000px
      margin: 60px auto
      text-align: left
      font-size: 14px
      line-height: 2em

      +rmq
        display: block

        .column
          margin: 60px 0

      .title
        margin: 30px auto
        font-weight: normal

      p
        margin: .5em auto

      li
        margin: 1em auto

    .question
      font-size: 14px
      margin: 60px auto

</style>
