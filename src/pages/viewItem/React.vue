<script>
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import WorkImage from '../../components/partials/WorkImage.vue';
  import Overview from '../../components/partials/view/Overview.vue';
  export default {
    name: 'React ',
    data() {
      return {
        siteUrl: 'http://poc.kelvin-m.com/react-calculator/',
        githubUrl: 'https://github.com/keljr021/react-calculator'
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
          title="React Calculator" 
          subtitle="A calculator component built with React JS" 
          :siteUrl="siteUrl"
          :githubUrl="githubUrl"
          :imageSrc="imgSrc('work/react-desktop.png')"
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

      <v-col offset-md="2" offset-lg="2">
        <div class="view-text" 
           :style="{ 'padding-left': '40px', 'border-bottom': '1px solid' + primaryColor }" 
           @click="$emit('toggle-banner', false)" 
           @mouseover="(showBanner === true) ? hoverAwayFromBanner() : ''">
            <overview :color="primaryColor" noDivider>
              <template #overview>
                <p>This is a basic calculator component built with React. The component itself performs basic math calculations, allowing the user to click the buttons on screen, or key in the values themselves using the keyboard.</p>
              </template>
              <template #image>
                <v-img v-if="$vuetify.display.smAndDown" class="mx-auto" width="180" style="max-width:inherit" :src="imgSrc('work/react-desktop.png')" />
                <v-img v-else height="150" :src="imgSrc('work/react-desktop.png')" />
              </template>
            </overview>

          </div>
      </v-col>
    </v-row>
</template>