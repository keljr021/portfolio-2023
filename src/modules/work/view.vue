<script setup>
  import { onMounted, ref, watch } from 'vue';
  import { useScroll } from '@vueuse/core'
  import { useRoute, useRouter } from 'vue-router';

  import Title from '@/modules/work/partials/Title.vue';
  import Overview from '@/modules/work/partials/Overview.vue';
  import Research from '@/modules/work/partials/Research.vue';
  import Design from '@/modules/work/partials/Design.vue';
  import Mockups from '@/modules/work/partials/Mockups.vue';
  import Accessibility from '@/modules/work/partials/Accessibility.vue';
  import Development from '@/modules/work/partials/Development.vue';
  import Results from '@/modules/work/partials/Results.vue';
  import LessonsLearned from '@/modules/work/partials/LessonsLearned.vue';

  const route = useRoute();
  const router = useRouter();
  const { y } = useScroll(window);
  const currentTab = ref(null);

  const showTabs = ref(false);
  const showDevelopment = ref(false);

  const previousView = ref(null);
  const nextView = ref(null);

  const sections = ['overview', 'research', 'design', 'development', 'mockups', 'accessibility', 'results'];

  const data = ref(null);
  const workDataLoaders = import.meta.glob('./items/*.js');

  const loadWorkInfo = async (workId) => {
    data.value = null;
    const modulePath = `./items/${workId}.js`;
    const loadModule = workDataLoaders[modulePath];

    if (!loadModule) {
      showTabs.value = false;
      showDevelopment.value = false;
      console.error(`No work data module found for work ID "${workId}".`);
      return;
    }

    data.value = await loadModule();
    const workType = data.value.info?.type;

    previousView.value = data.value.prevLink ? data.value.prevLink : null;
    nextView.value = data.value.nextLink ? data.value.nextLink : null;

    showTabs.value = (workType !== 'frontend');
    showDevelopment.value = (data.value.dev !== undefined);
  };

  const getSectionElement = (id) => document.getElementById(id);

  const updateCurrentTab = () => {
    const activationPoint = window.innerHeight * 0.35;
    const visibleSections = sections
      .map((id) => ({ id, bounds: getSectionElement(id)?.getBoundingClientRect() }))
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
    const section = getSectionElement(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      currentTab.value = id;
    }
  };

  const goToView = (viewId) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant'});
    router.push({ name: 'view', params: { id: viewId } });
  };
  
  watch(y, updateCurrentTab);
  watch(() => route.params.id, loadWorkInfo, { immediate: true });
  
  onMounted(() => {
    updateCurrentTab();
  });
</script>

<template>
  <v-container fluid class="py-3 mx-0 my-5 bg">
    <v-row>

      <v-col cols="12" sm="12" md="1" lg="1" class="overflow-x-auto">
        <div v-if="data?.info?.type !== 'frontend'" class="view-tabs px-0">
          <div :class="{ 'view-tabs-title': true, 'show': currentTab !== null }">{{ data?.info?.title }}</div>
          <v-tabs 
            v-if="showTabs"
            v-model="currentTab"
            color="primary"
            :direction="$vuetify.display.smAndDown ? 'horizontal' : 'vertical'"
            slider-variant="primary"
            align-tabs="start"
            :mandatory="false"
          >
            <v-tab value="overview" @click="scrollToSection('overview')">Overview</v-tab>
            <v-tab value="research" @click="scrollToSection('research')">Research</v-tab>
            <v-tab value="design" @click="scrollToSection('design')">Design</v-tab>
            <v-tab value="mockups" @click="scrollToSection('mockups')">Mockups</v-tab>
            <v-tab v-if="showDevelopment" value="development" @click="scrollToSection('development')">Development</v-tab>
            <v-tab value="accessibility" @click="scrollToSection('accessibility')">Accessibility</v-tab>
            <v-tab value="results" @click="scrollToSection('results')">Results</v-tab>
          </v-tabs>
        </div>
      </v-col>

      <v-col v-if="data" cols="12" sm="12" md="10" lg="10" offset-md="1" offset-lg="1">
        <div class="overflow-x-hidden overflow-y-auto">
          <v-row>
            <v-col>
              <Title :input="data.info" />
            </v-col>
          </v-row>
          <v-row v-if="data.overview" class="justify-space-around">
            <v-col>
              <Overview :input="data.overview" />
            </v-col>
          </v-row>
          <v-row v-if="data.research" class="justify-space-around">
            <v-col>
              <Research :input="data.research" />
            </v-col>
          </v-row>
          <v-row v-if="data.design" class="justify-space-around">
            <v-col>
              <Design :input="data.design" />
            </v-col>
          </v-row>
          <v-row v-if="data.mockups">
            <v-col>
              <Mockups :input="data.mockups" />
            </v-col>
          </v-row>
          <v-row v-if="showDevelopment">
            <v-col>
              <Development :input="data.dev" />
            </v-col>
          </v-row>
          <v-row v-if="data.accessibility" class="justify-space-around">
            <v-col>
              <Accessibility :input="data.accessibility" />
            </v-col>
          </v-row>
          <v-row v-if="data.results || data.lessons" class="justify-space-around">
            <v-col cols="12" sm="12" md="6" lg="6">
              <Results :input="data.results" />
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <LessonsLearned :input="data.lessons" />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

  </v-container>

  <div class="fixed-item">
    <v-row class="fixed-item-button fixed-item-scroll">
      <v-col class="text-right mx-5 my-2">
        <v-tooltip text="Scroll to top" location="left">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="mx-2" color="#aaa" variant="outlined" icon="mdi-menu-up" style="background-color:white" @click="scrollToTop"></v-btn>
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

<style lang="scss">
.bg {
  background-color: #f7f6fa;
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
  max-width: 150px;

  .view-tabs-title {
    font-size: 16px;
    font-weight: 500;
    padding: 10px 0;
    opacity: 0;
    transition: opacity ease-in-out 0.3s;

    &.show {
      opacity: 1;
    }
  }  

  .v-btn {
    font-weight: initial;
  }
}

.section-header {
  font-size: 28px;
}

.section-caption {
  font-weight: 500;
}

.fixed-top-button {
  position: fixed;
  bottom: 0;
  right: 0;
}

.fixed-item-menu {
  background: #fff;
  opacity: 0.45;

  &:hover {
    opacity: 1;
  }
}

.fixed-item-return {
  display: none;
}

:deep(.v-container) {
  padding-top: 41.5px !important;
  margin-bottom: 50px;
}

p, li {
    font-size: 1.05em;
    line-height: 1.5;
  }

p {
  padding-bottom: 15px;
}

ol, ul {
  padding-left: 20px;
}

li {
  padding-bottom: 10px;
}


@media all and (min-width: 769px) and (max-width: 1023px) {
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

  .view-tabs {
    top: 30px;
    left: 0;
    max-width: 100vw;
    overflow-x: scroll;
    background: #f9f9f9;
    z-index: 1;

    .view-tabs-title {
      text-align: left;
      padding: 20px;
    }
  }

  .fixed-item-return {
    display: initial;
  }
}
</style>
