<script>
  import WorkMenuItem from '@/components/partials/WorkMenuItem.vue';
  export default {
    name: 'Work',
    data() {
      return {}
    },
    methods: {
    },
    mounted() {
     
    },
    components: {
      WorkMenuItem
    }
}
</script>

<template>
  <v-container fluid>
    <v-spacer style="height:41.5px"></v-spacer>
    
    <v-row>
      <v-col>
        <div class="work-title pa-4">Work</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-8">
        <work-menu-item icon="mdi-application-settings" name="Test" title="Design" />
      </v-col>
      <v-col class="pa-8">
        <work-menu-item icon="mdi-code-tags" name="Test" title="Development" />
      </v-col>
      <v-col class="pa-8">
        <work-menu-item icon="mdi-drawing" name="Test" title="Logos" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>
