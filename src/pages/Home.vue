<script>
  import Cta from '@/components/Cta.vue'
  import Work from '@/components/Work.vue'
  import About from '@/components/About.vue'
  import Resume from '@/components/Resume.vue'
  import Contact from '@/components/Contact.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'Home',
    data() {
      return {
        navItems: [
          {
            className: 'cta',
            text: 'Home'
          },
          {
            classname: 'work',
            text: 'Work'
          },
          {
            className: 'about',
            text: 'About'
          },
          {
            className: 'contact',
            text: 'Contact'
          },
          {
            className: 'resume',
            text: 'Resume'
          }
        ]
      }
    },
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
  <Cta @scrollTo="scrollTo" :navItems="navItems" :socialIconsArray="socialIconsArray"/>
  <Work />
  <About />
  <Contact :socialIconsArray="socialIconsArray" />
  <Footer />
</template>

<style>
* {
  font-family: 'Jost', 'Roboto', sans-serif;
}

h1, h2, h3 {
  font-family: 'Quicksand', 'Roboto Thin', sans-serif;
  font-weight: normal;
}

.cta, .work, .contact, .about {
  background: #f9f9f9; /* Old browsers */
  background: -moz-linear-gradient(top, #f9f9f9 0%, #ffffff 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #f9f9f9 0%,#ffffff 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #f9f9f9 0%,#ffffff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  background-size: 30px cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.about {
  background: #18184d; /* Old browsers */
  background: -moz-linear-gradient(top, #18184d 0%, #221653 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #18184d 0%,#221653 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #18184d 0%,#221653 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  color: white;
}
</style>
