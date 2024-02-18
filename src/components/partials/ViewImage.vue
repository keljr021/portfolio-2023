<script>
export default {
    name: 'ViewImage',
    data() {
        return {
        }
    },
    props: {
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
            default: '100%'
        },
        imgHeight: {
            type: String,
            default: null
        }
    },
    computed: {
        isMobile() {
            return this.$vuetify.display.smAndDown;
        }
    },
    methods: {
        getSource() {
            return new URL(`../../assets/${this.src}`, import.meta.url).href;
        },
    },
    components: {}
}
</script>
<template>
     <v-dialog :fullscreen="isMobile" width="950" class="pa-0 mx-0" :opacity="0.75">
        <template v-slot:activator="{ props }">
            <v-img 
                v-bind="props" 
                class="pt-1 cursor-pointer" 
                :width="imgWidth" 
                :height="imgHeight ? imgHeight : ''" 
                lazy-src="https://picsum.photos/id/11/100/60" 
                :src="getSource()">
                
                <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular color="grey-lighten-4" indeterminate />
                    </div>
                </template>
            </v-img>
        </template>

        <template v-slot:default="{ isActive }">
            <v-row v-if="!isMobile">
                <v-col class="text-right">
                    <v-btn color="transparent" flat rounded="0" icon="mdi-close" class="mx-4 text-white" @click="isActive.value = false"></v-btn>
                </v-col>
            </v-row>

            <v-card 
                scrollable
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

                <v-row>
                    <v-col>
                        <v-img
                            class="mx-1"
                            width="100%"
                            :width="imgWidth * 1.5" 
                            :height="imgHeight ? imgHeight * 1.5 : ''" 
                            lazy-src="https://picsum.photos/id/11/100/60" 
                            :src="getSource()" />

                        

                        <v-card-text v-if="text" class="mx-2 my-4 image-text">
                            {{ text }}
                        </v-card-text>
                    </v-col>
                </v-row>

                <v-card-actions class="text-right pa-2" v-if="isMobile">
                    <v-spacer></v-spacer>
                    <v-btn :block="isMobile" prepend-icon="mdi-close" @click="isActive.value = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
<style scoped lang="scss">
.cursor-pointer {
    cursor: pointer;
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