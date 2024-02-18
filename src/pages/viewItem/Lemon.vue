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
    name: 'Lemon',
    data() {
      return {
        wireframeUrl: 'https://xd.adobe.com/view/25553f55-f5fc-4c50-9954-ab41db3bf124-7006/?fullscreen',
        desktopPrototypeUrl: 'https://xd.adobe.com/view/39ebb787-4097-4220-85a0-e901d27a116f-6cb8/?fullscreen',
        mobilePrototypeUrl: 'https://xd.adobe.com/view/39ebb787-4097-4220-85a0-e901d27a116f-6cb8/screen/834dee81-37bd-4411-98b2-023f9a754dce?fullscreen',
        caseStudyUrl: 'https://docs.google.com/presentation/d/1KkYDj0hg_QahT5ULisc1QjGmakgCmZHS1LnPMD-qadA/edit?usp=sharing'
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
      },

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
    title="LemonBranch DIY Network"
    subtitle="A responsive site to view tutorials and how-tos"
    :mobilePrototypeUrl="mobilePrototypeUrl"
    :desktopPrototypeUrl="desktopPrototypeUrl"
    :caseStudyUrl="caseStudyUrl"
    :imageSrc="imgSrc('work/lb-desktop.png')"
    :mobileSrc="imgSrc('work/lb-mobile.png')"
    @window-open="windowOpen"
  >
    <template #role>
      UX Designer, Logo Designer
    </template>
    <template #tools>
      Adobe XD, Inkscape, Clip Studio Paint
    </template>
    <template #date>
      Nov 2022 - Dec 2022
    </template>
  </view-title-banner>

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
    <overview  :color="secondaryColor">
      <template #overview>
        <p>
          The LemonBranch Network is a company that hosts various online tutorials to view; and also allows members to create their own tutorials.
        </p>
        <p>
          For this project, I kept a minimal color scheme, and focused on functionality with a search feature with filtering and sort options, while making the designs as responsive as possible for mobile.
        </p>
      </template>
      <template #image>
        <v-img class="pt-1" :height="$vuetify.display.xs ? 'initial' : '65'"  :width="$vuetify.display.xs ? '90%' : 'initial'" :src="imgSrc('logo-lb.png')" />
      </template>
    </overview>



    <empathize :color="primaryColor">
      <template #problem>
        Users often look online to view a tutorial on various items. Often they have to use various search engines to find those tutorials; which could generate inaccurate results.
      </template>
      <template #goal>
        Give users an option to find tutorials online in a more streamlined way so members are able to find accurate tutorials.
      </template>
      <template #persona>
        <view-image src="lb-persona.png" />
      </template>
      <template #user>
        <view-image src="lb-usermap.png" />
      </template>
    </empathize>

    
    <define :color="primaryColor">
      <template #ideas>
        <p>From documenting Jerry's User journey, I have discovered the following opportunities when searching for a tutorial.</p>
        <ol>
            <li>The site should include sections, filter, and sort options to improve search queries.</li>
            <li>A comment and rating system to each tutorial item would better help find accurate tutorial articles.</li>
            <li>Include a filter option to search for video or article tutorials.</li>
        </ol>
      </template>
    </define>





    <ideate :color="primaryColor">
      <template #paper>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageWidth="90%" src="lb-sitemap.png" text="1. Started with generating a sitemap to brainstorm the various pages."/>
            <div class="w-100 py-8">
              1. Started with generating a sitemap to brainstorm the various pages.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageWidth="80%" src="lb-pframe2.jpg" text="2. Drew several rough drafts of the site and it's corresponding pages. I used the 'Crazy Eights' method to jot down a few drafts."/>
            <div class="w-100 py-8">
              2. Drew several rough drafts of the site and it's corresponding pages. I used the "Crazy Eights" method to jot down a few drafts.
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageWidth="100%" src="lb-home-drafts.jpg" text="3. Used 'Clip Studio Paint' to draw up a few rough drafts of the Home page, and highlighted the items that should be in the final draft." />
            <div class="w-100 py-8">
              3. Used <i>Clip Studio Paint</i> to draw up a few rough drafts of the Home page, and highlighted the items that should be in the final draft.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageHeight="400" src="lb-pframe3.jpg" text="4. Lastly I've drawn up the final version of the wireframes."/>
            <div class="w-100 py-8">
              4. Lastly I've drawn up the final version of the wireframes.
            </div>
          </v-col>
        </v-row>
      </template>
      <template #lofi>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageWidth="90%" src="lb-dframe1.png" text="1. Home - Used the paper wireframes to align the Home page. The Search bar is the main item centered in the page."/>
            <div class="w-100 py-8">
              1. <b>Home</b> - Used the paper wireframes to align the Home page. The Search bar is the main item centered in the page.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="lb-dframe2.png" text="2. Search - On the top, the total amount is shown. The lower section has a filter option on the left, with the results on the right. The top navigation gives members an option to quickly search for another tutorial throughout the site."/>
            <div class="w-100 py-8">
              2. <b>Search</b> - On the top, the total amount is shown. The lower section has a filter option on the left, with the results on the right. The top navigation gives members an option to quickly search for another tutorial throughout the site.
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">  
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageWidth="90%" src="lb-dframe3.png" text="3. View Tutorial - The tutorial is layered out with the title and caption first, an image, and the content spaced out below. An area for accessibility options is located on the top right corner."/>
            <div class="w-100 py-8">
              3. <b>View Tutorial</b> - The tutorial is layered out with the title and caption first, an image, and the content spaced out below. An area for accessibility options is located on the top right corner.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="lb-dframe4.png" text="4. View Author - The author page has information on the tutorial writer, with a photo placeholder on the right."/>
            <div class="w-100 py-8">
              4. <b>View Author</b> - The author page has information on the tutorial writer, with a photo placeholder on the right.
            </div>
          </v-col>
        </v-row>
      </template>
      <template #study1>
        <view-image imageWidth="80%" src="lb-study.png" text="From the Usability Study, there were a few items that were discovered. To start, the Account workflow needed refinement for both the Login and Create Account workflows. The View Author page could not be easily navigated to, and also needed restructure. Lastly the Filter options in the Search bar has caused some confustion among the users, and needed to be more defined."/>
      </template>
      <template #study2>
          <p>From the Usability Study, there were a few items that were discovered. To start, the Account workflow needed refinement for both the Login and Create Account workflows.</p>
          <p>The View Author page could not be easily navigated to, and also needed restructure.</p>
          <p>Lastly the Filter options in the Search bar has caused some confustion among the users, and needed to be more defined.</p> 
      </template>

      <template #hifi>
        <v-row justify="space-evenly" class="">
          <v-col cols="11">
            <v-btn :class="{ 'mx-3 px-3': true, 'mb-3': $vuetify.display.xs }" @click="windowOpen(mobilePrototypeUrl)" color="#666" variant="outlined" title="Open in new tab">
                <v-icon class="mr-3">mdi-open-in-new</v-icon>
                Mobile
              </v-btn>
              <v-btn :class="{ 'mx-3 px-3': true, 'mb-3': $vuetify.display.xs }" @click="windowOpen(desktopPrototypeUrl)" color="#666" variant="outlined" title="Open in new tab">
                <v-icon class="mr-3">mdi-open-in-new</v-icon>
                Desktop
              </v-btn>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
               <view-image imageWidth="90%" src="lb-mock1.png" text="1. Home - I used a green and yellow color scheme to build out the Call to Action; with an image to further emphasize the company brand. The Search bar is also shown in the center for quick access."/>
              <div class="w-100 py-8">
                1. <b>Home</b> - I used a green and yellow color scheme to build out the Call to Action; with an image to further emphasize the company brand. The Search bar is also shown in the center for quick access.
              </div>
            </v-col>
            <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
              <view-image imageWidth="90%" src="lb-mock2.png" text="2. Search - The layout is aligned similarly with the digital wireframe. The page includes a sort dropdown, and a light green background to separate the results section. A ratings system below each tutorial item has also been added."/>
              <div class="w-100 py-8">
                2. <b>Search</b> - The layout is aligned similarly with the digital wireframe. The page includes a sort dropdown, and a light green background to separate the results section. A ratings system below each tutorial item has also been added.
              </div>
            </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8"> 
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <view-image imageWidth="90%" src="lb-mock3.png" text="3. View Tutorial - The layout is kept the same with different typography; also added print and enlarge font options on the top right."/>
            <div class="w-100 py-8">
                3. <b>View Tutorial</b> - The layout is kept the same with different typography; also added print and enlarge font options on the top right.
              </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <view-image imageWidth="90%" src="lb-mock4.png" text="4. View Author - Updated the typography of the page, and updated the body text with indentation to separate from the title and subtitle."/>
            <div class="w-100 py-8">
                4. <b>View Author</b> - Updated the typography of the page, and updated the body text with indentation to separate from the title and subtitle.
              </div>
          </v-col>
        </v-row>
      </template>

      <template #logo1>
        <v-img class="pt-1" :height="$vuetify.display.xs ? 'initial' : '65'"  :width="$vuetify.display.xs ? '90%' : 'initial'" :src="imgSrc('logo-lb.png')" />
      </template>
      <template #logo2>
        <p>
           The LemonBranch logo was designed for a simple, but welcoming feel. The "L" letter in the logo has a lemon grown similar to a lemon tree.
        </p>  
      </template>
    </ideate>

    <evaluate :color="primaryColor" :caseStudyUrl="caseStudyUrl">
      <template #lessons>
        <p>
          During the prototyping phase of this project, I've gained more experience in using the Components and Library options in Adobe XD. Using these options will streamline prototyping in the future.
        </p>
      </template>
      <template #next>
        <ol>
          <li>Currently the prototype only has text versions of tutorials. I would enhance the workflow to allow video tutorials, along with the video and text filtering in the search queries.</li>
          <li>I would also add in tablet responsive views, to ensure the prototype also handle tablet views.</li>
          <li>I would slightly restructure the site map and navigation. For example, having a search page alongside the search bar during the navigation could cause confusion.</li>
        </ol>        
      </template>
    </evaluate>

  </div>
</template>