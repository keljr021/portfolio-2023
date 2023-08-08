<script>
  import WorkTabs from '@/components/partials/WorkTabs.vue';
  import WorkList from '@/components/partials/WorkList.vue';

  export default {
    name: 'Work',
    data() {
      return {
        menuArray: [
            {
                name: 'All',
                value: 'all',
                icon: 'mdi-view-grid'
            },
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
        selectedTab: 'all'
      }
    },
    methods: {
      setTab(input) {
        this.selectedTab = input;
      }
    },
    mounted() {
     
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
        <work-tabs :items="menuArray" @set-tab="setTab"/>  
      </v-col>
      <v-col>
        <div class="scroll overflow-y-auto">
          <work-list :showItems="selectedTab" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.scroll {
  max-height: calc(600px - 32px);
}
</style>
