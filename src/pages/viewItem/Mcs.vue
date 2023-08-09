<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  export default {
    name: 'u1',
    emits: [
      'set-image'
    ],
    methods: {
      imgSrc(input) {
        return new URL(`../../assets/${input}`, import.meta.url).href;
      }
    },
    components: {
      WorkImage
    }
}
</script>

<template>
  <!-- Title banner -->
  <v-row class="work-header" justify="center">
    <v-col cols="6">
      <div class="work-header-title">K&A Morrisey Cleaning Serivces</div>
      <div class="work-header-text">
        <v-row class="pa-3">
          <v-col>
            <div class="work-header-text-title">Role</div>
            <div class="work-header-text-desc">
              UX Designer, Logo Designer, Developer
            </div>
          </v-col>
          <v-col>
            <div class="work-header-text-title">Client</div>
            <div class="work-header-text-desc">K&A Morrisey Cleaning Services</div>
          </v-col>
        </v-row>
        <v-row class="pa-3">
          <v-col>
            <div class="work-header-text-title">Tools Used</div>
            <div class="work-header-text-desc">
              Figma, HTML, SASS, JavaScript, Vue JS, Vuetify
            </div>
          </v-col>
          <v-col>
            <div class="work-header-text-title">Project Date</div>
            <div class="work-header-text-desc">June 2019, Updated June 2023</div>
          </v-col>
        </v-row>
        <v-row class="pa-3">
          <v-col>
            <v-btn size="small" class="text-normal px-3 mr-6" variant="outlined" :to="{ name: 'work'}">
                <v-icon class="mr-2">mdi-open-in-new</v-icon>
                Prototype
            </v-btn>
            <v-btn size="small" class="text-normal px-3" variant="outlined" :to="{ name: 'work'}">
                <v-icon class="mr-2">mdi-link</v-icon>
                Live Site
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col>
      <img :src="imgSrc('ka-full-2023.png')" class="work-header-image" />
    </v-col>   
  </v-row>



</template>

<style scoped>

</style>
