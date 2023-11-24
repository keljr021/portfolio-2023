<script>
  import WorkList from '@/components/partials/WorkList.vue';
  import Footer from '@/components/partials/Footer.vue'

  export default {
    name: 'Work',
    data() {
      return {
        selectedTab: 'ui'
      }
    },
    methods: {
      scrollTo(input) {
        let el = document.getElementById(input);
            if(el) el.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      },
      setTab(input) {
        this.selectedTab = input;
      }
    },
    components: {
      WorkList,
      Footer
    }
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="work-title pa-4">Work</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" offset="1" class="">
        <div class="scroll overflow-y-auto">
          <work-list />  
        </div>
      </v-col>
    </v-row>

    <Footer />
  </v-container>
</template>

<style scoped lang="scss">
.v-container--fluid {
  padding-top: 41.5px !important; 
  height: calc(100% - 73.5px) !important;
}

.work-title {
    font-size: 28px;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
    padding: 30px 0;
}

:deep(.work-section-title) {
    font-size: 20px !important;
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-weight: normal;  
    padding: 30px 0;
}

.scroll {
  max-height: calc(80vh - 77px);
}

@media all and (max-width: 768px) {
  .scroll {
    max-height: calc(80vh - 77px);
  }
}
</style>
