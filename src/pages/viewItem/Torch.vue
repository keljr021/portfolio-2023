<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import ViewOverview from '../../components/partials/ViewOverview.vue';
  import ViewDefine from '../../components/partials/ViewDefine.vue';
  import ViewSolution from '../../components/partials/ViewSolution.vue';
  import ViewResults from '../../components/partials/ViewResults.vue';
  import ViewTakeaways from '../../components/partials/ViewTakeaways.vue';
  export default {
    name: 'Torch',
    data() {
      return {
        mobilePrototypeUrl: 'https://www.figma.com/proto/iJUBxL1NugZC1lL3FMUKV4/Torch-Responsive-Site?node-id=28%3A9537&scaling=scale-down&page-id=28%3A9536&starting-point-node-id=28%3A9537',
        desktopPrototypeUrl: 'https://www.figma.com/proto/iJUBxL1NugZC1lL3FMUKV4/Torch-Responsive-Site?node-id=28%3A11119&scaling=min-zoom&page-id=28%3A11118&starting-point-node-id=28%3A11119',
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
    title="Torch Mentorship Network"
    subtitle="A mobile app and website that connects students with mentors"
    :mobilePrototypeUrl="mobilePrototypeUrl"
    :desktopPrototypeUrl="desktopPrototypeUrl"
    :caseStudyUrl="caseStudyUrl"
    :imageSrc="imgSrc('work/to-desktop.png')"
  >
    <template #role>
      UX Designer, Logo Designer
    </template>
    <template #client>
      Torch Mentorship
    </template>
    <template #tools>
      Figma, Inkscape
    </template>
    <template #date>
      Jan 2023
    </template>
  </view-title-banner>

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
    <view-overview  :color="secondaryColor">
      <template #overview>
        <p>
           This project was to design both a mobile app and responsive website for a career mentorship service to help college graduates. Torch Mentorship Network is an online service that helps students connect with a mentor during their college studies.
        </p>
        <p>
            The main idea of the project was a simple and intuitive online presence geared towards college students and experienced mentors.
        </p>
      </template>
      <template #problem>
        Students find it frustrating to find a mentor. Often there are missed opportunities during college studies to connect with an experienced mentor in their field of study.
      </template>
      <template #goal>
        Create both a dedicated mobile app and responsive web site that gives users a better solution to connect with fellow mentors in their career field.      </template>
      <template #image>
        <v-img class="pt-1 mx-0" height="480" :src="imgSrc('work/to-mobile.png')" />
      </template>
    </view-overview>



    <view-define :color="primaryColor">
      <template #persona1>
        <p>
            <b>Joseph Strawn</b> is an upcoming college graduate who wants to find a mentor to learn more about radio communications. However, he has a hard time navigating resources to find an experienced mentor.
        </p>
      </template>
      <template #persona2>
        <v-img class="pt-1" width="100%" :src="imgSrc('to-persona.png')" />
      </template>
      <template #user1>
        <v-img class="pt-1" width="100%" :src="imgSrc('to-usermap.png')" />
      </template>
      <template #user2>
        <p>From documenting the user map, there were several discovered during the search process: </p>
        <ol>
            <li>We should create an easy to navigate home page for desktop users.</li>
            <li>When filling out a form, both the app and site should add a user's profile info from their account. This would allow for quicker form submissions.</li>
            <li>A mentor availability status is kept up-to-date within the site and app.</li>
        </ol>
      </template>
    </view-define>



    <view-solution :color="secondaryColor">
      <template #wireframes>
        <v-row justify="center" class="py-8">
          <v-col cols="11" class="my-auto">
            <div class="view-text-section-title">Paper Wireframes - Mobile App</div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" width="90%" :src="imgSrc('to-pframe1.jpg')" />
            <div class="w-100 py-8">
              1. For the mobile app, I've began rough drafting some ideas. I used the "Crazy Eights" method to quickly brainstorm some ideas on paper.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" width="90%" :src="imgSrc('to-pframe4.jpg')" />
            <div class="w-100 py-8">
              2. From there, I've also drafted three separate versions of each page, and picked out ideas from each one by marking an asterisk on the chosen sections.
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">  
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" width="90%" :src="imgSrc('to-pframe3.jpg')" />
            <div class="w-100 py-8">
              2b <i>(Continued)</i>. Also picked a few items on the back using the same asterisk.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" width="90%" :src="imgSrc('to-sitemap.png')" />
            <div class="w-100 py-8">
              3. To organize the different sections, I've created a sitemap that would benefit both the mobile app and the upcoming responsive site.
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-12">
          <v-col>
            <div class="view-text-section-title">Digital Wireframes - Mobile App</div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" height="350" :src="imgSrc('to-dframe1.png')" />
            <div class="w-100 py-8">
              1. <b>Home</b> - Adds a quick Title and message on the top page with an image placeholder. The sections below would be a quick link to various options and articles found on the site.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" height="350" :src="imgSrc('to-dframe2.png')" />
            <div class="w-100 py-8">
              2. <b>Find a Mentor</b> - The main search area where the user can either Search for a Mentor or fill out a generic Form. The user is also given a bottom navbar to navigate between pages.
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">  
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" height="350" :src="imgSrc('to-dframe3.png')" />
            <div class="w-100 py-8">
              3. <b>Mentor Profile</b> - Gives a page that displays a mentor's information; such as area of study.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" height="350" :src="imgSrc('to-dframe4.png')" />
            <div class="w-100 py-8">
              4. <b>Chat</b> - Displays the Chat layout that shows the list of members that the user has conversed with.
            </div>
          </v-col>
        </v-row>
        <v-row class="py-12">
          <v-col>
            <div class="view-text-section-title">Digital Wireframes - Responsive Site</div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" width="90%" :src="imgSrc('to-dframe5-alt.png')" />
            <div class="w-100 py-8">
              1. <b>Home</b> - I wanted to give a quick way to either login or create a new account in the Call to Action. The navbar and account components were used from <i>Salesforce's Lightning UI Kit.</i>
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" width="90%" :src="imgSrc('to-dframe6-alt.png')" />
            <div class="w-100 py-8">
              2. <b>Feed</b> - This page is shown after a member logs into their account. The idea is to give them the sections as buttons they can click on to prevent searching for options. On the right is a notification section that pops in when a member has a message or important information from the site. The Chat icon should be a fixed button on the bottom right corner.
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">  
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" width="90%" :src="imgSrc('to-dframe7.png')" />
            <div class="w-100 py-8">
              3. <b>Find a Mentor</b> - This page is similar to the mobile app, giving the users two options to select from. The images were created from <i>Blush Designs.</i>
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" width="90%" :src="imgSrc('to-dframe8.png')" />
            <div class="w-100 py-8">
              4. <b>Chat Enabled</b> - This shows the behavior when the Chat button is pressed.
            </div>
          </v-col>
        </v-row>                
      </template>
      <template #usability1>
        <v-img class="pt-1 mx-auto" width="80%" :src="imgSrc('to-study.png')" />
      </template>
      <template #usability2>
        <ul>
            <li>From conducting the usability study, I've discoved that the Mentor Search workflow was inconsistent between navigation and the headers. This would be resolved in the upcoming prototyope.</li>
            <li>During the workflow, a majority of the testers had difficulty navigating through each page. I would need to further simplify the workfow when going through the app and site.</li>
            <li>There was an Article page also added to the site that confused a majority of the users when navigated. This would need refactoring in the upcoming prototype.</li>
        </ul>      
      </template>
    </view-solution>



    <view-results :color="primaryColor">
      <template #logo1>
        <v-img class="pt-1" height="150" :src="imgSrc('logo-to.png')" />
      </template>
      <template #logo2>
        <p>
              For the Torch logo, I kept in mind that college students and experienced mentors would be the target consumer. I wanted to give the idea of "passing the torch" during an Olympic event. I wanted to also to keep the color and typography in a more structured manner since this is a more educational experience.
            </p>        
      </template>
      <template #mockups>
        <v-row class="pb-12">
          <v-col>
            <div class="view-text-section-title link" @click="windowOpen(mobilePrototypeUrl)">
              Mockups - Mobile App
              <v-icon size="x-small">mdi-open-in-new</v-icon>
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
              <v-img class="pt-1" height="350" :src="imgSrc('to-mobile1.png')" />
              <div class="w-100 py-8">
              1. <b>Home</b> - Instead of a long site, I've refactored the site in the mockups to show a quick login page front and center.

            </div>
            </v-col>
            <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
              <v-img class="pt-1" height="350" :src="imgSrc('to-mobile2.png')" />
              <div class="w-100 py-8">
              2. <b>Feed</b> - Used the previous Home layout from the wireframes for this page, with quick links and notifications after login.

            </div>
            </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8"> 
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" height="350" :src="imgSrc('to-mobile3.png')" />
            <div class="w-100 py-8">
              3. <b>Find a Mentor</b> - Modified the layout structure, and added instructional text based on user feedback from the lo-fi prototype.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" height="350" :src="imgSrc('to-mobile4.png')" />
            <div class="w-100 py-8">
              4. <b>Mentor Profile</b> - Kept the structure similar to prototype, but adds two more buttons for students to quickly connect with a mentor.
            </div>
          </v-col>
        </v-row>
        <v-row class="pb-12">
          <v-col>
            <div class="view-text-section-title link" @click="windowOpen(desktopPrototypeUrl)">
              Mockups - Responsive Site
              <v-icon size="x-small">mdi-open-in-new</v-icon>
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
              <v-img class="pt-1" width="90%" :src="imgSrc('to-site1-alt.png')" />
              <div class="w-100 py-8">
              1. <b>Home</b> - The Call to Action was modified to remove the two Username and Password textboxes. It also includes an image symbolizing the brand. 
            </div>
            </v-col>
            <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
              <v-img class="pt-1" width="90%" :src="imgSrc('to-site2.png')" />
              <div class="w-100 py-8">
              2. <b>Feed</b> - The mobile layout was referenced with this page. Components were shifted accordingly to make use of the wider screen.
            </div>
            </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8"> 
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" width="90%" :src="imgSrc('to-site3.png')" />
            <div class="w-100 py-8">
              3. <b>Find a Mentor</b> - Keeps the same options, but adds a Card component to the options for better accesssibility.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" width="90%" :src="imgSrc('to-site4.png')" />
            <div class="w-100 py-8">
              4. <b>Chat</b> - The Chat component was mostly kept the same, with some added styling.
            </div>
          </v-col>
        </v-row>
      </template>
    </view-results>
     


    <view-takeaways :caseStudyUrl="caseStudyUrl">
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
    </view-takeaways>

  </div>
</template>