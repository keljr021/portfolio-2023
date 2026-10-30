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
                    v-for="(item, i) in input.timeline"
                    :key="i"
                    >
                    <v-card class="mb-8 pa-4" variant="elevated" min-width="90vw">
                        <v-card-title>Title</v-card-title>
                        <v-card-text>
                            This is some text.
                        </v-card-text>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>

        <v-timeline v-else class="pa-8" align="start" dot-color="blue-darken-3">
            <v-timeline-item v-for="item in input.timeline" align="start">
                <template v-if="item.images" v-slot:opposite>
                    <div v-for="imgItem in item.images" class="py-2 text-center">
                        <img :src="$imageSrc(imgItem)" class="w-50" />
                    </div>
                </template>
                <v-card class="dev-timeline-item pa-4" variant="flat" min-width="30vw">
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-text v-for="(textItem, t) in item.text" :key="t">
                        <p>{{ textItem }}</p>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<style>
.dev-timeline-item {
    margin-bottom: 150px;
}
</style>