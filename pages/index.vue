<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">frontend</h1>
      <p class="">
        firstCount: {{ firstCount }}, secondCount: {{ secondCount }}
      </p>
      <button @click="onClick">first increment</button>
      <button @click="onClick2">second increment</button>
      <button @click="onClick3">all increment</button>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import firstModule from '~/store/first'
import secondModule from '~/store/second'

@Component
export default class Index extends Vue {
  get firstCount() {
    return firstModule.count
  }
  get secondCount() {
    return secondModule.count
  }

  onClick() {
    firstModule.increment()
  }
  onClick2() {
    secondModule.increment()
  }
  onClick3() {
    secondModule.lazyAllIncrement(10)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
