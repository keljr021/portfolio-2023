<script>
  import Prints from './viewItem/Prints.vue';
  import Four from './viewItem/Four.vue';
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
          'prints',
          'four',
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
        nextView: null,
        showBanner: true,
      }
    },
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
      },
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
      },
      toggleBanner(input) {
        this.showBanner = input;
      },
    },
    created() {
      this.setPreviousView(this.$route.params.id);
      this.setNextView(this.$route.params.id);

      if (this.$vuetify.display.smAndDown)
        this.showBanner = false;
    },
    beforeRouteUpdate(to) {
      this.previousView = null;
      this.nextView = null;

      this.setPreviousView(to.params.id);
      this.setNextView(to.params.id);
    },
    components: {
      Prints,
      Four,
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
    <div :class="{ 'view': true, 'lock-scroll': showBanner }">
      <prints @toggle-banner="toggleBanner" :showBanner="showBanner" @window-open="windowOpen" v-if="$route.params.id === 'prints'" primaryColor="#4e4c67" secondaryColor="#3f5d66"/>
      <four @toggle-banner="toggleBanner" :showBanner="showBanner" @window-open="windowOpen" v-if="$route.params.id === 'four'" primaryColor="#0081b7" secondaryColor="#3f5d66"/>
      <mcs  @toggle-banner="toggleBanner" :showBanner="showBanner" @window-open="windowOpen" v-if="$route.params.id === 'mcs'" primaryColor="#464da0" secondaryColor="#1d2352"/>
      <torch  @toggle-banner="toggleBanner" :showBanner="showBanner" @window-open="windowOpen" v-if="$route.params.id === 'torch'" primaryColor="#993838" secondaryColor="#584fc4"/>
      <lemon  @toggle-banner="toggleBanner" :showBanner="showBanner" @window-open="windowOpen" v-if="$route.params.id === 'lemon'" primaryColor="#008C73" secondaryColor="#918b49"/>
      <reys  @toggle-banner="toggleBanner" :showBanner="showBanner" @window-open="windowOpen" v-if="$route.params.id === 'reys'" primaryColor="#005031" secondaryColor="#933c1f"/>

      <ifolio  @toggle-banner="toggleBanner" :showBanner="showBanner" @window-open="windowOpen" v-if="$route.params.id === 'ifolio'" primaryColor="#3e2963" secondaryColor="#4d7599"/>
      <ss  @toggle-banner="toggleBanner" :showBanner="showBanner" @window-open="windowOpen" v-if="$route.params.id === 'ss'" primaryColor="#29414d" secondaryColor="#48ab61"/>
      <s4s  @toggle-banner="toggleBanner" :showBanner="showBanner" @window-open="windowOpen" v-if="$route.params.id === 's4s'" primaryColor="#2d3b66" secondaryColor="#8f3535"/>
      <react  @toggle-banner="toggleBanner" :showBanner="showBanner" @window-open="windowOpen" v-if="$route.params.id === 'react'" />
      <vue  @toggle-banner="toggleBanner" :showBanner="showBanner" @window-open="windowOpen" v-if="$route.params.id === 'vue'" />
    </div>

    <div class="fixed-item">
      <v-row class="fixed-item-button">
        <v-col class="text-right mx-5 my-2">
          <v-tooltip text="Scroll to top" location="left">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" color="#18184d" variant="outlined" icon="mdi-menu-up" style="background-color:white" @click="scrollToTop"></v-btn>
            </template>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-row class="fixed-item-menu" justify="space-between">
        <v-col cols="4" class="text-left">
          <v-btn v-if="previousView !== null" class="px-3" variant="flat" :block="$vuetify.display.xs" @click="goToView(previousView)">
            <v-icon class="mr-2">mdi-arrow-left</v-icon>
            Previous <span v-if="$vuetify.display.mdAndUp">&nbsp;Item</span>
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
            Next <span v-if="$vuetify.display.mdAndUp">&nbsp;Item</span>
            <v-icon class="mr-2">mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <Footer :onHomePage="false" />
  </v-container>
</template>

<style scoped lang="scss">
.fixed-item {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1;
  transition: opacity ease-in-out 0.5;

  :deep(.v-btn) {
    opacity: 0.4;
  }

  &:hover {
    :deep(.v-btn--icon) {
      opacity: 1;
    }
  }
}

.fixed-top-button {
  position: fixed;
  bottom: 0;
  right: 0;
}

.fixed-item-menu {
  background: white;
}

:deep(.v-container) {
  padding-top: 41.5px !important;
  margin-bottom: 50px;
}

:deep(.view-banner) {
  position:fixed;
  max-height: calc(90vh - 85px);
  z-index: 2;
  overflow: hidden;
  border-right: 2px solid black;
  background: #fff;
  transition: ease-in-out all .2s;

  &:hover {
    overflow-y: auto;
    background: #f9f9f9;
  }
}

:deep(.view-text) {
  padding-left: 20px;
  padding-right: 20px;
  min-height: calc(85vh - 50px); 

  .view-text-cta {
    font-size: 36px;
  }
  
  .view-text-title {
    padding-bottom: 30px;
    font-size: 24px;
    font-weight: bold;
  }

  .view-text-overview {
    padding: 60px 0;
  }

  .view-text-section {
    padding-top: 50px;
    padding-bottom: 75px;
  }

  .view-text-section-title {
    font-size: 1.25em;
    font-weight: 500;
    padding: 30px 0;

    &.link {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p, li {
      font-size: 1.1em;
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

@media all and (min-width: 769px) and (max-width: 1023px) {
  :deep(.view-banner) {
    position:initial;
    top: 30px;
    left: 0;
    max-height: initial;
    border-right: none;
    overflow-y: auto;
    background: #f9f9f9;
  }

  :deep(.view) {
    &.lock-scroll {
      .view-text {
        position: fixed;
      }
    }
  }
}

@media all and (max-width: 768px) {
  :deep(.view) {

    &.lock-scroll {
      .view-text {
        position: fixed;
      }
    }
  }

  :deep(.view-banner) {
    position:initial;
    top: 0;
    left: 0;
    max-height: initial;
    border-right: none;
    overflow-y: auto;
    background: #f9f9f9;
  }

  :deep(.view-text) {
    min-height: initial; 

    .view-text-overview {
      padding: 40px 0 !important;
    }

    .view-text-section-title {
      padding-bottom: 50px;
    }
  }
}
</style>
