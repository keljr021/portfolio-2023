<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import ViewOverview from '../../components/partials/ViewOverview.vue';
  import ViewDefine from '../../components/partials/ViewDefine.vue';
  import ViewSolution from '../../components/partials/ViewSolution.vue';
  import ViewResults from '../../components/partials/ViewResults.vue';
  import ViewTakeaways from '../../components/partials/ViewTakeaways.vue';
  export default {
    name: 'Vue ',
    data() {
      return {
        siteUrl: 'http://poc.kelvin-m.com/vue-calendar/#/'
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
    title="Vue Calendar" 
    subtitle="A calculator component built with React JS" 
    :siteUrl="siteUrl"
    :imageSrc="imgSrc('work/vue-desktop.png')"
  >
    <template #role>
      Front-End Developer
    </template>
    <template #client>
      None
    </template>
    <template #tools>
      Vue JS, Bootstrap
    </template>
    <template #date>
      Mar 2019
    </template>
  </view-title-banner>

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
    <view-overview>
      <template #overview>
        <p>This is a calendar component built with Vue and Bootstrap. The component uses the current date and generates a full calendar for display.</p>
      </template>
    </view-overview>

  </div>
</template>