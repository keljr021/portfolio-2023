<script>
  import WorkTabs from '@/components/partials/WorkTabs.vue';
  import WorkList from '@/components/partials/WorkList.vue';

  export default {
    name: 'Work',
    data() {
      return {
        menuArray: [
            {
                name: 'UI/UX Design',
                value: 'ui',
                icon: 'mdi-folder-account'
            },
            {
                name: 'Front-End',
                value: 'frontend',
                icon: 'mdi-code-tags'
            },
            {
                name: 'Logos',
                value: 'logos',
                icon: 'mdi-drawing'
            }
        ],
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
      WorkTabs,
      WorkList
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
      <v-col cols="12" sm="12" md="2" lg="2">
        <work-tabs @scroll-to="scrollTo" :tab="selectedTab" :items="menuArray" />  
      </v-col>
      <v-col  cols="12" sm="12" md="9" lg="9">
        <div class="scroll overflow-y-auto">
          <work-list @set-tab="setTab" :tab="selectedTab" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.v-container--fluid {
  padding-top: 41.5px !important; 
  height: calc(100% - 73.5px) !important;
}
.scroll {
  max-height: calc(85vh - 74px);
}
</style>
