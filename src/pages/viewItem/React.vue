<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import ViewOverview from '../../components/partials/ViewOverview.vue';
  import ViewDefine from '../../components/partials/ViewDefine.vue';
  import ViewSolution from '../../components/partials/ViewSolution.vue';
  import ViewResults from '../../components/partials/ViewResults.vue';
  import ViewTakeaways from '../../components/partials/ViewTakeaways.vue';
  export default {
    name: 'React ',
    data() {
      return {
        siteUrl: 'http://poc.kelvin-m.com/react-calculator/'
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
    title="React Calculator" 
    subtitle="A calculator component built with React JS" 
    :siteUrl="siteUrl"
    :imageSrc="imgSrc('work/react-desktop.png')"
  >
    <template #role>
      Front-End Developer
    </template>
    <template #client>
      None
    </template>
    <template #tools>
      React JS
    </template>
    <template #date>
      Mar 2019
    </template>
  </view-title-banner>

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
    <view-overview  :color="secondaryColor" noDivider>
      <template #overview>
        <p>This is a basic calculator component built with React. The component itself performs basic math calculations, allowing the user to click the buttons on screen, or key in the values themselves using the keyboard.</p>
      </template>
    </view-overview>

  </div>
</template>