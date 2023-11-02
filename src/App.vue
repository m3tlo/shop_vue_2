<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'

export default {
  computed: {
    layout () {
      return 'main-layout'
    }
  },
  components: { MainLayout }
}
</script>

<style src="@/assets/css/style.min.css">
</style>
