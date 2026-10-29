<script setup>
  import { onMounted, ref, watch } from 'vue';
  import { useScroll } from '@vueuse/core'
  import { useDisplay } from 'vuetify';
  import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

  const { y } = useScroll(window);
  const currentTab = ref(null);

  const showTabs = ref(true);
  const showDevelopment = ref(true);

  const problem = ref(null);
  const research = ref(null);
  const design = ref(null);
  const accessibility = ref(null);
  const development = ref(null);
  const results = ref(null);

  const previousView = ref(null);
  const nextView = ref(null);

  const sections = [
    { id: 'problem', element: problem },
    { id: 'research', element: research },
    { id: 'design', element: design },
    { id: 'accessibility', element: accessibility },
    { id: 'development', element: development },
    { id: 'results', element: results },
  ];

  const updateCurrentTab = () => {
    const activationPoint = window.innerHeight * 0.35;
    const visibleSections = sections
      .map(({ id, element }) => ({ id, bounds: element.value?.getBoundingClientRect() }))
      .filter(({ bounds }) => bounds && bounds.top < window.innerHeight && bounds.bottom > 0);

    const activeSection = visibleSections.reduce((closest, section) => {
      const distance = Math.max(section.bounds.top - activationPoint, activationPoint - section.bounds.bottom, 0);
      return !closest || distance < closest.distance
        ? { id: section.id, distance }
        : closest;
    }, null);

    currentTab.value = activeSection?.id ?? null;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    currentTab.value = null;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      currentTab.value = id;
    }
  };

  const goToView = (viewId) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant'});
    this.$router.push({ name: 'view', params: { id: viewId } });
  };
  
  watch(y, updateCurrentTab);
  
  onMounted(updateCurrentTab);
</script>

<template>
  <v-container fluid class="py-3 mx-0 my-5 bg">
    <v-row>

      <v-col :cols="$vuetify.display.mdAndDown ? 12 : 1" class="overflow-x-auto">
        <v-tabs 
          v-if="showTabs"
          v-model="currentTab"
          color="primary"
          :direction="$vuetify.display.mdAndDown ? 'horizontal' : 'vertical'"
          slider-variant="primary"
          align-tabs="start"
          :mandatory="false"
          class="view-tabs px-0"
        >
          <v-tab value="problem" @click="scrollToSection('problem')">Problem</v-tab>
          <v-tab value="research" @click="scrollToSection('research')">Research</v-tab>
          <v-tab value="design" @click="scrollToSection('design')">Design Process</v-tab>
          <v-tab value="accessibility" @click="scrollToSection('accessibility')">Accessibility</v-tab>
          <v-tab v-if="showDevelopment" value="development" @click="scrollToSection('development')">Development</v-tab>
          <v-tab value="results" @click="scrollToSection('results')">Results</v-tab>
        </v-tabs>
      </v-col>

      <v-col cols="9" offset="1">
        <div class="overflow-x-hidden overflow-y-auto">
          <v-row>
            <v-col>
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
          </v-row><v-row v-if="showDevelopment">
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

  <div class="fixed-item">
    <v-row class="fixed-item-button">
      <v-col class="text-right mx-5 my-2">
        <v-tooltip text="Scroll to top" location="left">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="#18184d" variant="outlined" icon="mdi-menu-up" style="background-color:white" @click="scrollToTop"></v-btn>
          </template>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="fixed-item-menu" justify="space-between">
      <v-col cols="4" class="text-left">
        <v-btn v-if="previousView !== null" class="px-3" variant="flat" :block="$vuetify.display.xs" @click="goToView(previousView)">
          <v-icon class="mr-2">mdi-arrow-left</v-icon>
          Previous <span v-if="$vuetify.display.mdAndUp">&nbsp;Item</span>
        </v-btn>
      </v-col>
      <v-col cols="4" class="text-center">
        <v-btn class="px-3" variant="flat" :block="$vuetify.display.xs" :to="{ name: 'work' }">
            <v-icon class="mr-2">mdi-view-list</v-icon>
            Return <span v-if="$vuetify.display.mdAndUp">&nbsp;to List</span>
        </v-btn>
      </v-col>
      <v-col cols="4" class="text-right">
        <v-btn v-if="nextView !== null" class="px-3" variant="flat" :block="$vuetify.display.xs" @click="goToView(nextView)">
          Next <span v-if="$vuetify.display.mdAndUp">&nbsp;Item</span>
          <v-icon class="mr-2">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
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
