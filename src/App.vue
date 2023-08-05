<script>
  import Navbar from '@/components/Navbar.vue';
  import { ref } from 'vue';

  const theme = ref('light');

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
      Navbar
    }
}
</script>

<template>
  <v-app>
    <Navbar @scrollTo="scrollTo" :navItems="navItems" />

    <!-- Gives spacing between navigation and content below -->
    <v-spacer v-if="this.$vuetify.display.xs" style="height:41.5px"></v-spacer>

    <router-view :navItems="navItems"></router-view>
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
