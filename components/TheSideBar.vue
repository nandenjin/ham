<template>
  <div class="sidebar">
    <nuxt-link to="/" tag="div" class="logo" />
    <nav class="menu">
      <ul class="menu-list">
        <li class="menu-list__item">
          <a href="https://www.nandenjin.com" target="_blank">
            Kazumi Inada
          </a>
        </li>
        <div class="separator" />
        <nuxt-link class="menu-list__item" to="/#about" tag="li">
          About
        </nuxt-link>
        <nuxt-link class="menu-list__item" to="/#works" tag="li">
          Works
        </nuxt-link>
        <nuxt-link class="menu-list__item" to="/#info" tag="li">
          Info
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<style lang="sass">
  .sidebar
    width: 120px

    .logo
      width: 40px
      height: 40px
      margin: 40px auto
      background: url('~assets/img/nandenjin-logo.png') center no-repeat
      background-size: contain

    .menu-list
      list-style: none
      padding: 0

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

        a
          color: #fff
          text-decoration: none

      .separator
        width: 30px
        height: 1px
        margin: 50px auto
        background-color: #fff
</style>
