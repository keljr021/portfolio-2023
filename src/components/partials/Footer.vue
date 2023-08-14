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
    <v-row :class="{ 'footer': true, 'fixed': fixed }">
      <v-col>
        <div>
          <div class="footer-link float-left" @click="openWindow('mailto:kmjr07@yahoo.com')" title="Email kmjr07@yahoo.com">
              <v-icon class="mr-2" icon="mdi-email" variant="text"  />
              kmjr07@yahoo.com
          </div>
          <div class="footer-link float-left mx-8" @click="openWindow('mailto:keljr021@gmail.com')" title="Email keljr021@gmail.com">
              <v-icon class="mr-2" icon="mdi-email" variant="text"  />
              keljr021@gmail.com
          </div>
          <div class="footer-link float-left mx-8" @click="openWindow('https://www.linkedin.com/in/kelvin-morrisey-jr-514360a7/')" title="View LinkedIn Profile">
            <img class="footer-icon" src="../../assets/LI-black.png" alt="LinkedIn link" />
          </div>
          <div class="footer-link float-left mx-8" @click="openWindow('https://github.com/keljr021')" title="View GitHub Profile">
            <img class="footer-icon" src="../../assets/github-black.png" alt="GitHub link" />
          </div>
        </div>
      </v-col>
    </v-row>
</template>

<style scoped lang="scss">
.footer {
  margin: 0 30%;
  font-size: 85%;

  &.fixed {
    position: absolute;
    bottom: 10px;
  }

  .footer-link {
    opacity: 0.45;
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
</style>