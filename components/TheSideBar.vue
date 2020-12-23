<template>
  <div class="sidebar">
    <nuxt-link v-scroll-to="'body'" to="/" tag="div" class="logo" />
    <span class="spacer">
      <img class="name-logo" src="~/assets/img/kazumi-inada.png" alt="Kazumi Inada">
    </span>
    <span class="menu-button" @click="opened = true">menu</span>
    <nav class="menu" :class="{ 'is-opened': opened }" @click="opened = false">
      <ul class="menu-list">
        <li class="menu-list__item">
          <a href="https://www.nandenjin.com/ja/" target="_blank" rel="noopener">
            Kazumi Inada
          </a>
        </li>
        <div class="separator" />
        <nuxt-link v-scroll-to="'#concept'" class="menu-list__item" to="/" tag="li">
          Concept
        </nuxt-link>
        <nuxt-link v-scroll-to="'#works'" class="menu-list__item" to="/" tag="li">
          Works
        </nuxt-link>
        <nuxt-link v-scroll-to="'#info'" class="menu-list__item" to="/" tag="li">
          Info
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        opened: false
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~assets/style/media'

  .sidebar
    width: 120px

    +rmq
      display: flex
      width: 100vw
      height: 100px
      background-image: linear-gradient(rgba(0, 0, 0, .5), transparent)

    .logo
      width: 40px
      height: 40px
      margin: 40px auto
      vertical-align: middle
      background: url('~assets/img/nandenjin-logo.png') center no-repeat
      background-size: contain

      +rmq
        display: inline-block
        margin: 30px 40px
        flex: 0 0 auto

    .spacer
      display: none
      line-height: 100px

      +rmq
        display: inline-block
        flex: 1 1 auto

      .name-logo
        max-width: 130px

    .menu-button
      display: none
      width: 10px
      height: 10px
      margin: 45px 40px
      vertical-align: middle
      border: 4px solid #fff
      border-style: solid solid none none
      text-indent: -9999px
      transform: rotate(135deg)

      +rmq
        display: inline-block
        flex: 0 0 auto

    .menu
      +rmq
        position: fixed
        top: 0
        left: 0
        width: 100vw
        height: 100vh
        padding: .1px
        background-color: #000
        opacity: 0
        pointer-events: none
        transition: opacity .3s ease-out

        &.is-opened
          opacity: 1
          pointer-events: auto

      .menu-list
        list-style: none
        padding: 0

        +rmq
          margin-top: 150px
          text-align: center

        .menu-list__item
          width: 40px
          min-height: 40px
          margin: 50px auto
          line-height: 40px
          font-family: 'Helvetica'
          letter-spacing: .1em
          text-transform: uppercase
          writing-mode: vertical-rl
          white-space: nowrap
          cursor: pointer

          +rmq
            width: 50vw
            margin: 10px auto
            writing-mode: initial

          a
            color: #fff
            text-decoration: none
            border-bottom: none

        .separator
          width: 30px
          height: 1px
          margin: 50px auto
          background-color: #fff

          +rmq
            margin: 20px auto
</style>
