<script>
  import Divider from './Divider.vue';
  export default {
    name: 'ViewTitleBannerOld',
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
        }
    },
    emits: [
        'window-open'
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
    <v-row justify="center">
        <v-col>
            <div class="view-header-title" :style="{ color: backgroundColor }">{{ title }}</div>
        </v-col>
    </v-row>
    <v-row class="view-header" justify="center">
        
        <v-col v-if="imageSrc" cols="11" md="5" lg="5" :class="{ 'pa-0 my-auto text-center': true,  'cursor-pointer': showPointer }"  @click="goToPrototype(desktopPrototypeUrl)">
            <img :src="imageSrc" class="view-header-image" />
        </v-col> 
        <v-col v-if="mobileSrc" cols="11" md="5" lg="5" :class="{ 'pa-0 my-auto text-center': true,  'cursor-pointer': showPointer }"  @click="goToPrototype(mobilePrototypeUrl)">
            <img :src="mobileSrc" class="view-header-image mobile" />
        </v-col>

        <v-col cols="11" class="text-center">
            
            <div class="view-header-text">
                <v-row class="pa-3">
                    <div class="py-3 w-100" v-if="$slots.client">
                        <span class="view-header-text-title" :style="{ color: backgroundColor }">Client: </span>
                        <span class="view-header-text-desc">
                            <slot name="client"></slot>
                        </span>
                    </div>
                    <div class="py-3 w-100">
                        <span class="view-header-text-title" :style="{ color: backgroundColor }">Role: </span>
                        <span class="view-header-text-desc">
                            <slot name="role"></slot>
                        </span>
                    </div>
                    <div class="py-3 w-100">
                        <span class="view-header-text-title" :style="{ color: backgroundColor }">Tools Used: </span>
                        <span class="view-header-text-desc">
                            <slot name="tools"></slot>
                        </span>
                    </div>
                    <div class="py-3 w-100">
                        <span class="view-header-text-title" :style="{ color: backgroundColor }">Project Date: </span>
                        <span class="view-header-text-desc">
                            <slot name="date"></slot>
                        </span>
                    </div>
                </v-row>
                <v-row class="pa-3">
                    <v-col>
                        <v-btn v-if="githubUrl" :block="$vuetify.display.xs" class="text-normal px-3 mr-6 mb-3" variant="outlined"  :color="backgroundColor" :href="githubUrl" target="_blank">
                            <v-icon class="mr-2">mdi-github</v-icon>
                            View Code
                        </v-btn>
                        <v-btn v-if="siteUrl" :block="$vuetify.display.xs" class="text-normal px-3 mr-6 mb-3" variant="outlined"
                        :color="backgroundColor" :href="siteUrl" target="_blank">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            Live Site <span v-if="$route.params.id === 'ifolio' || $route.params.id === 'ss'" class="ml-2">(Archived)</span>
                        </v-btn>
                        <v-btn v-if="prototypeUrl" :block="$vuetify.display.xs" class="text-normal px-3 mr-6 mb-3" variant="outlined"
                        :color="backgroundColor"
                        :href="prototypeUrl" target="_blank">
                            <v-icon class="mr-2">mdi-open-in-new</v-icon>
                            Prototype
                        </v-btn>
                        <v-btn v-if="mobilePrototypeUrl" :block="$vuetify.display.xs" class="text-normal px-3 mr-6 mb-3" variant="outlined" :href="mobilePrototypeUrl"
                        :color="backgroundColor" 
                        target="_blank">
                            <v-icon class="mr-2">mdi-open-in-new</v-icon>
                            Mobile Prototype
                        </v-btn>
                        <v-btn v-if="desktopPrototypeUrl" :block="$vuetify.display.xs" class="text-normal px-3 mr-6 mb-3" variant="outlined" :href="desktopPrototypeUrl"
                        :color="backgroundColor" target="_blank">
                            <v-icon class="mr-2">mdi-open-in-new</v-icon>
                            Desktop Prototype
                        </v-btn>
                        <v-btn v-if="caseStudyUrl" :block="$vuetify.display.xs" class="text-normal px-3 mr-6 mb-3" variant="outlined"  :color="backgroundColor" :href="caseStudyUrl" target="_blank">
                            <v-icon class="mr-2">mdi-presentation</v-icon>
                            Case Study PPT
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-col>  
    </v-row>
</template>
<style lang="scss" scoped>
.cursor-pointer {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
}

:deep(.view-header) {
  padding: 0;
  margin: 0;
}

:deep(.view-header-title) {
  padding: 40px 20px;
  font-size: 36px;
  text-align: center;
}

:deep(.view-header-image) {
  padding: 40px 0;
  width: 85%;

  &.mobile {
    width: initial;
    max-height: 500px;
  }
}

:deep(.view-header-text) {
  font-size: 1.2em;
  padding: 30px;
}

:deep(.view-header-text-title) {
  font-weight: bold;
}
</style>