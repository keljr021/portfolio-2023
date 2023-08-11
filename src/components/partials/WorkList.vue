<script>
import WorkListItem from './WorkListItem.vue';
export default {
    name: 'WorkList',
    data() {
      return {
        cardHeight: '500px',
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
        <v-row class="mb-15" justify="center">
            <v-col cols="10">
                <work-list-item
                    color="#464da0"
                    linkId="mcs" 
                    title="K&A Morrisey Cleaning Services" 
                    caption="A responsive website for the family janitorial business" 
                    :desktopImg="imgSrc('work/ka-desktop.png')"
                    :mobileImg="imgSrc('work/ka-mobile.png')" />
            </v-col>
            <v-col cols="10">
                <work-list-item 
                    color="#993838"
                    linkId="torch"
                    title="Torch Mentor Network" 
                    caption="A mobile app and website that connects students with mentors" 
                    :desktopImg="imgSrc('work/to-desktop.png')"
                    :mobileImg="imgSrc('work/to-mobile.png')"
                    :imageHeight="cardHeight" />
            </v-col>
            <v-col cols="10">
                <work-list-item 
                    color="#008C73"
                    linkId="lemon"
                    title="LemonBranch DIY Site" 
                    caption="A responsive site to view tutorials and how-tos" 
                    :desktopImg="imgSrc('work/lb-desktop.png')"
                    :mobileImg="imgSrc('work/lb-mobile.png')"
                    :imageHeight="cardHeight" />
            </v-col>
            <v-col cols="10">
                <work-list-item 
                    color="#993c1f"
                    linkId="reys"
                    title="Rey's Restaurant App" 
                    caption="A menu app to streamline the ordering process" 
                    :mobileImg="imgSrc('work/reys-mobile.png')"
                    imageWidth="55%" />
            </v-col>
        </v-row>

        <v-row class="mb-15" justify="center">
            <v-col cols="10">
                <work-list-item 
                    color="#464da0"
                    linkId="ifolio"
                    title="iFolio" 
                    caption="An online portfolio page to host images" 
                    :desktopImg="imgSrc('work/if-desktop.png')"
                    :mobileImg="imgSrc('work/if-mobile.png')"
                    :imageHeight="cardHeight" />
            </v-col>
            <v-col cols="10">
                <work-list-item 
                    color="#1f4739"
                    linkId="ss"
                    title="ScoreShots 2.0" 
                    caption="A platform to create and share infographics" 
                    :desktopImg="imgSrc('work/ss-desktop.png')"
                    :imageHeight="cardHeight" />
            </v-col>
            <v-col cols="10">
                <work-list-item 
                    color="#2d2f66"
                    linkId="s4s"
                    title="Soccer for Success" 
                    caption="An e-learning platform for coaches and players" 
                    :desktopImg="imgSrc('work/s4s-desktop.png')"
                    :mobileImg="imgSrc('work/s4s-mobile.png')"
                    :imageHeight="cardHeight" />
            </v-col>
            <v-col cols="10">
                <work-list-item 
                    linkId="react"
                    title="React Calculator" 
                    caption="A calculator component built with React JS" 
                    :desktopImg="imgSrc('work/react-desktop.png')"
                    :imageHeight="cardHeight" />
            </v-col>
            <v-col cols="10">
                <work-list-item 
                    linkId="vue"
                    title="Vue Calendar" 
                    caption="A calendar component built with Vue JS" 
                    :desktopImg="imgSrc('work/vue-desktop.png')"
                    :imageHeight="cardHeight" />
            </v-col>
        </v-row>

        <v-row class="mb-15" justify="center">
            <v-col offset="1" cols="5" v-for="logo in logos">
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
