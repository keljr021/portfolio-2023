<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import Overview from '../../components/partials/view/Overview.vue';  
  export default {
    name: 'Vue ',
    data() {
      return {
        siteUrl: 'http://poc.kelvin-m.com/vue-calendar/#/',
        githubUrl: 'https://github.com/keljr021/vue-calendar'
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
      Overview,
      WorkImage
    }
}
</script>

<template>
  <view-title-banner 
    :backgroundColor="primaryColor"
    title="Vue Calendar" 
    subtitle="A calculator component built with React JS" 
    :siteUrl="siteUrl"
    :githubUrl="githubUrl"
    :imageSrc="imgSrc('work/vue-desktop.png')"
    @window-open="windowOpen"
  >
    <template #role>
      Front-End Developer
    </template>
    <template #tools>
      Vue JS, Bootstrap
    </template>
    <template #date>
      Mar 2019
    </template>
  </view-title-banner>

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
    <overview  :color="secondaryColor" noDivider>
      <template #overview>
        <p>This is a calendar component built with Vue and Bootstrap. The component uses the current date and generates a full calendar for display.</p>
      </template>
    </overview>

  </div>
</template>