<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import ViewOverview from '../../components/partials/ViewOverview.vue';
  import ViewDefine from '../../components/partials/ViewDefine.vue';
  import ViewSolution from '../../components/partials/ViewSolution.vue';
  import ViewResults from '../../components/partials/ViewResults.vue';
  import ViewTakeaways from '../../components/partials/ViewTakeaways.vue';
  export default {
    name: 'u1',
    emits: [
      'set-image'
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
    :primaryColor="primaryColor"
    title="K&A Morrisey Cleaning Services"
    subtitle="A responsive website for the family janitorial business"
    prototypeUrl="https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/ka-clean.com?type=design&node-id=86-243&scaling=scale-down&page-id=86%3A130&starting-point-node-id=86%3A243"
    siteUrl="https://ka-clean.com/"
    caseStudyUrl="https://docs.google.com/presentation/d/181XSVIOJkkjA9xZBpeepm3Is4oX9U1xV_AqXgBc-NXU/edit?usp=sharing"
    :imageSrc="imgSrc('ka-full-2023.png')"
  >
    <template #role>
      UX Designer, Logo Designer, Developer
    </template>
    <template #client>
      K&A Morrisey Cleaning Services
    </template>
    <template #tools>
      Figma, HTML, SASS, JavaScript, Vue JS, Vuetify
    </template>
    <template #date>
      June 2019, Updated June 2023
    </template>
  </view-title-banner>

  <div class="view-text">
    <view-overview>
      <template #overview>
        <p>
          My father and my grandfather taught me the value of hard work at a very early age. They have both instilled a strong work-ethic that I hold onto this day. When he talked about having a website for his new business, I immediately jumped on the project without hesitation.
        </p>
        <p>
          K&A Morrisey Cleaning Services is a commercial janitorial business that is local to Sampson County. This site is a redesign of the previous website using the UX design principles learned.
        </p>
      </template>
      <template #problem>
        K&A Morrisey Cleaning Services needs an online presence to advertise to potential customers in Sampson County. From viewing the previous web site, there were several opportunities to update and improve a potential customer's online experience.
      </template>
      <template #goal>
        Improve the user experience for their online site. The idea was to better showcase
        <ul>
          <li>The company janitorial services offered</li>
          <li>The areas that the company will serve</li>
          <li>A more streamlined way to contact the clients' business</li>
        </ul>
      </template>
      <template #image>
        <v-img height="400" :src="imgSrc('reys-mock1.png')" />
      </template>
    </view-overview>

    <v-row justify="center">
      <v-col cols="10">
        <v-divider thickness="3" :color="secondaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-define>
      <template #persona1>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
      </template>
      <template #persona2>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
      </template>
      <template #user1>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
      </template>
      <template #user2>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
      </template>
    </view-define>

    <v-row justify="center">
      <v-col cols="10">
        <v-divider thickness="3" :color="primaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-solution>
      <template #wireframes>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
      </template>
      <template #logo1>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>        
      </template>
      <template #logo2>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>        
      </template>
      <template #usability1>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>        
      </template>
      <template #usability2>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>        
      </template>
    </view-solution>

    <v-row justify="center">
      <v-col cols="10">
        <v-divider thickness="3" :color="secondaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-results>
      <template name="mockups">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
        </p>
      </template>
    </view-results>
     
    <v-row justify="center">
      <v-col cols="10">
        <v-divider thickness="3" :color="primaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-takeaways>
      <template #lessons>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>
      </template>
      <template #next>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>        
      </template>
    </view-takeaways>

  </div>
</template>
