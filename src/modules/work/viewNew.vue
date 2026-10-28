<script setup>
  import { ref, useTemplateRef, onMounted, onUnmounted } from 'vue';
  import { useElementVisibility, useScroll, useElementSize } from '@vueuse/core'
  import { useDisplay } from 'vuetify';
  import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

  import Footer from '@/components/Footer.vue'

  const currentTab = ref(null);
  const { y } = useScroll(window);

  const problemPos = 400;
  const researchPos = 800;
  const designPos = 1200;
  const accessibilityPos = 1600;
  const developmentPos = 1900;
  const resultsPos = 2200;

  const checkIfSectionVisible = () => {
    const isProblemVisible = y.value >= problemPos && y.value < researchPos;
    const isResearchVisible = y.value >= researchPos && y.value < designPos;
    const isDesignVisible = y.value >= designPos && y.value < accessibilityPos;
    const isAccessibilityVisible = y.value >= accessibilityPos && y.value < developmentPos;
    const isDevelopmentVisible = y.value >= developmentPos && y.value < resultsPos;
    const isResultsVisible = y.value >= resultsPos;

    currentTab.value = null;

    if (isProblemVisible) currentTab.value = 'problem';
    if (isResearchVisible) currentTab.value = 'research';
    if (isDesignVisible) currentTab.value = 'design';
    if (isAccessibilityVisible) currentTab.value = 'accessibility';
    if (isDevelopmentVisible) currentTab.value = 'development';
    if (isResultsVisible) currentTab.value = 'results';

    console.log('y:', y.value, 'Current Tab:', currentTab.value);
  };

 const scrollToSection = (id) => {
    const element = document.querySelector(`#` + id);
    if (element) {
      element.scrollIntoView({ top: element.scrollHeight, behavior: 'smooth' });
      currentTab.value = id;
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', checkIfSectionVisible);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', checkIfSectionVisible);
  });
</script>

<template>
  <v-container fluid class="py-3 mx-0 my-5 bg">
    <v-row>

      <v-col :cols="$vuetify.display.mdAndDown ? 12 : 1" class="overflow-x-auto">
        <v-tabs 
          v-model="currentTab"
          color="primary"
          :direction="$vuetify.display.mdAndDown ? 'horizontal' : 'vertical'"
          slider-variant="primary"
          align-tabs="start"
          mandatory="false"
          class="view-tabs px-0"
        >
          <v-tab value="problem" @click="scrollToSection('problem')">Problem</v-tab>
          <v-tab value="research" @click="scrollToSection('research')">Research</v-tab>
          <v-tab value="design" @click="scrollToSection('design')">Design Process</v-tab>
          <v-tab value="accessibility" @click="scrollToSection('accessibility')">Accessibility</v-tab>
          <v-tab value="development" @click="scrollToSection('development')">Development</v-tab>
          <v-tab value="results" @click="scrollToSection('results')">Results</v-tab>
        </v-tabs>
      </v-col>

      <v-col cols="9" offset="1">
        <div class="overflow-x-hidden overflow-y-auto" @scroll.passive="checkIfSectionVisible">
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-card class="my-12 pa-4" variant="flat" ref="title" height="300">
                Title
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-card class="ma-8 pa-4" variant="flat" height="300">
                Intro
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-card class="ma-8 pa-4" variant="flat" height="300">
                <div ref="problem" id="problem" class="overflow-y-auto">
                  Problem
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-card class="ma-8 pa-4 overflow-y-auto" variant="flat" height="300">
                <div ref="research" id="research" class="overflow-y-auto">
                  Research
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-card class="ma-8 pa-4" variant="flat" height="300">
                <div ref="design" id="design" class="overflow-y-auto">
                  Design Process
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-card class="ma-8 pa-4" variant="flat" height="300">
                <div ref="accessibility" id="accessibility" class="overflow-y-auto">
                  Accessibility
                </div>
              </v-card>
            </v-col>
          </v-row><v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-card class="ma-8 pa-4" variant="flat" height="300">
                <div ref="development" id="development" class="overflow-y-auto">
                  Development
                </div>
              </v-card>
            </v-col>
          </v-row><v-row>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-card class="ma-8 pa-4" variant="flat" height="300">
                <div ref="results" id="results" class="overflow-y-auto">
                  Results
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-card class="ma-8 pa-4" variant="flat" height="300">
                What I learned
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>



    </v-row>

  </v-container>
</template>

<style scoped lang="scss">
.bg {
  background-color: #f6f6f6;
  padding: 40px;
  overflow-x: hidden;
  overflow-y: auto;
}

.fixed-item {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1;
  transition: opacity ease-in-out 0.5;

  :deep(.v-btn) {
    opacity: 0.4;
  }

  &:hover {
    :deep(.v-btn--icon) {
      opacity: 1;
    }
  }
}

.view-tabs {
  position: fixed;
  top: 80px;

  :deep(.v-btn__content) {
    font-weight: initial;
  }
}

.fixed-top-button {
  position: fixed;
  bottom: 0;
  right: 0;
}

.fixed-item-menu {
  background: #fff;
  padding-left: calc(26% + 5px);
  opacity: 0.85;

  &:hover {
    opacity: 1;
  }
}

:deep(.v-container) {
  padding-top: 41.5px !important;
  margin-bottom: 50px;
}

:deep(.view-banner) {
  position:fixed;
  max-height: 100vh;
  z-index: 2;
  overflow: hidden;
  background: #fff;
  transition: ease-in-out all .2s;
  padding-right: 0;
  margin-right: 0;
  max-width: 26vw;
  color: #e6e6e6;

  &:hover {
    overflow-y: auto;
    background: #f9f9f9;
  }
}

:deep(.view-text) {
  background-color: #f6f6f6;
  padding-left: 20px;
  padding-right: 20px;
  min-height: calc(85vh - 50px); 

  .view-text-cta {
    font-size: 36px;
  }
  
  .view-text-title {
    padding-bottom: 30px;
    font-size: 24px;
    font-weight: bold;
  }

  .view-text-overview {
    padding: 60px 0;
  }

  .view-text-section {
    padding-top: 50px;
    padding-bottom: 75px;
  }

  .view-text-section-title {
    font-size: 1.25em;
    font-weight: 500;
    padding: 30px 0;

    &.link {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p, li {
      font-size: 1.1em;
      line-height: 2.5;
    }

  p {
    padding-bottom: 30px;
  }

  ol, ul {
    padding-left: 20px;
  }

  li {
    padding-bottom: 20px;
  }
}

@media all and (min-width: 769px) and (max-width: 1023px) {
  :deep(.view-banner) {
    position:initial;
    top: 30px;
    left: 0;
    max-height: initial;
    border-right: none;
    overflow-y: auto;
    background: #f9f9f9;
  }

  :deep(.view) {
    &.lock-scroll {
      .view-text {
        position: fixed;
      }
    }
  }
}

@media all and (max-width: 768px) {
  .fixed-item-menu {
    width: 100%;
    padding: 0;
    margin: 0 2px;
    opacity: 1;
  }


  :deep(.view) {

    &.lock-scroll {
      .view-text {
        position: fixed;
      }
    }
  }

  :deep(.view-banner) {
    position:initial;
    top: 0;
    left: 0;
    max-height: initial;
    max-width: initial;
    border-right: none;
    overflow-y: auto;
    background: #f9f9f9;
  }

  .view-tabs {
    top: 30px;
    left: 0;
    max-width: 100vw;
    overflow-x: scroll;
    background: #f9f9f9;
    z-index: 1;
  }

  :deep(.view-text) {
    min-height: initial; 

    .view-text-overview {
      padding: 40px 0 !important;
    }

    .view-text-section-title {
      padding-bottom: 50px;
    }
  }
}
</style>
