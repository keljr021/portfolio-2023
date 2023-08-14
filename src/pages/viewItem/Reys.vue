<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import ViewOverview from '../../components/partials/ViewOverview.vue';
  import ViewDefine from '../../components/partials/ViewDefine.vue';
  import ViewSolution from '../../components/partials/ViewSolution.vue';
  import ViewResults from '../../components/partials/ViewResults.vue';
  import ViewTakeaways from '../../components/partials/ViewTakeaways.vue';
  export default {
    name: 'Reys ',
    data() {
      return {
        prototypeUrl: 'https://www.figma.com/proto/5NxCYVA06z3PUwJN9qYVR1/Mexican-Restaurant-App---Revised?node-id=140%3A485&scaling=scale-down&page-id=140%3A2&starting-point-node-id=140%3A485',
        caseStudyUrl: 'https://docs.google.com/presentation/d/1L7N0_CG95WT4dYPjiDQqjJcviKUniSmyCGsc_-OxTvg/edit?usp=sharing'
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
    title="Rey's Mexican Restaurant App"
    subtitle="A menu app to streamline the ordering process"
    :prototypeUrl="prototypeUrl"
    :caseStudyUrl="caseStudyUrl"
    :imageSrc="imgSrc('work/reys-mobile.png')"
    isMobileImg="true"
  >
    <template #role>
      UX Designer, Logo Designer
    </template>
    <template #client>
      Rey's Mexican Restaurant
    </template>
    <template #tools>
      Figma, Inkscape
    </template>
    <template #date>
      Sep 2022 - Nov 2022
    </template>
  </view-title-banner>

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
    <view-overview  :color="secondaryColor">
      <template #overview>
        <p>For this project, I focused on designing a menu app for a Mexican Restaurant. Rey's Mexican Restaurant is a restaurant chain that provides authentic Mexican food with a variety of options.</p>
      </template>
      <template #problem>
        Customers have complained about long wait times when ordering lunch, and frustration regarding the accuracy of their orders during pickup.
      </template>
      <template #goal>
        Design an app that allows users to order food online, and pick up their order within the allotted time frame; which avoids long waits in line to order, and helps accuracy when picking up their order.
      </template>
    </view-overview>



    <view-define :color="primaryColor">
      <template #persona1>
        <p>
          <b>Cal Murphy</b> is a busy office manager who needs more accurate order tracking because he has a tight work schedule and limited time in between meetings.
        </p>
      </template>
      <template #persona2>
        <v-img class="pt-1" width="100%" :src="imgSrc('reys-persona.png')" />
      </template>
      <template #user1>
        <v-img class="pt-1" width="100%" :src="imgSrc('reys-usermap.png')" />
      </template>
      <template #user2>
        <p>From documenting Cal's User journey, I have discovered that an Order Tracker would increase the accuracy of takeout orders. The app can notify users when items are ready for pickup, and allowing members to confirm their order status.</p>
      </template>
    </view-define>



    <view-solution :color="secondaryColor">
      <template #wireframes>
        <v-row justify="center" class="py-8">
          <v-col cols="11" class="my-auto">
            <div class="view-text-section-title">Paper Wireframes</div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="4" lg="4">
            <v-img class="pt-1" height="350" :src="imgSrc('reys-pframe1.jpg')" />
            <div class="w-100 py-8">
              1. I began to sketch out the general workflow of the application.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="4" lg="4">
            <v-img class="pt-1" height="300" :src="imgSrc('reys-pframe2.jpg')" />
            <div class="w-100 py-8">
              2. Then I brainstormed several rough draft ideas of how the app should look. From these drafts, I've picked a few items from each to add to the final wireframe.
            </div>
          </v-col> 
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="4" lg="4">
            <v-img class="pt-1" height="300" :src="imgSrc('reys-pframe3.jpg')" />
            <div class="w-100 py-8">
              3. Finally, I've drawn up the final version of the wireframes. Above is an example of the Menu pages.
            </div>
          </v-col>
        </v-row>
        <v-row class="my-12">
          <v-col>
            <div class="view-text-section-title">Digital Wireframes</div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" height="300" :src="imgSrc('reys-dframe1.png')" />
            <div class="w-100 py-8">
              1. <b>Home</b> - The page is layout with the restaurant image, and a slider of menu options. There is a View Menu button across the width of the screen. Near the navigation, a Cart button is added.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" height="300" :src="imgSrc('reys-dframe2.png')" />
            <div class="w-100 py-8">
              2. <b>Menu Grid View</b> - The Grid View shows the various menu items in a grid like layout to quickly sort through each choice. There is also an option to toggle between Grid and List view.
            </div>
          </v-col> 
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" height="300" :src="imgSrc('reys-dframe3.png')" />
            <div class="w-100 py-8">
              3. <b>Menu List View</b> - The List View shows the items in a list layout with more information for each item.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" height="300" :src="imgSrc('reys-dframe5.png')" />
            <div class="w-100 py-8">
              4. <b>Order Tracker</b> - Diagrams a vertical stepper which will allow users to track their order status until pickup.
            </div>
          </v-col>
        </v-row>
      </template>
      <template #usability1>
        <v-img class="pt-1 mx-auto" width="80%" :src="imgSrc('reys-study.png')" />
      </template>
      <template #usability2>
        <p>From the study, I've discovered several improvements, including adding a confirmation page during the order submission workflow before submission. This will ensure that orders are accurate before-hand.</p>
        <p>There is a Language option that needs to have a more simplified workflow for users. Changing the language of the app can get cumbersome from the wireframes.</p>
        <p>Lastly, the app should have an Account system for quicker access to customer information.</p>
      </template>
    </view-solution>



    <view-results :color="primaryColor">
      <template #logo1>
        <v-img class="pt-1" height="150" :src="imgSrc('logo-reys.png')" />
      </template>
      <template #logo2>
        <p>The logo idea was to make a casual and family-friendly with a more authentic feel. It also uses the a golden color for the "Rey's" to highlight a royal and proper tone.</p>
      </template>
      <template #mockups>
        <v-row justify="space-evenly" class="py-8">
          <v-col>
            <div class="view-text-section-title link" @click="windowOpen(prototypeUrl)">
              Mockups
              <v-icon size="x-small">mdi-open-in-new</v-icon>
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
              <v-img class="pt-1" height="300" :src="imgSrc('reys-mock1.png')" />
              <div class="w-100 py-8">
                1. <b>Home</b> - Added a Cart and Account button to the navigation. The color and typography has been updated accordingly.

              </div>
            </v-col>
            <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
              <v-img class="pt-1" height="300" :src="imgSrc('reys-mock2.png')" />
              <div class="w-100 py-8">
                2. <b>Menu Grid View</b> - The Grid and List buttons were grouped to show the relation among one another.
              </div>
            </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8"> 
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" height="300" :src="imgSrc('reys-mock3.png')" />
            <div class="w-100 py-8">
                3. <b>Menu List View</b> - For the list items, added a description to each.
              </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" height="300" :src="imgSrc('reys-mock4.png')" />
            <div class="w-100 py-8">
                4. <b>Order Tracker</b> - Added the Order number and estimated time on top instead of the bottom area.
            </div>
          </v-col>
        </v-row>
      </template>
    </view-results>
     


    <view-takeaways>
      <template #lessons>
        <p>
          From working on this app, I have learned the great importance of usability studies and user feedback. It has given me insight to areas that were not thought about during the prototyping phase of the app. Going through the process has been very beneficial to designing in the future.
        </p>
      </template>
      <template #next>
        <ol>
          <li>Currently the UI has a responsive website feel. I would modify the structure of the UI for a dedicated mobile app.</li>
          <li>Continue with a webpage for desktop users to give customers an additional online option for the restaurant.</li>
          <li>Reformat the input components using a UI framework (such as Material UI).</li>
          <li>Conduct another usability study on the high-fidelity designs.</li>
        </ol>        
      </template>
    </view-takeaways>

  </div>
</template>