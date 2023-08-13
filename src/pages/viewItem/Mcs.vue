<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import ViewOverview from '../../components/partials/ViewOverview.vue';
  import ViewDefine from '../../components/partials/ViewDefine.vue';
  import ViewSolution from '../../components/partials/ViewSolution.vue';
  import ViewResults from '../../components/partials/ViewResults.vue';
  import ViewTakeaways from '../../components/partials/ViewTakeaways.vue';
  export default {
    name: 'Mcs',
    data() {
      return {
        prototypeUrl: 'https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/ka-clean.com?type=design&node-id=86-243&scaling=scale-down&page-id=86%3A130&starting-point-node-id=86%3A243',
        caseStudyUrl: 'https://docs.google.com/presentation/d/181XSVIOJkkjA9xZBpeepm3Is4oX9U1xV_AqXgBc-NXU/edit?usp=sharing'
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
    title="K&A Morrisey Cleaning Services"
    subtitle="A responsive website for the family janitorial business"
    :prototypeUrl="prototypeUrl"
    siteUrl="https://ka-clean.com/"
    :caseStudyUrl="caseStudyUrl"
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

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
    <view-overview>
      <template #overview>
        <p>
          My father and grandfather taught me the value of hard work at a very early age. Both of them instilled a strong work-ethic that I hold onto this day. Once my father inherited the family buisness, he discussed with me the opportunity of having a new website. I immediately jumped on the project without hesitation.
        </p>
        <p>
          K&A Morrisey Cleaning Services is a commercial janitorial business that is local to Sampson County. This site is a redesign of the previous website using the UX design principles learned.
        </p>
      </template>
      <template #problem>
        K&A Morrisey Cleaning Services needs an online presence to advertise to potential customers in Sampson County. From viewing the previous web site, there were several opportunities to update and improve a potential customer's online experience.
      </template>
      <template #goal>
        Improve the user experience for the website. The idea was to better showcase, the company janitorial services offered, along The areas that the company will serve. We also wanted to give a more streamlined way to contact the clients.
      </template>
      <template #image>
        <v-img class="mx-0" height="480" :src="imgSrc('work/ka-mobile.png')" />
      </template>
    </view-overview>

    <v-row justify="start" justify-md="center" justify-lg="center">
      <v-col cols="10">
        <v-divider thickness="1" :color="secondaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-define>
      <template #persona1>
        <p>
          <b>Eric Robinson</b> is a business owner of a masonry company in Roseboro, NC. He looks for a janitorial business to maintain the corporate offices daily, with occasional janitorial work on the weekends.
        </p>
      </template>
      <template #persona2>
        <v-img width="100%" :src="imgSrc('ka-persona.png')" />
      </template>
      <template #user1>
        <v-img width="100%" :src="imgSrc('ka-usermap.png')" />
      </template>
      <template #user2>
        <p>From documenting the user map, there were several opportunities to improve the user experience when arriving on our site, including: </p>
        <ol>
          <li>Communicate with the user when their Contact Form has been sent.</li>
          <li>Ensure that online search engines can find the business website.</li>
          <li>Add the client's email and/or phone number in a more accessible area.</li>
        </ol>
      </template>
    </view-define>

    <v-row justify="start" justify-md="center" justify-lg="center">
      <v-col cols="10">
        <v-divider thickness="1" :color="primaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-solution>
      <template #wireframes>
        <v-row>
          <v-col>
            <div class="view-text-section-title">Digital Wireframes</div>
          </v-col>
        </v-row>
        <v-row class="py-8">
          <v-col class="pa-3" cols="11" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('ka-dframe1.png')" />
            <div class="w-100 py-8">
              1. <b>Call to Action</b> - Define the business and a brief blurb on about the client with a placeholder for the image background. Also give a large button to contact the client front and center.
            </div>
          </v-col>
          <v-col class="pa-3" cols="11" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('ka-dframe2.png')" />
            <div class="w-100 py-8">
              2. <b>Services</b> - Lists the different types of service items the client offers in a three-column layout. 
            </div>
          </v-col>
        </v-row>
        <v-row class="py-8">  
          <v-col class="pa-3" cols="11" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('ka-dframe4.png')" />
            <div class="w-100 py-8">
              3. <b>Contact</b> - Gives the client's information and a possible map to show the client's location.
            </div>
          </v-col>
          <v-col class="pa-3" cols="11" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('ka-dframe5.png')" />
            <div class="w-100 py-8">
              4. <b>Contact Form</b> - A popup that allows the user to Submit a query to the client.
            </div>
          </v-col>
        </v-row>
      </template>
      <template #usability1>
        <v-img class="mx-auto" width="100%" :src="imgSrc('ka-study.png')" />
      </template>
      <template #usability2>
        <p>From going through the usability study, I've discovered that the The Contact and Contact Form links was confusing to end users when attempting to contact the client. Both links would need to be revised to prevent this.</p>
        <p>Also discussed that the Contact Information would need to have a more streamlined access.</p>  
        <p>Lastly there were a few comments regarding issues with the navigation scrolling to the proper section that would need to be resolved in the upcoming mockups.</p>      
      </template>
    </view-solution>

    <v-row justify="start" justify-md="center" justify-lg="center">
      <v-col cols="10">
        <v-divider thickness="1" :color="secondaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-results :caseStudyUrl="caseStudyUrl">
      <template #logo1>
        <v-img v-if="$vuetify.display.xs" width="180" style="max-width:inherit" :src="imgSrc('logo-ka-2023.png')" />
        <v-img v-else height="350" :src="imgSrc('logo-ka-2023.png')" />
      </template>
      <template #logo2>
        <p>For the logo design, I wanted to give a professional feel from both the color and typography choices. I also wanted to set the precedence of "the same professional company you know, now under new management."</p>        
      </template>
      <template #mockups>
        <v-row>
          <v-col>
            <div class="view-text-section-title link" @click="windowOpen(prototypeUrl)">
              Mockups
              <v-icon size="x-small">mdi-open-in-new</v-icon>
            </div>
          </v-col>
        </v-row>
        <v-row class="py-8">
          <v-col class="pa-3" cols="11" xs="12" sm="12" md="12" lg="5" offset-lg="1">
              <v-img width="90%" :src="imgSrc('ka-mock1.png')" />
              <div class="w-100 py-8">
              1. <b>Call to Action</b> - Added the logo in the center of the page. The content was given more spacing from the wireframes; and the button was replaced with links for each section of the site. The bottom has a fixed button that slides out with the user's contact information when clicked.
            </div>
            </v-col>
            <v-col class="pa-3" cols="11" xs="12" sm="12" md="12" lg="5" offset-lg="1">
              <v-img width="90%" :src="imgSrc('ka-mock2.png')" />
              <div class="w-100 py-8">
                2. <b>Services</b> - The service layout is kept the same from the wireframes, with the icons representing each service item.
              </div>
            </v-col>
        </v-row>
        <v-row class="py-8"> 
          <v-col class="pa-3" cols="11" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('ka-mock3.png')" />
            <div class="w-100 py-8">
              3. <b>Contact</b> - Updated the section to include the Contact Form button, and a Google Maps iFrame to show the client's location.
            </div>
          </v-col>
          <v-col class="pa-3" cols="11" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('ka-mock4.png')" />
            <div class="w-100 py-8">
              4. <b>Contact Form</b> - A popup is defined with an embedded Google Form in the desktop, with a button to close the popup or open the form in a new tab. For mobile members, the Google Form is opened in a new window by default.
            </div>
          </v-col>
        </v-row>
      </template>
    </view-results>
     
    <v-row justify="start" justify-md="center" justify-lg="center">
      <v-col cols="10">
        <v-divider thickness="1" :color="primaryColor" inset></v-divider>
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
