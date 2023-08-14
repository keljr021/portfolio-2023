<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import ViewOverview from '../../components/partials/ViewOverview.vue';
  import ViewDefine from '../../components/partials/ViewDefine.vue';
  import ViewSolution from '../../components/partials/ViewSolution.vue';
  import ViewResults from '../../components/partials/ViewResults.vue';
  import ViewTakeaways from '../../components/partials/ViewTakeaways.vue';
  export default {
    name: 'Ss ',
    data() {
      return {
        siteUrl: 'https://web.archive.org/web/20180105122544/https://scoreshots.com/'
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
    title="ScoreShots 2.0"
    subtitle="A platform to create and share infographics"
    :siteUrl="siteUrl"
    :imageSrc="imgSrc('work/ss-desktop.png')"
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

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
    <view-overview  :color="secondaryColor" noDivider>
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
    </view-overview>

  </div>
</template>