<script>
  import WorkListItem from './WorkListItem.vue';

  export default {
    name: 'WorkGrid',
    data() {
        return {
            listWidth: "300"
        }
    },
    props: {
      workType: String
    },
    components: {
        WorkListItem
    }
}
</script>

<template>
  <v-container fluid>
    <v-row align-md="end" align-lg="end">
      <work-list-item 
        :workType="workType"
        :displayFor="['ux', 'frontend', 'logo']"
        bg="light"
        color="#4e4c67"
        linkId="prints" 
        title="Prints Web Comics" 
        caption="Responsive site to host and share comics"
        role="UX Designer, Logo Designer, Developer"
        logo="work/pr-desktop.png" 
        :logoWidth="listWidth" />

      <work-list-item 
        :workType="workType"
        :displayFor="['ux', 'logo']"
        bg="light"
        color="#0081b7"
        linkId="four" 
        title="4 Lives AI" 
        caption="AI-generated information resource for video games"
        role="UX Designer, Logo Designer"
        logo="work/fl-desktop.png" 
        :logoWidth="listWidth" />

      <work-list-item 
        :workType="workType"
        :displayFor="['ux', 'frontend', 'logo']"
        bg="light"
        color="#464da0"
        linkId="mcs" 
        title="K&A Morrisey Cleaning Services" 
        caption="Responsive site for janitorial business"
        role="UX Designer, Logo Designer, Developer"
        logo="work/ka-desktop.png" 
        :logoWidth="listWidth" />

      <work-list-item
        :workType="workType"
        :displayFor="['ux', 'logo']"
        bg="light" 
        color="#993838"
        linkId="torch"
        title="Torch Mentor Network" 
        caption="App and website that connects students with mentors" 
        role="UX Designer, Logo Designer"
        logo="work/to-desktop.png" 
        :logoWidth="listWidth" />

      <work-list-item 
        :workType="workType"
        :displayFor="['ux', 'logo']"
        bg="light"
        color="#008C73"
        linkId="lemon"
        title="LemonBranch DIY Site" 
        caption="Responsive site to view tutorials and how-tos" 
        role="UX Designer, Logo Designer"
        logo="work/lb-desktop.png" 
        :logoWidth="listWidth" />

      <work-list-item 
        :workType="workType"
        :displayFor="['ux', 'logo']"
        color="#993c1f"
        linkId="reys"
        title="Rey's Restaurant App" 
        caption="A menu app to streamline restaurant orders" 
        role="UX Designer, Logo Designer"
        logo="work/reys-mobile.png"
        :logoWidth="listWidth" />
      
      <work-list-item 
        :workType="workType"
        :displayFor="['frontend', 'logo']"
        bg="light"
        color="#464da0"
        linkId="ifolio"
        title="iFolio" 
        caption="An online portfolio page to host images" 
        role="Logo Designer, Developer"
        logo="work/if-desktop.png"
        :logoWidth="listWidth" />

      <work-list-item 
        :workType="workType"
        :displayFor="['frontend']"
        color="#1f4739"
        linkId="ss"
        title="ScoreShots 2.0" 
        caption="A platform to create and share infographics" 
        role="Developer"
        logo="work/ss-desktop.png" 
        :logoWidth="listWidth" />

      <work-list-item 
        :workType="workType"
        :displayFor="['frontend']"
        color="#2d2f66"
        linkId="s4s"
        title="Soccer for Success" 
        caption="An e-learning platform for coaches and players" 
        role="Developer"
        logo="work/s4s-desktop.png"
        :logoWidth="listWidth" />

      <work-list-item 
        :workType="workType"
        :displayFor="['frontend']"
        linkId="react"
        title="React Calculator" 
        caption="A calculator component built with React JS" 
        role="Developer"
        logo="work/react-desktop.png"
        :logoWidth="listWidth" />

      <work-list-item 
          :workType="workType"
          :displayFor="['frontend']"
          linkId="vue"
          title="Vue Calendar" 
          caption="A calendar component built with Vue JS" 
          role="Developer"
          logo="work/vue-desktop.png" 
          :logoWidth="listWidth" />

    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
</style>
