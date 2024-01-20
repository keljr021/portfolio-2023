<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import Overview from '../../components/partials/view/Overview.vue';
  import Empathize from '../../components/partials/view/Empathize.vue';
  import Define from '../../components/partials/view/Define.vue';
  import Ideate from '../../components/partials/view/Ideate.vue';
  import Evaluate from '../../components/partials/view/Evaluate.vue';
  import Solution from '../../components/partials/view/Solution.vue';
  export default {
    name: 'Four',
    data() {
      return {
        mobileWireframeUrl: 'https://www.figma.com/proto/vnB2X5xQX38Bhz9Nq2X7ee/4-Lives-AI?type=design&node-id=13-950&t=i9MK2r2GrtT0j1vu-1&scaling=scale-down&page-id=13%3A596&mode=design',
        desktopWireframeUrl: 'https://www.figma.com/proto/vnB2X5xQX38Bhz9Nq2X7ee/4-Lives-AI?type=design&node-id=3-161&t=zbR1jXXPcPLTNuMU-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A4&mode=design',
        mobilePrototypeUrl: 'https://www.figma.com/proto/vnB2X5xQX38Bhz9Nq2X7ee/4-Lives-AI?type=design&node-id=76-5666&t=V6DdFKCvilGcjKaA-1&scaling=scale-down-width&page-id=76%3A3524&starting-point-node-id=78%3A1674&mode=design',
        desktopPrototypeUrl: 'https://www.figma.com/proto/vnB2X5xQX38Bhz9Nq2X7ee/4-Lives-AI?type=design&node-id=28-242&t=7r8PqfSf9rv4qlZX-1&scaling=min-zoom&page-id=28%3A187&starting-point-node-id=28%3A242&mode=design',
        caseStudyUrl: 'https://docs.google.com/presentation/d/1CbvvBE5rUeZywcQJZRo_OzVhJJSYJrjRe7X77Tes8hE/edit?usp=sharing'
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
      Overview,
      Define,
      Empathize,
      Evaluate,
      Ideate,
      Solution,
      WorkImage
    }
}
</script>

<template>
  <view-title-banner 
    :backgroundColor="primaryColor"
    title="4 Lives AI"
    subtitle="x"
    :mobilePrototypeUrl="mobilePrototypeUrl"
    :desktopPrototypeUrl="desktopPrototypeUrl"
    :caseStudyUrl="caseStudyUrl"
    :imageSrc="imgSrc('work/fl-desktop.png')"
    :mobileSrc="imgSrc('work/fl-mobile.png')"

  >
    <template #role>
      UX Designer, Logo Designer
    </template>
    <template #tools>
      Figma, Inkscape
    </template>
    <template #date>
      Jan 2024
    </template>
  </view-title-banner>

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
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
        <v-img v-if="$vuetify.display.smAndDown" class="mx-auto" width="125" style="max-width:inherit" :src="imgSrc('logo-fl.png')" />
        <v-img v-else height="150" :src="imgSrc('logo-fl.png')" />
      </template>
    </overview>

    <empathize :color="primaryColor">
      <template #problem>
       Users can be overwhelmed or confused with the various video game options out there. Many times, these are based on what is told to them, or going off of their judgements; which can cause them to get an incorrect item.      </template>
      <template #goal>
        Provide an online resource that takes a user-generated question and give accurate information of a particular gaming topic.       </template>
      <template #persona>
        <v-img class="pt-1" width="100%" :src="imgSrc('fl-persona.png')" />
      </template>
      <template #diagram>
        <v-img class="pt-1" width="100%" :src="imgSrc('fl-diagram.png')" />
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
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="4" lg="4">
            <v-img class="pt-1" height="350" :src="imgSrc('fl-pframe1.png')" />
            <div class="w-100 py-8">
              1. I began to sketch out the general workflow of the application.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="4" lg="4">
            <v-img class="pt-1" height="300" :src="imgSrc('fl-pframe2.png')" />
            <div class="w-100 py-8">
              2. Then I brainstormed several rough draft ideas of how the app should look. From these drafts, I've picked a few items from each to add to the final wireframe.
            </div>
          </v-col> 
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="4" lg="4">
            <v-img class="pt-1" height="300" :src="imgSrc('fl-pframe3.jpg')" />
            <div class="w-100 py-8">
              3. Finally, I've drawn up the final version of the wireframes. Above is an example of the Menu pages.
            </div>
          </v-col>
        </v-row>

      </template>


      <template #lofi>        
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" height="350" :src="imgSrc('fl-dframe1.png')" />
            <div class="w-100 py-8">
              1. <b>Home</b> - Adds a quick Title and message on the top page with an image placeholder. The sections below would be a quick link to various options and articles found on the site.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" height="350" :src="imgSrc('fl-dframe2.png')" />
            <div class="w-100 py-8">
              2. <b>Find a Mentor</b> - The main search area where the user can either Search for a Mentor or fill out a generic Form. The user is also given a bottom navbar to navigate between pages.
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">  
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" height="350" :src="imgSrc('fl-dframe3.png')" />
            <div class="w-100 py-8">
              3. <b>Mentor Profile</b> - Gives a page that displays a mentor's information; such as area of study.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" height="350" :src="imgSrc('fl-dframe4.png')" />
            <div class="w-100 py-8">
              4. <b>Chat</b> - Displays the Chat layout that shows the list of members that the user has conversed with.
            </div>
          </v-col>
        </v-row>
      </template>

      <template #study>
        <ul>
            <li>From conducting the usability study, I've discoved that the Mentor Search workflow was inconsistent between navigation and the headers. This would be resolved in the upcoming prototyope.</li>
            <li>During the workflow, a majority of the testers had difficulty navigating through each page. I would need to further simplify the workfow when going through the app and site.</li>
            <li>There was an Article page also added to the site that confused a majority of the users when navigated. This would need refactoring in the upcoming prototype.</li>
        </ul>      
      </template>

      <template #hifi>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
              <v-img class="pt-1" width="90%" :src="imgSrc('fl-mock1.png')" />
              <div class="w-100 py-8">
              1. <b>Home</b> - The Call to Action was modified to remove the two Username and Password textboxes. It also includes an image symbolizing the brand. 
            </div>
            </v-col>
            <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
              <v-img class="pt-1" width="90%" :src="imgSrc('fl-mock2.png')" />
              <div class="w-100 py-8">
              2. <b>Feed</b> - The mobile layout was referenced with this page. Components were shifted accordingly to make use of the wider screen.
            </div>
            </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8"> 
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" width="90%" :src="imgSrc('fl-mock3.png')" />
            <div class="w-100 py-8">
              3. <b>Find a Mentor</b> - Keeps the same options, but adds a Card component to the options for better accesssibility.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" width="90%" :src="imgSrc('fl-mock4.png')" />
            <div class="w-100 py-8">
              4. <b>Chat</b> - The Chat component was mostly kept the same, with some added styling.
            </div>
          </v-col>
        </v-row>
      </template>
    
      <template #logo1>
        <v-img class="pt-1" height="125" :src="imgSrc('logo-fl.png')" />
      </template>
      <template #logo2>
        <p>
              For the Torch logo, I kept in mind that college students and experienced mentors would be the target consumer. I wanted to give the idea of "passing the torch" during an Olympic event. I wanted to also to keep the color and typography in a more structured manner since this is a more educational experience.
            </p>        
      </template>


      <template #color>
        <v-row justify="space-evenly" class="py-8"> 
          <v-col cols="11" class="py-3">
            <v-img width="80%" class="mx-auto" :src="imgSrc('fl-sticker.png')" />
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
</template>