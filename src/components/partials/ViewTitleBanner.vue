<script>
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
        prototypeUrl: String,
        mobilePrototypeUrl: String,
        desktopPrototypeUrl: String,
        siteUrl: String,
        caseStudyUrl: String,
        imageSrc: String,
        isMobileImg: {
            type: Boolean,
            default: false
        }
    },
    methods: {

    },
    mounted() {
     
    },
    components: {
      
    }
}
</script>

<template>
    <v-row class="view-header" justify="start" justify-md="center" justify-lg="center" :style="{ 'background': backgroundColor, 'color': textColor }">
        <v-col cols="11" md="6" lg="6">
            <div class="view-header-title">{{ title }}</div>
            <div class="view-header-text">
                <v-row class="pa-3">
                    <v-col cols="11" md="6" lg="6">
                        <div class="view-header-text-title">Role</div>
                        <div class="view-header-text-desc">
                            <slot name="role"></slot>
                        </div>
                    </v-col>
                    <v-col cols="11" md="6" lg="6">
                        <div class="view-header-text-title">Client</div>
                        <div class="view-header-text-desc">
                            <slot name="client"></slot>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="pa-3">
                    <v-col cols="11" md="6" lg="6">
                        <div class="view-header-text-title">Tools Used</div>
                        <div class="view-header-text-desc">
                            <slot name="tools"></slot>
                        </div>
                    </v-col>
                    <v-col cols="11" md="6" lg="6">
                        <div class="view-header-text-title">Project Date</div>
                        <div class="view-header-text-desc">
                            <slot name="date"></slot>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="pa-3">
                    <v-col>
                        <v-btn v-if="prototypeUrl" :block="$vuetify.display.smAndDown" size="small" class="text-normal px-3 mr-6 mb-3" variant="outlined" :href="prototypeUrl" target="_blank">
                            <v-icon class="mr-2">mdi-open-in-new</v-icon>
                            Prototype
                        </v-btn>
                        <v-btn v-if="mobilePrototypeUrl" :block="$vuetify.display.smAndDown" size="small" class="text-normal px-3 mr-6 mb-3" variant="outlined" :href="mobilePrototypeUrl" target="_blank">
                            <v-icon class="mr-2">mdi-open-in-new</v-icon>
                            Mobile Prototype
                        </v-btn>
                        <v-btn v-if="desktopPrototypeUrl" :block="$vuetify.display.smAndDown" size="small" class="text-normal px-3 mr-6 mb-3" variant="outlined" :href="desktopPrototypeUrl" target="_blank">
                            <v-icon class="mr-2">mdi-open-in-new</v-icon>
                            Desktop Prototype
                        </v-btn>
                        <v-btn v-if="siteUrl" :block="$vuetify.display.smAndDown" size="small" class="text-normal px-3 mr-6 mb-3" variant="outlined" :href="siteUrl" target="_blank">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            Live Site <span v-if="$route.params.id === 'ifolio' || $route.params.id === 'ss'" class="ml-2">(via Archived Wayback)</span>
                        </v-btn>
                        <v-btn v-if="caseStudyUrl" :block="$vuetify.display.smAndDown" size="small" class="text-normal px-3 mb-3" variant="outlined" :href="caseStudyUrl" target="_blank">
                            <v-icon class="mr-2">mdi-presentation</v-icon>
                            Case Study PPT
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-col>
        <v-col cols="11" md="6" lg="6" :class="{
            'pa-0 my-auto': true,
            'text-center': isMobileImg
        }">
            <img :src="imageSrc" :class="{
                'view-header-image': true,
                'mobile': isMobileImg
            }" />
        </v-col>   
    </v-row>
</template>