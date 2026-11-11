<script setup>
import { ref } from 'vue';
import ViewImage from './ViewImage.vue';

const window = ref(null);
const props = defineProps({
    input: Array,
});
</script>

<template>
    <div ref="gallery" id="gallery" class="my-8">
        <div class="section-header px-md-8 my-2">Gallery</div>

        <v-row>
            <v-col>
                <div class="mx-md-8 my-2 pa-8">
                    <v-carousel
                        v-model="window"
                        :progress="$vuetify.display.mdAndDown ? 'primary' : null"
                        :show-arrows="$vuetify.display.lgAndUp"
                        :hide-delimiters="$vuetify.display.mdAndDown"
                        :height="$vuetify.display.mdAndDown ? 'auto' : '500'"
                    >
                        <v-carousel-item v-for="(item, i) in input" :key="i">
                            <view-image v-if="$vuetify.display.mdAndDown" :src="item" />
                            <v-img v-else class="w-full w-md-75 mx-auto mt-4" lazy-src="https://picsum.photos/id/11/100/60"  :src="$imageSrc(item)" />
                        </v-carousel-item>
                    </v-carousel>
                </div>
            </v-col>
        </v-row>
    </div>
</template>