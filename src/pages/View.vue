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
  import Footer from '../components/partials/Footer.vue'

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
      },
      goToView(viewId) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant'});
        this.$router.push({ name: 'view', params: { id: viewId } });
      },
      windowOpen(input) {
        window.open(input, '_blank');
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
      Vue,
      Footer
    }
}
</script>

<template>
  <v-container fluid class="px-0 mx-0 mt-3 mb-5">    
    <div>
      <mcs @window-open="windowOpen" v-if="$route.params.id === 'mcs'" primaryColor="#464da0" secondaryColor="#1d2352"/>
      <torch @window-open="windowOpen" v-if="$route.params.id === 'torch'" primaryColor="#993838" secondaryColor="#584fc4"/>
      <lemon @window-open="windowOpen" v-if="$route.params.id === 'lemon'" primaryColor="#008C73" secondaryColor="#918b49"/>
      <reys @window-open="windowOpen" v-if="$route.params.id === 'reys'" primaryColor="#005031" secondaryColor="#933c1f"/>

      <ifolio @window-open="windowOpen" v-if="$route.params.id === 'ifolio'" primaryColor="#3e2963" secondaryColor="#4d7599"/>
      <ss @window-open="windowOpen" v-if="$route.params.id === 'ss'" primaryColor="#29414d" secondaryColor="#48ab61"/>
      <s4s @window-open="windowOpen" v-if="$route.params.id === 's4s'" primaryColor="#2d3b66" secondaryColor="#8f3535"/>
      <react @window-open="windowOpen" v-if="$route.params.id === 'react'" />
      <vue @window-open="windowOpen" v-if="$route.params.id === 'vue'" />
    </div>

    <div class="fixed-item-menu">
      <v-row justify="space-between">
        <v-col cols="4" class="text-left">
          <v-btn v-if="previousView !== null" class="px-3" variant="flat" :block="$vuetify.display.xs" @click="goToView(previousView)">
            <v-icon class="mr-2">mdi-arrow-left</v-icon>
            Previous
          </v-btn>
        </v-col>
        <v-col cols="4" class="text-center">
          <v-btn class="px-3" variant="flat" :block="$vuetify.display.xs" :to="{ name: 'work' }">
              <v-icon class="mr-2">mdi-view-list</v-icon>
              Return <span v-if="$vuetify.display.mdAndUp">&nbsp;to List</span>
          </v-btn>
        </v-col>
        <v-col cols="4" class="text-right">
          <v-btn v-if="nextView !== null" class="px-3" variant="flat" :block="$vuetify.display.xs" @click="goToView(nextView)">
            Next
            <v-icon class="mr-2">mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <Footer />
  </v-container>
</template>

<style scoped lang="scss">
.fixed-item-menu {
  position: fixed;
  width: 100%;
  bottom: 0;
  background: white;
  z-index: 1;
  transition: opacity ease-in-out 0.5;

  :deep(.v-btn) {
    font-size: 90%;
    opacity: 0.4;
  }

  &:hover {
    :deep(.v-btn) {
      opacity: 1;
    }
  }
}

:deep(.v-container) {
  padding-top: 41.5px !important;
  margin-bottom: 20px;
}

:deep(.view-header) {
  padding: 0;
  margin: 0;
}

:deep(.view-header-title) {
  font-size: 36px;
  padding: 10px 20px;
}

:deep(.view-header-image) {
  width: 75%;
  margin-left: 12.5%;

  &.mobile {
    width: initial;
    max-height: 380px;
  }
}

:deep(.view-header-text) {
  font-size: 18px;
  padding: 20px;
  opacity: 0.9;
}

:deep(.view-header-text-title) {
  font-weight: bold;
}

:deep(.view-text) {
  padding-left: 20px;
  padding-right: 20px;
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

    &.link {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p, li {
      font-size: 17px;  
      line-height: 2.5;
    }

  p {
    padding-bottom: 30px;
  }

  ol, ul {
    padding-left: 20px;
  }

  li {
    padding-bottom: 20px;
  }
}

@media all and (max-width: 768px) {

  :deep(.view-text) {
    .view-text-overview {
      padding: 40px 0 !important;
    }

    .view-text-section-title {
      padding-bottom: 50px;
    }
  }
}
</style>
