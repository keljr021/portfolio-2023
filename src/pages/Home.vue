<script>
  import Cta from '@/components/Cta.vue'

  export default {
    name: 'Home',
    components: {
      Cta
    }
}
</script>

<template>
  <Cta :socialIconsArray="socialIconsArray"/>
</template>

<style>
* {
  font-family: 'Jost', 'Roboto', sans-serif;
}

h1, h2, h3 {
  font-family: 'Quicksand', 'Roboto Thin', sans-serif;
  font-weight: normal;
}
</style>
