<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import ViewOverview from '../../components/partials/ViewOverview.vue';
  import ViewDefine from '../../components/partials/ViewDefine.vue';
  import ViewSolution from '../../components/partials/ViewSolution.vue';
  import ViewResults from '../../components/partials/ViewResults.vue';
  import ViewTakeaways from '../../components/partials/ViewTakeaways.vue';
  export default {
    name: 'S4s ',
    data() {
      return {
        siteUrl: null
      }
    },
    emits: [
      'set-image',
      'window-open'
    ],
    props: {
      primaryColor: {
        type: String,
        default: '#666'
      },
      secondaryColor: {
        type: String,
        default: '#aaa'
      }
    },
    methods: {
      imgSrc(input) {
        return new URL(`../../assets/${input}`, import.meta.url).href;
      },
      windowOpen(input) {
        this.$emit('window-open', input);
      }
    },
    components: {
      ViewTitleBanner,
      ViewOverview,
      ViewDefine,
      ViewSolution,
      ViewResults,
      ViewTakeaways,
      WorkImage
    }
}
</script>

<template>
  <view-title-banner 
    :backgroundColor="primaryColor"
    title="Soccer for Success" 
    subtitle="An e-learning platform for coaches and players" 
    :siteUrl="siteUrl"
    :imageSrc="imgSrc('work/s4s-desktop.png')"
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

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
    <view-overview  :color="secondaryColor" noDivider>
      <template #overview>
        <p>Soccer for Success was an online e-learning platform that allows coaches to view videos and answer questions on various soccer techniques and learning principles. We've even built-in a Content Management System for Administrators, which allows them to add and update their own custom learning content and upload videos.</p>
        <p>The site was built with React on the front-end, PHP CodeIgniter on the back-end, and JSON for saving and editing content.</p>
      </template>
      <template #image>
        <v-img class="pt-1 mx-0" height="480" :src="imgSrc('work/s4s-mobile.png')" />
      </template>
    </view-overview>

  </div>
</template>