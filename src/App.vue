<script setup>
import Navbar from './components/Navbar.vue'
import Cta from './components/Cta.vue'
import Work from './components/Work.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

import { ref } from 'vue'

  const theme = ref('light')

  function toggleTheme () {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }
</script>

<template>
  <v-app>
    <Navbar @toggle-theme="toggleTheme"/>

        <Cta />
        <Work />
        <About />
        <Contact />
        <Footer />

  </v-app>
</template>

<style scoped>
.nav-space {
  top: 50px;
}
</style>
