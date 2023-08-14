<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import ViewOverview from '../../components/partials/ViewOverview.vue';
  import ViewDefine from '../../components/partials/ViewDefine.vue';
  import ViewSolution from '../../components/partials/ViewSolution.vue';
  import ViewResults from '../../components/partials/ViewResults.vue';
  import ViewTakeaways from '../../components/partials/ViewTakeaways.vue';
  export default {
    name: 'Ifolio ',
    data() {
      return {
        siteUrl: 'https://web.archive.org/web/20180809104951/http://ifolio.online/'
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
    title="iFolio"
    subtitle="An online portfolio page to host images"
    :siteUrl="siteUrl"
    :imageSrc="imgSrc('work/if-desktop.png')"
  >
    <template #role>
      Front-End Developer, Web Designer, Logo Designer
    </template>
    <template #client>
      Eric Moore
    </template>
    <template #tools>
      HTML, CSS, JavaScript, PHP, Material Design Lite
    </template>
    <template #date>
      Oct 2016 - Feb 2018
    </template>
  </view-title-banner>

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
    <view-overview  :color="secondaryColor">
      <template #overview>
        <p>iFolio was an idea that a fellow co-worker of mine came up with. When he asked for help in this endeavor, I had no problem in giving him a hand.</p>
        <p>iFolio was a web application that allowed users to create their own web page to post images; mainly for stylists and barbers to showcase their work. We attempted to make it as simple as possible for clients to use. I worked on the front-end of the application; including the home page.</p>

        <v-row>
          <v-col>
            <div class="view-text-section-title">Features</div>
            <ul>
              <li>Users can create their own webpage with custom colors and fonts</li>
              <li>Users can add up to 150 photos per account based on subscription</li>
            </ul>
          </v-col>
        </v-row>

      </template>
      <template #image>
        <v-img class="pt-1 mx-0" height="480" :src="imgSrc('work/if-mobile.png')" />
      </template>
    </view-overview>

  </div>
</template>