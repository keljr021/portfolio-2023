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
    name: 'Torch',
    data() {
      return {
        mobileWireframeUrl: 'https://www.figma.com/proto/hgMpXvVZJfJno8AiRug0VC/Torch-Mobile-App?node-id=23-3&scaling=scale-down&page-id=23%3A2&starting-point-node-id=23%3A3',
        desktopWireframeUrl: 'https://www.figma.com/proto/iJUBxL1NugZC1lL3FMUKV4/Torch-Responsive-Site?node-id=6-6495&scaling=min-zoom&page-id=6%3A6494&starting-point-node-id=6%3A6495',
        mobilePrototypeUrl: 'https://www.figma.com/proto/hgMpXvVZJfJno8AiRug0VC/Torch-Mobile-App?node-id=58-3934&scaling=scale-down&page-id=58%3A3610&starting-point-node-id=58%3A3934',
        desktopPrototypeUrl: 'https://www.figma.com/proto/iJUBxL1NugZC1lL3FMUKV4/Torch-Responsive-Site?node-id=28%3A11119&scaling=min-zoom&page-id=28%3A11118&starting-point-node-id=28%3A11119',
        caseStudyUrl: 'https://docs.google.com/presentation/d/1CbvvBE5rUeZywcQJZRo_OzVhJJSYJrjRe7X77Tes8hE/edit?usp=sharing'
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
          }, 10000);
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
  <v-row style="padding-top: 40px">
    <v-col cols="12" sm="12" md="3" lg="3" class="view-banner" :style="{ 'border-color': primaryColor }">
      <view-title-banner 
        :backgroundColor="primaryColor"
        title="Torch Mentorship Network"
        subtitle="A mobile app and website that connects students with mentors"
        :mobilePrototypeUrl="mobilePrototypeUrl"
        :desktopPrototypeUrl="desktopPrototypeUrl"
        :caseStudyUrl="caseStudyUrl"
        :imageSrc="imgSrc('work/to-desktop.png')"
        :mobileSrc="imgSrc('work/to-mobile.png')"
        @window-open="windowOpen"
        @toggle-banner="toggleBanner"
        :showBanner="showBanner"
      >
        <template #role>
          UX Designer, Logo Designer
        </template>
        <template #tools>
          Figma, Inkscape
        </template>
        <template #date>
          Jan 2023
        </template>
      </view-title-banner>
    </v-col>
    <v-col offset-md="2" offset-lg="2">
      <div class="view-text" 
           :style="{ 'padding-left': '40px', 'border-bottom': '1px solid' + primaryColor }" 
           @click="$emit('toggle-banner', false)" 
           @mouseover="(showBanner === true) ? hoverAwayFromBanner() : ''">
    <overview  :color="secondaryColor">
      <template #overview>
        <p>
           This project was to design both a mobile app and responsive website for a career mentorship service to help college graduates. Torch Mentorship Network is an online service that helps students connect with a mentor during their college studies.
        </p>
        <p>
            The main idea of the project was a simple and intuitive online presence geared towards college students and experienced mentors.
        </p>
      </template>
      <template #image>
        <v-img v-if="$vuetify.display.smAndDown" class="mx-auto" width="180" style="max-width:inherit" :src="imgSrc('logo-to.png')" />
        <v-img v-else height="150" :src="imgSrc('logo-to.png')" />
      </template>
    </overview>

    <empathize :color="primaryColor">
      <template #problem>
        Students find it frustrating to find a mentor. Often there are missed opportunities during college studies to connect with an experienced mentor in their field of study.
      </template>
      <template #goal>
        Create both a dedicated mobile app and responsive web site that gives users a better solution to connect with fellow mentors in their career field.      
      </template>
      <template #persona>
        <view-image src="to-persona.png" />
      </template>
      <template #user>
        <view-image src="to-usermap.png" />
      </template>
    </empathize>

    <define :color="primaryColor">
      <template #ideas>
        <p>From documenting the user map, there were several discovered during the search process: </p>
        <ol>
            <li>We should create an easy to navigate home page for desktop users.</li>
            <li>When filling out a form, both the app  should add a user's profile info from their account. This would allow for quicker form submissions.</li>
            <li>A mentor availability status is kept up-to-date within the app.</li>
        </ol>
      </template>
    </define>


    <ideate :color="primaryColor">
      <template #paper>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageWidth="90%" src="to-pframe1.jpg" text="1. For the mobile app, I've began rough drafting some ideas. I used the 'Crazy Eights' method to quickly brainstorm some ideas on paper."/>
            <div class="w-100 py-8">
              1. For the mobile app, I've began rough drafting some ideas. I used the "Crazy Eights" method to quickly brainstorm some ideas on paper.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="to-pframe4.jpg" text="2. From there, I've also drafted three separate versions of each page, and picked out ideas from each one by marking an asterisk on the chosen sections."/>
            <div class="w-100 py-8">
              2. From there, I've also drafted three separate versions of each page, and picked out ideas from each one by marking an asterisk on the chosen sections.
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">  
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageWidth="90%" src="to-pframe3.jpg" text="2b (Continued). Also picked a few items on the back using the same asterisk."/>
            <div class="w-100 py-8">
              2b <i>(Continued)</i>. Also picked a few items on the back using the same asterisk.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="to-sitemap.png" text="3. To organize the different sections, I've created a sitemap that would benefit both the mobile app and the upcoming responsive site."/>
            <div class="w-100 py-8">
              3. To organize the different sections, I've created a sitemap that would benefit both the mobile app and the upcoming responsive site.
            </div>
          </v-col>
        </v-row>
      </template>


      <template #lofi>        
        <v-row justify="space-evenly" class="py-12">
          <v-col cols="11">
            <div class="view-text-section-title link" @click="windowOpen(mobileWireframeUrl)" title="Open in new tab">
              Mobile App
              <v-icon size="x-small">mdi-open-in-new</v-icon>
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageHeight="350" src="to-dframe1.png" text="1. Home - Adds a quick Title and message on the top page with an image placeholder. The sections below would be a quick link to various options and articles found on the site."/>
            <div class="w-100 py-8">
              1. <b>Home</b> - Adds a quick Title and message on the top page with an image placeholder. The sections below would be a quick link to various options and articles found on the site.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageHeight="350" src="to-dframe2.png" text="2. Find a Mentor - The main search area where the user can either Search for a Mentor or fill out a generic Form. The user is also given a bottom navbar to navigate between pages."/>
            <div class="w-100 py-8">
              2. <b>Find a Mentor</b> - The main search area where the user can either Search for a Mentor or fill out a generic Form. The user is also given a bottom navbar to navigate between pages.
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">  
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageHeight="350" src="to-dframe3.png" text="3. Mentor Profile - Gives a page that displays a mentor's information; such as area of study."/>
            <div class="w-100 py-8">
              3. <b>Mentor Profile</b> - Gives a page that displays a mentor's information; such as area of study.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageHeight="350" src="to-dframe4.png" text="4. Chat - Displays the Chat layout that shows the list of members that the user has conversed with."/>
            <div class="w-100 py-8">
              4. <b>Chat</b> - Displays the Chat layout that shows the list of members that the user has conversed with.
            </div>
          </v-col>
        </v-row>
        <v-row class="py-12">
          <v-col cols="11">
            <div class="view-text-section-title link" @click="windowOpen(desktopWireframeUrl)" title="Open in new tab">
              Responsive Site
              <v-icon size="x-small">mdi-open-in-new</v-icon>
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageWidth="90%" src="to-dframe5-alt.png" text="1. Home - I wanted to give a quick way to either login or create a new account in the Call to Action. The navbar and account components were used from 'Salesforce's Lightning UI Kit.'"/>
            <div class="w-100 py-8">
              1. <b>Home</b> - I wanted to give a quick way to either login or create a new account in the Call to Action. The navbar and account components were used from <i>Salesforce's Lightning UI Kit.</i>
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="to-dframe6-alt.png" text="2. Feed - This page is shown after a member logs into their account. The idea is to give them the sections as buttons they can click on to prevent searching for options. On the right is a notification section that pops in when a member has a message or important information from the site. The Chat icon should be a fixed button on the bottom right corner."/>
            <div class="w-100 py-8">
              2. <b>Feed</b> - This page is shown after a member logs into their account. The idea is to give them the sections as buttons they can click on to prevent searching for options. On the right is a notification section that pops in when a member has a message or important information from the site. The Chat icon should be a fixed button on the bottom right corner.
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">  
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageWidth="90%" src="to-dframe7.png" text="3. Find a Mentor - This page is similar to the mobile app, giving the users two options to select from. The images were created from 'Blush Designs.'"/>
            <div class="w-100 py-8">
              3. <b>Find a Mentor</b> - This page is similar to the mobile app, giving the users two options to select from. The images were created from <i>Blush Designs.</i>
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="to-dframe8.png" text="4. Chat Enabled - This shows the behavior when the Chat button is pressed."/>
            <div class="w-100 py-8">
              4. <b>Chat Enabled</b> - This shows the behavior when the Chat button is pressed.
            </div>
          </v-col>
        </v-row>                
      </template>

      <template #study1>
        <view-image imageWidth="80%" src="to-study.png" text="From conducting the usability study, I've discoved that the Mentor Search workflow was inconsistent between navigation and the headers. This would be resolved in the upcoming prototyope. During the workflow, a majority of the testers had difficulty navigating through each page. I would need to further simplify the workfow when going through the app and site. There was an Article page also added to the site that confused a majority of the users when navigated. This would need refactoring in the upcoming prototype."/>
      </template>
      <template #study2>
        <ul>
            <li>From conducting the usability study, I've discoved that the Mentor Search workflow was inconsistent between navigation and the headers. This would be resolved in the upcoming prototyope.</li>
            <li>During the workflow, a majority of the testers had difficulty navigating through each page. I would need to further simplify the workfow when going through the app and site.</li>
            <li>There was an Article page also added to the site that confused a majority of the users when navigated. This would need refactoring in the upcoming prototype.</li>
        </ul>      
      </template>

      <template #hifi>
        <v-row class="pb-12">
          <v-col cols="11">
            <div class="view-text-section-title link" @click="windowOpen(mobilePrototypeUrl)">
              Mobile App
              <v-icon size="x-small">mdi-open-in-new</v-icon>
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
              <view-image imageHeight="350" src="to-mobile1.png" text="1. Home - Instead of a long site, I've refactored the site in the mockups to show a quick login page front and center."/>
              <div class="w-100 py-8">
              1. <b>Home</b> - Instead of a long site, I've refactored the site in the mockups to show a quick login page front and center.

            </div>
            </v-col>
            <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
              <view-image imageHeight="350" src="to-mobile2.png" text="2. Feed - Used the previous Home layout from the wireframes for this page, with quick links and notifications after login."/>
              <div class="w-100 py-8">
              2. <b>Feed</b> - Used the previous Home layout from the wireframes for this page, with quick links and notifications after login.

            </div>
            </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8"> 
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageHeight="350" src="to-mobile3.png" text="3. Find a Mentor - Modified the layout structure, and added instructional text based on user feedback from the lo-fi prototype."/>
            <div class="w-100 py-8">
              3. <b>Find a Mentor</b> - Modified the layout structure, and added instructional text based on user feedback from the lo-fi prototype.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageHeight="350" src="to-mobile4.png" text="4. Mentor Profile - Kept the structure similar to prototype, but adds two more buttons for students to quickly connect with a mentor."/>
            <div class="w-100 py-8">
              4. <b>Mentor Profile</b> - Kept the structure similar to prototype, but adds two more buttons for students to quickly connect with a mentor.
            </div>
          </v-col>
        </v-row>
        <v-row class="pb-12">
          <v-col cols="11">
            <div class="view-text-section-title link" @click="windowOpen(desktopPrototypeUrl)">
              Responsive Site
              <v-icon size="x-small">mdi-open-in-new</v-icon>
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
              <view-image imageWidth="90%" src="to-site1-alt.png" text="1. Home - The Call to Action was modified to remove the two Username and Password textboxes. It also includes an image symbolizing the brand."/>
              <div class="w-100 py-8">
              1. <b>Home</b> - The Call to Action was modified to remove the two Username and Password textboxes. It also includes an image symbolizing the brand. 
            </div>
            </v-col>
            <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
              <view-image imageWidth="90%" src="to-site2.png" text="2. Feed - The mobile layout was referenced with this page. Components were shifted accordingly to make use of the wider screen."/>
              <div class="w-100 py-8">
              2. <b>Feed</b> - The mobile layout was referenced with this page. Components were shifted accordingly to make use of the wider screen.
            </div>
            </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8"> 
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageWidth="90%" src="to-site3.png" text="3. Find a Mentor - Keeps the same options, but adds a Card component to the options for better accesssibility."/>
            <div class="w-100 py-8">
              3. <b>Find a Mentor</b> - Keeps the same options, but adds a Card component to the options for better accesssibility.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="to-site4.png" text="4. Chat - The Chat component was mostly kept the same, with some added styling."/>
            <div class="w-100 py-8">
              4. <b>Chat</b> - The Chat component was mostly kept the same, with some added styling.
            </div>
          </v-col>
        </v-row>
      </template>
    
      <template #logo1>
        <v-img class="pt-1" height="150" :src="imgSrc('logo-to.png')" />
      </template>
      <template #logo2>
        <p>
              For the Torch logo, I kept in mind that college students and experienced mentors would be the target consumer. I wanted to give the idea of "passing the torch" during an Olympic event. I wanted to also to keep the color and typography in a more structured manner since this is a more educational experience.
            </p>        
      </template>


      <template #color>
        <v-row justify="space-evenly" class="py-8"> 
          <v-col cols="11" class="py-3">
            <view-image imageWidth="80%" src="to-sticker.png" />
          </v-col>
        </v-row>
      </template>
    </ideate>

    <evaluate :color="primaryColor" :caseStudyUrl="caseStudyUrl">
      <template #lessons>
        <p>
            I discovered a great insight on the importance of Information Architecture in web design. Creating an organized sitemap, and understanding how the data should be structured is critical when designing a new app or website.
        </p>
      </template>
      <template #next>
        <ol>
          <li>Design a responsive feel for tablet screens. Currently the above projects are only focused on mobile and desktop versions of the project.</li>
          <li>I would add availability options to the mentor list and profile pages. This would give great insight to a fellow user looking for a mentor in their area.</li>
          <li>I would attempt to merge the Mentor Form into a single form, rather than breaking it up into pieces. To do that, I would need to ensure that form validation is instant on each field to prevent excess scrolling to resolve invalid parameters.</li>
        </ol>        
      </template>
    </evaluate>
      </div>
    </v-col>
  </v-row>
</template>