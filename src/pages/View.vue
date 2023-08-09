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
    <v-row class="px-2 py-1">
      <v-col>
        <v-btn class="px-3" variant="flat" :block="$vuetify.display.xs" :to="{ name: 'work' }">
            <v-icon class="mr-2">mdi-backburger</v-icon>
            Back
        </v-btn>
      </v-col>
    </v-row>
    
    <div class="py-3">
      <mcs @set-image="imgSrc" v-if="$route.params.id === 'mcs'" />
    </div>

    <v-row justify="space-between" class="pa-2">
      <v-col cols="12" xs="12" sm="12" md="12" lg="6">
        <v-btn class="px-3" variant="flat" :block="$vuetify.display.xs" :to="{ name: 'work' }">
            <v-icon class="mr-2">mdi-arrow-left</v-icon>
            Previous Item
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" class="text-right">
        <v-btn class="px-3" variant="flat" :block="$vuetify.display.xs" :to="{ name: 'work' }">
          Next Item
          <v-icon class="mr-2">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<style lang="scss">
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
  font-size: 18px;
  padding: 20px 0;
  opacity: 0.9;
}

.work-header-text-title {
  font-weight: bold;
}

.work-header-text-desc {
  
}

.work-text {

  .work-text-title {
    font-size: 24px;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 60px;
  }

  .work-text-section {
    font-size: 18px;
    padding-top: 40px;
    padding-bottom: 80px;
  }

  .work-text-subtitle {
    font-size: 20px;
  }

  p {
        line-height: 2.5;
    }
}
</style>
