<script>
  import Mcs from './viewItem/Mcs.vue';
  import Torch from './viewItem/Torch.vue';
  import Lemon from './viewItem/Lemon.vue';
  import Reys from './viewItem/Reys.vue';
  import Ifolio from './viewItem/Ifolio.vue';
  import Ss from './viewItem/Ss.vue';
  import S4s from './viewItem/S4s.vue';
  import React from './viewItem/React.vue';
  import Vue from './viewItem/Vue.vue';
  export default {
    name: 'View',
    data() {
      return {
        viewIdArray: [
          'mcs',
          'torch',
          'lemon',
          'reys',
          'ifolio',
          'ss',
          's4s',
          'react',
          'vue'
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
      Mcs,
      Torch,
      Lemon,
      Reys,
      Ifolio,
      Ss,
      S4s,
      React,
      Vue
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
    
    <div>
      <mcs @set-image="imgSrc" v-if="$route.params.id === 'mcs'" primaryColor="#464da0" secondaryColor="#1d2352"/>
      <torch @set-image="imgSrc" v-if="$route.params.id === 'torch'" primaryColor="#993838" secondaryColor="#584fc4"/>
      <lemon @set-image="imgSrc" v-if="$route.params.id === 'lemon'" primaryColor="#008C73" secondaryColor="#918b49"/>
      <reys @set-image="imgSrc" v-if="$route.params.id === 'reys'" primaryColor="#005031" secondaryColor="#933c1f"/>

      <ifolio @set-image="imgSrc" v-if="$route.params.id === 'ifolio'" primaryColor="#3e2963" secondaryColor="#4d7599"/>
      <ss @set-image="imgSrc" v-if="$route.params.id === 'ss'" primaryColor="#29414d" secondaryColor="#48ab61"/>
      <s4s @set-image="imgSrc" v-if="$route.params.id === 's4s'" primaryColor="#2d3b66" secondaryColor="#8f3535"/>
      <react @set-image="imgSrc" v-if="$route.params.id === 'react'" />
      <vue @set-image="imgSrc" v-if="$route.params.id === 'vue'" />
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
  padding: 10px 20px;
}

.view-header-image {
  width: 75%;
  margin: 0 12.5%;

  &.mobile {
    width: initial;
    max-height: 380px;
  }
}

.view-header-text {
  font-size: 18px;
  padding: 20px;
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
