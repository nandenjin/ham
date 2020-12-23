<template>
  <div>
    <div class="finished">
      <strong>本展は2019年6月をもって終了しました。</strong>
      <span>ご来場ありがとうございました。</span>
      <a href="https://www.nandenjin.com/news/200124_making-notes" target="_blank">関連情報: メイキング記事公開のお知らせ</a>
    </div>
    <div class="layout-wrap">
      <the-side-bar class="sidebar" />
      <div class="content">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
  import TheSideBar from '../components/TheSideBar'

  export default {
    components: {
      TheSideBar
    }
  }
</script>

<style lang="sass">
  .finished
    padding: 10px 20px
    background-color: #fff
    color: #111
    font-font-feature-settings: 'palt'
    font-size: 13px

    a
      color: inherit
      text-decoration: underline

  .layout-wrap
    .sidebar
      position: sticky
      top: 0
      left: 0
      z-index: 100
      float: left

    .content
      padding: .1px 0
</style>
