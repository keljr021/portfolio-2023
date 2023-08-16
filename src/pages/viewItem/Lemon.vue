<script>
  import WorkImage from '../../components/partials/WorkImage.vue';
  import ViewTitleBanner from '../../components/partials/ViewTitleBanner.vue';
  import ViewOverview from '../../components/partials/ViewOverview.vue';
  import ViewDefine from '../../components/partials/ViewDefine.vue';
  import ViewSolution from '../../components/partials/ViewSolution.vue';
  import ViewResults from '../../components/partials/ViewResults.vue';
  import ViewTakeaways from '../../components/partials/ViewTakeaways.vue';
  export default {
    name: 'Lemon',
    data() {
      return {
        wireframeUrl: 'https://xd.adobe.com/view/25553f55-f5fc-4c50-9954-ab41db3bf124-7006/?fullscreen',
        desktopPrototypeUrl: 'https://xd.adobe.com/view/39ebb787-4097-4220-85a0-e901d27a116f-6cb8/?fullscreen',
        mobilePrototypeUrl: 'https://xd.adobe.com/view/39ebb787-4097-4220-85a0-e901d27a116f-6cb8/screen/834dee81-37bd-4411-98b2-023f9a754dce?fullscreen',
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
    title="LemonBranch DIY Network"
    subtitle="A responsive site to view tutorials and how-tos"
    :mobilePrototypeUrl="mobilePrototypeUrl"
    :desktopPrototypeUrl="desktopPrototypeUrl"
    :caseStudyUrl="caseStudyUrl"
    :imageSrc="imgSrc('work/lb-desktop.png')"
  >
    <template #role>
      UX Designer, Logo Designer
    </template>
    <template #client>
      LemonBranch Network
    </template>
    <template #tools>
      Adobe XD, Inkscape
    </template>
    <template #date>
      Nov 2022 - Dec 2022
    </template>
  </view-title-banner>

  <div class="view-text" :style="{ 'border-bottom': '1px solid' + primaryColor }">
    <view-overview  :color="secondaryColor">
      <template #overview>
        <p>
          The LemonBranch Network is a company that hosts various online tutorials to view; and also allows members to create their own tutorials.
        </p>
        <p>
          For this project, I kept a minimal color scheme, and focused on functionality with a search feature with filtering and sort options, while making the designs as responsive as possible for mobile.
        </p>
      </template>
      <template #problem>
        Users often look online to view a tutorial on various items. Often they have to use various search engines to find those tutorials; which could generate inaccurate results.
      </template>
      <template #goal>
        Give users an option to find tutorials online in a more streamlined way so members are able to find accurate tutorials.
      </template>
      <template #image>
        <v-img class="pt-1 mx-0" height="480" :src="imgSrc('work/lb-mobile.png')" />
      </template>
    </view-overview>



    <view-define :color="primaryColor">
      <template #persona1>
        <p>
          <b>Jerry Lyn</b> is a newlywed Network Admin that has recently purchased a new house. He uses his phone often to find quick tutorials on different projects to help him navigate new home ownership.
        </p>
      </template>
      <template #persona2>
        <v-img class="pt-1" width="100%" :src="imgSrc('lb-persona.png')" />
      </template>
      <template #user1>
        <v-img class="pt-1" width="100%" :src="imgSrc('lb-usermap.png')" />
      </template>
      <template #user2>
        From documenting Jerry's User journey, I have discovered the following opportunities when searching for a tutorial.
        <ol>
            <li>The site should include sections, filter, and sort options to improve search queries.</li>
            <li>Adding a comment and rating system to each tutorial item would better help find accurate tutorial articles.</li>
            <li>Including a filter option to search for video or article tutorials.</li>
        </ol>
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
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" width="90%" :src="imgSrc('lb-sitemap.png')" />
            <div class="w-100 py-8">
              1. Started with generating a sitemap to brainstorm the various pages.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" width="80%" :src="imgSrc('lb-pframe1.jpg')" />
            <div class="w-100 py-8">
              2. Drew several rough drafts of the site and it's corresponding pages. I used the "Crazy Eights" method to jot down a few drafts.
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" width="100%" :src="imgSrc('lb-home-drafts.jpg')" />
            <div class="w-100 py-8">
              3. I decided to use <i>Clip Studio Paint</i> to draw up a few rough drafts of the Home page, and highlighted the items that should be in the final draft.

            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" height="400" :src="imgSrc('lb-pframe3.jpg')" />
            <div class="w-100 py-8">
              4. Lastly I've drawn up the final version of the wireframes.
            </div>
          </v-col>
        </v-row>
        <v-row class="py-12">
          <v-col>
            <div class="view-text-section-title link" @click="windowOpen(wireframeUrl)" title="Open in new tab">
              Digital Wireframes
              <v-icon size="x-small">mdi-open-in-new</v-icon>
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" width="90%" :src="imgSrc('lb-dframe1.png')" />
            <div class="w-100 py-8">
              1. <b>Home</b> - Used the paper wireframes to align the Home page. The Search bar is the main item centered in the page.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" width="90%" :src="imgSrc('lb-dframe2.png')" />
            <div class="w-100 py-8">
              2. <b>Search</b> - On the top, the total amount is shown. The lower section has a filter option on the left, with the results on the right. The top navigation gives members an option to quickly search for another tutorial throughout the site.
            </div>
          </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8">  
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" width="90%" :src="imgSrc('lb-dframe3.png')" />
            <div class="w-100 py-8">
              3. <b>View Tutorial</b> - The tutorial is layered out with the title and caption first, an image, and the content spaced out below. An area for accessibility options is located on the top right corner.
            </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" width="90%" :src="imgSrc('lb-dframe4.png')" />
            <div class="w-100 py-8">
              4. <b>View Author</b> - The author page has information on the tutorial writer, with a photo placeholder on the right.
            </div>
          </v-col>
        </v-row>
      </template>
      <template #usability1>
        <v-img class="pt-1 mx-auto" width="80%" :src="imgSrc('lb-study.png')" />
      </template>
      <template #usability2>
          <p>From the Usability Study, there were a few items that were discovered. The Account workflow needed refinement for both the Login and Create Account workflows.</p>
          <p>The View Author page could not be easily navigated to, and also needed restructure.</p>
          <p>Lastly the Filter options in the Search bar has caused some confustion among the users, and needed to be more defined.</p> 
      </template>
    </view-solution>



    <view-results :color="primaryColor">
      <template #logo1>
        <v-img class="pt-1" :height="$vuetify.display.xs ? 'initial' : '65'"  :width="$vuetify.display.xs ? '90%' : 'initial'" :src="imgSrc('logo-lb.png')" />
      </template>
      <template #logo2>
        <p>
              The LemonBranch logo was designed for a simple, but welcoming feel. The "L" letter in the logo has a lemon grown similar to a lemon tree.
            </p>        
      </template>
      <template #mockups>
        <v-row justify="space-evenly" class="pt-8">
          <v-col cols="11">
            <div class="view-text-section-title">
              Mockups
            </div>
          </v-col>
        </v-row>
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
              <v-img class="pt-1" width="90%" :src="imgSrc('lb-mock1.png')" />
              <div class="w-100 py-8">
                1. <b>Home</b> - I used a green and yellow color scheme to build out the Call to Action; with an image to further emphasize the company brand. The Search bar is also shown in the center for quick access.
              </div>
            </v-col>
            <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
              <v-img class="pt-1" width="90%" :src="imgSrc('lb-mock2.png')" />
              <div class="w-100 py-8">
                2. <b>Search</b> - The layout is aligned similarly with the digital wireframe. The page includes a sort dropdown, and a light green background to separate the results section. A ratings system below each tutorial item has also been added.
              </div>
            </v-col>
        </v-row>
        <v-row justify="space-evenly" class="py-8"> 
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
            <v-img class="pt-1" width="90%" :src="imgSrc('lb-mock3.png')" />
            <div class="w-100 py-8">
                3. <b>View Tutorial</b> - The layout is kept the same with different typography; also added print and enlarge font options on the top right.
              </div>
          </v-col>
          <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
            <v-img class="pt-1" width="90%" :src="imgSrc('lb-mock4.png')" />
            <div class="w-100 py-8">
                4. <b>View Author</b> - Updated the typography of the page, and updated the body text with indentation to separate from the title and subtitle.
              </div>
          </v-col>
        </v-row>
      </template>
    </view-results>
     


    <view-takeaways :caseStudyUrl="caseStudyUrl">
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
    </view-takeaways>

  </div>
</template>