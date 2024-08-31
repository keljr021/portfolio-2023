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
    name: 'Prints',
    data() {
      return {
        mobileWireframeUrl: 'https://www.figma.com/proto/Q3vhPUsXjeRLio6iVKsHDs/Prints-Webcomics-and-Hosting?page-id=8%3A1357&node-id=14-757&node-type=FRAME&viewport=795%2C173%2C0.14&t=Udh1mDTfCneyaL3e-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=14%3A757',
        desktopWireframeUrl: 'https://www.figma.com/proto/Q3vhPUsXjeRLio6iVKsHDs/Prints-Webcomics-and-Hosting?page-id=0%3A1&node-id=1-4&node-type=CANVAS&viewport=632%2C280%2C0.12&t=FXdqCFvsTBz0Iizo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A4',
        mobilePrototypeUrl: 'https://www.figma.com/proto/Q3vhPUsXjeRLio6iVKsHDs/Prints-Webcomics-and-Hosting?page-id=123%3A6806&node-id=123-6807&node-type=FRAME&viewport=885%2C976%2C0.3&t=Er2KESzw9pppFQTB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=123%3A6807',
        desktopPrototypeUrl: 'https://www.figma.com/proto/Q3vhPUsXjeRLio6iVKsHDs/Prints-Webcomics-and-Hosting?page-id=30%3A1292&node-id=30-1293&node-type=FRAME&viewport=1018%2C386%2C0.15&t=7rVDl1AC6erlbujd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=30%3A1293',
        caseStudyUrl: 'https://docs.google.com/presentation/d/1z19usKB6X4M1UkUDd9nJR8McTN70s8uCAhEH86uzqX0/edit?usp=sharing',
        githubUrl: 'https://github.com/keljr021/prints-webcomics',

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
        title="Prints Web Comics"
        subtitle="Webcomics site to host and share comics"
        :mobilePrototypeUrl="mobilePrototypeUrl"
        :desktopPrototypeUrl="desktopPrototypeUrl"
        :caseStudyUrl="caseStudyUrl"
        siteUrl="https://poc.kelvin-m.com/prints-webcomics/#/"
        :githubUrl="githubUrl"
        :imageSrc="imgSrc('work/pr-desktop.png')"
        :mobileSrc="imgSrc('work/pr-mobile.png')"
        @window-open="windowOpen"
        @toggle-banner="toggleBanner"
        :showBanner="showBanner"
      >
        <template #role>
          UX Designer, Logo Designer, Front-End Developer
        </template>
        <template #tools>
          Figma, Inkscape, Vue, Bulma, Buefy
        </template>
        <template #date>
          Aug 2024 - Sep 2024
        </template>
      </view-title-banner>
    </v-col>
    <v-col offset-md="2" offset-lg="2">
      <div class="view-text" 
           :style="{ 'padding-left': '40px', 'border-bottom': '1px solid' + primaryColor }" 
           @click="$emit('toggle-banner', false)" 
           @mouseover="(showBanner === true) ? hoverAwayFromBanner() : ''">
        <overview title="Prints Web Comics" :color="secondaryColor">
          <template #overview>
            <p>
              This project was to create a web comics site with an easy to use interface accessible to all users.
              <i>Prints</i> is an online web comic hosting site that promotes this experience for both artists and viewers. The site was built to help promote, publish, and share web comics.
            </p>
            <p>
              For this project, I've also decided to use a new language and UI library. I've decided to use Bulma and Buefy for a simle layout, but with more powerful components as needed.
            </p>
          </template>
          <template #image>
            <v-img v-if="$vuetify.display.smAndDown" class="mx-auto" width="125" style="max-width:inherit" :src="imgSrc('logo-pr.png')" />
            <v-img v-else height="100" :src="imgSrc('logo-pr.png')" />
          </template>
        </overview>

        <empathize :color="primaryColor">
          <template #problem>
            Comic book artists need a site to publish and share their webcomics; however the options available has complex and non-intuitive interfaces to work through, causing frustration. From a viewer's perspective, the sites' interfaces can also be clunky and obtrusive; hindering their overall experience when reading their favorite comics.

          </template>
          <template #goal>
            The goal is to design a webcomic site to host and view webcomics, with an simple user experience for both artists and viewers.
          </template>
          <template #persona>
            <view-image src="pr-persona.png" />
            <view-image src="pr-persona2.png" />
          </template>
          <template #diagram>
            <view-image src="pr-usermap.png" />
            <view-image src="pr-usermap2.png" />
          </template>
        </empathize>

        <define :color="primaryColor">
          <template #ideas>
            <p>For this project, I started with a user diagram for both the artist and viewers' personas. From this diagram, I defined  the goals to achieve during this project below:</p>
            <ol>
                <li>Keep the site layout as clean as possible, while focusing on the content.</li>
                <li>Ensure the interface is accessible and easy to navigate for both artists and viewers.</li>
                <li>When viewing a web comic, the interface should be unobtrusive for both desktop and mobile.</li>
                <li>A trigger or content warning should be available to user upfront for comic series with sensitive content.</li>
            </ol>
          </template>
        </define>

        <ideate :color="primaryColor">
          <template #paper>
            <v-row align="bottom" justify="space-evenly" class="py-8">
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="4" lg="4">
                <view-image imgHeight="300" src="pr-pframe1.png" text="1. Started documenting some notes and ideas on how to structure the sitemap for this project." />
                <div class="w-100 py-8">
                  1. Started documenting some notes and ideas on how to structure the sitemap for this project.
                </div>
              </v-col>
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="4" lg="4">
                <view-image imgHeight="300" src="pr-pframe2.png" text="2. From these personas, a user journey map was created to see how a viewer would navigate with the site."/>
                <div class="w-100 py-8">
                  2. From these personas, a user journey map was created to see how a viewer would navigate with the site.
                </div>
              </v-col> 
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="4" lg="4">
                <view-image imgHeight="300" src="pr-pframe3.png" text="3. A user journey map for the author was also created."/>
                <div class="w-100 py-8">
                  3. A user journey map for the author was also created.
                </div>
              </v-col>
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="4" lg="4">
                <view-image imgHeight="300" src="pr-pframe4.png" text="4. After gathering these notes, a sitemap was created including of all possible pages needed for the site."/>
                <div class="w-100 py-8">
                  4. After gathering these notes, a sitemap was created including of all possible pages needed for the site.
                </div>
              </v-col>
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="4" lg="4">
                <view-image imgHeight="300" src="pr-pframe5.jpg" text="5. With this information, began drafting paper mockups of how each page should look like."/>
                <div class="w-100 py-8">
                  5. With this information, began drafting paper mockups of how each page should look like.
                </div>
              </v-col>
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="6" md="4" lg="4">
                <view-image imgHeight="300" src="pr-pframe5.jpg" text="6. Also drafted the same pages on mobile."/>
                <div class="w-100 py-8">
                  6. Also drafted the same pages on mobile.
                </div>
              </v-col>
            </v-row>

          </template>


          <template #lofi>        
            <v-row justify="space-evenly" class="py-8">
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                <view-image imgHeight="250" src="pr-dframe1.png" text="1. Home - The Call to Action is upfront with information about the site on the top of the page. An image is added to the left, with the text onto the right. Below the CTA, there are several options for featured comics and authors."/>
                <div class="w-100 py-8">
                  1. <b>Home</b> - The Call to Action is upfront with information about the site on the top of the page. An image is added to the left, with the text onto the right. Below the CTA, there are several options for featured comics and authors.
                </div>
              </v-col>
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                <view-image imgHeight="250" src="pr-dframe2.png" text="2. Genres - The Genre menu is added to the left section, which will show the items available for each. On mobile, this has been replaced with a dropdown. The Comic items are separated in a three-column layout with information on the bottom for desktop; and a two-column layout for mobile."/>            <div class="w-100 py-8">
                  2. <b>Genres</b> - The Genre menu is added to the left section, which will show the items available for each. On mobile, this has been replaced with a dropdown. The Comic items are separated in a three-column layout with information on the bottom for desktop; and a two-column layout for mobile.

                </div>
              </v-col>
            </v-row>
            <v-row justify="space-evenly" class="py-8"> 
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                <view-image imgHeight="250" src="pr-dframe3.png" text="3. View Comic - For the View Comic section, the comic is front and center; with two menu buttons on each side. The left is to go back, while the right holds a submenu for comments, likes, etc. The idea was to keep the menu options out of the way, but available to access as needed."/>
                <div class="w-100 py-8">
                  3. <b>View Comic</b> - The comic is front and center with two menu buttons on each side. The left is to go back, while the right holds a submenu for comments, likes, etc. The idea was to keep the menu options out of the way, but available to access as needed.
                </div>
              </v-col>  
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                <view-image imgHeight="250" src="pr-dframe4.png" text="4. For Desktop, when a user attempts to create a new series, this form is available. Artists can enter their information and upload a cover and thumb image for their comic series."/>
                <div class="w-100 py-8">
                  4. <b>Create a New Series</b> - For Desktop, artists can enter their information and upload a cover and thumb image for their comic series.
                </div>
              </v-col>
            </v-row>
            <v-row justify="space-evenly" class="py-8"> 
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                <view-image imgHeight="250" src="pr-dframe5.png" text="5. Publish a New Chapter - For Desktop, this form is when a new chapter is added to an artist's comic series. The artist has an option to save the chapter as a draft, preview the chapter, or publish. For mobile users, this page is hidden as well."/>
                <div class="w-100 py-8">
                  5. <b>Publish a New Chapter</b> - The artist has an option to save the chapter as a draft, preview the chapter, or publish.
                </div>
              </v-col>
            </v-row>
          </template>

          <template #study>
            <ul>
                <li>From conducting the usability study, the menu buttons for the View Comic section needs improvement to be more accessibile. Many were unsure of what these buttons did.
                </li>
                <li>The Publish workflow requires refactoring, as several of the participants missed how to publish a new comic series
                </li>
                <li>A Comic Series page should be introduced, for users to view information and view a specific chapter.</li>
            </ul>      
          </template>

          <template #hifi>
            <v-row justify="space-evenly" class="py-8">
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                  <view-image imgWidth="90%" src="pr-mock1.png" text="1. Home - For the mockups, I've used 'Buefy' for the design and layout. A photo with a gradient background was added to the Call to Action. The text layout was kept similar, but adds a button to get to the Genre pages. The featured comics and authors layouts were kept in below the CTA, with a New Releases section added."/>
                  <div class="w-100 py-8">
                  1. <b>Home</b> - For the mockups, I've used <i>Buefy</i> for the design and layout. A photo with a gradient background was added to the Call to Action. The text layout was kept similar, but adds a button to get to the Genre pages. The featured comics and authors layouts were kept in below the CTA, with a New Releases section added. 
                </div>
                </v-col>
                <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5">
                  <view-image imgWidth="90%" src="pr-mock2.png" text="2. Genres - The Genres section layout was kept the same; with the genres menu on the left for desktop; and dropdown menu for mobile. The comic content adds several mock items that shows a title, genre, author, and trigger warnings if needed."/>
                  <div class="w-100 py-8">
                  2. <b>Genres</b> - The Genres section layout was kept the same; with the genres menu on the left for desktop; and dropdown menu for mobile. The comic content adds several mock items that shows a title, genre, author, and trigger warnings if needed.

                </div>
                </v-col>
            </v-row>
            <v-row justify="space-evenly" class="py-8"> 
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                <view-image imgWidth="90%" src="pr-mock3.png" text="3. View Comic - The Title of the comic was added to the top of the screen. For the menu buttons, I've decreased it to only one fixed on the bottom left of the screen. When selected, a submenu of options are shown, with the back button included into the submenu."/>
                <div class="w-100 py-8">
                  3. <b>View Comic</b> - The Title of the comic was added to the top of the screen. For the menu buttons, I've decreased it to only one fixed on the bottom left of the screen. When selected, a submenu of options are shown, with the back button included into the submenu.

                </div>
              </v-col>
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                <view-image imgWidth="90%" src="pr-mock4.png" text="4. Create a New Series - The Create Series page is fleshed out more, with each section rearranged."/>
                <div class="w-100 py-8">
                  4. <b>Create a New Series</b> - The Create Series page is fleshed out more, with each section rearranged.
                </div>
              </v-col>
            </v-row>
            <v-row justify="space-evenly" class="py-8"> 
              <v-col class="pr-3 py-3" cols="11" xs="12" sm="5" md="5" lg="5" offset-lg="1">
                <view-image imgWidth="90%" src="pr-mock5.png" text="5. Create a New Chpater - The header was changed to Create Chapter. The options were also fleshed out further, with the cover on the right of the form. The buttons below were kept the same, with the publish button color focused on a bit further."/>
                <div class="w-100 py-8">
                  5. <b>Create a New Chpater</b> - The header was changed to Create Chapter. The options were also fleshed out further, with the cover on the right of the form. The buttons below were kept the same, with the publish button color focused on a bit further.
                </div>
              </v-col>
            </v-row>
          </template>
        
          <template #logo1>
            <v-img class="pt-1" height="125" :src="imgSrc('logo-pr.png')" />
          </template>
          <template #logo2>
            <p>
              The typography I wanted to give a feel of an artist using an traditional inkpen and brush; but keep the logo itself readable. I decided to use the contrasting styles of <i>Matura MT Script Capitals</i> and <i>Ink Free</i> for the title and subtitle respectively.
            </p>        
          </template>


          <template #color>
            <v-row justify="space-evenly" class="py-8"> 
              <v-col cols="11" class="py-3">
                <v-img width="80%" class="mx-auto" :src="imgSrc('pr-sticker.png')" />
              </v-col>
            </v-row>
          </template>
        </ideate>

        <evaluate :color="primaryColor" :caseStudyUrl="caseStudyUrl">
          <template #lessons>
            <p>
              From taking on this project, user feedback was critical. Incorporating the feedback has helped in keeping the layout simple and intuitive.
            </p>
            <p>
              It has also further expanded my horizons as a designer with learning new UI webkits to use. The <i>Bulma/Buefy Webkit</i> used was somewhat new to me, but I was able to create a great experience.
            </p>
          </template>
          <template #next>
            <ol>
              <li>For the various pages, I'd add more content rather than have “lorem ipsum” text.
              </li>
              <li>I'd also attempt to add a mobile application version of the site, and how it would differ from the current web version experience.</li>
              <li>Another color for the site layout would be a nice to have, rather than grey tones. But I would still keep the minimalistic approach of the site.
              </li>
            </ol>        
          </template>
        </evaluate>
      </div>
    </v-col>    
  </v-row>
</template>