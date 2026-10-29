<script setup>
  import { onMounted, ref, watch } from 'vue';
  import { useScroll } from '@vueuse/core'
  import { useDisplay } from 'vuetify';
  import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

  import Title from '@/modules/work/partialsNew/Title.vue';
  import Intro from '@/modules/work/partialsNew/Intro.vue';
  import Problem from '@/modules/work/partialsNew/Problem.vue';
  import Research from '@/modules/work/partialsNew/Research.vue';
  import Design from '@/modules/work/partialsNew/Design.vue';
  import Accessibility from '@/modules/work/partialsNew/Accessibility.vue';
  import Development from '@/modules/work/partialsNew/Development.vue';
  import Results from '@/modules/work/partialsNew/Results.vue';
  import LessonsLearned from '@/modules/work/partialsNew/LessonsLearned.vue';

  const { y } = useScroll(window);
  const currentTab = ref(null);

  const showTabs = ref(true);
  const showDevelopment = ref(true);

  const previousView = ref(null);
  const nextView = ref(null);

  const sections = ['problem', 'research', 'design', 'development', 'accessibility', 'results'];

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
          <v-tab value="design" @click="scrollToSection('design')">Design approach</v-tab>
          <v-tab v-if="showDevelopment" value="development" @click="scrollToSection('development')">Development</v-tab>
          <v-tab value="accessibility" @click="scrollToSection('accessibility')">Accessibility</v-tab>
          <v-tab value="results" @click="scrollToSection('results')">Results</v-tab>
        </v-tabs>
      </v-col>

      <v-col cols="9" offset="1">
        <div class="overflow-x-hidden overflow-y-auto">
          <v-row>
            <v-col>
              <Title />
            </v-col>
          </v-row>
          <v-row class="justify-space-around">
            <v-col cols="12" sm="12" md="12" lg="12">
              <Problem />
            </v-col>
          </v-row>
          <v-row class="justify-space-around">
            <v-col cols="12" sm="12" md="12" lg="12">
              <Research />
            </v-col>
          </v-row>
          <v-row class="justify-space-around">
            <v-col cols="12" sm="12" md="12" lg="12">
              <Design />
            </v-col>
          </v-row>
          <v-row v-if="showDevelopment">
            <v-col cols="12" sm="12" md="12" lg="12">
              <Development />
            </v-col>
          </v-row>
          <v-row class="justify-space-around">
            <v-col cols="12" sm="12" md="12" lg="12">
              <Accessibility />
            </v-col>
          </v-row>
          <v-row class="justify-space-around">
            <v-col cols="12" sm="12" md="6" lg="6">
              <Results />
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <LessonsLearned />
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

<style lang="scss">
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

.section-header {
  font-size: 28px;
}

.section-caption {
  font-weight: 500;
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
  }
}
</style>
