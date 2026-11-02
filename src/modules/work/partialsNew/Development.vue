<script setup>
import { ref } from 'vue'

const window = ref(null);
const props = defineProps({
    input: Object,
});
</script>

<template>
    <div ref="development" id="development">
        <div class="section-header pa-8">Development steps</div>

        <div v-if="$vuetify.display.mdAndDown">
            <v-window
                v-model="window"
                show-arrows
            >
                <v-window-item
                    v-for="(timelineItem, i) in input.timeline"
                    :key="i"
                    >
                    <v-card class="mb-8 pa-4" variant="elevated" min-width="90vw">
                        <v-card-title>{{ timelineItem.title }}</v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col>
                                    <div v-if="timelineItem.text">
                                        <template v-for="(textItem, t) in timelineItem.text" :key="t">
                                            <ul v-if="textItem.list">
                                                <li v-for="(listItem, l) in textItem.list" :key="l">{{ listItem }}</li>
                                            </ul>
                                            <p v-else>{{ textItem }}</p>
                                        </template>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>

        <v-timeline v-else class="pa-8" align="start" dot-color="blue-darken-3">
            <v-timeline-item v-for="timelineItem in input.timeline" align="start">
                <template v-if="timelineItem.images" v-slot:opposite>
                    <div v-for="imgItem in timelineItem.images" class="py-2 text-center">
                        <img :src="$imageSrc(imgItem)" class="w-50" />
                    </div>
                </template>
                <v-card class="dev-timeline-item pa-4" variant="flat" min-width="30vw">
                    <v-card-title>{{ timelineItem.title }}</v-card-title>
                    <v-card-text v-for="(textItem, t) in timelineItem.text" :key="t">
                        <v-row>
                            <v-col>
                                <div v-if="timelineItem.text">
                                    <template v-for="(textItem, t) in timelineItem.text" :key="t">
                                        <ul v-if="textItem.list">
                                            <li v-for="(listItem, l) in textItem.list" :key="l">{{ listItem }}</li>
                                        </ul>
                                        <p v-else>{{ textItem }}</p>
                                    </template>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>

        <v-row v-if="input.section">

            <template v-for="sectionItem in input.section">
                <v-col v-if="sectionItem.type === 'card'" cols="12" sm="12" md="6" lg="6">
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
                </v-col>

                <v-col v-if="sectionItem.type === 'image'" cols="12" sm="12" md="6" lg="6">
                    <img v-for="(imageItem, i) in sectionItem.images" :key="i" :src="$imageSrc(imageItem.src)" :alt="imageItem.caption" class="my-8 w-75" />
                </v-col>
            </template>

        </v-row>
    </div>
</template>

<style>
.dev-timeline-item {
    margin-bottom: 150px;
}
</style>