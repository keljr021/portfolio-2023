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
    title="LemonBranch DIY Network"
    subtitle="A responsive site to view tutorials and how-tos"
    prototypeUrl="https://www.figma.com/proto/dM8f6jwpB5UK3Z17O5WXbN/to-clean.com?type=design&node-id=86-243&scaling=scale-down&page-id=86%3A130&starting-point-node-id=86%3A243"
    siteUrl="https://to-clean.com/"
    caseStudyUrl="https://docs.google.com/presentation/d/181XSVIOJkkjA9xZBpeepm3Is4oX9U1xV_AqXgBc-NXU/edit?usp=sharing"
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
    <view-overview>
      <template #overview>
        <p>
           This project was to design both a mobile app and responsive website for a career mentorship service to help college graduates. Torch Mentorship Network is an online service that helps students connect with a mentor during their college studies.
        </p>
        <p>
            The main idea of the project was a simple and intuitive online presence geared towards college students and experienced mentors.
        </p>
      </template>
      <template #problem>
        Students find it frustrating to find mentorship opportunities. Often there are missed resources during college studies to connect with an experienced mentor in their field of study.
      </template>
      <template #goal>
        Create both a dedicated mobile app and responsive web site that gives users easier options to connect with fellow mentors in their field of interest.
      </template>
      <template #image>
        <v-img class="mx-0" height="480" :src="imgSrc('work/lb-mobile.png')" />
      </template>
    </view-overview>

    <v-row justify="center">
      <v-col cols="10">
        <v-divider thickness="1" :color="secondaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-define>
      <template #persona1>
        <p>
            <b>Joseph Strawn</b> is an upcoming college graduate who wants to find a mentor to learn more about the radio communication field. However, he has a hard time navigating resources to find an experienced mentor.
        </p>
      </template>
      <template #persona2>
        <v-img width="100%" :src="imgSrc('to-persona.png')" />
      </template>
      <template #user1>
        <v-img width="100%" :src="imgSrc('to-usermap.png')" />
      </template>
      <template #user2>
        <ol>
            <li>Creating an easy to navigate home page for desktop</li>
            <li>Automatically add user's profile info into corresponding forms for quicker submission</li>
            <li>Mentor availability status is kept up-to-date</li>
        </ol>
      </template>
    </view-define>

    <v-row justify="center">
      <v-col cols="10">
        <v-divider thickness="1" :color="primaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-solution>
      <template #wireframes>
        <v-row class="py-8">
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('to-dframe1.png')" />
          </v-col>
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('to-dframe2.png')" />
          </v-col>
        </v-row>
        <v-row class="py-8">  
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('to-dframe3.png')" />
          </v-col>
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('to-dframe4.png')" />
          </v-col>
        </v-row>
      </template>
      <template #usability1>
        <v-img class="mx-auto" width="80%" :src="imgSrc('to-study.png')" />
      </template>
      <template #usability2>
        <ul>
            <li>The Mentor Search workflow was inconsistent between navigation and the headers.</li>
            <li>Testers had difficulty navigating through each page during the workflow.</li>
            <li>The Article page navigation confused a majority of the users and needed refactoring.</li>
        </ul>      
      </template>
    </view-solution>

    <v-row justify="center">
      <v-col cols="10">
        <v-divider thickness="1" :color="secondaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-results>
      <template #logo1>
        <v-img height="150" :src="imgSrc('logo-to-2023.png')" />
      </template>
      <template #logo2>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dignissim dolor, quis maximus mi ullamcorper eget. Sed maximus id metus sed aliquet. Quisque nulla massa, sodales vitae interdum vitae, convallis vitae dolor.
            </p>        
      </template>
      <template #mockups>
        <v-row class="py-8">
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
              <v-img width="90%" :src="imgSrc('to-mock1.png')" />
            </v-col>
            <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
              <v-img width="90%" :src="imgSrc('to-mock2.png')" />
            </v-col>
        </v-row>
        <v-row class="py-8"> 
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('to-mock3.png')" />
          </v-col>
          <v-col class="pa-3" cols="12" xs="12" sm="12" md="12" lg="5" offset-lg="1">
            <v-img width="90%" :src="imgSrc('to-mock4.png')" />
          </v-col>
        </v-row>
      </template>
    </view-results>
     
    <v-row justify="center">
      <v-col cols="10">
        <v-divider thickness="1" :color="primaryColor" inset></v-divider>
      </v-col>
    </v-row>

    <view-takeaways>
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