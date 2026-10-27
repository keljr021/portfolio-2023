<script>
  import WorkGridItem from './WorkGridItem.vue';

  export default {
    name: 'WorkGrid',
    components: {
        WorkGridItem
    }
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <work-grid-item 
        bg="light"
        color="#464da0"
        linkId="mcs" 
        title="K&A Morrisey Cleaning Services" 
        caption="Responsive site for the family janitorial business"
        logo="logo-ka-2023.png" 
        logoHeight="75" />

      <work-grid-item
        bg="light" 
        color="#993838"
        linkId="torch"
        title="Torch Mentor Network" 
        caption="App and website that connects students with mentors" 
        logo="logo-to.png" 
        logoHeight="75" />

      <work-grid-item 
        bg="light"
        color="#008C73"
        linkId="lemon"
        title="LemonBranch DIY Site" 
        caption="Responsive site to view tutorials and how-tos" 
        logo="logo-lb.png" 
        logoHeight="55" />

      <work-grid-item 
        color="#993c1f"
        linkId="reys"
        title="Rey's Restaurant App" 
        caption="A menu app to streamline the ordering process" 
        logo="logo-reys-tp.png"
        logoHeight="65" />
      
      <work-grid-item 
        bg="light"
        color="#464da0"
        linkId="ifolio"
        title="iFolio" 
        caption="An online portfolio page to host images" 
        logo="logo-if.png"
        logoHeight="40" />

      <work-grid-item 
        color="#1f4739"
        linkId="ss"
        title="ScoreShots 2.0" 
        caption="A platform to create and share infographics" 
        logo="logo-ss.png" 
        logoWidth="500" />

      <work-grid-item 
        color="#2d2f66"
        linkId="s4s"
        title="Soccer for Success" 
        caption="An e-learning platform for coaches and players" 
        logo="logo-s4s.png"
        logoWidth="500" />

      <work-grid-item 
        linkId="react"
        title="React Calculator" 
        caption="A calculator component built with React JS" 
        logo="logo-react.png" />

      <work-grid-item 
          linkId="vue"
          title="Vue Calendar" 
          caption="A calendar component built with Vue JS" 
          logo="vuejs-full.png" 
          logoWidth="300" />

    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
</style>
