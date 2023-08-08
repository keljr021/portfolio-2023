<script>
import WorkListItem from './WorkListItem.vue';
export default {
    name: 'WorkList',
    data() {
      return {
      }
    },
    props: {
        showItems: String
    },
    methods: {
        imgSrc(input) {
            return new URL(`../../assets/${input}`, import.meta.url).href;
        }
    },
    mounted() {},
    components: {
        WorkListItem
    }
}
</script>

<template>
    <v-container>
        <v-row v-if="showItems === 'all'">
            <v-col>
                <div class="work-subtitle">UI/UX Design</div>
            </v-col>
        </v-row>
        <v-row class="py-8" v-if="showItems === 'all' || showItems === 'ui'">
            <v-col cols="4">
                <work-list-item 
                    title="K&A Morrisey Cleaning Services" 
                    caption="A responsive website for the family janitorial business" 
                    :image="imgSrc('ka-full-2023.png')"
                    imageWidth="100%" />
            </v-col>
            <v-col cols="4">
                <work-list-item 
                    title="K&A Morrisey Cleaning Services" 
                    caption="A responsive website for the family janitorial business" 
                    :image="imgSrc('ka-full-2023.png')"
                    imageWidth="100%" />
            </v-col>
            <v-col cols="4">
                <work-list-item 
                    title="K&A Morrisey Cleaning Services" 
                    caption="A responsive website for the family janitorial business" 
                    :image="imgSrc('ka-full-2023.png')"
                    imageWidth="100%" />
            </v-col>
        </v-row>


        <v-row v-if="showItems === 'all'">
            <v-col>
                <div class="work-subtitle">Front-End</div>
            </v-col>
        </v-row>
        <v-row class="py-8" v-if="showItems === 'all' || showItems === 'frontend'">
            <v-col cols="4">
                <work-list-item 
                    title="K&A Morrisey Cleaning Services" 
                    caption="A responsive website for the family janitorial business" 
                    :image="imgSrc('ka-full-2023.png')"
                    imageWidth="100%" />
            </v-col>
            <v-col cols="4">
                <work-list-item 
                    title="K&A Morrisey Cleaning Services" 
                    caption="A responsive website for the family janitorial business" 
                    :image="imgSrc('ka-full-2023.png')"
                    imageWidth="100%" />
            </v-col>
            <v-col cols="4">
                <work-list-item 
                    title="K&A Morrisey Cleaning Services" 
                    caption="A responsive website for the family janitorial business" 
                    :image="imgSrc('ka-full-2023.png')"
                    imageWidth="100%" />
            </v-col>
        </v-row>


        <v-row v-if="showItems === 'all'">
            <v-col>
                <div class="work-subtitle">Logos</div>
            </v-col>
        </v-row>
        <v-row class="py-8" v-if="showItems === 'all' || showItems === 'logos'">
            <v-col cols="4">
                <work-list-item 
                    title="K&A Morrisey Cleaning Services" 
                    caption="A responsive website for the family janitorial business" 
                    :image="imgSrc('ka-full-2023.png')"
                    imageWidth="100%" />
            </v-col>
            <v-col cols="4">
                <work-list-item 
                    title="K&A Morrisey Cleaning Services" 
                    caption="A responsive website for the family janitorial business" 
                    :image="imgSrc('ka-full-2023.png')"
                    imageWidth="100%" />
            </v-col>
            <v-col cols="4">
                <work-list-item 
                    title="K&A Morrisey Cleaning Services" 
                    caption="A responsive website for the family janitorial business" 
                    :image="imgSrc('ka-full-2023.png')"
                    imageWidth="100%" />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>

</style>
