<script>
  import WorkImage from '../../components/partials/WorkImage.vue';  
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import Overview from '../../components/partials/view/Overview.vue';
  import Empathize from '../../components/partials/view/Empathize.vue';
  import Define from '../../components/partials/view/Define.vue';
  import Ideate from '../../components/partials/view/Ideate.vue';
  import Evaluate from '../../components/partials/view/Evaluate.vue';
  import Solution from '../../components/partials/view/Solution.vue';
  import ViewImage from '../../components/partials/ViewImage.vue';
  export default {
    name: 'Mcs',
    data() {
      return {
        wireframeUrl: 'https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/ka-clean.com?type=design&node-id=14-287&scaling=scale-down&page-id=14%3A227&starting-point-node-id=14%3A287',
        prototypeUrl: 'https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/ka-clean.com?type=design&node-id=86-243&scaling=scale-down&page-id=86%3A130&starting-point-node-id=86%3A243',
        caseStudyUrl: 'https://docs.google.com/presentation/d/181XSVIOJkkjA9xZBpeepm3Is4oX9U1xV_AqXgBc-NXU/edit?usp=sharing',
        githubUrl: 'https://github.com/keljr021/ka-clean-2023'
      }
    },
    emits: [
      'set-image',
      'window-open',
      'open-lofi',
      'open-hifi'
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
      Overview,
      Define,
      Empathize,
      Evaluate,
      Ideate,
      Solution,
      WorkImage,
      ViewImage
    }
}
</script>

<template>
  <view-title-banner 
    :backgroundColor="primaryColor"
    title="K&A Morrisey Cleaning Services"
    subtitle="A responsive website for the family janitorial business"
    :mobilePrototypeUrl="prototypeUrl"
    :desktopPrototypeUrl="prototypeUrl"
    :prototypeUrl="prototypeUrl"
    siteUrl="https://ka-clean.com/"
    :caseStudyUrl="caseStudyUrl"
    :githubUrl="githubUrl"
    :imageSrc="imgSrc('work/ka-desktop.png')"
    :mobileSrc="imgSrc('work/ka-mobile.png')"
    @window-open="windowOpen"
  >
    <template #role>
      UX Designer, Logo Designer, Developer
    </template>
    <template #tools>
      Figma, HTML, SASS, JavaScript, Vue
    </template>
    <template #date>
      June 2019, Updated June 2023
    </template>
  </view-title-banner>

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
    <overview :color="secondaryColor">
      <template #overview>
        <p>
          My father and grandfather taught me the value of hard work at a very early age. Both of them instilled a strong work-ethic that I hold onto this day. Once my father inherited the family business, he discussed with me the opportunity of having a new website. I immediately jumped on the project without hesitation.
        </p>
        <p>
          K&A Morrisey Cleaning Services is a commercial janitorial business that is local to Sampson County. This site is a redesign of the previous website using the UX design principles learned.
        </p>
      </template>
      <template #image>
        <v-img v-if="$vuetify.display.smAndDown" class="mx-auto" width="180" style="max-width:inherit" :src="imgSrc('logo-ka-2023.png')" />
        <v-img v-else height="150" :src="imgSrc('logo-ka-2023.png')" />
      </template>
    </overview>

    <empathize :color="primaryColor">
      <template #problem>
        K&A Morrisey Cleaning Services needs an online presence to advertise to potential customers in Sampson County. From viewing the previous web site, there were several opportunities to update and improve a potential customer's online experience.
      </template>
      <template #goal>
        Improve the user experience for the website. The idea was to better showcase the company janitorial services offered and the areas that the company will serve. We also wanted to give a more streamlined way to contact the clients.
      </template>
      <template #persona>
        <view-image src="ka-persona.png" />
      </template>
      <template #user>
        <view-image src="ka-usermap.png" />
      </template>
      <template #user2>
        <p>From documenting the user map, there were several opportunities to improve the user experience when arriving on our site, including: </p>
        <ol>
          <li>Communicate with the user when their Contact Form has been sent.</li>
          <li>Ensure that online search engines can find the business website.</li>
          <li>Add the client's email and/or phone number in a more accessible area.</li>
        </ol>
      </template>
    </empathize>


    <define :color="primaryColor">
      <template #ideas>
        <p>From documenting the user map, there were several opportunities to improve the user experience during the updates:</p>
        <ol>
          <li>The site should communicate with the user after their Contact Form has been sent successfully.</li>
          <li>Online search engines needs to be able to find the business website.</li>
          <li>The client's email and/or phone number needs to be in a more accessible area.</li>
        </ol>
      </template>
    </define>


    <ideate 
      :color="primaryColor" 
      :hasLofi="true" 
      :hasHifi="true" 
      @open-lofi="windowOpen(wireframeUrl)" 
      @open-hifi="windowOpen(prototypeUrl)">
      <template #lofi>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="ka-dframe1.png" text="1. Call to Action - Define the business and a brief blurb on about the client with a placeholder for the image background. Also give a large button to contact the client front and center."/>
            <div class="w-100 py-8">
              1. <b>Call to Action</b> - Define the business and a brief blurb on about the client with a placeholder for the image background. Also give a large button to contact the client front and center.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="ka-dframe2.png" text="2. Services - Lists the different types of service items the client offers in a three-column layout."/>
            <div class="w-100 py-8">
              2. <b>Services</b> - Lists the different types of service items the client offers in a three-column layout. 
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">  
          <v-col class="pr-3 py-3" cols="11" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="ka-dframe4.png" text="3. Contact - Gives the client's information and a possible map to show the client's location."/>
            <div class="w-100 py-8">
              3. <b>Contact</b> - Gives the client's information and a possible map to show the client's location.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="ka-dframe5.png" text="4. Contact Form - A popup that allows the user to Submit a query to the client."/>
            <div class="w-100 py-8">
              4. <b>Contact Form</b> - A popup that allows the user to Submit a query to the client.
            </div>
          </v-col>
        </v-row>
      </template>
      <template #study1>
        <view-image :imageWidth="$vuetify.display.smAndDown ? 'initial' : '100%'" :imageHeight="$vuetify.display.smAndDown ? 300 : 'initial'" src="ka-study.png" text="From conducting the usability study, I've discovered that The Contact and Contact Form links confused end users when attempting to contact the client. Both links would need to be revised to prevent this. Also discussed that the Contact Information would need to have a more streamlined access. Lastly there were a few comments regarding issues with the navigation scrolling to the proper section that would need to be resolved in the upcoming mockups."/>
      </template>
      <template #study2>
        <p>From conducting the usability study, I've discovered that The Contact and Contact Form links confused end users when attempting to contact the client. Both links would need to be revised to prevent this.</p>
        <p>Also discussed that the Contact Information would need to have a more streamlined access.</p>  
        <p>Lastly there were a few comments regarding issues with the navigation scrolling to the proper section that would need to be resolved in the upcoming mockups.</p>      
      </template>
      <template #hifi>
        <v-row justify="center" justify-md="space-evenly" justify-lg="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" sm="5" md="5" lg="5">
              <view-image imageWidth="90%" src="ka-mock1.png" text="1. Call to Action - Added the logo in the center of the page. The content was given more spacing from the wireframes; and the button was replaced with links for each section of the site. The bottom has a fixed button that slides out with the user's contact information when clicked."/>
              <div class="w-100 py-8">
              1. <b>Call to Action</b> - Added the logo in the center of the page. The content was given more spacing from the wireframes; and the button was replaced with links for each section of the site. The bottom has a fixed button that slides out with the user's contact information when clicked.
            </div>
            </v-col>
            <v-col class="pr-3 py-3" cols="11" sm="5" md="5" lg="5">
              <view-image imageWidth="90%" src="ka-mock2.png" text="2. Services - The service layout is kept the same from the wireframes, with the icons representing each service item."/>
              <div class="w-100 py-8">
                2. <b>Services</b> - The service layout is kept the same from the wireframes, with the icons representing each service item.
              </div>
            </v-col>
        </v-row>
        <v-row justify="center" justify-md="space-evenly" justify-lg="space-evenly" class="py-8"> 
          <v-col class="pr-3 py-3" cols="11" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="ka-mock3.png" text="3. Contact - Updated the section to include the Contact Form button, and a Google Maps iFrame to show the client's location."/>
            <div class="w-100 py-8">
              3. <b>Contact</b> - Updated the section to include the Contact Form button, and a Google Maps iFrame to show the client's location.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="ka-mock4.png" text="4. Contact Form - A popup is defined with an embedded Google Form in the desktop, with a button to close the popup or open the form in a new tab. For mobile members, the Google Form is opened in a new window by default."/>
            <div class="w-100 py-8">
              4. <b>Contact Form</b> - A popup is defined with an embedded Google Form in the desktop, with a button to close the popup or open the form in a new tab. For mobile members, the Google Form is opened in a new window by default.
            </div>
          </v-col>
        </v-row>
      </template>

      <template #logo1>
        <v-img v-if="$vuetify.display.smAndDown" class="mx-auto" width="180" style="max-width:inherit" :src="imgSrc('logo-ka-2023.png')" />
        <v-img v-else height="150" :src="imgSrc('logo-ka-2023.png')" />
      </template>
      <template #logo2>
        <p>For the logo design, I wanted to give a professional feel from both the color and typography choices. I also wanted to set the precedence of the same professional company, now under new management.</p>        
      </template>


      <template #color>
        <v-row justify="space-evenly" class="py-8"> 
          <v-col cols="11" class="py-3">
            <view-image imageWidth="80%" src="ka-sticker.png" />
          </v-col>
        </v-row>
      </template>

    </ideate>

    <evaluate :color="primaryColor" :caseStudyUrl="caseStudyUrl">
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
          <li>Add a Gallery of Work section for potential clients to see before and after steps of the services provided.</li>
          <li>Include a Testimonials section for clients to add positive reviews of the work that K&A Services provide.</li>
          <li>I would improve SEO and add domains from a development standpoint to ensure users can get to the site seamlessly.</li>
        </ol>        
      </template>
    </evaluate>

  </div>
</template>
