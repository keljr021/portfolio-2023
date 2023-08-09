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
        <work-tabs :tab="selectedTab" :items="menuArray" />  
      </v-col>
      <v-col>
        <div class="scroll overflow-y-auto">
          <work-list :tab="selectedTab" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
:deep(.v-container) {
  height: calc(100% -32px);
}
.scroll {
  max-height: calc(520px - 32px);
}
</style>
