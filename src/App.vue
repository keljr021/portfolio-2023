<script>
  import Navbar from './components/Navbar.vue'
  import Cta from './components/Cta.vue'
  import Work from './components/Work.vue'
  import About from './components/About.vue'
  import Resume from './components/Resume.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'
  import { ref } from 'vue'

  const theme = ref('light')

  export default {
    name: 'app',
    data() {
      return {
        navItems: [
          {
            className: 'cta',
            text: ''
          },
          {
            className: 'work',
            text: 'UI/UX'
          },
          {
            className: 'dev',
            text: 'Dev'
          },
          {
            className: 'logos',
            text: 'Logos'
          },
          {
            className: 'about',
            text: 'About'
          },
          {
            className: 'resume',
            text: 'Resume'
          },
          {
            className: 'contact',
            text: 'Contact'
          }
        ]
      }
    },
    methods: {
      toggleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
      },
      scrollTo(input) {
        let el = document.getElementsByClassName(input)[0];

        if(el) 
            el.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        else 
          alert('ELement not found: ', input);
      }
    },
    components: {
      Navbar,
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
  <v-app>
    <Navbar @toggle-theme="toggleTheme" @scroll-to="scrollTo" :navItems="navItems"/>

    <!-- Gives spacing between navigation and content below -->
    <v-spacer style="height:40px"></v-spacer>

    <Cta @scroll-to="scrollTo" :navItems="navItems"/>
    <Work />
    <About />
    <Resume />
    <Contact />
    <Footer />

  </v-app>
</template>

<style scoped>
  .nav-space {
    top: 50px;
  }
</style>
