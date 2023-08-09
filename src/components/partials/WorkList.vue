<script>
import WorkListItem from './WorkListItem.vue';
export default {
    name: 'WorkList',
    data() {
      return {
        logos: [
                {
                    src: 'logo-to.png'
                },
                {
                    src: 'logo-reys.png'
                },
                {
                    src: 'logo-lb.png',
                    height: 50
                },
                {
                    src: 'logo-if.png',
                    height: 50
                },
                {
                    src: 'logo-ka.png',
                    height: 50
                },
                {
                    src: 'logo-ka-2023.png'
                }
            ]
      }
    },
    props: {
        tab: String
    },
    methods: {
        imgSrc(input) {
            return new URL(`../../assets/${input}`, import.meta.url).href;
        }
    },
    components: {
        WorkListItem
    }
}
</script>

<template>
    <v-container>
        <v-row class="py-12" justify="start">
            <v-col cols="6" sm="6" md="6" lg="4">
                <work-list-item
                    linkId="mcs" 
                    title="K&A Morrisey Cleaning Services" 
                    caption="A responsive website for the family janitorial business" 
                    :image="imgSrc('ka-full-2023.png')"
                    imageWidth="100%" />
            </v-col>
            <v-col cols="6" sm="6" md="6" lg="4">
                <work-list-item 
                    linkId="torch"
                    title="Torch Mentor Network" 
                    caption="A mobile app and website that connects students with mentors" 
                    :image="imgSrc('to-full.png')"
                    imageWidth="100%" />
            </v-col>
            <v-col cols="6" sm="6" md="6" lg="4">
                <work-list-item 
                    linkId="lemon"
                    title="LemonBranch DIY Site" 
                    caption="A responsive website to search and view tutorials and how-tos" 
                    :image="imgSrc('lb-full.png')"
                    imageWidth="100%" />
            </v-col>
            <v-col cols="6" sm="6" md="6" lg="4">
                <work-list-item 
                    linkId="reys"
                    title="Rey's Restaurant App" 
                    caption="A menu app to streamline the ordering process" 
                    :image="imgSrc('reys-mock1.png')"
                    imageHeight="300px" />
            </v-col>
        </v-row>

        <v-row class="py-12" justify="start">
            <v-col cols="6" sm="6" md="6" lg="4">
                <work-list-item 
                    linkId="ifolio"
                    title="iFolio" 
                    caption="An online portfolio page to host images" 
                    :image="imgSrc('if-full.png')"
                    imageWidth="100%" />
            </v-col>
            <v-col cols="6" sm="6" md="6" lg="4">
                <work-list-item 
                    linkId="ss"
                    title="ScoreShots 2.0" 
                    caption="A platform to create and share infographics" 
                    :image="imgSrc('ss-full.png')"
                    imageWidth="100%" />
            </v-col>
            <v-col cols="6" sm="6" md="6" lg="4">
                <work-list-item 
                    linkId="s4s"
                    title="Soccer for Success" 
                    caption="An e-learning platform for coaches and players" 
                    :image="imgSrc('s4s-alt.png')"
                    imageWidth="100%" />
            </v-col>
            <v-col cols="6" sm="6" md="6" lg="4">
                <work-list-item 
                    linkId="react"
                    title="React Calculator" 
                    caption="A calculator component built with React JS" 
                    :image="imgSrc('react-full.png')"
                    imageHeight="300px" />
            </v-col>
            <v-col cols="6" sm="6" md="6" lg="4">
                <work-list-item 
                    linkId="vue"
                    title="Vue Calendar" 
                    caption="A calendar component built with Vue JS" 
                    :image="imgSrc('vuejs-full.png')"
                    imageHeight="300px" />
            </v-col>
        </v-row>

        <v-row class="py-12" justify="start">
            <v-col cols="6" sm="6" md="6" lg="4" v-for="logo in logos">
                <v-card width="100%" :min-height="$vuetify.display.xs ? 'auto' : 150" class="align-stretch d-flex mb-8">
                    <v-card-text class="align-start ma-auto">
                        <v-img contain :height="$vuetify.display.xs ? 50 : (logo.height ? logo.height : 80)" :src="imgSrc(logo.src)" />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>

</style>
