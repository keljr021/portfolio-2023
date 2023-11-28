<script>
export default {
    name: 'Footer',
    props: {
      fixed: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      openWindow(input) {
        window.open(input, '_blank');
      }
    }
}
</script>

<template>
    <v-row class="footer fixed" :class="{ 'relative': $route.name === 'view' || $route.name === 'about'}">
      <v-spacer></v-spacer>
      <v-col cols="12" class="text-center">
          <span class="footer-link" @click="openWindow('mailto:kmjr07@yahoo.com')" title="Email kmjr07@yahoo.com">
              <v-icon class="mr-2 mt-0" icon="mdi-email" variant="text"  />
              <span v-if="!$vuetify.display.xs">kmjr07@yahoo.com</span>
          </span>
          <span class="footer-link mx-lg-8 mb-2" @click="openWindow('mailto:keljr021@gmail.com')" title="Email keljr021@gmail.com">
              <v-icon class="mr-2 mt-0" icon="mdi-email" variant="text"  />
              <span v-if="!$vuetify.display.xs">keljr021@gmail.com</span>
          </span>
          <span class="footer-link mx-lg-8 mb-2" @click="openWindow('https://www.linkedin.com/in/kelvin-morrisey-jr-514360a7/')" title="View LinkedIn Profile">
            <img class="footer-icon" src="../../assets/LI-white.png" alt="LinkedIn link" />
          </span>
          <span class="footer-link mx-lg-8 mb-2" @click="openWindow('https://github.com/keljr021')" title="View GitHub Profile">
            <img class="footer-icon" src="../../assets/github-white.png" alt="GitHub link" />
          </span>
          <span class="footer-link mx-lg-8 mb-2" @click="openWindow('https://dribbble.com/keljr021')" title="View Dribbble Profile">
            <img class="footer-icon" src="../../assets/dr-logo-white.png" alt="Dribbble link" />
          </span>
          <span class="footer-link mx-lg-8 mb-2" @click="openWindow('https://www.behance.net/kelvin-m')" title="View Behance Profile">
            <img class="footer-icon" src="../../assets/be-logo-alt2-white.png" alt="Behance link" />
          </span>
        </v-col>
      <v-spacer></v-spacer>
    </v-row>
</template>

<style scoped lang="scss">
.footer {
  width: calc(100% - 40px);
  font-size: 95%;
  position: absolute;
  bottom: 0;
  margin: 0;

  &.relative {
    position: relative;
  }

  .footer-link {
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
  .footer-icon {
    height: 20px;
  }
}

@media all and (min-width: 768px) and (max-width: 1023px) {

  .footer-link {
    width: calc(25% - 80px);
    margin: 10px 40px;
    text-align: center;
  }
}

@media all and (max-width: 767px) {

  .footer-link {
    width: calc(25% - 60px);
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 25px;
    margin-left: 0;
    text-align: center;
  }
}
</style>