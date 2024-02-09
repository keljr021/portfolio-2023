<script>
export default {
    name: 'Footer',
    data() {
        return {
            onHomePage: false
        };
    },
    props: {
      fixed: {
        type: Boolean,
        default: false
      },
      onHomePage: {
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
    <v-row v-if="$vuetify.display.smAndDown" class="footer fixed">
      <v-col class="text-right">
        <v-menu transition="slide-x-reverse-transition" :theme="onHomePage ? 'dark' : 'light'">
          <template v-slot:activator="{ props }">
            <v-btn
              flat
              color="transparent"
              v-bind="props">
              <v-icon icon="mdi-dots-horizontal" class="mr-2" variant="text"  />
              Reach Out
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="openWindow('https://github.com/keljr021/portfolio-2023')">
              <v-icon class="mr-4" icon="mdi-code-tags" variant="text"  />
              <span>View Code</span>
            </v-list-item>
            <v-list-item @click="openWindow('mailto:kmjr07@yahoo.com')">
              <v-icon class="mr-4" icon="mdi-email" variant="text"  />
              <span>kmjr07@yahoo.com</span>
            </v-list-item>
            <v-list-item @click="openWindow('mailto:keljr021@gmail.com')">
              <v-icon class="mr-4" icon="mdi-email" variant="text"  />
              <span>keljr021@gmail.com</span>
            </v-list-item>
            <v-list-item @click="openWindow('https://www.linkedin.com/in/kelvin-morrisey-jr-514360a7/')">
              <span class="mr-4">
                <img v-if="onHomePage" class="footer-icon" src="../../assets/LI-white.png" alt="LinkedIn link" />
                <img v-else class="footer-icon" src="../../assets/LI-black.png" alt="LinkedIn link" />
              </span>
              <span>LinkedIn</span>
            </v-list-item>
            <v-list-item @click="openWindow('https://github.com/keljr021')">
              <v-icon class="mr-4" icon="mdi-github" variant="text"  />
              <span>GitHub</span>
            </v-list-item>
            <v-list-item @click="openWindow('https://dribbble.com/keljr021')">
              <span class="mr-4">
                <img v-if="onHomePage" class="footer-icon" src="../../assets/dr-logo-white.png" alt="Dribbble link" />
                <img v-else class="footer-icon" src="../../assets/dr-logo.png" alt="Dribbble link" />
              </span>
              <span>Dribbble</span>
            </v-list-item>
            <v-list-item  @click="openWindow('https://www.behance.net/kelvin-m')">
              <span class="mr-4">
                <img v-if="onHomePage" class="footer-icon" src="../../assets/be-logo-alt2-white.png" alt="Behance link" />
                <img v-else class="footer-icon" src="../../assets/be-logo-alt2.png" alt="Behance link" />
              </span>
              <span>Behance</span>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>


    <v-row v-else class="footer fixed" :class="{ 'relative': $route.name === 'view' || $route.name === 'about'}">
      <v-col class="text-center">
        <span class="footer-link mx-md-6 mx-lg-8 mb-2" @click="openWindow('https://github.com/keljr021/portfolio-2023')" title="View Portfolio Code">
            <v-icon class="mr-2 mt-0" icon="mdi-code-tags" variant="text"  />
            <span>View Code</span>
          </span>
          <span class="footer-link" @click="openWindow('mailto:kmjr07@yahoo.com')" title="Email kmjr07@yahoo.com">
              <v-icon class="mr-2 mt-0" icon="mdi-email" variant="text"  />
              <span>kmjr07@yahoo.com</span>
          </span>
          <span class="footer-link mx-md-6 mx-lg-8 mb-lg-2" @click="openWindow('mailto:keljr021@gmail.com')" title="Email keljr021@gmail.com">
              <v-icon class="mr-2 mt-0" icon="mdi-email" variant="text"  />
              <span>keljr021@gmail.com</span>
          </span>
          <span class="footer-link mx-md-6 mx-lg-8 mb-lg-2" @click="openWindow('https://www.linkedin.com/in/kelvin-morrisey-jr-514360a7/')" title="View LinkedIn Profile">
            <img v-if="onHomePage" class="footer-icon" src="../../assets/LI-white.png" alt="LinkedIn link" />
            <img v-else class="footer-icon" src="../../assets/LI-black.png" alt="LinkedIn link" />
          </span>
          <span class="footer-link mx-md-6 mx-lg-8 mb-2" @click="openWindow('https://github.com/keljr021')" title="View GitHub Profile">
            <img v-if="onHomePage" class="footer-icon" src="../../assets/github-white.png" alt="GitHub link" />
            <img v-else class="footer-icon" src="../../assets/github-black.png" alt="GitHub link" />
          </span>
          <span class="footer-link mx-md-6 mx-lg-8 mb-2" @click="openWindow('https://dribbble.com/keljr021')" title="View Dribbble Profile">
            <img v-if="onHomePage" class="footer-icon" src="../../assets/dr-logo-white.png" alt="Dribbble link" />
            <img v-else class="footer-icon" src="../../assets/dr-logo.png" alt="Dribbble link" />
          </span>
          <span class="footer-link mx-md-6 mx-lg-8 mb-2" @click="openWindow('https://www.behance.net/kelvin-m')" title="View Behance Profile">
            <img v-if="onHomePage" class="footer-icon" src="../../assets/be-logo-alt2-white.png" alt="Behance link" />
            <img v-else class="footer-icon" src="../../assets/be-logo-alt2.png" alt="Behance link" />
          </span>
        </v-col>
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

@media all and (max-width: 767px) {

  .footer-icon {
    height: 20px;
  }
}
</style>