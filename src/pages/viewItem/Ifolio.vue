<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import Overview from '../../components/partials/view/Overview.vue'; 
  export default {
    name: 'Ifolio ',
    data() {
      return {
        siteUrl: 'https://web.archive.org/web/20180809104951/http://ifolio.online/'
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
      },
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
          }, 4000);
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
        title="iFolio"
        subtitle="An online portfolio page to host images"
        :siteUrl="siteUrl"
        :imageSrc="imgSrc('work/if-desktop.png')"
        :mobileSrc="imgSrc('work/if-mobile.png')"
        @window-open="windowOpen"
        @toggle-banner="toggleBanner"
        :showBanner="showBanner"
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
    </v-col>

    <v-col offset-md="2" offset-lg="2">
      <div class="view-text" 
      :style="{ 'padding-left': '40px', 'border-bottom': '1px solid' + primaryColor }" 
      @click="$emit('toggle-banner', false)" 
      @mouseover="(showBanner === true) ? hoverAwayFromBanner() : ''">
        <overview :color="primaryColor" noDivider>
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
            <v-img class="pt-1 mx-0" height="80" :src="imgSrc('logo-if.png')" />
          </template>
        </overview>

      </div>
    </v-col>
  </v-row>
</template>