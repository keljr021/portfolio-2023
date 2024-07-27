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
    name: 'Four',
    data() {
      return {
        mobileWireframeUrl: 'https://www.figma.com/proto/vnB2X5xQX38Bhz9Nq2X7ee/4-Lives-AI?type=design&node-id=13-950&t=i9MK2r2GrtT0j1vu-1&scaling=scale-down&page-id=13%3A596&mode=design',
        desktopWireframeUrl: 'https://www.figma.com/proto/vnB2X5xQX38Bhz9Nq2X7ee/4-Lives-AI?type=design&node-id=3-161&t=zbR1jXXPcPLTNuMU-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A4&mode=design',
        mobilePrototypeUrl: 'https://www.figma.com/proto/vnB2X5xQX38Bhz9Nq2X7ee/4-Lives-AI?type=design&node-id=76-5666&t=V6DdFKCvilGcjKaA-1&scaling=scale-down-width&page-id=76%3A3524&starting-point-node-id=78%3A1674&mode=design',
        desktopPrototypeUrl: 'https://www.figma.com/proto/vnB2X5xQX38Bhz9Nq2X7ee/4-Lives-AI?type=design&node-id=28-242&t=7r8PqfSf9rv4qlZX-1&scaling=min-zoom&page-id=28%3A187&starting-point-node-id=28%3A242&mode=design',
        caseStudyUrl: 'https://docs.google.com/presentation/d/11AmaJsV7683gmRCD8ctkhfBbgtaMJRarI9DvzXZhG2Q/edit?usp=sharing'
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
      WorkImage,
      ViewImage
  }
}
</script>

<template>
  <v-row style="padding-top: 40px">
    <v-col cols="3" style="background:#ccc;position:fixed;max-height:calc(90vh);overflow-y:auto;z-index:2">
      <view-title-banner 
        :backgroundColor="primaryColor"
        title="4 Lives AI"
        subtitle="x"
        :mobilePrototypeUrl="mobilePrototypeUrl"
        :desktopPrototypeUrl="desktopPrototypeUrl"
        :caseStudyUrl="caseStudyUrl"
        :imageSrc="imgSrc('work/fl-desktop.png')"
        :mobileSrc="imgSrc('work/fl-mobile.png')"
        @window-open="windowOpen"
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
    </v-col>
    <v-col offset="2">
      <div class="view-text" :style="{ 'padding-left': '40px', 'border-bottom': '1px solid' + primaryColor }">
        <overview  :color="secondaryColor">
          <template #overview>
            <p>
              This project was born based on my interests in video games; and the continued accolades of Artificial Intelligence.
            </p>
            <p>
              Ever been in this situation? You purchase a new game system and finally get the time to play it. You assemble the system, and find out you can't play it because you missed an important item that was sold separately. This project helps to reduce similar frustrations.
            </p>
            <p>
              4 Lives AI is an online resource to connect users to the gaming information that exists online using AI-generated queries.        
            </p>
          </template>
          <template #image>
            <v-img v-if="$vuetify.display.smAndDown" class="mx-auto" width="125" style="max-width:inherit" :src="imgSrc('logo-fl.png')" />
            <v-img v-else height="150" :src="imgSrc('logo-fl.png')" />
          </template>
        </overview>

        <empathize :color="primaryColor">
          <template #problem>
          Some consumers are overwhelmed or confused with the various video game options out there. Many times, purchases are made based on what is told to them, or going off of their own judgement without a clear understanding of what to buy.      
          </template>
          <template #goal>
            This project is to provide an online resource that takes a user-generated question and give recommended information of video game items.       
          </template>
          <template #persona>
            <view-image src="fl-persona.png" />
          </template>
          <template #diagram>
            <view-image src="fl-diagram.png" />
          </template>
        </empathize>

        <define :color="primaryColor">
          <template #ideas>
            <p>For this project, I started with a user diagram that guides the user flow on how the site should operate. The diagram allows us to clearly define the goals to achieve during this project, including the below:</p>
            <ol>
                <li>The user should be able to enter a query to gather specific information.</li>
                <li>The query should give information laid out in an easy to read format.</li>
                <li>There needs to be an option for the user to share that generated content.</li>
            </ol>
          </template>
        </define>

        <ideate :color="primaryColor">
          <template #paper>
            <v-row justify="space-evenly" class="py-8">
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="6" lg="6">
                <view-image imgHeight="350" src="fl-pframe1.png" text="1. Began with documenting some various ideas and notes for this project." />
                <div class="w-100 py-8">
                  1. Began with documenting some various ideas and notes for this project.
                </div>
              </v-col>
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="6" lg="6">
                <view-image imgHeight="300" src="fl-pframe2.png" text="2. Then, generated a sitemap of pages that should be available on the site."/>
                <div class="w-100 py-8">
                  2. Then, generated a sitemap of pages that should be available on the site.
                </div>
              </v-col> 
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="6" lg="6">
                <view-image imgHeight="300" src="fl-pframe3.jpg" text="3. I've then created a paper wireframe of the layout of each page."/>
                <div class="w-100 py-8">
                  3. I've then created a paper wireframe of the layout of each page.
                </div>
              </v-col>
            </v-row>

          </template>


          <template #lofi>        
            <v-row justify="space-evenly" class="py-8">
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                <view-image imgHeight="350" src="fl-dframe1.png" text="1. Home - Adds a textarea and Submit button as a Call to Action to the page so the user has a quick way to query the site."/>
                <div class="w-100 py-8">
                  1. <b>Home</b> - Adds a textarea and Submit button as a Call to Action to the page so the user has a quick way to query the site.
                </div>
              </v-col>
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
                <view-image imgHeight="350" src="fl-dframe2.png" text="2. Query Page - When the user submits a question, this page is generated with the main answer on top. Additional information is laid out below with links to more content."/>            <div class="w-100 py-8">
                  2. <b>Query Page</b> - When the user submits a question, this page is generated with the main answer on top. Additional information is laid out below with links to more content.
                </div>
              </v-col>
            </v-row>
            <v-row justify="space-evenly" class="py-8">  
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                <view-image imgHeight="350" src="fl-dframe3.png" text="3. Section Page - Based on the information, the content may lay out as a grid of items. When clicked, the query page would be loaded with content based on the selection. The question section near the navbar lets the user keep track of what current question has been asked."/>
                <div class="w-100 py-8">
                  3. <b>Section Page</b> - Based on the information, the content may lay out as a grid of items. When clicked, the query page would be loaded with content based on the selection. The question section near the navbar lets the user keep track of what current question has been asked.
                </div>
              </v-col>
            </v-row>
          </template>

          <template #study>
            <ul>
                <li>From conducting the usability study, several of the users noticed that they have to the Home page or Ask page to update their questions. There needs to be a quicker way for users to refine or update queries.</li>
                <li>The Share and Print options were missed in a few of the studies that would allow users to share content. These options would need to be more prominently displayed to the user.</li>
            </ul>      
          </template>

          <template #hifi>
            <v-row justify="space-evenly" class="py-8">
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                  <view-image imgWidth="90%" src="fl-mock1.png" text="1. Home - For the mockups, I've used 'Microsoft Fluent UI' for the components. A background image was added to complement the AI-generated workflow. Scrolling below displays a most recently searched section with links to quickly generate content."/>
                  <div class="w-100 py-8">
                  1. <b>Home</b> - For the mockups, I've used <i>Microsoft Fluent UI</i> for the components. A background image was added to complement the AI-generated workflow. Scrolling below displays a most recently searched section with links to quickly generate content.
                </div>
                </v-col>
                <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
                  <view-image imgWidth="90%" src="fl-mock2.png" text="2. Query Page - The layout is largely unchanged, but uses Card components for each section. The question component near the navbar is now clickable for the user to quickly refine or update their question; and re-submit. The Share and Print options are added to the right of the page and fixed whenever the user scrolls."/>
                  <div class="w-100 py-8">
                  2. <b>Query Page</b> - The layout is largely unchanged, but uses Card components for each section. The question component near the navbar is now clickable for the user to quickly refine or update their question; and re-submit. The Share and Print options are added to the right of the page and fixed whenever the user scrolls.
                </div>
                </v-col>
            </v-row>
            <v-row justify="space-evenly" class="py-8"> 
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                <view-image imgWidth="90%" src="fl-mock3.png" text="3. Section Page - The layout is also kept the same; and used the Card components to separate each item. The Share and Print options are also on the right of the page."/>
                <div class="w-100 py-8">
                  3. <b>Section Page</b> - The layout is also kept the same; and used the Card components to separate each item. The Share and Print options are also on the right of the page.
                </div>
              </v-col>
            </v-row>
          </template>
        
          <template #logo1>
            <v-img class="pt-1" height="125" :src="imgSrc('logo-fl.png')" />
          </template>
          <template #logo2>
            <p>
              This logo I've gien it a modern and digital structure. The background underneath the "4" is shaped as a digital diamond, and the typography gives an old-style computer terminal feel, since the site would use AI for most of it's content.
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
              Working on this project, I have gained more knowledge in using the Assets panel from Figma. This has proved very beneficial when prototyping the project to reuse assets, components, and layout structure.
            </p>
            <p>
              I have also researched areas around AI-generated queries; and realize how powerful AI can be in the near future.
            </p>
          </template>
          <template #next>
            <ol>
              <li>For the Print option, I would add a way to remove unneeded sections from the page before sending to the printer.</li>
              <li>I would add a section that would give links of where to purchase video game items; and possibly a direct link to the specific item.</li>
              <li>One nice to have would be a Forum section so members can chat with one another and ask each other questions online.</li>
            </ol>        
          </template>
        </evaluate>
      </div>
    </v-col>    
  </v-row>
</template>