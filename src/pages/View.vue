<script>
  import Mcs from './viewItem/Mcs.vue';
  export default {
    name: 'View',
    data() {
      return {
        viewIdArray: [
          'mcs',
          'torch',
          'lemon',
          'ifolio',
          'ss',
          's4s',
          'vue',
          'react'
        ],
        previousView: null,
        nextView: null
      }
    },
    methods: {
      setPreviousView(currentId) {
        let currentIdx = this.viewIdArray.indexOf(currentId);
        let target = null;

        if (currentIdx - 1 > -1) 
          target = currentIdx - 1;
        
        if (target !== null)
          this.previousView = this.viewIdArray[target];
      },
      setNextView(currentId) {
        let currentIdx = this.viewIdArray.indexOf(currentId);
        let target = null;

        if (currentIdx + 1 < this.viewIdArray.length) 
          target = currentIdx + 1;
        
        if (target !== null)
          this.nextView = this.viewIdArray[target];
      }
    },
    created() {
      this.setPreviousView(this.$route.params.id);
      this.setNextView(this.$route.params.id);
    },
    beforeRouteUpdate(to) {
      this.previousView = null;
      this.nextView = null;

      this.setPreviousView(to.params.id);
      this.setNextView(to.params.id);
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
      <mcs @set-image="imgSrc" v-if="$route.params.id === 'mcs'" primaryColor="#464da0" secondaryColor="#1d2352"/>
    </div>

    <v-row justify="space-between" class="pa-2">
      <v-col cols="12" xs="12" sm="12" md="12" lg="6">
        <v-btn v-if="previousView !== null" class="px-3" variant="flat" :block="$vuetify.display.xs" :to="{ name: 'view', params: { id: previousView } }">
            <v-icon class="mr-2">mdi-arrow-left</v-icon>
            Previous Item
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" class="text-right">
        <v-btn v-if="nextView !== null" class="px-3" variant="flat" :block="$vuetify.display.xs" :to="{ name: 'view', params: { id: nextView } }">
          Next Item
          <v-icon class="mr-2">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<style lang="scss">
.view-header {
  padding: 0;
  margin: 0;
}

.view-header-title {
  font-size: 36px;
  padding: 20px 10px;
}

.view-header-image {
  width: 100%;
}

.view-header-text {
  font-size: 18px;
  padding: 20px 0;
  opacity: 0.9;
}

.view-header-text-title {
  font-weight: bold;
}

.view-text {
  .view-text-title {
    font-size: 26px;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 60px;
  }

  .view-text-overview {
    padding: 80px 0;
  }

  .view-text-section {
    padding-top: 40px;
    padding-bottom: 80px;
  }

  .view-text-section-title {
    font-size: 21px;
    font-weight: 400;
    padding: 20px 0;
  }

  p, li {
      font-size: 17px;  
      line-height: 2.5;
    }
}
</style>
