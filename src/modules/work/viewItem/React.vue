<script setup>
  import ViewTitleBanner from '../partials/ViewTitleBanner.vue';
  import WorkImage from '../partials/WorkImage.vue';
  import Overview from '@/components/partials/view/Overview.vue';
  const siteUrl = 'http://poc.kelvin-m.com/react-calculator/';
  const githubUrl = 'https://github.com/keljr021/react-calculator';
  const emit = defineEmits(['set-image', 'window-open', 'toggle-banner']);
  defineProps({
    primaryColor: { type: String, default: '#666' },
    secondaryColor: { type: String, default: '#aaa' },
    showBanner: { type: Boolean, default: false }
  });

  function windowOpen(input) {
    emit('window-open', input);
  }

  function toggleBanner(input) {
    emit('toggle-banner', input);
  }
</script>

<template>
    <v-row>
      <v-col cols="12" sm="12" md="3" lg="3" class="view-banner" :style="{ 'background-color': '#fff', 'color': '#666' }">
        <view-title-banner 
          :backgroundColor="primaryColor"
          title="React Calculator" 
          subtitle="A calculator component built with React JS" 
          :siteUrl="siteUrl"
          :githubUrl="githubUrl"
          :imageSrc="$imageSrc('work/react-desktop.png')"
          @window-open="windowOpen"
          @toggle-banner="toggleBanner"
          :showBanner="showBanner"
        >
          <template #role>
            Front-End Developer
          </template>
          <template #tools>
            React JS
          </template>
          <template #date>
            Mar 2019
          </template>
        </view-title-banner>
      </v-col>

      <v-col offset-md="3" offset-lg="3">
        <div class="view-text" 
           @click="$emit('toggle-banner', false)" 
           >
            <overview :color="primaryColor" noDivider>
              <template #overview>
                <p>This is a basic calculator component built with React. The component itself performs basic math calculations, allowing the user to click the buttons on screen, or key in the values themselves using the keyboard.</p>
              </template>
              <template #image>
                <v-img v-if="$vuetify.display.smAndDown" class="mx-auto" width="180" style="max-width:inherit" :src="$imageSrc('work/react-desktop.png')" />
                <v-img v-else height="150" :src="$imageSrc('work/react-desktop.png')" />
              </template>
            </overview>

          </div>
      </v-col>
    </v-row>
</template>