<script setup>
import { computed, ref } from 'vue';
import { useDisplay } from 'vuetify';

defineProps({
  src: {
    type: String,
    default: null
  },
  text: {
    type: String,
    default: null
  },
  imgWidth: {
    type: String,
    default: '300px'
  },
  imgHeight: {
    type: String,
    default: null
  },
  maxHeight: {
    type: String,
    default: '250px'
  },
});

const display = useDisplay();
const isMobile = computed(() => display.smAndDown.value);
</script>
<template>
     <v-dialog :fullscreen="isMobile" width="950" class="pa-0 mx-0" :opacity="0.75">
        <template v-slot:activator="{ props }">

            <v-img 
                v-bind="props" 
                eager
                :class="`pt-1 cursor-pointer ${imgClass}`" 
                :width="imgWidth" 
                :height="imgHeight ? imgHeight : ''" 
                :max-height="maxHeight"
                :alt="text"
                lazy-src="https://picsum.photos/id/11/100/60" 
                :src="$imageSrc(src)">

                <div class="image-overlay">
                    <v-icon class="image-overlay-icon" color="indigo-darken-4" size="x-large" icon="mdi-magnify-plus-outline" />
                </div>

                <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular color="grey-lighten-4" indeterminate />
                    </div>
                </template>
            </v-img>
        </template>

        <template v-slot:default="{ isActive }">

            <v-card 
                :width="isMobile ? '90vw': 800" 
                class="pa-0 mx-auto">

                <template v-slot:loader="{ isActive }">
                    <v-progress-linear
                        :active="isActive"
                        color="deep-purple"
                        height="4"
                        indeterminate
                    ></v-progress-linear>
                </template>

                <v-btn v-if="isMobile" class="pa-4 ma-4" variant="text" size="large" prepend-icon="mdi-close" @click="isActive.value = false">
                    Close
                </v-btn>

                <v-row v-else>
                    <v-col cols="12" class="text-right">
                        <v-btn size="large" color="transparent" flat rounded="0" icon="mdi-close" class="ma-2 pa-2" @click="isActive.value = false"></v-btn>
                    </v-col>
                </v-row>

                <v-card scrollable variant="flat" height="500px" class="overflow-y-auto">
                    <v-row>
                        <v-col>
                            <v-card-text v-if="text" class="mx-2 my-4 image-text">
                                {{ text }}
                            </v-card-text>
                            <v-img
                                :class="`ma-4 py-4 ${imgClass}`" 
                                width="95%"
                                :width="imgWidth"
                                :height="imgHeight ? imgHeight : ''"
                                max-height="85vh"
                                :alt="text"
                                lazy-src="https://picsum.photos/id/11/100/60" 
                                :src="$imageSrc(src)" />
                        </v-col>
                    </v-row>
                </v-card>

            </v-card>
        </template>
    </v-dialog>
</template>
<style scoped lang="scss">
.cursor-pointer {
    cursor: pointer;
}

.image-card-scroll {
    height: 200px;
}

.image-overlay {
    position: relative;
    width: 100&;
    height: 100%;
    background-color: tansparent;
    z-index: 1;
    transition: opacity ease-in-out 0.3s;
    opacity: 0;

    .image-overlay-icon {
        position: absolute;
        left: 45%;
        top: 40%;
        opacity: 0;
    }
    
    &:hover {
        background-color: #fff;
        opacity: 0.7;

        .image-overlay-icon {
            opacity: 1;
        }
    }
}

.image-text {
    font-style: italic;
    line-height: 1.7 !important;
}

@media all and (max-width: 768px) {
    .image-text {
        font-size: 1.1em;
    }
}
</style>