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

  <div class="work-text">
    <v-row style="background: #ccc" class="work-text-section">
      <v-col offset-xs="1" offset-sm="1" offset-md="1" offset="2" xs="10" sm="10" md="10" cols="8">
        <div class="work-text-title">Background</div>

        <v-row>
          <v-col>
            <p>
              My father and my grandfather taught me the value of hard work at a very early age. They have both instilled a strong work-ethic that I hold onto this day. When he talked about having a website for his new business, I immediately jumped on the project without hesitation.
            </p>
            <p>
              K&A Morrisey Cleaning Services is a commercial janitorial business that is local to Sampson County. This site is a redesign of the previous website using the UX design principles learned.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p><b>Problem</b></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
          </v-col>
          <v-col>
            <p><b>Goal</b></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
          </v-col>
        </v-row>

      </v-col>
    </v-row>


    <v-row style="background: #eee" class="work-text-section">
      <v-col offset-xs="1" offset-sm="1" offset-md="1" offset="2" xs="10" sm="10" md="10" cols="8">
        <div class="work-text-title">Defining the User</div>

        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12" lg="6">
            <p><b>Persona</b></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="12" lg="6">
            <p>&nbsp;</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="12" lg="6">
            <p><b>User Map Summary</b></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="12" lg="6">
            <p>&nbsp;</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
          </v-col>
        </v-row>

      </v-col>
    </v-row>


    <v-row style="background: #ccc" class="work-text-section">
      <v-col offset-xs="1" offset-sm="1" offset-md="1" offset="2" xs="10" sm="10" md="10" cols="8">
        <div class="work-text-title">Solutioning</div>

        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12" lg="12">
            <p><b>Wireframes</b></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
          </v-col>

          <v-col cols="12" xs="12" sm="12" md="12" lg="12">
            <p><b>Logo</b></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
          </v-col>

          <v-col cols="12" xs="12" sm="12" md="12" lg="12">
            <p><b>Usability Study</b></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
          </v-col>
        </v-row>

      </v-col>
    </v-row>


    <v-row style="background: #eee" class="work-text-section">
      <v-col offset-xs="1" offset-sm="1" offset-md="1" offset="2" xs="10" sm="10" md="10" cols="8">
        <div class="work-text-title">Results</div>

        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12" lg="12">
            <p><b>Mockups</b></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
          </v-col>
        </v-row>

      </v-col>
    </v-row>


    <v-row class="work-text-section">
      <v-col offset-xs="1" offset-sm="1" offset-md="1" offset="2" xs="10" sm="10" md="10" cols="8">
        <div class="work-text-title">Takeaways</div>

        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12" lg="6">
            <p><b>Lessons Learned</b></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="12" lg="6">
            <p><b>Next Steps</b></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </div>
</template>

<style scoped>

</style>
