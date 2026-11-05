<script setup>
  import Navbar from '@/components/Navbar.vue';
  import { provide, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const theme = ref('light');
  const route = useRoute();
  const showResumeDialog = ref(false);

  provide('showResumeDialog', showResumeDialog);

  const navItems = [
    { className: 'cta', text: 'Home' },
    { classname: 'work', text: 'Work' },
    { className: 'about', text: 'About' },
    { className: 'contact', text: 'Contact' },
    { className: 'resume', text: 'Resume' }
  ];

  function scrollTo(input) {
    if (input === 'resume') {
      window.open('https://drive.google.com/drive/folders/1vQ4PuOoTukxV_RmmHZ6q0AngzDrxmQd-?usp=sharing', '_blank');
    } else {
      const el = document.getElementsByClassName(input)[0];
      if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  }
</script>

<template>
  <v-app>
    <Navbar :onHome="route.name === 'home'" @scrollTo="scrollTo" />

    <!-- Gives spacing between navigation and content below -->
    <!-- <v-spacer v-if="this.$vuetify.display.smAndDown" style="height:41.5px"></v-spacer> -->

    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:deep(.v-container, .v-container--fluid) {
  background: transparent;
}

:deep(.v-application__wrap) {
  min-height: calc(100vh - 24px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bg {
  background-color: #f7f6fa;
}
</style>
