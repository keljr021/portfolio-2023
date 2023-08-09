<script>
  import Mcs from './viewItem/Mcs.vue'
  export default {
    name: 'View',
    data() {
      return {}
    },
    methods: {

    },
    mounted() {
     
    },
    components: {
      Mcs
    }
}
</script>

<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row class="pa-2">
      <v-col>
        <v-btn class="px-3" variant="flat" :block="$vuetify.display.xs" :to="{ name: 'work'}">
            <v-icon class="mr-2">mdi-arrow-left</v-icon>
            Back
        </v-btn>
      </v-col>
    </v-row>
    
    <div class="py-3">
      <mcs @set-image="imgSrc" v-if="$route.params.id === 'mcs'" />
    </div>

  </v-container>
</template>

<style>
.work-header {
  background: #666;
  color: white;
  padding: 0;
  margin: 0;
}

.work-header-title {
  font-size: 36px;
  padding: 10px;
}

.work-header-image {
  width: 100%;
}

.work-header-text {
  padding: 20px 0;
}

.work-header-text-title {
  font-weight: bold;
}

.work-header-text-desc {
  
}
</style>
