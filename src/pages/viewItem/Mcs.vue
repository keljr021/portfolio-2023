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
    :backgroundColor="primaryColor"
    title="K&A Morrisey Cleaning Services"
    subtitle="A responsive website for the family janitorial business"
    prototypeUrl="https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/ka-clean.com?type=design&node-id=86-243&scaling=scale-down&page-id=86%3A130&starting-point-node-id=86%3A243"
    siteUrl="https://ka-clean.com/"
    caseStudyUrl="https://docs.google.com/presentation/d/181XSVIOJkkjA9xZBpeepm3Is4oX9U1xV_AqXgBc-NXU/edit?usp=sharing"
    :imageSrc="imgSrc('work/ka-desktop.png')"
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

  <div class="view-text" :style="{ 'border-bottom': '2px solid' + primaryColor }">
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
        <v-img class="mx-0" height="480" :src="imgSrc('work/ka-mobile.png')" />
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
          <b>Eric Robinson</b> is a business owner of a masonry company in Roseboro, NC. He is looking for a janitorial business to clean and maintain the corporate offices daily, with occasional work on the weekends.
        </p>
      </template>
      <template #persona2>
        <v-img width="100%" :src="imgSrc('ka-persona.png')" />
      </template>
      <template #user1>
        <v-img width="100%" :src="imgSrc('ka-usermap.png')" />
      </template>
      <template #user2>
        <ol>
          <li>Ensure that online search engines can find their business website</li>
          <li>Add a professional email and/or phone number</li>
          <li>Notify the user when the Contact Form has been sent and received</li>
        </ol>
      </template>
    </view-define>

    <v-row justify="center">
      <v-col cols="10">
        <v-divider thickness="3" :color="primaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-solution>
      <template #wireframes>
        <v-row class="py-8">
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('ka-dframe1.png')" />
          </v-col>
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('ka-dframe2.png')" />
          </v-col>
        </v-row>
        <v-row class="py-8">  
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('ka-dframe3.png')" />
          </v-col>
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('ka-dframe4.png')" />
          </v-col>
        </v-row>
      </template>
      <template #usability1>
        <v-img class="mx-auto" width="80%" :src="imgSrc('ka-study.png')" />
      </template>
      <template #usability2>
        <ul>
          <li>The Contact and Contact Form links was confusing to end users finding Contact information. Both links needs to be revised</li>
          <li>The Contact information needs to be easily accessed</li>
          <li>The scrolling from the prototype did not scroll to the correct sections, and needed to be corrected in the mockups</li>
        </ul>      
      </template>
    </view-solution>

    <v-row justify="center">
      <v-col cols="10">
        <v-divider thickness="3" :color="secondaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-results>
      <template #logo1>
        <v-img height="150" :src="imgSrc('logo-ka-2023.png')" />
      </template>
      <template #logo2>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>        
      </template>
      <template #mockups>
        <v-row class="py-8">
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
              <v-img width="90%" :src="imgSrc('ka-mock1.png')" />
            </v-col>
            <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
              <v-img width="90%" :src="imgSrc('ka-mock2.png')" />
            </v-col>
        </v-row>
        <v-row class="py-8"> 
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('ka-mock3.png')" />
          </v-col>
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('ka-mock4.png')" />
          </v-col>
        </v-row>
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
          From this project I have gained experience in user interviews and incorporating client feedback within mockups and prototypes.
        </p>
        <p>
          With Figma, I have learned how to create multiple instances of the site to simulate on and off states of components. This is shown in the fixed footer options from the high fidelity prototypes. I have also discovered how to add overlays with colors above images. Both will give a wider variety of options in Figma for future projects.
        </p>
        <p>
          Lastly, I ensured that the colors used will comply with WCAG guidelines for accessibility by using the WebAIM contrast checker.
        </p>
      </template>
      <template #next>
        <ol>
          <li>I would add a Gallery of Work section for potential clients to see before and after steps of the services provided.</li>
          <li>I would add a Testimonials section for clients to add positive reviews of the work that K&A Services provide.</li>
          <li>For the site, I would improve SEO and add domains from a development standpoint to ensure users can get to the site seamlessly.</li>
        </ol>        
      </template>
    </view-takeaways>

  </div>
</template>