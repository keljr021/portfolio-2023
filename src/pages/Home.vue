<script>
  import Cta from '@/components/Cta.vue'
  import Work from '@/components/Work.vue'
  import About from '@/components/About.vue'
  import Resume from '@/components/Resume.vue'
  import Contact from '@/components/Contact.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'Home',
    components: {
      Cta,
      Work,
      About,
      Resume,
      Contact,
      Footer
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
