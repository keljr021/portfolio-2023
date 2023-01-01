<script>
  import Navbar from './components/Navbar.vue'
  import Cta from './components/Cta.vue'
  import Work from './components/Work.vue'
  import About from './components/About.vue'
  import Resume from './components/Resume.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'

  import linkedinUrl from './assets/LI-black.png'
  import githubUrl from './assets/github-mark.png'

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
            className: 'ui',
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
        ],
        socialIconsArray: [
            {
                type: 'img',
                src: linkedinUrl,
                link: 'https://www.linkedin.com/in/kelvin-morrisey-jr-514360a7/',
                alt: 'LinkedIn https://www.linkedin.com/in/kelvin-morrisey-jr-514360a7/',
                text: 'https://www.linkedin.com/in/kelvin-morrisey-jr-514360a7/'

            },
            {
                type: 'img',
                src: githubUrl,
                link: 'https://github.com/keljr021',
                alt: 'GitHub https://github.com/keljr021',
                text: 'https://github.com/keljr021',

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

        if(el) {
            el.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        }
        else 
          alert('ELement not found: ', input);
      },
    },
    mounted() {
      let input = null;
      if (input)
        this.scrollTo(input);
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
    <Navbar @toggle-theme="toggleTheme" @scroll-to="scrollTo" :navItems="navItems" />

    <!-- Gives spacing between navigation and content below -->
    <v-spacer v-if="this.$vuetify.display.xs" style="height:41.5px"></v-spacer>

    <Cta @scroll-to="scrollTo" :navItems="navItems" :socialIconsArray="socialIconsArray"/>
    <Work />
    <About />
    <Contact :socialIconsArray="socialIconsArray" />
    <Footer />

  </v-app>
</template>

<style scoped></style>
