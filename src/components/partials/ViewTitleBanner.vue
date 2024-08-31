<script>
  import Divider from './Divider.vue';
  export default {
    name: 'ViewTitleBanner',
    data() {
      return {}
    },
    props: {
        backgroundColor: {
            type: String,
            default: '#666'
        },
        textColor: {
            type: String,
            default: 'white'
        },
        title: String,
        subtitle: String,
        role: String,
        client: String,
        tools: String,
        date: String,
        prototypeUrl: {
            type: String,
            default: null
        },
        mobilePrototypeUrl: String,
        desktopPrototypeUrl: String,
        siteUrl: String,
        caseStudyUrl: String,
        githubUrl: String,
        imageSrc: String,
        mobileSrc: String,
        isMobileImg: {
            type: Boolean,
            default: false
        },
        showBanner: {
            type: Boolean,
            default: true
        }
    },
    emits: [
        'window-open',
        'toggle-banner',
    ],
    computed: {
        showPointer() {
            return this.siteUrl || this.prototypeUrl || (this.desktopPrototypeUrl || this.mobilePrototypeUrl);
        }
    },
    methods: {
        goToPrototype(inputUrl) {
            let url = null;

            if (this.siteUrl) url = this.siteUrl;
            else if (this.prototypeUrl) url = this.prototypeUrl;
            else url = inputUrl;

            return this.$emit('window-open', url);
        },
        expand() {
            this.$emit('toggle-banner', true);
        },
        collapse() {
            this.$emit('toggle-banner', false);
        }
    },
    mounted() {
     
    },
    components: {
      Divider
    }
}
</script>

<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="showBanner" class="view-banner-details">
            <v-row justify="end">
                <v-col align="right" class="py-0 my-0">
                    <v-btn @click="collapse()" class="text-right px-3 mb-3 rounded-0" variant="icon" icon="mdi-arrow-collapse-all" title="Collapse" :color="backgroundColor"></v-btn>
                </v-col>
            </v-row>
            <v-row class="view-header">
                <v-col v-if="imageSrc" :class="{ 'pa-0 ml-3 my-auto text-left': true,  'cursor-pointer': showPointer }"  @click="goToPrototype(desktopPrototypeUrl)">
                    <img v-if="isMobileImg" :src="imageSrc" class="view-header-image" style="width:auto;max-height:250px" />
                    <img v-else :src="imageSrc" class="view-header-image"  />
                </v-col> 
            </v-row>
            <v-row>
                <v-col>
                    <div class="view-header-title" :style="{ color: backgroundColor }">{{ title }}</div>
                </v-col>
            </v-row>
            <v-row class="view-header">
                <v-col>
                    <div class="view-header-text">
                        <v-row class="px-3">
                            <div class="py-2 w-100" v-if="$slots.client">
                                <span class="view-header-text-title" :style="{ color: backgroundColor }">Client: </span>
                                <span class="view-header-text-desc">
                                    <slot name="client"></slot>
                                </span>
                            </div>
                            <div class="py-2 w-100">
                                <span class="view-header-text-title" :style="{ color: backgroundColor }">Role: </span>
                                <span class="view-header-text-desc">
                                    <slot name="role"></slot>
                                </span>
                            </div>
                            <div class="py-2 w-100">
                                <span class="view-header-text-title" :style="{ color: backgroundColor }">Tools Used: </span>
                                <span class="view-header-text-desc">
                                    <slot name="tools"></slot>
                                </span>
                            </div>
                            <div class="py-2 w-100">
                                <span class="view-header-text-title" :style="{ color: backgroundColor }">Project Date: </span>
                                <span class="view-header-text-desc">
                                    <slot name="date"></slot>
                                </span>
                            </div>
                        </v-row>
                        <v-row class="pa-3">
                            <v-col>
                                <v-btn v-if="githubUrl" block class="text-normal px-3 mr-6 mb-4" variant="outlined"  :color="backgroundColor" :href="githubUrl" target="_blank">
                                    <v-icon class="mr-2">mdi-github</v-icon>
                                    View Code
                                </v-btn>
                                <v-btn v-if="siteUrl" block class="text-normal px-3 mr-6 mb-4" variant="outlined"
                                :color="backgroundColor" :href="siteUrl" target="_blank">
                                    <v-icon class="mr-2">mdi-link</v-icon>
                                    Live Site <span v-if="$route.params.id === 'ifolio' || $route.params.id === 'ss'" class="ml-2">(Archived)</span>
                                </v-btn>
                                <v-btn v-if="prototypeUrl" block class="text-normal px-3 mr-6 mb-4" variant="outlined"
                                :color="backgroundColor"
                                :href="prototypeUrl" target="_blank">
                                    <v-icon class="mr-2">mdi-open-in-new</v-icon>
                                    Prototype
                                </v-btn>
                                <v-btn v-if="mobilePrototypeUrl" block class="text-normal px-3 mr-6 mb-4" variant="outlined" :href="mobilePrototypeUrl"
                                :color="backgroundColor" 
                                target="_blank">
                                    <v-icon class="mr-2">mdi-open-in-new</v-icon>
                                    Mobile Prototype
                                </v-btn>
                                <v-btn v-if="desktopPrototypeUrl" block class="text-normal px-3 mr-6 mb-4" variant="outlined" :href="desktopPrototypeUrl"
                                :color="backgroundColor" target="_blank">
                                    <v-icon class="mr-2">mdi-open-in-new</v-icon>
                                    Desktop Prototype
                                </v-btn>
                                <v-btn v-if="caseStudyUrl" block class="text-normal px-3 mr-6 mb-4" variant="outlined"  :color="backgroundColor" :href="caseStudyUrl" target="_blank">
                                    <v-icon class="mr-2">mdi-presentation</v-icon>
                                    Case Study PPT
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>  
            </v-row>
        </div>
        <div v-else class="view-collapse text-left" :style="{'border-color': backgroundColor }">
            <div class="view-collapse-title pa-4" :style="{'color': backgroundColor}">{{ title }}</div>
            <v-btn block @click="expand()" class="text-normal pl-3 pr-0 mr-6 mb-4" prepend-icon="mdi-arrow-expand-all" variant="text" :color="backgroundColor">Expand Details</v-btn>
        </div>
    </transition>
</template>
<style lang="scss" scoped>
.cursor-pointer {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
}

:deep(.view-banner-details) {
    background: #fff;
}

:deep(.view-header) {
  padding: 0;
  margin: 0;
}

:deep(.view-header-title) {
  padding: 15px 20px;
  font-size: 32px;
}

:deep(.view-header-image) {
  padding-top: 20px;
  padding-left: 20px;
  width: calc(85% - 20px);

  &.mobile {
    width: initial;
    max-height: 500px;
  }
}

:deep(.view-header-text) {
  padding: 0 20px;
}

:deep(.view-header-text-title) {
  font-weight: bold;
}

:deep(.view-collapse-title) {
    font-family: 'Quicksand', 'Roboto Thin', sans-serif;
    font-size: 22px;
 }

:deep(.view-collapse-subtitle) {
    font-size: 16px;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

@media all and (min-width: 769px) and (max-width: 1023px) {
    :deep(.view-banner) {
        min-height: 100vh;
        height: auto;
        overflow-y: auto;
    }
    
    .view-collapse {
        border-right: 2px solid black;
        border-bottom: none;
    }

    :deep(.view-header-image) {
        width: initial;
        max-height: 250px;
    }
}

@media all and (max-width: 768px) {

    :deep(.view-banner) {
        min-height: 100vh;
        height: auto;
        overflow-y: auto;
    }

    .view-collapse {
        border-bottom: 1px solid black;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateY(-20px);
        opacity: 0;
    }
}
</style>