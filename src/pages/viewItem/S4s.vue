<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import Overview from '../../components/partials/view/Overview.vue';  import ViewDefine from '../../components/partials/ViewDefine.vue';
  export default {
    name: 'S4s ',
    data() {
      return {
        siteUrl: null
      }
    },
    emits: [
      'set-image',
      'window-open',
      'toggle-banner'
    ],
    props: {
      primaryColor: {
        type: String,
        default: '#666'
      },
      secondaryColor: {
        type: String,
        default: '#aaa'
      },
      showBanner: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      imgSrc(input) {
        return new URL(`../../assets/${input}`, import.meta.url).href;
      },
      windowOpen(input) {
        this.$emit('window-open', input);
      },
      toggleBanner(input) {
        this.$emit('toggle-banner', input);
      },
      hoverAwayFromBanner() {
          setTimeout(() => {
            this.toggleBanner(false)
          }, 10000);
      }
    },
    components: {
      ViewTitleBanner,
      Overview,
      WorkImage
    }
}
</script>

<template>
  <v-row style="padding-top: 40px">
    <v-col cols="12" sm="12" md="3" lg="3" class="view-banner" :style="{ 'border-color': primaryColor }">
      <view-title-banner 
        :backgroundColor="primaryColor"
        title="Soccer for Success" 
        subtitle="An e-learning platform for coaches and players" 
        :siteUrl="siteUrl"
        :imageSrc="imgSrc('work/s4s-desktop.png')"
        :mobileSrc="imgSrc('work/s4s-mobile.png')"
        @window-open="windowOpen"
        @toggle-banner="toggleBanner"
        :showBanner="showBanner"
      >
        <template #role>
          Front-End Developer (Immersion Media)
        </template>
        <template #client>
          Immersion Media
        </template>
        <template #tools>
          React JS, CSS, JavaScript, JSON, PHP CodeIgniter, Material Design Lite
        </template>
        <template #date>
          Mar 2017 - Jun 2018
        </template>
      </view-title-banner>
    </v-col>

    <v-col offset-md="2" offset-lg="2">
      <div class="view-text" 
           :style="{ 'padding-left': '40px', 'border-bottom': '1px solid' + primaryColor }" 
           @click="$emit('toggle-banner', false)" 
           @mouseover="(showBanner === true) ? hoverAwayFromBanner() : ''">
        <overview  :color="primaryColor" noDivider>
          <template #overview>
            <p>Soccer for Success was an online e-learning platform that allows coaches to view videos and answer questions on various soccer techniques and learning principles. We've even built-in a Content Management System for Administrators, which allows them to add and update their own custom learning content and upload videos.</p>
            <p>The site was built with React on the front-end, PHP CodeIgniter on the back-end, and JSON for saving and editing content.</p>
          </template>
          <template #image>
            <v-img v-if="$vuetify.display.smAndDown" class="mx-auto" width="180" style="max-width:inherit" :src="imgSrc('work/s4s-desktop.png')" />
            <v-img v-else height="150" :src="imgSrc('work/s4s-desktop.png')" />
          </template>
        </overview>
      </div>
    </v-col>
  </v-row>
</template>