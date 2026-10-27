<script setup>
  import WorkList from './partials/WorkList.vue';
  import Footer from '@/components/Footer.vue'
  import { ref, useTemplateRef } from 'vue';
  import { useElementVisibility } from '@vueuse/core'

  const selectedWorkType = ref('all');
  const workTypesArray = ref([
    {
      title: 'Full Design & Development',
      value: 'all'
    },
    {
      title: 'UX/UI Design',
      value: 'ux'
    },
    {
      title: 'Front-End Development',
      value: 'frontend'
    }
  ]);

  const all = useTemplateRef('all');
  const ux = useTemplateRef('ux');
  const frontend = useTemplateRef('frontend');

  const isAllVisible = useElementVisibility(all, { threshold: 0.7 });
  const isUxVisible = useElementVisibility(ux, { threshold: 0.7 });
  const isFrontendVisible = useElementVisibility(frontend, { threshold: 0.7 });

  const scrollToSection = (id) => {
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
    <v-row justify="start">
      <v-col cols="2" class="top-0 px-4">
        &nbsp;
        <div class="work-links">
          <v-col cols="2" v-if="$vuetify.display.mdAndUp">
            <div :class="{ 'work-links-item': true, 'active': isAllVisible }" @click="scrollToSection('all')">
              Full
            </div>
            <div :class="{ 'work-links-item': true, 'active': isUxVisible }" @click="scrollToSection('ux')">
              UI/UX
            </div>
            <div :class="{ 'work-links-item': true, 'active': isFrontendVisible }" @click="scrollToSection('frontend')">
              Front-End
            </div>
          </v-col>
          <v-col v-else cols="10" offset="1">
            <div>
              <v-select
                label="Work type..."
                :items="workTypesArray"
                item-title="title"
                item-value="value"
                v-model="selectedWorkType"
              ></v-select>
            </div>
          </v-col>
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

.work-section-title {
    font-size: 20px !important;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
    padding: 30px 0;
}

.scroll {
  max-height: calc(80vh - 150px);
}

@media all and (max-width: 768px) {
  .scroll {
    max-height: calc(70vh - 90px);
  }
}
</style>
