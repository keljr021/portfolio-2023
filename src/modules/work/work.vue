<script setup>
  import WorkList from './partials/WorkList.vue';
  import Footer from '@/components/Footer.vue'
  import { ref, useTemplateRef } from 'vue';
  import { useElementVisibility } from '@vueuse/core'

  const selectedWorkType = ref('all');
  const workTypesArray = ref([
    {
      title: 'Full Design & Development',
      selector: 'Full',
      value: 'all'
    },
    {
      title: 'UX/UI Design',
      selector: 'UX/UI',
      value: 'ux'
    },
    {
      title: 'Front-End Development',
      selector: 'Front-End',
      value: 'frontend'
    }
  ]);

  const isAllVisible = useElementVisibility(useTemplateRef('all'), { threshold: 0.7 });
  const isUxVisible = useElementVisibility(useTemplateRef('ux'), { threshold: 0.7 });
  const isFrontendVisible = useElementVisibility(useTemplateRef('frontend'), { threshold: 0.7 });

  const scrollToSection = (id) => {
    debugger;
    const element = document.querySelector(`#` + id);
    if (element) {
      element.scrollIntoView({ top: element.scrollHeight, behavior: 'smooth' });
      selectedWorkType.value = id;
    }

    switch(id) {
      case 'all':
        isAllVisible.value = true;
        isUxVisible.value = false;
        isFrontendVisible.value = false;
        break;
      case 'ux':
        isAllVisible.value = false;
        isUxVisible.value = true;
        isFrontendVisible.value = false;
        break;
      case 'frontend':
        isAllVisible.value = false;
        isUxVisible.value = false;
        isFrontendVisible.value = true;
        break;
    }
  };
</script>

<template>
  <v-container fluid class="work">
    <v-row class="pa-4">
      <v-col>
        <div class="work-title px-4 py-2">Work</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" sm="2" md="2" lg="2" class="px-4">
        <div class="work-links pl-4" v-if="$vuetify.display.mdAndUp">
          <div :class="{ 'work-links-item': true, 'active': isAllVisible }" @click="scrollToSection('all')">
            Full
          </div>
          <div :class="{ 'work-links-item': true, 'active': isUxVisible }" @click="scrollToSection('ux')">
            UI/UX
          </div>
          <div :class="{ 'work-links-item': true, 'active': isFrontendVisible }" @click="scrollToSection('frontend')">
            Front-End
          </div>
        </div>

        <div v-else>
          <v-select
            class="work-menu"
            label="Work type..."
            :items="workTypesArray"
            item-title="selector"
            item-value="value"
            v-model="selectedWorkType"
            @update:modelValue="scrollToSection(selectedWorkType)"
          ></v-select>
        </div>
        
      </v-col>
      <v-col cols="10" class="px-4">
        <div v-for="(item, index) in workTypesArray" :key="index" class="mb-8" :id="item.value">
          <div class="work-section-title" :ref="item.value">{{ item.title }}</div>
          <WorkList :workType="item.value" />
        </div>
      </v-col>
    </v-row>

    <Footer :onHomePage="false" />
  </v-container>
</template>

<style scoped lang="scss">
.v-container--fluid {
  height: calc(100% - 73.5px) !important;
}

.work-type {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.work-title {
    font-size: 28px;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
    padding: 30px 0 10px 0;
}

.work-links {
  position: sticky;
  top: 140px;
  left: 0;
  z-index: 1;

  .work-links-item {
    opacity: 0.6;
    padding: 10px 0;
    transition: opacity 0.4s ease-in-out;
    cursor: pointer;
  }

  .work-links-item:hover {
    opacity: 0.8;
  }

  .work-links-item.active {
    opacity: 1;
    text-decoration: underline;
  }
}

.work-menu {
  position: fixed;
  top: 60px;
  right: 0;
}

.work-section-title {
    font-size: 20px !important;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
    padding-bottom: 30px;
}

@media all and (max-width: 768px) {

  .work-links {
    position: relative;
    top: initial;
    left: initial;
  }
}
</style>
