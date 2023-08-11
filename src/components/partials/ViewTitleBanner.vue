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
        siteUrl: String,
        caseStudyUrl: String,
        imageSrc: String
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
    <v-row class="view-header" justify="center" :style="{ 'background': backgroundColor, 'color': textColor }">
        <v-col cols="6">
            <div class="view-header-title">{{ title }}</div>
            <div class="view-header-text">
                <v-row class="pa-3">
                    <v-col>
                        <div class="view-header-text-title">Role</div>
                        <div class="view-header-text-desc">
                            <slot name="role"></slot>
                        </div>
                    </v-col>
                    <v-col>
                        <div class="view-header-text-title">Client</div>
                        <div class="view-header-text-desc">
                            <slot name="client"></slot>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="pa-3">
                    <v-col>
                        <div class="view-header-text-title">Tools Used</div>
                        <div class="view-header-text-desc">
                            <slot name="tools"></slot>
                        </div>
                    </v-col>
                    <v-col>
                        <div class="view-header-text-title">Project Date</div>
                        <div class="view-header-text-desc">
                            <slot name="date"></slot>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="pa-3">
                    <v-col>
                        <v-btn v-if="prototypeUrl" size="small" class="text-normal px-3 mr-6" variant="outlined" :href="prototypeUrl">
                            <v-icon class="mr-2">mdi-open-in-new</v-icon>
                            Prototype
                        </v-btn>
                        <v-btn v-if="siteUrl" size="small" class="text-normal px-3 mr-6" variant="outlined" :href="siteUrl">
                            <v-icon class="mr-2">mdi-link</v-icon>
                            Live Site
                        </v-btn>
                        <v-btn v-if="caseStudyUrl" size="small" class="text-normal px-3" variant="outlined" :href="caseStudyUrl">
                            <v-icon class="mr-2">mdi-presentation</v-icon>
                            Case Study PPT
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-col>
        <v-col class="my-auto">
            <img :src="imageSrc" class="view-header-image" />
        </v-col>   
    </v-row>
</template>