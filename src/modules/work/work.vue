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
      icon: 'mdi-pencil-ruler',
      value: 'all'
    },
    {
      title: 'UX/UI Design',
      selector: 'UX/UI',
      icon: 'mdi-palette-outline',
      value: 'ux'
    },
    {
      title: 'Front-End Development',
      selector: 'Front-End',
      icon: 'mdi-code-tags',
      value: 'frontend'
    }
  ]);

  const isAllVisible = useElementVisibility(useTemplateRef('all'), { threshold: 0.7 });
  const isUxVisible = useElementVisibility(useTemplateRef('ux'), { threshold: 0.7 });
  const isFrontendVisible = useElementVisibility(useTemplateRef('frontend'), { threshold: 0.7 });

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
  <v-container fluid class="work bg">
    <v-row class="pa-4">
      <v-col>
        <div class="work-title px-4 py-2">Work</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" sm="2" md="2" lg="2" class="px-4">
        <div class="work-links pl-4" v-if="$vuetify.display.mdAndUp">
          <v-chip class="work-links-chip" size="large" :color="isAllVisible ? 'indigo-darken-3' : ''" :variant="isAllVisible ? 'tonal' : 'plain'" prepend-icon="mdi-pencil-ruler" @click="scrollToSection('all')">Full Project</v-chip>
          <v-chip class="work-links-chip" size="large" :color="isUxVisible ? 'teal-darken-2' : ''" :variant="isUxVisible ? 'tonal' : 'plain'" prepend-icon="mdi-palette-outline" @click="scrollToSection('ux')">UX/UI</v-chip>
          <v-chip class="work-links-chip" size="large" :color="isFrontendVisible ? 'blue-darken-3' : ''" :variant="isFrontendVisible ? 'tonal' : 'plain'" prepend-icon="mdi-code-tags" @click="scrollToSection('frontend')">Front-End</v-chip>
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
      <v-col cols="11" sm="11" md="10" lg="10" class="px-4">
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
  position: fixed;
  top: 180px;
  left: 0;
  width: 200px;
  z-index: 1;

  .work-links-chip {
    width: 100%;
    margin: 10px 30px;
    clear: both;
  }
}

.work-menu {
  display: none;
  position: fixed;
  top: 80px;
  right: 0;
  z-index: 1;
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
