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
            text: 'Home'
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
            className: 'contact',
            text: 'Contact'
          },
          {
            className: 'resume',
            text: 'Resume'
          },
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
      scrollTo(input) {
        if (input === 'resume') 
          window.open('https://drive.google.com/drive/folders/1vQ4PuOoTukxV_RmmHZ6q0AngzDrxmQd-?usp=sharing', '_blank');
        else {
        let el = document.getElementsByClassName(input)[0];
          if(el) 
            el.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        }
      }
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
    <Navbar @scrollTo="scrollTo" :navItems="navItems" />

    <!-- Gives spacing between navigation and content below -->
    <v-spacer v-if="this.$vuetify.display.xs" style="height:41.5px"></v-spacer>

    <Cta @scrollTo="scrollTo" :navItems="navItems" :socialIconsArray="socialIconsArray"/>
    <Work />
    <About />
    <Contact :socialIconsArray="socialIconsArray" />
    <Footer />

  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
