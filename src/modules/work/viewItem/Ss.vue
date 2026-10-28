<script setup>
  import WorkImage from '../partials/WorkImage.vue';
  import ViewTitleBanner from '../partials/ViewTitleBanner.vue';
  import Overview from '@/components/partials/view/Overview.vue';  
  const siteUrl = 'https://web.archive.org/web/20180105122544/https://scoreshots.com/';
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
    <v-col cols="12" sm="12" md="3" lg="3" class="view-banner" :style="{ 'background-color': primaryColor }">
      <view-title-banner 
        :backgroundColor="primaryColor"
        title="ScoreShots 2.0"
        subtitle="A platform to create and share infographics"
        :siteUrl="siteUrl"
        :imageSrc="$imageSrc('work/ss-desktop.png')"
        @window-open="windowOpen"
        @toggle-banner="toggleBanner"
        :showBanner="showBanner"
      >
        <template #role>
          Front-End Developer (Immersion Media)
        </template>
        <template #client>
          Immersion Media/ScoreShots
        </template>
        <template #tools>
          HTML, CSS, JavaScript, jQuery, PHP CodeIgniter
        </template>
        <template #date>
          Aug 2016 - Jan 2018
        </template>
      </view-title-banner>
    </v-col>
    <v-col offset-md="3" offset-lg="3">
      <div class="view-text" 
           :style="{ 'padding-left': '40px', 'border-bottom': '1px solid' + primaryColor }" 
           @click="$emit('toggle-banner', false)" 
           >
    <overview  :color="primaryColor" noDivider>
      <template #overview>
        <p>ScoreShots is Immersion Media's in-house website. It allows a user to create a web-based sports infographic (ie. ScoreShot) using the user's custom colors, fonts, and images. A user can submit the finished graphic to their phone, download it to their computer, and even submit it to their own Facebook or Twitter account.</p>
        <p>The entire development team at Immersion each pulled their weight with the re-design of the ScoreShots interface from 1.0 to version 2.0; and in the process added several new features on the new site as well. We've each had a part of every page; with successful results.</p>

        <v-row justify="space-evenly" class="py-8">
          <v-col>
            <div class="view-text-section-title">Features</div>
            <ul>
              <li>Uses an built-in image editor to create an infographic</li>
              <li>Images and logos are able to be uploaded and saved onto their accounts</li>
              <li>Ability to export XML files for team scores into the editor</li>
              <li>Enables social media connections with Facebook and Twitter to post their graphic</li>
            </ul>
          </v-col>
        </v-row>

      </template>
      <template #image>
            <v-img v-if="$vuetify.display.smAndDown" class="mx-auto" width="180" style="max-width:inherit" :src="$imageSrc('work/ss-desktop.png')" />
            <v-img v-else height="150" :src="$imageSrc('work/ss-desktop.png')" />
          </template>
    </overview>

      </div>
    </v-col>
  </v-row>
</template>