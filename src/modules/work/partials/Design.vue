<script setup>
import { ref } from 'vue'
import ViewImage from './ViewImage.vue'

const window = ref(null);
const props = defineProps({
    input: Object,
});

</script>

<template>
    <div ref="design" id="design">
    <div class="section-header pa-md-8 my-2">Design approach</div>
        <v-card variant="flat" v-if="$vuetify.display.smAndDown">
            <v-carousel
                v-model="window"
                progress="primary"
                :show-arrows="false"
                hide-delimiters
            >
                <v-carousel-item
                    v-for="(timelineItem, i) in input.timeline"
                    :key="i"
                    >
                    <v-card class="mb-8 pa-4" variant="flat" width="90vw">
                        <div class="section-caption">{{ timelineItem.title }}</div>
                        <div class="pa-2 w-100 mx-auto" v-for="(textValueItem, tv) in timelineItem.text" :key="tv">
                            <ul v-if="textValueItem.list" class="w-75">
                                <li v-for="(listItem, l) in textValueItem.list" :key="l">{{ listItem }}</li>
                            </ul>
                            <p v-else class="w-75">{{ textValueItem }}</p>
                        </div>
                        <div v-if="timelineItem.images" class="py-2 w-100 text-center">
                            <view-image v-for="(imgItem, imageIndex) in timelineItem.images" :key="imageIndex" :src="imgItem" />
                        </div>
                    </v-card>
                </v-carousel-item>
            </v-carousel>
        </v-card>


        <v-timeline v-else class="pl-8" dot-color="teal-darken-2" align="start" alignment="top">
            
            <v-timeline-item v-for="(timelineItem, i) in input.timeline" :key="i" align="start">
                <template v-if="timelineItem.images" v-slot:opposite>
                    <div v-for="(imgItem, imageIndex) in timelineItem.images" :key="imageIndex" class="py-2 text-center">
                        <view-image :src="imgItem" />
                    </div>
                </template>
                <v-card class="design-timeline-item py-4" variant="text" width="100%">
                    <v-card-title>{{ timelineItem.title }}</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <template v-for="(textValueItem, tv) in timelineItem.text" :key="tv">
                                    <ul v-if="textValueItem.list">
                                        <li v-for="(listItem, l) in textValueItem.list" :key="l">{{ listItem }}</li>
                                    </ul>
                                    <p v-else>{{ textValueItem }}</p>
                                </template>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-timeline-item>

        </v-timeline>

        <v-row v-if="input.section">

            <template v-for="sectionItem in input.section">
                <v-col v-if="sectionItem.type === 'card'" cols="12" sm="6" md="6" lg="6">
                    <v-card class="ma-8 pa-8" variant="text" min-height="300">
                        <v-row>
                            <v-col>
                                <div class="section-caption">{{ sectionItem.title }}</div> 
                                <div v-if="sectionItem.text">
                                    <template v-for="(textItem, t) in sectionItem.text" :key="t">
                                        <ul v-if="textItem.list">
                                            <li v-for="(listItem, l) in textItem.list" :key="l">{{ listItem }}</li>
                                        </ul>
                                        <p v-else>{{ textItem }}</p>
                                    </template>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <v-col v-if="sectionItem.type === 'image'" cols="12" sm="6" md="6" lg="6">
                    <view-image v-for="(imageItem, i) in sectionItem.images" :key="i" :src="imageItem.src" :text="imageItem.caption" class="my-4 w-100" img-width="100%" />
                </v-col>
            </template>

        </v-row>
    </div>
</template>

<style>
.design-timeline-item {
    margin-bottom: 150px;
}
</style>